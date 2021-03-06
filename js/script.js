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
  {quote: 'Well, nobody’s perfect.', source: 'Osgood Fielding III', citation: 'Some Like It Hot', year: 1959, imdb: 'https://www.imdb.com/title/tt0053291/'},
  {quote: 'Do your parents know you’re Ramones?', source: 'Miss Togar', citation: 'Rock N Roll High School', year: 1979, imdb: 'https://www.imdb.com/title/tt0079813/'}, 
  {quote: 'No Christine, that’s a frog. Bears wear hats.', source: 'Jim Henson', citation: 'The Great Muppet Caper', year: 1981, imdb: 'https://www.imdb.com/title/tt0082474/'},
  {quote: 'IS THIS SOMETHING YOU CAN SHARE WITH THE REST OF US, AMAZING LARRY?', source: 'Pee Wee Herman', citation: 'Pee Wee’s Big Adventure', year: 1985, imdb: 'https://www.imdb.com/title/tt0089791/'}, 
  {quote: 'And what better way to say “I love you” than with the gift of a spatula?', source: '“Weird Al” Yankovic', citation: 'UHF', year: 1989, imdb: 'https://www.imdb.com/title/tt0098546/'}, 
  {quote: 'Well, what if there is no tomorrow? There wasn’t one today.', source: 'Phil Connors', citation: 'Groundhog Day', year: 1993, imdb: 'https://www.imdb.com/title/tt0107048/'}
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
  // store random number
  let randomInt;
  // if random number = previous quote number, pick again
  do {
    randomInt = Math.floor(Math.random() * quotes.length);
  } while (randomInt === currentQuote);
  // return new quote number
  return (currentQuote = randomInt);
}

/***
 * `printQuote` function
***/
function printQuote() {
  // get new quote number
  const quoteNumber = getRandomQuote();
  // create new HTML
  const quoteHtml = 
  `<p class="quote">${quotes[quoteNumber].quote}</p><p class="source">${quotes[quoteNumber].source}<span class="citation"><a href="${quotes[quoteNumber].imdb}" target="_blank">${quotes[quoteNumber].citation}</a></span><span class="year">${quotes[quoteNumber].year}</span></p>`;
  // update DOM
  quoteBox.innerHTML = quoteHtml;
  // run updateBg
  updateBg(quoteNumber);

  // end timer
  stop();

  // restart timer 
  timer();
}

/* update bg color */
function updateBg(quoteNumber) {
  const bg = backgrounds[quoteNumber];
  document.querySelector('body').style.backgroundColor = bg;
}

/* timer */
let t;

function timer() { 
  t = setInterval(printQuote, 5000); 
} 

function stop() { 
  clearInterval(t); 
}

timer();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);