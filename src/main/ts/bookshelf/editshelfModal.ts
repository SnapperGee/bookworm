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

let currentEditingPlaylist: HTMLElement | null = null;

document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        
        if (target.classList.contains('edit-list') || target.parentElement?.classList.contains('edit-list')) {
            console.log('Modal opened');
            editModalHandler(true);

            let containerElement: HTMLElement | null = target;

            while (containerElement && containerElement.id !== 'playlist-container') {
                containerElement = containerElement.parentElement as HTMLElement;
            }
            if (containerElement) {
                const playlistNameElement = containerElement.querySelector('h3') as HTMLHeadElement;
    
                if (playlistNameElement) {
                    currentEditingPlaylist = containerElement;
                }
            }
        }
    });
    
    const confirmBtn = document.getElementById('confirm');
    confirmBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        if (currentEditingPlaylist) {
            // Get new values from the modal
            const newName = (document.getElementById('editName') as HTMLInputElement).value;
            const newColor = (document.getElementById('editColor') as HTMLSelectElement).value;

            // Update the list's name
            const playlistNameElement = currentEditingPlaylist.querySelector('h3') as HTMLHeadingElement;
            if (playlistNameElement) {
                playlistNameElement.textContent = newName;
            }

             // Update the list's color
            const playlistHeaderElement = currentEditingPlaylist.querySelector('div[id^="header-color-"]') as HTMLDivElement;
            if (playlistHeaderElement) {
            // First, remove any existing bg-* classes
            for (const className of Array.from(playlistHeaderElement.classList)) {
                    if (className.startsWith('bg-')) {
                    playlistHeaderElement.classList.remove(className);
                    break;
                }
            }
            // Then, add the new color class
            playlistHeaderElement.classList.add(newColor);
        }

            // Close the modal
            console.log('Confirm button clicked')
            editModalHandler(false);
        }
    });

    const closeEditModalBtn = document.getElementById('closeEdit');
    closeEditModalBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Modal closed')
        editModalHandler(false);
    });
});