import { createNavbar } from "./navbar";
import { type Word, getRandomWord } from "./index/word-of-the-day";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());



const wordnikKey = "wxpr227kut0uhkhnlzpq0lb8n4paa4n5qxe1ginohwonfm5gl";

let wordOfTheDay: string | null = null;
let definitionOfTheDay: string | null = null;

// word of the day api
// displays word of the day and the definition
//working but may hit rate limit and fail to load
fetch(`https://cors-anywhere.herokuapp.com/http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=${wordnikKey}`)
    .then(wordnikResponse => wordnikResponse.json())
    .then(wordnikResponse => {
        wordOfTheDay = wordnikResponse.word;
        definitionOfTheDay = wordnikResponse.definitions[0].text;
    })
    .catch(error => console.error("Error fetching wordnik data:", error));

if (wordOfTheDay === null || definitionOfTheDay === null)
{
    const randomWord: Word = getRandomWord();
    wordOfTheDay = randomWord.wordString;
    definitionOfTheDay = randomWord.definition;
}

const dailyWordPElement = document.getElementById("dailyWord");
const dailyDefinitionPElement = document.getElementById("dailyDefinition");

if (definitionOfTheDay.length >= 500)
{
    dailyDefinitionPElement?.classList.remove("text-3xl");
}

dailyWordPElement!.textContent = `"${capitalizeFLetter(wordOfTheDay)}"`;
dailyDefinitionPElement!.textContent = definitionOfTheDay;

function capitalizeFLetter(aString: string)
{
    return aString.length === 0 ? aString : aString[0].toUpperCase() + aString.slice(1);
}
