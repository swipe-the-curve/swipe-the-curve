import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { heart, people, cash } from 'ionicons/icons'
import Curve from '../components/Curve';
import React from 'react';
import './Home.css';
import CardsComponent from '../components/CardsComponent';
import { Card, EventCard, Choice, ChoiceEffect, SelectionCard } from '../core/domain/card';

const Home: React.FC = () => {

  var cards: Array<SelectionCard> = [
    new SelectionCard("Deutsche Touristen sind überall auf der Welt verstreut und können wegen geschlossener Grenzen nicht mehr regulär zurück reisen. Möchtest du die Bevölkerung zurück gfliefen ", new Choice("bad Choice", new ChoiceEffect(0, 0, 0, 0, 0)), new Choice("gud Choice", new ChoiceEffect(0, 0, 0, 0, 0))),
    new SelectionCard("Auf der anderen Seite der Welt ist eine bisher unbekannte Krankheit aufgetreten, die sich ungewöhnlich schnell verbreitet. Möchtest du die Bevölkerung informieren?"
      , new Choice("bad Choice", new ChoiceEffect(0, 0, 0, 0, 0)), new Choice("gud Choice", new ChoiceEffect(0, 0, 0, 0, 0))),
    new EventCard("test", new Choice("Test", new ChoiceEffect(0, 0, 0, 0, 0)))
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Swipe to #FlattenTheCurve</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow className="resource-container">
            <IonCol>
              <IonIcon icon={heart} className="iconheart"></IonIcon>
            </IonCol>
            <IonCol>
              <IonIcon icon={people} className="iconpeople" ></IonIcon>
            </IonCol>
            <IonCol>
              <IonIcon icon={cash} className="iconcash" ></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow className="curve-container">
            <Curve />
          </IonRow>
          <IonRow className="chartstack-container">
            <IonCol><CardsComponent cards={cards} /></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
