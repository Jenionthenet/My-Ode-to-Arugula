let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Arugula.png') {
        myImage.setAttribute('src','images/arugula-salad--removebg-preview.png');
    } else{
        myImage.setAttribute('src','images/Arugula.png');
    }
    
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to Designer Salad, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Designer Salad, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}