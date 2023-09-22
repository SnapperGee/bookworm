import { createNavbar } from "./navbar";
import { createNewShelf } from './bookshelf/newshelf';

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const savedShelves = JSON.parse(localStorage.getItem('shelves') || '[]');
for (const shelf of savedShelves) {
    bodyHTML.append(createNewShelf(shelf.name, shelf.color));
}

function editModalHandler(open: boolean | null = null) {
    const editModal = document.getElementById('editModal');

    if (!editModal) return;

    if (open === true) {
        editModal.style.display = "block";
    } else if (open === false) {
        editModal.style.display = "none";
    } else {
        editModal.style.display = editModal.style.display === "none" ? "block" : "none";
    }
}

const editSVG = document.getElementById('edit-list');
    editSVG?.addEventListener('click', () => {
        console.log('Modal Opened');
        editModalHandler(true);
});

const closeEditModalBtn = document.getElementById('closeEdit');
    closeEditModalBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Modal closed')
        editModalHandler(false);
    });

function createModalHandler(open: boolean | null = null) {
    const createModal = document.getElementById('createModal');
    if (!createModal) return;

    if (open === true) {
        createModal.style.display = "block";
    } else if (open === false) {
        createModal.style.display = "none";
    } else {
        createModal.style.display = createModal.style.display === "none" ? "block" : "none";
    }
}

const createSVG = document.getElementById('add-list');
    createSVG?.addEventListener('click', () => {
        console.log('Modal opened');
        createModalHandler(true);
});

const closeCreateModalBtn = document.getElementById('closeCreate');
    closeCreateModalBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Modal closed');
        createModalHandler(false); 
});

const createShelfBtn = document.getElementById('create');
createShelfBtn?.addEventListener('click', () => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const colorInput = document.getElementById('colorPicker') as HTMLSelectElement;
    const shelfName = nameInput.value; 
    const colorClass = colorInput.value;

    if (shelfName === '') {
        console.log('No name specified');
        createModalHandler(false)
        return;
    }

    else {
        const createList: HTMLElement = document.querySelector('body') as HTMLElement;
        createList.append(createNewShelf(shelfName, colorClass));

        const existingShelves = JSON.parse(localStorage.getItem('shelves') || '[]');
        existingShelves.push({ name: shelfName, color: colorClass });
        localStorage.setItem('shelves', JSON.stringify(existingShelves));
        
        createModalHandler(false);
        console.log(`New shelf named: ${shelfName}`);
    }
});

const playlistEditBtn = document.getElementById('edit');
playlistEditBtn?.addEventListener('click', () => {

});


console.log("Bookshelf");
