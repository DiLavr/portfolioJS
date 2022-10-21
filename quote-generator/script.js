// define triggers by ID in index.html
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
// const loader = document.getElementById('loader');

let apiQuotes = [];

// show new quote
function newQuote() {
    // rendomizer in Quote Api arraw
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Check the Author field is blank
    if(!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // check the lenght of the quote to determan styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    // Alternative API https://zenquotes.io/api/quotes
    try {
const response = await fetch(apiUrl);
apiQuotes = await response.json();
newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// on load
getQuotes();