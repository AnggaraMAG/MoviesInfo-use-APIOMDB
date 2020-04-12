import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div style={{ marginLeft: 10, marginBottom: 10 }}>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Year}</Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MovieCard;
