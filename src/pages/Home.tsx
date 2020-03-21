import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { heart, people, cash } from 'ionicons/icons'
import SlideComponent from '../ui/SlideComponent';
import Curve from '../components/Curve';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
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
            <IonCol><SlideComponent/></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
