// client/src/pages/AddMovie.jsx
import React, { useState } from 'react';
import axios from 'axios';


const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    description: '',
    posterUrl: '',
    trailerUrl: ''
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, movie, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("✅ Movie added successfully!");
      setMovie({ title: '', genre: '', description: '', posterUrl: '', trailerUrl: '' });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add movie. Make sure you're an admin.");
    }
  };

  return (
    <div className="add-movie-container">
      <div className="add-movie-box">
        <h2>Add a New Movie</h2>
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Movie Title" value={movie.title} onChange={handleChange} required />
          <input name="genre" placeholder="Genre" value={movie.genre} onChange={handleChange} required />
          <input name="posterUrl" placeholder="Poster URL" value={movie.posterUrl} onChange={handleChange} required />
          <input name="trailerUrl" placeholder="Trailer URL" value={movie.trailerUrl} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={movie.description} onChange={handleChange} required></textarea>
          <button type="submit">🎬 Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
