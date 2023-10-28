
var movieData = [
    {
        "title": "The Godfather",
        "director": "Francis Ford Coppola",
        "actors": ["Al Pacino", "Marlon Brando", "Robert Duvall"],
        "year": "1972",
        "genres": ["Crime", "Fiction", "Drama"],
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. -- Carl Schultz",
        "img": "images/the-godfather.jpg"
    },
    {
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "actors": ["Morgan Freeman", "Bob Gunton", "Tim Robbins"],
        "year": "1994",
        "genres": ["Drama", "Mystery", "Crime", "Fiction"],
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. --IMDB",
        "img": "images/the-shawshank-redemption.jpg"
    },
    {
        "title": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "actors": ["John Travolta", "Bruce Willis", "Uma Thurman"],
        "year": "1994",
        "genres": ["Crime", "Drama"],
        "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. -- IMDB",
        "img": "images/pulp-fiction.jpg"
    },
    {
        "title": "The Dark Knight",
        "director": "Christopher Nolan",
        "actors": ["Christian Bale", "Michael Caine", "Heath Ledger"],
        "year": "2008",
        "genres": ["Action", "Crime", "Fiction", "Drama", "Thriller", "Noir"],
        "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice. --IMDB",
        "img": "images/the-dark-knight.jpg"
    },
    {
        "title": "GoodFellas",
        "director": "Martin Scorsese",
        "actors": ["Robert De Niro", "Samuel L. Jackson", "Joe Pesci"],
        "year": "1990",
        "genres": ["Thriller", "Drama", "Crime", "Detective", "Fiction"],
        "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        "img": "images/goodfellas.jpg"
    }
    
];


function createMovieSection(movie) {
    var movieSection = document.createElement("div");
    movieSection.className = "movie";

    var image = document.createElement("img");
    image.src = movie.img;
    image.alt = movie.title;
    image.width = 200;

    var textSection = document.createElement("div");
    textSection.className = "text-section";

    var title = document.createElement("h2");
    title.textContent = `${movie.title} (${movie.year})`;

    var director = document.createElement("p");
    director.innerHTML = `<strong>Director:</strong> ${movie.director}`;

    var actors = document.createElement("p");
    actors.innerHTML = `<strong>Actors:</strong> ${movie.actors.join(", ")}`;

    var genres = document.createElement("p");
    genres.innerHTML = `<strong>Genres:</strong> ${movie.genres.join(", ")}`;

    var description = document.createElement("p");
    description.innerHTML = `<strong>Description:</strong> ${movie.description}`;
    description.style.fontStyle = "italic";

    textSection.appendChild(title);
    textSection.appendChild(director);
    textSection.appendChild(actors);
    textSection.appendChild(genres);
    textSection.appendChild(description);

    movieSection.appendChild(image);
    movieSection.appendChild(textSection);

    return movieSection;
}

function displayMovies() {
    var movieListDiv = document.getElementById("movieList");
    movieData.forEach(function (movie) {
        var movieSection = createMovieSection(movie);
        movieListDiv.appendChild(movieSection);
    });
}

// Call the displayMovies function to populate the page with movie data
displayMovies();
