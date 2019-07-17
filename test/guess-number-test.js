import makeVolume from '../src/guess-number.js';

const test = QUnit.test;

test('If the guessed number matches', function(assert) {
    // Arrange
    const guess = 15;
    const expected = 15;

    // Act
    const result = guess - expected

    // Assert
    assert.equal(0);
});


test('If the answer is y', function(assert) {
    //Try to rememeber to do this for texts, arrange, act, assert
    //Arrange what are my variables and what should come back?
    const text = 'y' ;
    const expected = true;

    //Act  pull up the function for the person to enter
    const result = isYes(text);


    //Assert
    assert.equal(result, expected);
});