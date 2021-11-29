///////////////this
const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
};
const annoyer = {
  phrases: ["cray cray", "literally", "totes"],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerId = setInterval(() => {
      //arrow func becasue it does not get its own this, so we can use it here properly.
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log("STOP!");
  },
};
