let scarlettWebsite document.querySelector("a");

    scarlettWebsite.addEventListener("click", function( event ){  //click is the type of event
        
        event.preventDefault();
        //console.log( event );
        alert('This link is disabled');

    } );

//stops link connecting to new page, throws alert instead