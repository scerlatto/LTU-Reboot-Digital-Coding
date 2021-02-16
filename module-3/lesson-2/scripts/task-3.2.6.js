var temperature = 51;
var season = 'summer';

if ( temperature < 0 ) {
    console.log('stay inside'); 

} else if (temperature < 30 ) { 

    console.log('wear a coat and a hat');
}

else if (temperature > 50 && season === 'summer' ) { 
   
    console.log('dont forget your sunglasses');
}

else {
    console.log( 'just pants and a vest is fine');
}

//two variables are included with the inclusion of a logical operator.