


//Test for name prompt


//Test are you sure you want to take the test


//Test for three questions//

import isYes from './src/isYes'
const test = QUnit.test;

test('Quiz question1', function(assert)){
//Try to rememeber to do this for texts, arrange, act, assert
//Arrange what are my variables and what should come back?
Const text ='Do adults have neurogenesis in the brain?'
const expected = true;

//Act  pull up the function for the person to enter
const result =isYes(text);


//Assert
assert.equal(result,expected);

};

test('Quiz question2', function(assert)){
    //Try to rememeber to do this for texts, arrange, act, assert
    //Arrange what are my variables and what should come back?
    Const text ='Do adults have neurogenesis in the brain?'
    const expected = true;
    
    //Act  pull up the function for the person to enter
    const result =isYes(text);
    
    
    //Assert
    assert.equal(result,expected);
    
    };

    test('Quiz question3', function(assert)){
        //Try to rememeber to do this for texts, arrange, act, assert
        //Arrange what are my variables and what should come back?
        Const text ='Do adults have neurogenesis in the brain?'
        const expected = true;
        
        //Act  pull up the function for the person to enter
        const result =isYes(text);
        
        
        //Assert
        assert.equal(result,expected);
        
        };