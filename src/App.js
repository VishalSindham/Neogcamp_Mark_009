import "./main.css";
import React, { useState } from "react";
const moviesDB = {
  Action: [
    { name: "Top Gun: Maverick ", rating: "8.5/10" },
    { name: "Wild Dog", rating: "6.3/10" },
    { name: "The Batman", rating: "7.2/10" }
  ],
  Drama: [
    { name: "Black Bird", rating: "8.2/10" },
    { name: "Look Both Ways ", rating: "6.3/10" },
    { name: "Elvis ", rating: "7.6/10" }
  ],
  Adventure: [
    { name: "Bullet Train", rating: "7.5/10" },
    { name: "Day Shift", rating: "6.1/10" },
    { name: "Prey ", rating: "7.2/10" }
  ]
};
export default function App() {
  const [movies, setMovies] = useState("Drama");
  function movieHandler(movie) {
    setMovies(movie);
  }
  return (
    <div className="App">
      <header>
        {" "}
        <h1>Movies Rating</h1>
      </header>
      <div>
        {Object.keys(moviesDB).map((movie) => (
          <button className="btn" onClick={() => movieHandler(movie)}>
            {movie}
          </button>
        ))}
      </div>
      <hr />
      <div className="movie-list">
        <ul>
          {moviesDB[movies].map((genre) => (
            <li key={genre.name}>
              <div className="movie">{genre.name}</div>
              <div className="rating">{genre.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
