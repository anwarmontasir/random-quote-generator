/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {quote: 'Well, nobody’s perfect.', source: 'Osgood Fielding III', citation: 'Some Like It Hot', year: 1959, imdb: ''},
  {quote: 'Do your parents know you’re Ramones?', source: 'Miss Togar', citation: 'Rock N Roll High School', year: 1979, imdb: ''}, 
  {quote: 'No Christine, that’s a frog. Bears wear hats.', source: 'Jim Henson', citation: 'The Great Muppet Caper', year: 1980, imdb: ''},
  {quote: 'IS THIS SOMETHING YOU CAN SHARE WITH THE REST OF US, AMAZING LARRY?', source: 'Pee Wee Herman', citation: 'Pee Wee’s Big Adventure', year: 1985, imdb: ''}, 
  {quote: 'And what better way to say “I love you” than with the gift of a spatula?', source: '“Weird” Al Yankovic', citation: 'UHF', year: 1989, imdb: ''}, 
  {quote: 'Well, what if there is no tomorrow? There wasn’t one today.', source: 'Phil Connors', citation: 'Groundhog Day', year: 1993, imdb: ''}
];

/* bg array */
const backgrounds = ['#c36', '#6c3', '#3c6', '#36c', '#c63', '#63c'];

/* currentQuote */
let currentQuote = 0;

/* select DOM element */
const quoteBox = document.querySelector('.quote-box');

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // generate random number
  const randomInt = Math.floor(Math.random() * quotes.length);
  // make sure new number is different from current quote number
  if (randomInt !== currentQuote) {
    // update current quote number
    currentQuote = randomInt;
    // print quote
    printQuote(currentQuote);
  } else {
    getRandomQuote();
  }
}

/***
 * `printQuote` function
***/
function printQuote(currentQuote) {
  const quoteHtml = `<p class="quote">${quotes[currentQuote].quote}</p><p class="source">${quotes[currentQuote].source}<span class="citation">${quotes[currentQuote].citation}</span><span class="year">${quotes[currentQuote].year}</span></p>`;
  quoteBox.innerHTML = quoteHtml;
  updateBg(currentQuote);
}

/* update bg color */
function updateBg(currentQuote) {
  const bg = backgrounds[currentQuote];
  document.querySelector('body').style.backgroundColor = bg;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", getRandomQuote, false);