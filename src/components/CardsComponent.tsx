import React, { useState, useEffect } from 'react';
import { SelectionCard, Card, EventCard, Choice, ChoiceEffect } from '../core/domain/card';
import { Swipeable, direction } from 'react-deck-swiper';
import CardComponent from './CardComponent';
import { game } from '../core';

interface CardsProps {
    cards: Array<SelectionCard>
}
const CardsComponent: React.FunctionComponent<CardsProps> = (props) => {

    const [card, setCard] = useState(new EventCard("test", new Choice("Test", new ChoiceEffect(0, 0, 0, 0))) as Card);

    useEffect(() => {
        console.log("addEventlistener");
        game.addStateListener(() => {
            if(game.gameState.currentCard){
                setCard(game.gameState.currentCard)
            }
        });
    }, [])


    const handleOnSwipe = (swipeDirection: direction) => {
        if (swipeDirection === direction.RIGHT) {
            if (card instanceof SelectionCard) {
                game.step((card as EventCard).leftChoice.effect)
            }
            return
        }

        if (swipeDirection === direction.LEFT) {
            if (card instanceof SelectionCard) {
                game.step((card as EventCard).rightChoice.effect)
            }
            return;
        }
    }

    return (
        <div>
            <Swipeable onSwipe={handleOnSwipe}>
                <div className="">
                    <CardComponent card={card} />
                </div>
            </Swipeable>
        </div>
    );
};

export default CardsComponent;
