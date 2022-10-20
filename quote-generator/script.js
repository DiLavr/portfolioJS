// define triggers by ID in index.html
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
// const loader = document.getElementById('loader');

let apiQuotes = [];
// show new quote
function newQuote(){
    // rendomizer in Quote Api arraw
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    autherText.textContent = quote.author;
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