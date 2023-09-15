const NY_TIMES_API_KEY = "JrHXn4ufVldkRPHOEsBzG3wUMFHtGn1M";

fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings.json")
    .then(openLibResponse => openLibResponse.json())
    .then(openLibResponse => console.log(openLibResponse));

fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${NY_TIMES_API_KEY}`)
    .then(nyTimesResponse => nyTimesResponse.json())
    .then(nyTimesData => console.log(nyTimesData));
