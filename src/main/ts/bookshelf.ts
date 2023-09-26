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
    }
}

createModalHandler(false);


function displayFavoriteBooks() {

    const favoriteBooks: { title: string, author: string, cover: string }[] = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");

    const rowContainer = document.getElementById("row-container");
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

function displayNewShelfBooks() {

    for (const shelf of savedShelves) {

        const shelfBooks = shelf.books || [];

        const shelfContainer = document.querySelector(`.row-list`);

        if (shelfContainer) {
            for (const book of shelfBooks) {
                const bookCard = document.createElement('div');
                bookCard.innerHTML = `
                    <img src="${book.cover}" alt="${book.title}">
                    <p>${book.title}</p>
                    <span class="author">${book.author}</span>
                `;
                shelfContainer.appendChild(bookCard);
            }
        }
    }
}

displayNewShelfBooks();

console.log("Bookshelf");
