document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("movieForm")) {
        document.getElementById("movieForm").addEventListener("submit", addMovie);
    } else {
        displayMovies();
    }
});

function addMovie(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let year = document.getElementById("year").value;
    let rating = document.getElementById("rating").value;
    let genre = document.getElementById("genre").value;
    let poster = document.getElementById("poster").value;

    if (!name || !description || !year || !rating || !poster) {
        alert("All fields are required!");
        return;
    }

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push({ name, description, year, rating, genre, poster });
    localStorage.setItem("movies", JSON.stringify(movies));

    document.getElementById("message").innerText = "Movie added successfully!";
    document.getElementById("movieForm").reset();
}

function displayMovies() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let tableBody = document.getElementById("movieTable");
    let noMoviesMessage = document.getElementById("noMoviesMessage");

    tableBody.innerHTML = "";
    noMoviesMessage.style.display = movies.length === 0 ? "block" : "none";

    movies.forEach((movie, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${movie.name}</td>
            <td>${movie.description.length > 100 ? movie.description.substring(0, 100) + '...' : movie.description}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" alt="Poster" style="width: 400px;"></td>
            <td><button class="delete-btn" onclick="deleteMovie(${index})">Delete</button></td>
        `;
    });

}

function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies();
}

function searchMovies() {
    let query = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#movieTable tr");

    rows.forEach(row => {
        let name = row.cells[0].innerText.toLowerCase();
        let genre = row.cells[4].innerText.toLowerCase();
        row.style.display = name.includes(query) || genre.includes(query) ? "" : "none";
    });
}

function sortMovies() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.sort((a, b) => b.rating - a.rating);
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies();
}
