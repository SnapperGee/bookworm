import { createNavbar } from "./navbar";
import { createNewShelf } from './bookshelf/newshelf';
import { createModalHandler } from './bookshelf/newshelfModal';
// import { editModalHandler } from './bookshelf/editshelfModal';

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const savedShelves = JSON.parse(localStorage.getItem('shelves') || '[]');
for (const shelf of savedShelves) {
    bodyHTML.append(createNewShelf(shelf.id, shelf.name, shelf.color));
}

createModalHandler(false);
// editModalHandler(false);

function displayFavoriteBooks() {
    // Fetch the saved favorite books from local storage.
    const favoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");

    // Identify the container in your HTML where the favorite books should be displayed.
    // This assumes you have an element with an ID of "bookshelfContainer" to hold the favorite books.
    const shelfContainer = document.querySelector("#shelf-container");

    // Loop through each favorite book and create elements to display its details.
    favoriteBooks.forEach(book => {
        const bookCard = document.createElement('div');

        // Set the innerHTML of the book card with the book details.
        bookCard.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <p>${book.title}</p>
            <span class="author">${book.author}</span>
        `;

        // Append the created book card to the bookshelf container.
        shelfContainer.appendChild(bookCard);
    });
}

// Call the function when the page loads to display the favorite books.
displayFavoriteBooks();


console.log("Bookshelf");