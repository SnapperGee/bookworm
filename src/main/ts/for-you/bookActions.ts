// Assuming you have the heart.png and down.png images in your resources folder
const HEART_ICON_URL = "../../resource/img/heart.png";
const DOWN_ICON_URL = "../../resource/img/down.png";

export function addIconsToBookCard(card: HTMLDivElement) {
    const iconContainer = document.createElement("div");
    iconContainer.style.position = "absolute";
    iconContainer.style.top = "10px";
    iconContainer.style.right = "10px";
    
    const heartIcon = document.createElement("img");
    heartIcon.src = HEART_ICON_URL;
    heartIcon.style.marginRight = "5px";
    heartIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering other click events on the card
        saveBookToFavorites(card);
    });

    const downIcon = document.createElement("img");
    downIcon.src = DOWN_ICON_URL;

    iconContainer.appendChild(heartIcon);
    iconContainer.appendChild(downIcon);
    card.appendChild(iconContainer);
}

function saveBookToFavorites(card: HTMLDivElement) {
    const bookTitle = card.querySelector("p").textContent;
    const bookAuthor = card.querySelector(".author").textContent; // This fetches the author's name. Assuming you have an element with class "author" in your card.
    const bookCover = card.querySelector("img").src; // This fetches the cover image URL from the card.

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
