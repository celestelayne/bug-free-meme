console.log("This code is loading the JavaScript file");

let materials = ["wood", "brick", "broken dishes", "dust", "leaves", "grass"];

let places = [
  "cold, windy climate",
  "desert",
  "deserted airport",
  "deserted church",
  "deserted factory",
  "hot climate",
  "metropolis"
];

let people = [
  "collectors of all types",
  "fishermen and families",
  "french and german speaking people",
  "old friends",
  "horses and birds",
  "little boys",
  "lovers"
];

let thing = [
  "natural light",
  "all available lighting",
  "candles",
  "electricity"
];

// [1] select a random element from each array
// [2] write a function generatePoem() render this randomised text to the page
// have this function run on window load

function selectRandomElement(array){
  let randomizer = array[Math.floor(Math.random() * array.length)]
  return randomizer;
} 

function generatePoem(n){
  // select a random element from each array
  let randomMaterial = selectRandomElement(materials);
  let randomPlace = selectRandomElement(places);
  let randomPeople = selectRandomElement(people);
  let randomThing = selectRandomElement(thing);

  for(let i = 0; i < n; i++){
    console.log(i * 1000)
    setTimeout(generatePoem, i * 1000)
  }

  // grab the container element on the web page
  const container = document.querySelector('.container');

  // create a new paragraph element 
  const paragraph = document.createElement('p'); 
  
  // construct our sentence
  paragraph.textContent = `A house of ${randomMaterial} in a ${randomPlace} using ${randomThing} inhabited by ${randomPeople}`;

  // append the paragraph to the page
  container.appendChild(paragraph)
}

// call or invoke the function
window.addEventListener('load', function(){
  generatePoem(5)
})