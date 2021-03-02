import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Description = ({ match }) => {
  const movies = useSelector((state) => state.movieReducer.movies);
  return (
    <div>
      {movies
        .filter((movie) => movie.title === match.params.title)
        .map((movie, index) => (
          <div key={index}>
            <iframe
              width="1173"
              height="660"
              src={movie.src}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h3>{movie.description}</h3>
            <Link to='/' >
            <Button
              variant="secondary"
              style={{ width: "120px", marginTop: "20px", marginLeft: "60px" }}
            >
              go back home
            </Button>
          </Link>
          </div>
        ))}
    </div>
  );
};

export default Description;
