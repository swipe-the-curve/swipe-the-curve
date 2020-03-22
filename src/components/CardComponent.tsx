import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';
import { Card } from '../core/domain/card';

interface CardProps {
    card: Card | undefined
}
const CardComponent: React.FunctionComponent<CardProps> = (props) => {
    return (<div className="card shadow">
        {props.card && props.card.text}
    </div>
    );
};

export default CardComponent;
