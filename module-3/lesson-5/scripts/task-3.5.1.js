function shoppingCartTotal( arr ) { //arr stands for an array
    
    let totalPrice = 0; //variable inside the function starting at 0

        for ( let index = 0; index < arr.length; index++ ) {
         
            totalPrice = totalPrice + { arr:[index ].price * arr[ index ].quantity };

    }

    return totalPrice.toFixed (2);

}


//shoppingCartTotal( shoppingCart );

console.log ( '£ ' + shoppingCartTotal( shoppingCart ) ) ;

//function grabs the shopping cart js file which is why it is first
//variable totalprice created, set to 0 (without items)
//used a for loop over each item with the array which grabs hold of the price and quantity
//this is times and put back into total price

