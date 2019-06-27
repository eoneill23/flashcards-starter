const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

var card, turn, turn1, turn2

beforeEach(() => {
  card = new Card({id: 1, question: 'What is an example of an object?', answers: ['boolean', 'string', 'array'], correctAnswer: 'array'})
  turn = new Turn('My Guess', card);
  turn1 = new Turn ('Wrong answer', card);
  turn2 = new Turn ('array', card);
})

describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to accept a guess', () =>() {
    expect(turn.guess).to.equal('My Guess')
  });

  it('should be able to accept the card in play', () => {
    expect(turn.card).to.equal(card)
  });

  it('should return the user\'s guess', () => {
    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('My Guess')
    });

  it('should return the current card', () => {
    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
    });

  it('should evaluate the user\'s guess', () => {
    turn1.evaluateGuess();
    turn2.evaluateGuess();

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
    });

  it('should give feedback based on the answer', () => {
    turn1.evaluateGuess();
    turn2.evaluateGuess();

    expect(turn1.giveFeedback()).to.equal('Incorrect.')
    expect(turn2.giveFeedback()).to.equal('Correct!')
  });
});