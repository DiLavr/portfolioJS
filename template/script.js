let apiQuotes = [];
// show new quote
function newQuote(){
    // rendomizer in Quote Api arraw
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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