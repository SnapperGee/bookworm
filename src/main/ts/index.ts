import { createNavbar } from "./navbar";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());



fetch("https://openlibrary.org/search.json?title=the+lord+of+the+rings")
    .then(openLibResponse => openLibResponse.json())
    .then(openLibResponse => console.log(openLibResponse));

