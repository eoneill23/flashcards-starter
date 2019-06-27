const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

var deck, card1, card2, card3

beforeEach(() => {
  card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
  card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
  deck = new Deck([card1, card2, card3])
})

describe('Deck', () => {

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be able to accept multiple cards', () => {
    expect(deck.cardDeck).to.eql([card1, card2, card3]);
  });

  it('should count the cards in the deck', () => {
    deck.countCards()

    expect(deck.countCards()).to.equal(3)
  });

});