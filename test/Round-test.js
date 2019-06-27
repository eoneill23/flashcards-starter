const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');

var round, deck, card1, card2, card3

beforeEach(() => {
  card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
  card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
});

describe('Round', () => {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should accept a deck of cards', () => {
    expect(round.deck.cardDeck).to.eql([card1, card2, card3])
  });

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  });

  it('should start with no turns', () => {
    expect(round.turn).to.equal(0)
  });

  it('should start with no incorrect guesses', () => {
    expect(round.incorrectGuesses).to.eql([])
  });

  it('should evaluate a guess that is correct', () => {
    expect(round.takeTurn('sea otter')).to.equal('Correct!')
  });

  it('should evaluate a guess that is incorrect', () => {
    expect(round.takeTurn('capybara')).to.equal('Incorrect.')
  });

  it('should evaluate a guess that is incorrect', () => {
    round.takeTurn()
    round.takeTurn()

    expect(round.turn).to.equal(2)
  });

  it('should add incorrect guesses to a list of incorrect guesses', () => {
    round.takeTurn('capybara')
    round.takeTurn('spleen')

    expect(round.incorrectGuesses).to.eql([1, 14])
  });

  it('make the next card the current card after each turn', () => {
    round.takeTurn('capybara');
    expect(round.returnCurrentCard()).to.eql(card2);

    round.takeTurn('gallbladder');
    expect(round.returnCurrentCard()).to.eql(card3);
  });

  it('should give you the percentage of correct answers per round', () => {
    round.takeTurn('capybara');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.eql(66);
  });

  it('should give you a message and percentage correct at the end of the round', () => {
    round.takeTurn('capybara');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.endRound(66)).to.equal('** Round over! ** You answered 66% of the questions correctly!');
  });
});