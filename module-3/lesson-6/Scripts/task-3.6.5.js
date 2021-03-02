let userInput = document.querySelector('input'); 

let button = document.querySelector('button');

    button.addEventListener('click', function( event ){
        
        event.preventDefault(); //slows it down

        console.log( userInput.value );

    });
