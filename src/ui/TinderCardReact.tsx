import React from 'react';
import { IonButton } from '@ionic/react';
import { TinderCard } from '../components/tinder-card/tinder-card';

interface ContainerProps { }

const ExploreContainer: React.FC = () => {
    return React.createElement("app-tinder-card")
};

export default ExploreContainer;