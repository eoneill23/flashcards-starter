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

  it('keep track of the current round', () => {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round', () => {
    const game = new Game();

    game.start();

    expect(game.round).to.equal(1);
  });

});