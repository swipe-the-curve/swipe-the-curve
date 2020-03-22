import React, { useState, useEffect } from 'react';
import { SelectionCard, Card, EventCard, Choice, ChoiceEffect } from '../core/domain/card';
import { Swipeable, direction } from 'react-deck-swiper';
import CardComponent from './CardComponent';
import { game } from '../core';

const CardsComponent: React.FunctionComponent = () => {

    const [card, setCard] = useState(new EventCard("0", "test", new Choice("Test", new ChoiceEffect(0, 0, 0, 0))) as Card);

    useEffect(() => {
        console.log("addEventlistener");
        game.addStateListener(() => {
            if (game.gameState.currentCard) {
                setCard(game.gameState.currentCard)
            }
        });
    }, [])


    const handleOnSwipe = (swipeDirection: direction) => {
        if (swipeDirection === direction.RIGHT) {
            if (card instanceof SelectionCard) {
                game.step((card as EventCard).rightChoice.effect)
            }
            return
        }

        if (swipeDirection === direction.LEFT) {
            if (card instanceof SelectionCard) {
                game.step((card as EventCard).leftChoice.effect)
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
            <div className="backgroundCard" >
                <CardComponent card={undefined} />
            </div>
            <div className="choices">
                <div className="choice leftChoice" onClick={
                    () => {
                        handleOnSwipe(direction.LEFT);
                    }
                }>
                    {(card as SelectionCard).leftChoice.text}
                </div>
                <div className="choice rightChoice"onClick={
                    () => {
                        handleOnSwipe(direction.RIGHT);
                    }
                }>
                    {(card as SelectionCard).rightChoice.text}
                </div>
            </div>

        </div>
    );
};

export default CardsComponent;
