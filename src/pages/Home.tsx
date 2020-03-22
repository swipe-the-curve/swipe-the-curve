import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import Curve from '../components/Curve';
import './Home.css';
import CardsComponent from '../components/CardsComponent';
import { EventCard, Choice, ChoiceEffect, SelectionCard } from '../core/domain/card';
import { game } from '../core';



const Home: React.FC = () => {
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
      <IonContent>
        <IonGrid>
          <IonRow className="curve-container">
            <Curve />
          </IonRow>
          <IonRow className="resource-container">
            <IonCol>
              <svg xmlns='http://www.w3.org/2000/svg' width='3vh' height='3vh' viewBox='0 0 24 24'>
                <title>Heart</title>
                <defs>
                  <linearGradient id="progressHeart" x1="0" y1="1" x2="0" y2="0">
                    <stop id="stop1Heart" offset={heartLevel} stop-color="red" />
                    <stop id="stop2Heart" offset={heartLevel} stop-color="black" />
                  </linearGradient>
                </defs>
                <path
                  transform="translate(0,0)"
                  d='M24 8h-8v-8h-3v8h-8v3h8v8h3v-8h8z'
                  fill="url(#progressHeart)"
                />
              </svg>
            </IonCol>
            <IonCol>
              <svg xmlns='http://www.w3.org/2000/svg' width='4vh' height='4vh' viewBox='0 0 512 512'>
                <title>People</title>
                <defs>
                  <linearGradient id="progressPeople" x1="0" y1="1" x2="0" y2="0">
                    <stop id="stop1People" offset={feelLevel} stop-color="lightblue" />
                    <stop id="stop2People" offset={feelLevel} stop-color="black" />
                  </linearGradient>
                </defs>
                <path
                  d='M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154'
                  fill="url(#progressPeople)"
                />
              </svg>
            </IonCol>
            <IonCol>
              <svg xmlns='http://www.w3.org/2000/svg' width='4vh' height='4vh' viewBox='0 0 512 512'>
                <title>Wealth</title>
                <defs>
                  <linearGradient id="progressWealth" x1="0" y1="1" x2="0" y2="0">
                    <stop id="stop1Wealth" offset={wealthLevel} stop-color="#D5A021" />
                    <stop id="stop2Wealth" offset={wealthLevel} stop-color="black" />
                  </linearGradient>
                </defs>
                <path
                  d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
                  fill="url(#progressWealth)"
                />
                <path fill="rgb(0.22%,0.22%,0.22%, 0.5)" transform="translate(105,105)"  d="M 150.433594 300 C 160.496094 300 168.664062 292.316406 168.664062 282.824219 C 168.664062 273.347656 168.664062 265.664062 168.664062 265.664062 C 218.429688 261.105469 251.371094 234.820312 251.371094 192.058594 L 251.371094 191.359375 C 251.371094 147.898438 223.335938 127.921875 167.609375 114.960938 L 167.609375 74.304688 C 175.632812 76.265625 183.941406 79.042969 192.058594 82.648438 C 205.125 88.441406 221.003906 84.808594 228.9375 71.839844 C 236.878906 58.878906 232.589844 40.667969 217.882812 34.066406 C 203.234375 27.5 187.160156 22.972656 169.355469 21.027344 L 169.355469 10.511719 C 169.355469 4.710938 161.199219 0 151.132812 0 C 141.066406 0 132.90625 4.476562 132.90625 9.976562 C 132.90625 15.5 132.90625 19.964844 132.90625 19.964844 C 79.273438 23.828125 49.136719 52.5625 49.136719 93.917969 L 49.136719 94.625 C 49.136719 138.082031 77.875 157.367188 134.304688 170.324219 L 134.304688 212.386719 C 120.765625 210.203125 107.511719 205.707031 94.023438 198.820312 C 79.652344 191.488281 62.050781 194.082031 53.339844 206.953125 C 44.625 219.820312 48.144531 238.097656 62.632812 245.203125 C 83.917969 255.660156 107.96875 262.488281 132.199219 264.96875 L 132.199219 282.492188 C 132.207031 292.15625 140.367188 300 150.433594 300 Z M 167.25 175.9375 C 185.484375 181.1875 190.738281 186.453125 190.738281 195.910156 L 190.738281 196.617188 C 190.738281 206.78125 183.378906 212.730469 167.25 214.492188 Z M 110.820312 89.359375 L 110.820312 88.660156 C 110.820312 79.550781 117.484375 72.539062 134.652344 71.140625 L 134.652344 108.996094 C 115.730469 103.738281 110.820312 98.46875 110.820312 89.359375 Z M 110.820312 89.359375 "/>
              </svg>
            </IonCol>
          </IonRow>
          <IonRow className="cardstack-container">
            <IonCol><CardsComponent /></IonCol>
          </IonRow>
          {/* <IonRow>
            <IonButton onClick={() => test()}>TestButton</IonButton>
          </IonRow> */}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const test = () => {
  game.dummy();
}

export default Home;
