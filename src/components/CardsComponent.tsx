import React, { useState } from 'react';
import { SelectionCard } from '../core/domain/card';
import { Swipeable, direction } from 'react-deck-swiper';
import CardComponent from './CardComponent';


interface CardsProps {
    cards: Array<SelectionCard>
}
const CardsComponent: React.FunctionComponent<CardsProps> = (props) => {

    const [count, setCount] = useState(0);

    const handleOnSwipe = (swipeDirection: direction) => {
        if (swipeDirection === direction.RIGHT) {
            let actualCard = props.cards[count] as SelectionCard
            setCount(count + 1)
            console.log(actualCard.leftChoice)
            return
        }

        if (swipeDirection === direction.LEFT) {
            let actualCard = props.cards[count] as SelectionCard
            setCount(count + 1)
            console.log(actualCard.rightChoice)
            return;
        }
    }

    return (
        <div>
            <Swipeable onSwipe={handleOnSwipe}>
                <div className="card">
                    <CardComponent card={props.cards[count]} />
                </div>
            </Swipeable>
        </div>
    );
};

export default CardsComponent;
