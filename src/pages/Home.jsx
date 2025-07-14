// client/src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => {
        setMovies(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  useEffect(() => {
    const results = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()) &&
        (genreFilter
          ? movie.genre.toLowerCase() === genreFilter.toLowerCase()
          : true)
    );
    setFiltered(results);
  }, [search, genreFilter, movies]);

  const genres = [...new Set(movies.map((movie) => movie.genre))];

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>🎬 Welcome to Inox-Playxx</h1>
        <p>Explore a universe of movies curated just for you.</p>
      </header>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        >
          <option value="">All Genres</option>
          {genres.map((genre, idx) => (
            <option key={idx} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="movie-grid">
        {filtered.map((movie) => (
          <div key={movie._id} className="movie-card">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/300x450?text=No+Image&font=roboto";
              }}
              className="poster"
            />

            <h2>{movie.title}</h2>
            <p className="genre">{movie.genre}</p>
            <div className="autt">
              {" "}
              <p className="desc ">{movie.description}</p>
            </div>
            <a
              href={movie.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              🎥 Watch Trailer
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
