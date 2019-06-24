const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to accept a guess', function()
    {
    const turn = new Turn('My Guess')
    expect(turn.guess).to.equal('My Guess')
  });

  it('should be able to accept the card in play', function() 
    {
    const card = new Card(1, 'What is an example of an object?', ['boolean', 'string', 'array'], 'array')
    const turn = new Turn('My Guess', card)
    expect(turn.card).to.equal(card)
  });

  it('should return the user\'s guess', function()
    {
    const card = new Card (1, 'What is an example of an object?', ['boolean', 'string', 'array'], 'array');
    const turn = new Turn ('My Guess', card);

    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('My Guess')
    });

  it('should return the current card', function()
    {
    const card = new Card (1, 'What is an example of an object?', ['boolean', 'string', 'array'], 'array');
    const turn = new Turn ('My Guess', card);

    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
    });

  it('should evaluate the user\'s guess', function()
    {
    const card = new Card (1, 'What is an example of an object?', ['boolean', 'string', 'array'], 'array');
    const turn = new Turn ('array', card);

    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(true);
    });

  it('should give feedback based on the answer', function() 
    {
    const card = new Card (1, 'What is an example of an object?', ['boolean', 'string', 'array'], 'array');
    const turn = new Turn ('Wrong answer', card);

    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('Try again!')
  });
});