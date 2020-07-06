function getQuote() {
    const quotes = [{
            quote: "Make way for my peep!",
            name: "I Don't Know"
        },
        {
            quote: "Milk was a bad choice.",
            name: "Anchorman"
        },
        {
            quote: "If you took professional wrestling, McDonalds French Fries, the NRA, infomercials about bogus products that don’t work, mix them all together, stick them in the back of a tacky white limousine, and drive it around Central Park 500 times. Open the door & out would step Donald Trump.",
            name: "Sam Harris"
        }, {
            quote: "Call the cops, I don't give a shit!",
            name: "Somer"
        },
        {
            quote: "What, So Everyone’s Supposed To Sleep Every Single Night Now?",
            name: "Rick Sanchez"
        }
    ];

    let i = Math.floor(Math.random() * quotes.length);
    return quotes[i];
}

getQuote();

document.querySelector("#quote-btn").addEventListener('click', () => {
    let quote = getQuote();
    document.querySelector("#quote").textContent = quote.quote;
    document.querySelector("#name").textContent = quote.name;
});

window.addEventListener('load', () => {
    let quote = getQuote();
    document.querySelector("#quote").textContent = quote.quote;
    document.querySelector("#name").textContent = quote.name;
})