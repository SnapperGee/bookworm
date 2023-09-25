import heartPNGPath from "../../resource/img/heart.png";
import downPNGPath from "../../resource/img/down.png";

export function addIconsToBookCard(card: HTMLDivElement) {
    if (card.querySelector('.icon-container')) {
        return;
    }

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("justify-end", "top-2", "right-2");
    
    const heartIcon = document.createElement("img");
    heartIcon.src = heartPNGPath;
    heartIcon.classList.add("inline-block", "mr-3");
    heartIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering other click events on the card
        saveBookToFavorites(card);
    });

    const downIcon = document.createElement("img");
    downIcon.src = downPNGPath;
    downIcon.classList.add("inline-block");

    iconContainer.appendChild(heartIcon);
    iconContainer.appendChild(downIcon);
    card.appendChild(iconContainer);
}

function saveBookToFavorites(card: HTMLDivElement) {
    const bookTitleElement = card.querySelector("p");
    const bookAuthorElement = card.querySelector(".author");
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
