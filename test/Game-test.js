const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Game', function() {

  it('should be a function', () => {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round', () => {
    const game = new Game();

    game.start();

    expect(game.roundTracker).to.equal(1);
  });

  it('should create a new deck with the new cards', () => {
    const game = new Game();

    game.start();
    expect(game.deck.cardDeck.length).to.equal(30);
  });
});