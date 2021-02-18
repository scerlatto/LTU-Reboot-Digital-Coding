function seasonWear( season ) {

    switch ( season ) {
        case 'spring' :
            console.log( `It is ${season} so bring an umbrella` );
        break;
        case 'summer' :
            console.log(  `It is ${season} so wear a hat` );
        break;
        case 'autumn' :
            console.log(  `It is ${season} so bring a scarf` );
        break;
        case 'winter' :
            console.log(  `It is ${season} so make sure you wrap up` );
        break;
        default :
        console.log('error');
        break;
    }
}

seasonWear ('winter');
seasonWear ('autumn');
seasonWear ('spring');
seasonWear ('summer');



let date = new Date();

let day = date.getDay();

function dayOfTheWeek( day ) {

    switch( day ) {
        
        case 1:
            console.log( `It is Monday`);
            break;
        case 2:
            console.log( `It is Tuesday`);
            break;
        case 3:
            console.log(`It is Wednesday`);
            break;
        case 4:
            console.log( `It is Thursday`);
            break;
            default:
                console.log ('error');
                break;
}

} 

dayOfTheWeek(day); 

