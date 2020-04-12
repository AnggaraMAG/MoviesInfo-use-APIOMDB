import React, { Component } from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchMovie, setLoading } from "../../_actions/searchActions";
import Spinner from "../layout/Spinner";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieinfo = (
      <div className="mt-3">
        <Row>
          <Col sm={4} style={{ marginLeft: 10 }}>
            <Card.Img variant="top" src={movie.Poster} />
          </Col>
          <Col>
            <h3>Title : {movie.Title}</h3>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <b>Year : </b>
                {movie.Year}{" "}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Realeased : </b>
                {movie.Released}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Time : </b>
                {movie.Runtime}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Genre : </b>
                {movie.Genre}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Writer : </b>
                {movie.Writer}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Actors : </b>
                {movie.Actors}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Plot : </b>
                {movie.Plot}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Language : </b>
                {movie.Langeage}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Award : </b>
                {movie.Awards}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Ratings : </b>
                {movie.imdbRating}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Vote : </b>
                {movie.imdbVotes}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    );

    let content = loading ? <Spinner /> : movieinfo;
    return <p>{content}</p>;
  }
}
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});
export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
