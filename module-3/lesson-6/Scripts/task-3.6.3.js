let button = document.querySelector("button");//only one button otherwise would call something else

    //button.addEventListener('mouseover', function() {
     //   alert('Hi');
   // });


let alert = function() {
    console.log('Hi');
}

button.addEventListener( "mouseover", alert );

//NEEDS WORK