import { createNavbar } from "./navbar";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());



const wordnikKey = "wxpr227kut0uhkhnlzpq0lb8n4paa4n5qxe1ginohwonfm5gl";






// word of the day api 
// displays word of the day and the definition
//working but may hit rate limit and fail to load
fetch(`https://cors-anywhere.herokuapp.com/http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=${wordnikKey}`)
    .then(wordnikResponse => wordnikResponse.json())
    .then(wordnikResponse => {
        const wordOfTheDay = wordnikResponse.word;
        const wordnikWordOfDay = document.getElementById("dailyWord");

function capitalizeFLetter() {
    let string = wordOfTheDay;
    console.log(wordOfTheDay[0].toUpperCase() + string.slice(1));
}

capitalizeFLetter();

        if (wordnikWordOfDay){
            wordnikWordOfDay["textContent"] = wordOfTheDay;
    }
        
        console.log(wordOfTheDay)

        const definitionOfDay = wordnikResponse.definitions[0].text;
        const wordnikDefinition = document.getElementById('dailyDefinition');
        if (wordnikDefinition) {
            wordnikDefinition["textContent"] = definitionOfDay;
        }

        console.log(definitionOfDay)
        console.log(wordnikResponse)
    })
    .catch(error => console.error("Error fetching wordnik data:", error));


