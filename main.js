var generateButton = document.querySelector(".generate-btn")
var quoteText = document.getElementById('quote-text')

getNewQuote = () => {
    fetch("https://api.kanye.rest")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        quoteText.innerHTML = data.quote
        console.log(data.quote)
    })
}

generateButton.addEventListener('click', e => {
    e.preventDefault();
    getNewQuote();
})

