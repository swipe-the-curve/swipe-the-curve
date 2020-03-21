import React from 'react';
import { IonCard, IonCardContent, IonCardTitle, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { SelectionCard } from '../core/domain/card';

interface CardProps {
    card: SelectionCard
}
const CardComponent: React.FunctionComponent<CardProps> = (props) => {
    return (<div className="card">
        <IonCard>
            <IonCardContent>
                <IonCardContent>{props.card.text}</IonCardContent>
            </IonCardContent>
        </IonCard>
    </div>
    );
};

export default CardComponent;
