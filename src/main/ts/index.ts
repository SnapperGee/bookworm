const OMDB_API_KEY = "afecf7e1";

const NY_TIMES_API_KEY = "JrHXn4ufVldkRPHOEsBzG3wUMFHtGn1M";

const movieTitle = "swordfish";

fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${movieTitle}`)
    .then(response => response.json())
    .then(placesData => console.log(placesData));

fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings.json")
    .then(response => response.json())
    .then(omdbData => console.log(omdbData));

fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${NY_TIMES_API_KEY}`)
    .then(response => response.json())
    .then(bookData => console.log(bookData));

fetch("https://openlibrary.org/search.json?title=the+lord+of+the+rings")
    .then(response => response.json())
    .then(bookData => console.log(bookData));
