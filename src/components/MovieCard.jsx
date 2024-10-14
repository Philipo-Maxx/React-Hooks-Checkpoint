import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieCard = ({ title, description, url, rating, image_url }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Card style={{ width: "20rem", height: "30rem", paddingBottom: "20px" }}>
        <Card.Img
          variant="top"
          src={image_url}
          style={{ width: "20rem", height: "40%" }}
        />
        <div style={{ height: "60%" }}>
          <Card.Body>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>{title}</p>
            <Card.Text>{description}</Card.Text>

            <div className="d-flex justify-content-between">
              <Link
                to={`/description/${title}`}
                style={{ textDecoration: "none" }}
                className="text-warning"
              >
                Click for more review
              </Link>

              <Link
                to={`/trailer/${title}`}
                style={{ textDecoration: "none" }}
                className="text-warning"
              >
                {" "}
                View Trailer
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Card.Text>Rating:</Card.Text>
              <Card.Text>{rating}</Card.Text>
            </div>

            <div className="text-center">
              <Link
                to={`/description/${title}`}
                style={{ textDecoration: "none" }}
                className="text-warning"
              >
                <Button variant="warning">Review</Button>
              </Link>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
