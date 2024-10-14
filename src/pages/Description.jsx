import React from "react";
import { useParams } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Description = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);
  return (
    <div className="d-flex p-5">
      <div
        style={{
          width: "30%",
          height: "650px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <BsArrowLeftCircleFill size="120px" style={{ color: "FFC107" }} />
        </Link>
      </div>
      <div className="d-flex" style={{ width: "70%", height: "70%" }}>
        <div>
          <img src={movie.image_url} alt="" />
        </div>
        <div className="p-4" style={{ width: "50%" }}>
          <h1 className="display-1" style={{ backgroundColor: "FFC107" }}>
            {movie.title}
          </h1>
          <h3 className="mt-5">{movie.description}</h3>
          <h4 className="mt-5">Rating : {movie.rating}</h4>
        </div>
      </div>
    </div>
  );
};

export default Description;
