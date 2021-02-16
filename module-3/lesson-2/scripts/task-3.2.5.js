var temperature = 55;

if ( temperature < 0 ) {
    console.log('stay inside'); 

} else if (temperature < 30 ) { 

    console.log('wear a coat and a hat');
}

else if (temperature < 50 ) { 
   
    console.log('wear a coat');
}

else {
    console.log( 'just pants and a vest is fine');
}

//else if is there for if we have an alternative condition. For example, displaying temp of less than 30 would display less tha 50 alongside less than 30 and cause conflicts. 