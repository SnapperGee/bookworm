import { createNavbar } from "./navbar";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

console.log("Genres");

document.addEventListener('DOMContentLoaded', function () {
    const NY_TIMES_API_KEY = "JrHXn4ufVldkRPHOEsBzG3wUMFHtGn1M";
    const publishedDate = ''; 
    const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${publishedDate}&api-key=${NY_TIMES_API_KEY}`;
    const bookListElement = document.getElementById('bookList');

    // Function to create a book card
    function createBookCard(book: {
        title: string;
        author: string;
        description: string;
        amazon_product_url: string;
        book_image: string;
    }): HTMLElement {
        const card = document.createElement('div');
        card.className = 'bg-tan p-4 rounded-lg shadow-md flex flex-col justify-center items-center';

        // Create the HTML content of the book card,styling in the card
        card.innerHTML = `
        <div class="flex">
        <div class="flex-none">
            <img src="${book.book_image}" alt="Cover of ${book.title}" class="w-15 h-auto mb-4">
        </div>
        <div class="flex-grow ml-4">
            <div class="font-bold text-lg">${book.title}</div>
            <div class="mt-2">${book.description}</div>
            <div class="mt-4">
                <div class="font-semibold">Author: ${book.author}</div>
                <a class="mt-2 text-blue-500 underline cursor-pointer" href="${book.amazon_product_url}" target="_blank">Buy Book</a>
            </div>
        </div>
    </div>
    
        `;
    
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

    // Get the New York Times bestseller data and display it
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

            // Iterate through the book data and append book cards to the book list
            booksData.forEach((book) => {
                const bookCard = createBookCard(book);
                bookListElement?.appendChild(bookCard); //4 possible null value
            });
        })
        .catch((error) => {
            console.error('Error fetching NY Times bestseller data:', error);
        });
});
