import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
const Movielist = ({ movies }) => {
  return (
    <div>
      <Container>
        <Row>
          {movies.map((movie) => (
            <Col id={movie.id} md={4} sm={6}>
              <MovieCard
                title={movie.title}
                description={movie.description}
                url={movie.url}
                rating={movie.rating}
                image_url={movie.image_url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movielist;
