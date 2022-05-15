


const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ["hearts", "diamonds", "spades", "clubs"],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A'.split(','),

        initializeDeck() {
            const { suits, values, deck } = this;
            deck.length = 0;
            for (let value of values) {
                for (let suit of suits) {
                    deck.push({
                        value,
                        suit
                    })
                }
            }
        },

        drawCard() {
            const card = this.deck.pop();
            this.drawnCards.push(card);
        },

        drawMultiple(numCards) {
            for (let i = 0; i < numCards; i++) {
                this.drawCard()
            }
        },

        shuffle() {
            const { deck } = this;
            // loop over array backwards
            for (let i = deck.length - 1; i > 0; i--) {
                // pick random element
                let j = Math.floor(Math.random() * (i + 1));
                // swap , shorthand new method
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
    }
}


const myDeck = makeDeck();
myDeck.initializeDeck()
myDeck.shuffle()
myDeck.drawMultiple(5)

const myDeck2 = makeDeck();
myDeck2.initializeDeck()
myDeck2.shuffle()
myDeck2.drawMultiple(13)