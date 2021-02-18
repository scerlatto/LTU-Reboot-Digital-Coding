function drinkOrder( size, drinkName ) {

   let drink = drinkName.toLowerCase(); //if a user puts in wrong capital variation it will still turn out the correct response
  
   let messageTemplate = 'You have ordered a';
   
switch( drink ) {
case 'cola' : // when we evoke function 'drink' it will check the case to see if they put in the world cola'
    console.log( 'You have ordered a ' + size + ' ' + drink );
    //console.log( '${messageTemplate} ${size} ${drink}'); //easier to read than above example. up-to-date way of doing the same job. These are called template literals.
    break;  // similar to return, stops the function, won't use again
case 'lemonade' :
    console.log( 'You have ordered a ' + size + ' ' +  drink )
    break;
case 'orangeade' :
    console.log( 'You have ordered a ' + size + ' ' + drink )
    break;
    default: 
    console.log('error'); // will catch if drink doesn't exist
    break; 
}

}

drinkOrder( 'x-large', 'LEMONADE'); //evokes the function, would output 'you have ordered X-Large lemonade (due to output all in lowercase)