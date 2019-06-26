class Card {
  constructor(number, question, answers, answer) {
    this.id = number;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = answer;
  }
}


module.exports = Card