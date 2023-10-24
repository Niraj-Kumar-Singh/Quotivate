const quoteEl = document.getElementById("quote");
const authorEl = document.querySelector(".author");
const getQuoteBtn = document.getElementById("get-quote");




const apiURL = "https://api.quotable.io/random";

async function getQuote(){


    getQuoteBtn.innerText = "Loading..."
    quoteEl.textContent = "Updating...";
    authorEl.textContent = "Updating...";

    const response = await fetch(apiURL);
    const data = await response.json();

    console.log(data);

    quoteEl.textContent = data.content;
    authorEl.textContent = "~ " + data.author;
    getQuoteBtn.innerText = "Get a quote";

}

getQuote();

getQuoteBtn.addEventListener("click", getQuote);
