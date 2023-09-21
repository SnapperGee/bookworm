import { createNavbar } from "./navbar";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const NY_TIMES_API_KEY = "JrHXn4ufVldkRPHOEsBzG3wUMFHtGn1M";

const wordnikKey = "wxpr227kut0uhkhnlzpq0lb8n4paa4n5qxe1ginohwonfm5gl"



fetch("https://openlibrary.org/search.json?title=the+lord+of+the+rings")
    .then(openLibResponse => openLibResponse.json())
    .then(openLibResponse => console.log(openLibResponse));

fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=JRR+Tolkien&api-key=${NY_TIMES_API_KEY}`)
    .then(nyTimesResponse => nyTimesResponse.json())
    .then(nyTimesData => console.log(nyTimesData));


fetch(`http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=${wordnikKey}`)
   .then(wordnikResponse => wordnikResponse.json())
   .then(wordnikData => console.log(wordnikData))
   .catch(error => console.error("Error fetching wordnik data:", error));

