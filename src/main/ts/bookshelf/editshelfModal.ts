import { createModalHandler } from './newshelfModal';
import { createNewShelf } from './newshelf';

export function editModalHandler(open: boolean | null = null) {
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

document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        
        if (target.classList.contains('edit-list') || target.parentElement?.classList.contains('edit-list')) {
            console.log('Modal opened');
            editModalHandler(true);
        }
    });

    const closeEditModalBtn = document.getElementById('closeEdit');
    closeEditModalBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Modal closed')
        editModalHandler(false);
    });
});
