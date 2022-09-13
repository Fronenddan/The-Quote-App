// Variables

const text = document.querySelector(".quote");
const author = document.querySelector("#author");
const twitter = document.querySelector("#twitter");
const nextQuote = document.querySelector(".button2");


getQuotes();

// get new quotes


async function getQuotes () {
    const urlApi = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        let currentText = data[Math.floor(Math.random() * data.length)].text
        let currentAuthor = data[Math.floor(Math.random() * data.length)].author

        if(author == undefined) {
            
        }

        if(currentText.length > 120) {
            text.classList.add("too-big")
            text.textContent = `"${currentText}"`;
            author.textContent = currentAuthor;
            
        } else {
            text.classList.remove("too-big")

            text.textContent = `"${currentText}"`;
            author.textContent = currentAuthor;
        }

        
    } catch (error) {
        console.log(error)
    }
}



nextQuote.addEventListener("click", getQuotes)
