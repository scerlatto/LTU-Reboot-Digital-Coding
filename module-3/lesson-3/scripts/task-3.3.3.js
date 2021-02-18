function calculator( number1, number2, operator ) 
{

    switch ( operator ) {
        case '+' : //operators are additions/subtractions
            console.log( `${number1} + ${number2} = ${number1 + number2}` ); //make sure you use a backtick to correctly create template literals (next to shift key)
            break;
        case '-' : 
            console.log( `${number1} - ${number2} = ${number1 - number2}` );
            break;
        case '*' :
            console.log( number1 * number2);
            break;
            default: 
        console.log( 'error' )
            break;
        
    }
}

calculator( 5, 5, '+' );
calculator( 10, 5, '-'); 
calculator(5, 10, '*');



