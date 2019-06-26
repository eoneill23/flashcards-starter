const Turn = require('../src/Turn')

class Round {
  constructor(deck){
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(){
    return this.deck.cardDeck[this.turn];
  }

  takeTurn(guess){
    let turn = new Turn(guess, this.deck.cardDeck[this.turn])
    if(turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck.cardDeck[this.turn].id)
    }
    let feedback = turn.giveFeedback();
    this.calculatePercentCorrect()
    this.turn ++;
    return feedback;
  }

  calculatePercentCorrect(){
    if(this.turn === this.deck.cardDeck.length){
    let percentCorrect = Math.floor(100 * (this.deck.cardDeck.length - this.incorrectGuesses.length)/this.deck.cardDeck.length);
    this.endRound(percentCorrect);
    return percentCorrect;
    }
  }

  endRound(percentage){
    return  `** Round over! ** You answered ${percentage}% of the questions correctly!`
  }
}

module.exports = Round