import React, { useState } from 'react';
import Card from './Card';
import { generateDeck, shuffleDeck } from '../deck';

export default function Field(props) {

    const [deck, _] = useState(generateDeck());
    const [playerDeck, setPlayerDeck] = useState([]);
    const [computerDeck, setComputerDeck] = useState([]);
    const [dealt, setDealt] = useState(false);
    const [currentPlayerCard, setCurrentPlayerCard] = useState({});
    const [currentComputerCard, setCurrentComputerCard] = useState({});
    const [pRoundWon, setPRoundWon] = useState(0);
    const [cRoundWon, setCRoundWon] = useState(0);
    
    const finishGame = (currentScore, pRoundScore, cRoundScore) => {
        let pScore = currentScore.user;
        let cScore = currentScore.computer;
        let gamesPlayed = currentScore.gamesPlayed;
        gamesPlayed++;
        if (pRoundScore > cRoundScore) {
            pScore++;
        } else {
            cScore++;
        }
        
        const newScore = {user: pScore, computer: cScore, gamesPlayed: gamesPlayed}
        props.setScore(newScore);
        props.setFinished(true);
    }

    const roundWon = () => {
        if (currentPlayerCard.rank > currentComputerCard.rank) {
            return 1;
        }
        return 2;
    }

    const draw = (pDeck, cDeck) => {
    
        if (pDeck.length == 0) {
            finishGame(props.score, pRoundWon, cRoundWon);
            return;
        }

        if (roundWon() == 1) {
            setPRoundWon((pRoundWon + 1));
        } else if (roundWon() == 2) {
            setCRoundWon((cRoundWon + 1));
        }
    
        setCurrentPlayerCard(pDeck.pop());
        setCurrentComputerCard(cDeck.pop());
        setPlayerDeck(pDeck);
        setComputerDeck(cDeck);
    
    }
    
    const dealCards = (cardDeck) => {
        const deck = shuffleDeck(cardDeck);
        const pDeck = [];
        const cDeck = [];
        for (let i = 0; i < deck.length; i++) {
            if ((i % 2) == 0) {
                pDeck.push(deck[i]);
            } else {
                cDeck.push(deck[i]);
            };
        };
        draw(pDeck, cDeck);
        setDealt(!dealt);
    };
    
      return (
        <div id='game-screen'>
            <div id='comp-name'>
                Computer
            </div>
            <div id='action-field'>
                <div id="pcField">
                    {dealt && <Card key={crypto.randomUUID()} suit={currentComputerCard.suit} rank={currentComputerCard.rank}/>}
                </div>
                <div id="playerField">
                    {dealt && <Card key={crypto.randomUUID()} suit={currentPlayerCard.suit} rank={currentPlayerCard.rank}/>}
                </div>
            </div>
            <div id='footer'>
                {dealt && <button id='next' onClick={() =>{draw(playerDeck, computerDeck)}}>Next</button>}   
                {!dealt && <button id="deal-btn" onClick={() => {
                    dealCards(deck);
                    }}>Deal Cards</button>}
                <div id='player-name'>
                    {/* Why not the name? >:(  I  refuse to just write "You" :(*/}
                    {props.userName}
                </div>
            </div>
            
        </div>
      )
    }