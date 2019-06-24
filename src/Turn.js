class Turn {
  constructor(userGuess, currentCard) {
    this.guess = userGuess
    this.card = currentCard
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    if(this.guess === this.card.correctAnswer){
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if(this.evaluateGuess() === true){
      return 'Great job!';
    } else {
      return 'Try again!';
    }
  }
}


module.exports = Turn