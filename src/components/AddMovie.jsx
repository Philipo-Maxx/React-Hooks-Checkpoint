import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddMovie = ({ onAddMovie }) => {
  const [newMovies, changeMovies] = useState({
    title: "",
    description: "",
    rating: "",
    url: "",
    trailerlink: "",
  });
  const handleOnClick = (e) => {
    e.preventDefault();
    onAddMovie(newMovies);
    changeMovies({
      title: "",
      description: "",
      rating: "",
      url: "",
      trailerlink: "",
    });
    //toast.success("Movie Added Successfully");
  };
  return (
    <form
      onSubmit={handleOnClick}
      style={{ display: "inline-block", width: "40%", padding: "20px" }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="align-items-center"
      >
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          style={{ width: "80%" }}
          value={newMovies.title}
          onChange={(e) => {
            changeMovies({ ...newMovies, title: e.target.value });
          }}
          className="bg-warning rounded border-0 p-1 mb-1"
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="align-items-center"
      >
        <label htmlFor="">Description</label>
        <input
          type="text"
          placeholder="Enter Description"
          style={{ width: "80%" }}
          value={newMovies.description}
          onChange={(e) => {
            changeMovies({ ...newMovies, description: e.target.value });
          }}
          className="bg-warning rounded border-0 p-1 mb-1"
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="align-items-center"
      >
        <label htmlFor="">Rating</label>
        <input
          type="number"
          min={1}
          max={10}
          step={0.1}
          style={{ width: "80%" }}
          value={newMovies.rating}
          onChange={(e) => {
            changeMovies({ ...newMovies, rating: e.target.value });
          }}
          className="bg-warning rounded border-0 p-1 mb-1"
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="align-items-center"
      >
        <label htmlFor="">Url</label>
        <input
          type="text"
          placeholder="Url"
          style={{ width: "80%" }}
          value={newMovies.url}
          onChange={(e) => {
            changeMovies({ ...newMovies, url: e.target.value });
          }}
          className="bg-warning rounded border-0 p-1 mb-1"
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="align-items-center"
      >
        <label htmlFor="">Trailer Link</label>
        <input
          type="text"
          placeholder="Trailer Link"
          style={{ width: "80%" }}
          value={newMovies.trailerlink}
          onChange={(e) => {
            changeMovies({ ...newMovies, trailerlink: e.target.value });
          }}
          className="bg-warning rounded border-0 p-1"
        />
      </div>
      <div className="d-flex justify-content-end mt-1">
        <Button className="btn-dark" type="submit">
          Add Movie
        </Button>
      </div>
    </form>
  );
};

export default AddMovie;
