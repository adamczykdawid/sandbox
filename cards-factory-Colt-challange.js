const newDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "spades", "clubs", "diamonds"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck() {
      const { deck, values, suits } = this;
      const newValues = values.split(",");
      for (let suit of suits) {
        for (let value of newValues) {
          const onePair = { suit, value };
          deck.push(onePair);
        }
      }
      return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(value) {
      const cards = [];
      for (let i = 1; i <= value; i++) {
        cards.push(this.drawCard());
      }
      return cardsj;
    },
    shuffle() {
      let currentIdx = this.deck.length,
        randomIdx;
      while (currentIdx != 0) {
        randomIdx = Math.floor(Math.random() * currentIdx);
        currentIdx--;
        [this.deck[currentIdx], this.deck[randomIdx]] = [
          this.deck[randomIdx],
          this.deck[currentIdx],
        ];
      }
      return this.deck;
    },
  };
};
