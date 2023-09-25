import { createNavbar } from "./navbar";
import { addIconsToBookCard } from "./bookshelf/book-actions";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

console.log("Genres");

document.addEventListener('DOMContentLoaded', function () {
    const NY_TIMES_API_KEY = "JrHXn4ufVldkRPHOEsBzG3wUMFHtGn1M";
    const publishedDate = ''; 
    const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${publishedDate}&api-key=${NY_TIMES_API_KEY}`;
    const bookListElement = document.getElementById('bookList');

    interface Book {
        title: string;
        author: string;
        description: string;
        amazon_product_url: string;
        book_image: string;
    }
    
    // Function to create a book card
    function createBookCard(book: Book): HTMLElement {
        const card = document.createElement('div');
        card.className = 'bg-tan p-4  flex flex-col justify-center items-center';

        // Create the HTML content of the book card,styling in the card
        card.innerHTML = `
        <div class="flex">
        <div class="flex-none">
            <img src="${book.book_image}" alt="Cover of ${book.title}" class="w-4 h-32 mb-4 shadow-xl shadow-cyan">
        </div>
        <div class="flex-grow ml-4">
            <div class="font-bold text-orange">${book.title}</div>
            <div class="font-semibold text-green">Author: ${book.author}</div>
            <div class="mt-2">${book.description}</div>
            <div class="mt-4">
            <button class="rounded mt-2 text-white px-3 py-1 sm:px-6 sm:py-3 bg-orange cursor-pointer transition-opacity ease-out hover:ease-in" onclick="window.open('${book.amazon_product_url}', '_blank')">Buy Book</button>
            </div>
        </div>
    
    
        `;
    
        addIconsToBookCard(card);

        return card;
    }
      // Check if the data is already cached
      const cachedBooksData = localStorage.getItem('cachedBooksData');
      if (cachedBooksData) {
         const booksData: Book[] = JSON.parse(cachedBooksData);
        booksData.forEach((book) => {
            const bookCard = createBookCard(book);
            bookListElement?.appendChild(bookCard);
        });
        console.log("Using cached book data:", booksData);
    } else {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
        .then((data: {
            results: {
                lists: {
                    books: {
                        title: string;
                        author: string;
                        description: string;
                        amazon_product_url: string;
                        book_image: string; 
                    }[];
                }[];
            };
        }) => {
            // Extract book data from the API response and create book objects
            const booksData = data.results.lists[0].books.map((bookInfo) => {
                return {
                    title: bookInfo.title,
                    author: bookInfo.author,
                    description: bookInfo.description,
                    amazon_product_url: bookInfo.amazon_product_url,
                    book_image: bookInfo.book_image,
                };
            });
localStorage.setItem('cachedBooksData', JSON.stringify(booksData));
console.log("Fetched book data from API:", booksData);
            // Iterate through the book data and append book cards to the book list
            booksData.forEach((book) => {
                const bookCard = createBookCard(book);
                bookListElement?.appendChild(bookCard); //4 possible null value
            });
        })
        .catch((error) => {
            console.error('Error fetching NY Times bestseller data:', error);
        });
    }
});
