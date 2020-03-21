import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';
import { Card, EventCard, Choice, ChoiceEffect } from '../core/domain/card';

interface CardProps {
    card: Card
}
const CardComponent: React.FunctionComponent<CardProps> =(props) => {
    return (<div className="card">
        <IonCard>
            <IonCardContent>
                {props.card.text}
            </IonCardContent>
        </IonCard>
    </div>
    );
};

export default CardComponent;
