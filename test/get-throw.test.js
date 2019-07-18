

import getThrowFromNumber from '../src/get-throw.js';
const test = QUnit.test;

//Test 1 - with the function assign a weapon based on a number?

test('Will the function generate a rock', function(assert) {
    // Arrange
    let randomNumber = 0;
    const expected = 'Opponent is scissors';

    // Act
    const result = getThrowFromNumber(randomNumber);

    // Assert
    assert.equal(result, expected);
});
