import { createNewShelf } from './newshelf';

export function createModalHandler(open: boolean | null = null) {
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

    // Generate a unique shelfId based on the current time
    const shelfId = 'shelf-' + new Date().getTime();

    if (shelfName === '') {
        console.log('No name specified');
        createModalHandler(false)
        return;
    }

    else {
        const createList: HTMLElement = document.querySelector('body') as HTMLElement;
        createList.append(createNewShelf(shelfId, shelfName, colorClass));

        const existingShelves = JSON.parse(localStorage.getItem('shelves') || '[]');
        existingShelves.push({ id: shelfId, name: shelfName, color: colorClass });
        localStorage.setItem('shelves', JSON.stringify(existingShelves));
        
        createModalHandler(false);
        console.log(`New shelf named: ${shelfName}`);
    }
});
