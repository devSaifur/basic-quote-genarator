const btnEl = document.querySelector("#btn")
const quote = document.querySelector("#quote")
const personSaid = document.querySelector(".person-said")
const Quotes = [
    {
        quote: "I'm not here to be perfect, I'm here to be real.",
        personSaid: "Lady Gaga"
    },
    {
        quote: "I'm not interested in money. I just want to be wonderful.",
        personSaid: "Marilyn Monroe"
    },
    {
        quote: "The only thing that feels better than winning is winning when nobody thought you could.",
        personSaid: "Hank Aaron"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        personSaid: "Winston Churchill"
    },
    {
        quote: "If you can dream it, you can do it.",
        personSaid: "Walt Disney"
    },
    {
        quote: "If you want something done, ask a busy person to do it.",
        personSaid: "Laura Ingalls Wilder"
    },
    {
        quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
        personSaid: "John Quincy Adams"
    },
    {
        quote: "The best way to find out if you can trust somebody is to trust them.",
        personSaid: "Ernest Hemingway"
    },
    {
        quote: "The only Limit to our realization of tomorrow will be our doubts of today.",
        personSaid: "Franklin D. Roosevelt"
    },
    {
        quote: "We may encounter many defeats but we must not be defeated.",
        personSaid: "Maya Angelou"
    },
]

btnEl.addEventListener("click", () => {
    let randomQuote = Math.floor(Math.random() * Quotes.length)
    quote.innerText = Quotes[randomQuote].quote
    personSaid.innerText = Quotes[randomQuote].personSaid
})

