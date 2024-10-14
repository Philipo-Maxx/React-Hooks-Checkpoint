import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
const Trailer = ({ movies }) => {
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
        <iframe
          width="853"
          height="480"
          src={movie.trailerlink}
          title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Trailer;
