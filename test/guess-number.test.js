
import calculateNumber from '../src/guess-number.js';
const test = QUnit.test;

//Test 1 - no difference

test('If the guessed number matches', function(assert) {
    // Arrange
    let guessNumber = 15;
    let givenNumber = 15;
    const expected = 'correct';

    // Act
    const result = calculateNumber(guessNumber, givenNumber);

    // Assert
    assert.equal(result, expected);
});

//Test 2, negative value too low

test('If the guessed number is too low', function(assert) {
    // Arrange
    let guessNumber = 13;
    let givenNumber = 15;
    const expected = 'Too low try again';

    // Act
    const result = calculateNumber(guessNumber, givenNumber);

    // Assert
    assert.equal(result, expected);
});


//Test 3, positive value  too high

test('If the guessed numberis too high', function(assert) {
    // Arrange
    let guessNumber = 16;
    let givenNumber = 15;
    const expected = 'Too high try again';

    // Act
    const result = calculateNumber(guessNumber, givenNumber);

    // Assert
    assert.equal(result, expected);
});
