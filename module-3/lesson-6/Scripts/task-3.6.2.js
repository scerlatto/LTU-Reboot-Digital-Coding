console.log('hello');

let domDiv = document.querySelector('#dom-div');

let paragraph = document.createElement('p');

let paragraphText = document.createTextNode('Text created by the DOM');

    paragraph.appendChild( paragraphText ); //attaches text to the paragraph

    domDiv.appendChild( paragraph );
    