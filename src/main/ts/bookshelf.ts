import { createNavbar } from "./navbar";

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
    modalHandler(true);
});

const closeModalBtn = document.getElementById('close');
closeModalBtn?.addEventListener('click', () => {
    modalHandler(false);  // Close the modal when the "Cancel" button is clicked
});

console.log("Bookshelf");
