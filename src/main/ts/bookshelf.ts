import { createNavbar } from "./navbar";
import { createNewShelf } from './bookshelf/newshelf';

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

function modalHandler(open: boolean | null = null) {
    const modal = document.getElementById('modal');
    if (!modal) return;

    if (open === true) {
        modal.style.display = "block";
    } else if (open === false) {
        modal.style.display = "none";
    } else {
        modal.style.display = modal.style.display === "none" ? "block" : "none";
    }
}

const svgTrigger = document.getElementById('add-list');
    svgTrigger?.addEventListener('click', () => {
        console.log('Modal opened');
        modalHandler(true);
});

const closeModalBtn = document.getElementById('close');
    closeModalBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Modal closed');
        modalHandler(false); 
});

const createShelfBtn = document.getElementById('create');
createShelfBtn?.addEventListener('click', () => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const colorInput = document.getElementById('colorPicker') as HTMLSelectElement;
    const shelfName = nameInput.value; 
    const colorClass = colorInput.value;

    if (shelfName === '') {
        console.log('No name specified');
        modalHandler(false)
        return;
    }

    else {
        const createList: HTMLElement = document.querySelector('body') as HTMLElement;
        createList.append(createNewShelf(shelfName, colorClass));
        
        modalHandler(false);
        console.log(`New shelf named: ${shelfName}`);
    }
});


console.log("Bookshelf");
