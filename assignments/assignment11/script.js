
const getMovieData = async () => {
    
    const url = "https://portiaportia.github.io/json/movies.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const createMovieSection = async (movie) => {
    return new Promise(async (resolve) => {
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
  
      resolve(movieSection);
    });
  };
  
  const displayMovies = async () => {
    var movieListDiv = document.getElementById("movieList");
    let movieData = await getMovieData();
  
    for (const movie of movieData) {
      const movieSection = await createMovieSection(movie);
      movieListDiv.appendChild(movieSection);
    }
  };
  
  window.onload = () => displayMovies();
  