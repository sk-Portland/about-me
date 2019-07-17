
import './guess-number.test.js';
const test = QUnit.test;

test('If the guessed number matches', function(assert) {
    // Arrange
    let guessNumber = 15;
    let givenNumber = 15;
    const expected = 0;

    // Act
    const result = calculateNumber(value);

    // Assert
    assert.equal(result, expected);
});

//Test if the guessed number is lower and returns +1

//Test if the guessed number is higher and returns -1

