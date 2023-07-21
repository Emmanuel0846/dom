// Function to randomly generate HEX color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change CSS properties on click
function handleClick(event) {
  const element = event.target;
  element.style.backgroundColor = getRandomColor();
  element.style.fontSize = Math.floor(Math.random() * 30 + 10) + 'px';
}

// Function to revert CSS properties on mouseleave
function handleMouseLeave(event) {
  const element = event.target;
  element.style.color = '';
  element.style.fontSize = '';
}

// Function to change the background color of the browser
function changeBrowserBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

// Functions to write the Hex Code when clicked
function hexCode() {
  document.getElementById('element4').innerHTML= getRandomColor();
}

function hexCode2() {
  document.getElementById('element5').innerHTML= getRandomColor();
}

function hexCodeBrowser() {
  document.getElementById('browser-bg').innerHTML= `Browser HEX Code is: <br/> ${getRandomColor()}`;
}


// Get references to each element
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');
const element3 = document.getElementById('element3');

// Add event listeners to the elements
element1.addEventListener('click', handleClick);
element1.addEventListener('mouseleave', handleMouseLeave);
element1.addEventListener('mouseover', changeBrowserBackgroundColor);
element1.addEventListener('click', hexCode);
element1.addEventListener('mouseover', hexCodeBrowser);

element2.addEventListener('mouseover', changeBrowserBackgroundColor);
element2.addEventListener('mouseover', hexCodeBrowser);

element3.addEventListener('click', handleClick);
element3.addEventListener('mouseleave', handleMouseLeave);
element3.addEventListener('mouseover', changeBrowserBackgroundColor);
element3.addEventListener('click', hexCode2);
element3.addEventListener('mouseover', hexCodeBrowser);

// Get references to the buttons
const onButton = document.getElementById('onButton');
const offButton = document.getElementById('offButton');

// Function to Switch On
function switchOn() {
  document.getElementById('element2').src='pic_bulbon.gif';
}

// Function to Switch Off
function switchOff() {
  document.getElementById('element2').src='pic_bulboff.gif';
}

// Add event listeners to the buttons
onButton.addEventListener('click', switchOn);

offButton.addEventListener('click', switchOff);
