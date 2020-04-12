import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      // <div style={{ marginLeft: 10, marginTop: 50, height: 400 }}>
      <Card style={{ width: "15rem", marginTop: 50 }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Year}</Card.Text>
          <Link to={`/movie/${movie.imdbID}`}>
            <Button variant="primary">Movie Details</Button>
          </Link>
        </Card.Body>
      </Card>
      // </div>
    );
  }
}

export default MovieCard;
