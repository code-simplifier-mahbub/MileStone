
const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data) )
}

const displayQuote = data => {
    const blockQuote = document.getElementById('get-quote');
    blockQuote.innerText = data.quote;
    console.log(data);
}
