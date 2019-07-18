
import randomNumber from '../src/get-throw.js';

import getThrowFromNumber from '../src/get-throw.js';
const test = QUnit.test;

//Test 1 - no difference

test('If the guessed number matches', function(assert) {
    // Arrange
    let guessNumber = 15;
    let givenNumber = 15;
    const expected = 0;

    // Act
    const result = calculateNumber(guessNumber, givenNumber);

    // Assert
    assert.equal(result, expected);
});
