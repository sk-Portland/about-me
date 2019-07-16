


//Test for name prompt


//Test are you sure you want to take the test


//Test for three questions//

import isYes from '../src/isYes.js';
const test = QUnit.test;

test('Quiz question1', function(assert) {
    //Try to rememeber to do this for texts, arrange, act, assert
    //Arrange what are my variables and what should come back?
    const text = 'y' ;
    const expected = true;

    //Act  pull up the function for the person to enter
    const result = isYes(text);


    //Assert
    assert.equal(result, expected);
});

