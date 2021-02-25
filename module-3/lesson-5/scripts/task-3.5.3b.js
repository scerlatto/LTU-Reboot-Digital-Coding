function betweenPrices( arr, lowPrice, highPrice ) {

    let arrItems = []; //created an array

    for( let index = 0; index < arr.length; index++) { //used a for loop 

        if( array[ index].price >= lowPrice && arr[ index ].price < highPrice) {  //used an if statement for comparisons and ampersand logical operator
            
            arrItems.push( arr[ index ].name ); //push method on the array 
        
        }
    }

    return arrItems; //returned the function 

}

console.log( betweenPrices( shoppingCart, 2, 5 ) );
console.log( betweenPrices( shoppingCart, 5, 10 ) );
console.log( betweenPrice( shoppingCart, 4, 10 ) );

