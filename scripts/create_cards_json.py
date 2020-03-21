#!/usr/bin/env python3

# https://developers.google.com/sheets/api/quickstart/python
# pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib

import json
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
SPREADSHEET_ID = '1rsk73_oCuZdysI27fBRy5_sEkSR3oHR1aVG0aiP1aDE'
RANGE_NAME = 'B8:K27'

creds = None
# The file token.pickle stores the user's access and refresh tokens, and is
# created automatically when the authorization flow completes for the first
# time.
if os.path.exists('token.pickle'):
    with open('token.pickle', 'rb') as token:
        creds = pickle.load(token)
# If there are no (valid) credentials available, let the user log in.
if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
    else:
        flow = InstalledAppFlow.from_client_secrets_file(
            'credentials.json', SCOPES)
        creds = flow.run_local_server(port=0)
    # Save the credentials for the next run
    with open('token.pickle', 'wb') as token:
        pickle.dump(creds, token)

service = build('sheets', 'v4', credentials=creds)

# Call the Sheets API
sheet = service.spreadsheets()
result = sheet.values().get(spreadsheetId=SPREADSHEET_ID,
                            range=RANGE_NAME).execute()


delta_mapping = {
    '0': 0,
    'negativ': -0.01,
    'positiv': 0.01,
    'stark negativ': -0.1,
    'stark positiv': 0.1,
}

cards = []

for row in result['values']:
    unparsed_text = row[0]
    text, choices = unparsed_text.split('\nL: ')
    left_choice, right_choice = choices.split('\nR: ')
    requires = row[1] # Nothing todo with it yet
    card = {
        "type": "Selection",
        "text": text,
        "leftChoice": {
            "text": left_choice,
            "effect": {
                "populationMood": delta_mapping[row[4]],
                "economy":  delta_mapping[row[3]],
                "rateOfQuarantining":  delta_mapping[row[2]],
                "healthSystemCapacity": 0,
            }
        },
        "rightChoice": {
            "text": right_choice,
            "effect": {
                "populationMood": delta_mapping[row[8]],
                "economy":  delta_mapping[row[7]],
                "rateOfQuarantining":  delta_mapping[row[6]],
                "healthSystemCapacity": 0,
            }
        }
    }
    cards.append(card)

RANGE_NAME = 'B54:F73'

result = sheet.values().get(spreadsheetId=SPREADSHEET_ID,
                            range=RANGE_NAME).execute()

for row in result['values']:
    requires = row[1] # Nothing todo with it yet
    card = {
        "type": "Event",
        "text": row[0],
        "choice": {
            "text": "Hmpf",
            "effect": {
                "populationMood": delta_mapping[row[4]],
                "economy":  delta_mapping[row[3]],
                "rateOfQuarantining":  delta_mapping[row[2]],
                "healthSystemCapacity": 0,
            }
        }
    }
    cards.append(card)


with open('cards.json', 'w') as cards_file:
    json.dump(cards, cards_file, indent=4, ensure_ascii=False)

