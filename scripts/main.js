var myHeading = document.querySelector('h1');
// Grab reference to the heading and store it in a variable
// This is very similar to what we did using CSS selectors.
// When wanting to do something to an element, you first need to select it.
myHeading.textContent = 'Hello, world!';
// Set the value of the myHeading variable's textContent property
// (which represents the content of the heading) to "Hello world!".

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/honey-muffin-2.jpg') {
    myImage.setAttribute('src', 'images/black-capped-conure.png');
  }
  if (mySrc === 'images/muffin-top.jpg') {
    myImage.setAttribute('src', 'images/black-capped-conure.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function() {
  setUserName();
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  myHeading.innerHTML = 'Welcome back, ' + localStorage.getItem('name');
}
function setUserName() {
  var myName = prompt('Please enter your name: ');
  // prompt() brings up a dialog box, a bit like alert()
  localStorage.setItem('name', myName);
  // localStorage() stores data in the browser and later retrieve it
  myHeading.innerHTML = 'Welcome to our page, ' + myName;
}
