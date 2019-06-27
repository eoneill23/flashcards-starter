const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');

var game

beforeEach(() => {
  game = new Game(); 
})

describe('Game', () => {

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round', () => {
    game.start();

    expect(game.roundTracker).to.equal(1);
  });

  it('should create a new deck with the new cards', () => {
    game.start();
    
    expect(game.deck.cardDeck.length).to.equal(30);
  });
});