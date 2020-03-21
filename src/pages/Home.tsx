import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import Curve from '../components/Curve';
import './Home.css';
import CardsComponent from '../components/CardsComponent';
import { EventCard, Choice, ChoiceEffect, SelectionCard } from '../core/domain/card';
import { game } from '../core';



const Home: React.FC = () => {

  const cards: Array<SelectionCard> = [
    new SelectionCard("Deutsche Touristen sind überall auf der Welt verstreut und können wegen geschlossener Grenzen nicht mehr regulär zurück reisen. Möchtest du die Bevölkerung zurück gfliefen ", new Choice("bad Choice", new ChoiceEffect(0, 0, 0, 0)), new Choice("gud Choice", new ChoiceEffect(0, 0, 0, 0))),
    new SelectionCard("Auf der anderen Seite der Welt ist eine bisher unbekannte Krankheit aufgetreten, die sich ungewöhnlich schnell verbreitet. Möchtest du die Bevölkerung informieren?"
      , new Choice("bad Choice", new ChoiceEffect(0, 0, 0, 0)), new Choice("gud Choice", new ChoiceEffect(0, 0, 0, 0))),
    new EventCard("test", new Choice("Test", new ChoiceEffect(0, 0, 0, 0)))
  ];

  const [heartLevel, setHeartLevel] = useState(1);
  const [feelLevel, setFeelLevel] = useState(1);
  const [wealthLevel, setWealthLevel] = useState(1);

  useEffect(() => {
    console.log("addEventlistener");
    game.addStateListener(() => {
      setHeartLevel(1); // TODO What is this?
      setFeelLevel(game.gameState.populationMood);
      setWealthLevel(game.gameState.economy);
    });
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Swipe to #FlattenTheCurve</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow className="curve-container">
            <Curve />
          </IonRow>
          <IonRow className="resource-container">
            <IonCol>
              <svg xmlns='http://www.w3.org/2000/svg' width='5vw' height='5vh' viewBox='0 0 512 512'>
                <title>Heart</title>
                <defs>
                  <linearGradient id="progressHeart" x1="0" y1="1" x2="0" y2="0">
                    <stop id="stop1Heart" offset={heartLevel} stop-color="red" />
                    <stop id="stop2Heart" offset={heartLevel} stop-color="#D5A021" />
                  </linearGradient>
                </defs>
                <path
                  d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                  fill="url(#progressHeart)"
                />
              </svg>
            </IonCol>
            <IonCol>
              <svg xmlns='http://www.w3.org/2000/svg' width='5vw' height='5vh' viewBox='0 0 512 512'>
                <title>People</title>
                <defs>
                  <linearGradient id="progressPeople" x1="0" y1="1" x2="0" y2="0">
                    <stop id="stop1People" offset={feelLevel} stop-color="red" />
                    <stop id="stop2People" offset={feelLevel} stop-color="#D5A021" />
                  </linearGradient>
                </defs>
                <path
                  d='M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154'
                  fill="url(#progressPeople)"
                />
              </svg>
            </IonCol>
            <IonCol>
              <svg xmlns='http://www.w3.org/2000/svg' width='5vw' height='5vh' viewBox='0 0 512 512'>
                <title>Wealth</title>
                <defs>
                  <linearGradient id="progressWealth" x1="0" y1="1" x2="0" y2="0">
                    <stop id="stop1Wealth" offset={wealthLevel} stop-color="red" />
                    <stop id="stop2Wealth" offset={wealthLevel} stop-color="#D5A021" />
                  </linearGradient>
                </defs>
                <path
                  d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
                  fill="url(#progressWealth)"
                />
              </svg>
            </IonCol>
          </IonRow>
          <IonRow className="cardstack-container">
            <IonCol><CardsComponent cards={cards} /></IonCol>
          </IonRow>
          <IonRow>
            <IonButton onClick={() => test()}>TestButton</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const test = () => {
  game.dummy();
}

export default Home;
