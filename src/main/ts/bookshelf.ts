import { createNavbar } from "./navbar";
import { createNewShelf } from './bookshelf/newshelf';
import { createModalHandler } from './bookshelf/newshelfModal';
import { editModalHandler } from './bookshelf/editshelfModal';

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const savedShelves = JSON.parse(localStorage.getItem('shelves') || '[]');
for (const shelf of savedShelves) {
    bodyHTML.append(createNewShelf(shelf.id, shelf.name, shelf.color));
}

createModalHandler(false);
editModalHandler(false);

console.log("Bookshelf");