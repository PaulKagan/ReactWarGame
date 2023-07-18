export const generateDeck= () => {
    const suits = ["♠", "♥", "♦", "♣"];
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const deck = [];

    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ suit, rank });
        }
    }

    return deck;
}


export const shuffleDeck = (cardDeck) => {
    const deck = [...cardDeck];
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}