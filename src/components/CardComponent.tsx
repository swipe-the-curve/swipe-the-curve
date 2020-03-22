import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';
import { Card, EventCard } from '../core/domain/card';

interface CardProps {
    card: Card | undefined
}
const CardComponent: React.FunctionComponent<CardProps> = (props) => {
    return (<div className="card shadow">
        {props.card && props.card.id !== "E0" && props.card instanceof EventCard &&
            <div className="eventtitle">Ereignis:</div>
        }
        {props.card && props.card.text}
    </div>
    );
};

export default CardComponent;
