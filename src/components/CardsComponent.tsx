import React, { useState } from 'react';
import { Card } from '../core/domain/card';
import { Swipeable, direction } from 'react-deck-swiper';
import CardComponent from './CardComponent';

interface CardsProps {
    cards: Array<Card>
}
const CardsComponent: React.FunctionComponent<CardsProps> = (props) => {

    const [count, setCount] = useState(0);

    const handleOnSwipe = (swipeDirection: direction) => {
        if (swipeDirection === direction.RIGHT) {
            setCount(count - 1)
            return;
        }

        if (swipeDirection === direction.LEFT) {
            setCount(count + 1)
            return;
        }
    }

    return (
        <Swipeable onSwipe={handleOnSwipe}>
            <div className="card">
                <CardComponent card={props.cards[count]} />
            </div>
        </Swipeable>
    );
};

export default CardsComponent;
