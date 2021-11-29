///////////////////wrapup and practice

// //THe Fisher-Yates shuffle
// function shuffle(arr){
//   //loop over array backwards
//   for(let i=arr.length-1;i>0;i--){
//     //pick random index before current element
//     let j = Math.floor(Math.random()*(i+1));
//     //swap
//     [arr[i],arr[j]] = [arr[j],arr[i]];

//   }
const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck() {
      const { deck, suits, values } = this;
      for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({ value, suit });
        }
      }
      // return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    //THe Fisher-Yates shuffle
    shuffle() {
      const { deck } = this;
      //loop over array backwards
      for (let i = deck.length - 1; i > 0; i--) {
        //pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        //swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(3);
const h3 = myDeck.drawMultiple(4);

const deck2 = makeDeck();
deck2.initializeDeck();
