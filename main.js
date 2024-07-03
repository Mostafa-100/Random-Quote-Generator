const getQuoteBtn = document.getElementById("get-quote-btn");
const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");

async function getRandomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const quote = await response.json();

    return quote;
}

getQuoteBtn.onclick = async function () {
    const quote = await getRandomQuote();
    quoteText.textContent = quote.content;
    quoteAuthor.textContent = quote.author;
}