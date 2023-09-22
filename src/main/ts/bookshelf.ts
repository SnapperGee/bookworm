import { createNavbar } from "./navbar";
import { createNewShelf } from './bookshelf/newshelf';
import { createModalHandler } from './bookshelf/newshelfModal';
import { editModalHandler } from './bookshelf/editshelfModal';

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const savedShelves = JSON.parse(localStorage.getItem('shelves') || '[]');
for (const shelf of savedShelves) {
    bodyHTML.append(createNewShelf(shelf.name, shelf.color));
}

createModalHandler(false);
editModalHandler(false);

console.log("Bookshelf");


// const playlistEditId = 'edit-list-' + new Date().getTime(); // generate unique ID using current timestamp
// playlistEdit.id = playlistEditId;

// const newShelf = createNewShelf(shelfName, colorClass);
// createList.append(newShelf);
// const newEditSVG = document.getElementById(newShelf.querySelector('.edit-list').id);
// newEditSVG?.addEventListener('click', () => {
//     console.log('Modal Opened');
//     editModalHandler(true);
// });

// playlistEdit.classList.add('edit-list');

// const editSVGs = document.querySelectorAll('.edit-list');
// editSVGs.forEach((editSVG) => {
//     editSVG?.addEventListener('click', () => {
//         console.log('Modal Opened');
//         editModalHandler(true);
//     });
// });
