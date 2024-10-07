import Movielist from "./components/Movielist";
import movies_ from "./movies";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import { Container } from "react-bootstrap";
import { useState } from "react";
function App() {
  const [originalMoviesList, changeMovielist] = useState(movies_);
  const [filteredNewMovies, changeFiltered] = useState(originalMoviesList);

  const implementOnClick = (newmovies) => {
    if (
      !newmovies.title ||
      !newmovies.description ||
      !newmovies.rating ||
      !newmovies.url
    ) {
      return;
    }

    console.log(movies_);
    changeMovielist([...originalMoviesList, newmovies]);
    changeFiltered([...filteredNewMovies, newmovies]);
  };

  const mainFilterhandler = (title, rating) => {
    let filteredMovies = originalMoviesList;
    if (title && !rating) {
      filteredMovies = originalMoviesList.filter((movie) => {
        return movie.title.toLowerCase().includes(title.toLowerCase());
      });
    }

    if (!title && rating) {
      filteredMovies = originalMoviesList.filter((movie) => {
        return parseFloat(movie.rating) >= parseFloat(rating);
      });
    }

    if (title && rating) {
      filteredMovies = originalMoviesList.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          parseFloat(movie.rating) >= parseFloat(rating)
        );
      });
    }
    changeFiltered(filteredMovies);
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <Filter handleFilter={mainFilterhandler} />
          <AddMovie onAddMovie={implementOnClick} />
        </div>
        <Movielist movies={filteredNewMovies} />
      </Container>
    </>
  );
}

export default App;
