import { createNavbar } from "./navbar";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.appendChild(createNavbar());

const NY_TIMES_API_KEY = "JrHXn4ufVldkRPHOEsBzG3wUMFHtGn1M";

fetch("https://openlibrary.org/search.json?title=the+lord+of+the+rings")
    .then(openLibResponse => openLibResponse.json())
    .then(openLibResponse => console.log(openLibResponse));

fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=JRR+Tolkien&api-key=${NY_TIMES_API_KEY}`)
    .then(nyTimesResponse => nyTimesResponse.json())
    .then(nyTimesData => console.log(nyTimesData));
