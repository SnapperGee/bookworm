
import heartPNGPath from "../../resource/img/heart.png";
import downPNGPath from "../../resource/img/down.png";

export function addIconsToBookCard(card: HTMLDivElement) {
    if (card.querySelector('.icon-container')) {
        return;
    }

    const bookTitleElement = card.querySelector("p") || card.querySelector(".font-bold.text-orange");
    const bookAuthorElement = card.querySelector(".author");
    const bookCoverElement = card.querySelector("img");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("flex", "justify-end", "top-2", "right-2");
    
    const heartIcon = document.createElement("img");
    heartIcon.src = heartPNGPath;
    heartIcon.classList.add("inline-block", "mr-3", "cursor-pointer");
    heartIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering other click events on the card
        saveBookToFavorites(card);
    });

    const downIcon = document.createElement("img");
    downIcon.src = downPNGPath;
    downIcon.classList.add("inline-block", "cursor-pointer");
    
    const shelfDropdown = createShelfDropdown(card);
    card.appendChild(shelfDropdown);

    downIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        if (shelfDropdown.classList.contains('hidden')) {
            shelfDropdown.classList.remove('hidden');
        } else {
            shelfDropdown.classList.add('hidden');
        }
    });

    iconContainer.appendChild(heartIcon);
    iconContainer.appendChild(downIcon);
    card.appendChild(iconContainer);
}

function saveBookToFavorites(card: HTMLDivElement) {
    const bookTitleElement = card.querySelector("p") || card.querySelector(".font-bold.text-orange");
    const bookAuthorElement = card.querySelector("p") || card.querySelector(".font-semibold .text-green") || card.querySelector(".text-center");
    const bookCoverElement = card.querySelector("img");

    // Add null checks for each element
    const bookTitle = bookTitleElement ? bookTitleElement.textContent : "";
    const bookAuthor = bookAuthorElement ? bookAuthorElement.textContent : "";
    const bookCover = bookCoverElement ? bookCoverElement.src : "";

    // Here, we're creating an object to store the book details.
    const favoriteBook = {
        title: bookTitle,
        author: bookAuthor,
        cover: bookCover
    };

    const favoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
    favoriteBooks.push(favoriteBook);
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
}

function createShelfDropdown(card: HTMLDivElement): HTMLElement {
    const dropdown = document.createElement('div');
    dropdown.classList.add('shelf-dropdown', 'hidden', 'absolute', 'bg-white', 'rounded', 'shadow', 'mt-2', 'z-10');

    const shelves = JSON.parse(localStorage.getItem('shelves') || '[]');
    shelves.forEach((shelf: { name: string }) => {
        const shelfItem = document.createElement('div');
        shelfItem.classList.add('absolute', 'cursor-pointer', 'p-2', 'hover:bg-gray-200');
        shelfItem.textContent = shelf.name;
        shelfItem.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.add('hidden');
            saveBookToShelf(card, shelf.name);
        });
        dropdown.appendChild(shelfItem);
    });

    return dropdown;
}


function saveBookToShelf(card: HTMLDivElement, shelfName: string) {
    const bookTitleElement = card.querySelector(".font-bold.text-orange") || card.querySelector("p");
    const bookAuthorElement = card.querySelector(".author");
    const bookCoverElement = card.querySelector("img");

    const bookTitle = bookTitleElement ? bookTitleElement.textContent : "";
    const bookAuthor = bookAuthorElement ? bookAuthorElement.textContent : "";
    const bookCover = bookCoverElement ? bookCoverElement.getAttribute("src") : "";

    const bookData = {
        title: bookTitle,
        author: bookAuthor,
        cover: bookCover
    };

    const shelf = JSON.parse(localStorage.getItem(shelfName) || "[]");
    shelf.push(bookData);
    localStorage.setItem(shelfName, JSON.stringify(shelf));
}