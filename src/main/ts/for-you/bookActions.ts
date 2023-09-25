// Assuming you have the heart.png and down.png images in your resources folder
import heartPNGPath from "../../resource/img/heart.png";
import downPNGPath from "../../resource/img/down.png";

export function addIconsToBookCard(card: HTMLDivElement) {
    const iconContainer = document.createElement("div");
    iconContainer.style.position = "relative";
    iconContainer.style.top = "10px";
    iconContainer.style.right = "10px";
    
    const heartIcon = document.createElement("img");
    heartIcon.src = heartPNGPath;
    heartIcon.style.marginRight = "5px";
    heartIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering other click events on the card
        saveBookToFavorites(card);
    });

    const downIcon = document.createElement("img");
    downIcon.src = downPNGPath;

    iconContainer.appendChild(heartIcon);
    iconContainer.appendChild(downIcon);
    card.appendChild(iconContainer);
}

function saveBookToFavorites(card: HTMLDivElement) {
    const bookTitleElement = card.querySelector("p");
    const bookAuthorElement = card.querySelector(".author"); // Assuming you have an element with class "author" in your card.
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
