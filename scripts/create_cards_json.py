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
RANGE_NAME = 'TODO'

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
                            range=RANGE_NAME,
                            valueRenderOption='UNFORMATTED_VALUE').execute()


cards = []

for row in result['values']:
    unparsed_text = row[1]
    text, choices = unparsed_text.split('\nL: ')
    left_choice, right_choice = choices.split('\nR: ')
    card = {
        "type": "Selection",
        "text": text,
        "id": row[0],
        "leftChoice": {
            "text": left_choice,
            "effect": {
                "populationMood": row[3],
                "economy": row[4],
                "rateOfQuarantining": row[5],
                "healthSystemCapacity": row[6],
            }
        },
        "rightChoice": {
            "text": right_choice,
            "effect": {
                "populationMood": row[7],
                "economy": row[8],
                "rateOfQuarantining": row[9],
                "healthSystemCapacity": row[10],
            }
        }
    }
    cards.append(card)

RANGE_NAME = 'TODO'

result = sheet.values().get(spreadsheetId=SPREADSHEET_ID,
                            range=RANGE_NAME,
                            valueRenderOption='UNFORMATTED_VALUE').execute()

for row in result['values']:
    unparsed_text = row[1]
    if '\nT: ' in unparsed_text:
        text, choice_text = unparsed_text.split('\nT: ')
    else:
        text = unparsed_text
        choice_text = "Hmpf"
    card = {
        "type": "Event",
        "text": text,
        "id": row[0],
        "choice": {
            "text": choice_text,
            "effect": {
                "populationMood": row[3],
                "economy": row[4],
                "rateOfQuarantining": row[5],
                "healthSystemCapacity": row[6],
            }
        }
    }
    cards.append(card)


with open('cards.json', 'w') as cards_file:
    json.dump(cards, cards_file, indent=4, ensure_ascii=False)

