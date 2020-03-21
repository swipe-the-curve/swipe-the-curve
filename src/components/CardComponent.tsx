import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';
import { SelectionCard } from '../core/domain/card';

interface CardProps {
    card: SelectionCard
}
const CardComponent: React.FunctionComponent<CardProps> = (props) => {
    return (<div className="card">
        {props.card.text}
    </div>
    );
};

export default CardComponent;
