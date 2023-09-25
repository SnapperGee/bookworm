import { createNavbar } from "./navbar";
import { createNewShelf } from './bookshelf/newshelf';
import { createModalHandler } from './bookshelf/newshelfModal';
import { addIconsToBookCard } from "./bookshelf/book-actions";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

type Shelf = {
    id: string;
    name: string;
    color: string;
    books?: { title: string, author: string, cover: string }[];
};

const savedShelves: Shelf[] = JSON.parse(localStorage.getItem('shelves') || '[]');
for (const shelf of savedShelves) {
    if (shelf) { // Add a null check
        bodyHTML.append(createNewShelf(shelf.id, shelf.name, shelf.color));
        displayBooksFromShelf(shelf.name);
    }
}

createModalHandler(false);
// editModalHandler(false);

function displayFavoriteBooks() {
    // Fetch the saved favorite books from local storage.
    const favoriteBooks: { title: string, author: string, cover: string }[] = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");

    // Identify the container in your HTML where the favorite books should be displayed.
    const rowContainer = document.getElementById("row-container");
    // Loop through each favorite book and create elements to display its details.
    if (rowContainer) {
        favoriteBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.innerHTML = `
                <img src="${book.cover}" alt="${book.title}">
                <p>${book.title}</p>
                <span class="author">${book.author}</span>
            `;
            rowContainer.appendChild(bookCard);
        });
    }
}

displayFavoriteBooks();

function displayBooksFromShelf(shelfName: string) {
    // Find the shelf in savedShelves
    const targetShelf = savedShelves.find(shelf => shelf.name === shelfName);
    const shelfBooks = targetShelf?.books || [];

    // Identify the container in your HTML where the books for this shelf should be displayed.
    // Assuming each shelf container has an ID like "shelf-{shelfName}-container"
    const shelfContainer = document.querySelector(`#${shelfName} .row-list`);
        
    // Loop through each book and create elements to display its details.
    if (shelfContainer) {
        shelfBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.innerHTML = `
                <img src="${book.cover}" alt="${book.title}">
                <p>${book.title}</p>
                <span class="author">${book.author}</span>
            `;
            shelfContainer.appendChild(bookCard);
        });
    }
}

console.log("Bookshelf");
