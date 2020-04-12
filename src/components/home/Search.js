import React, { Component } from "react";
import { Jumbotron, Button, Form } from "react-bootstrap";
import { searchMovie, fetchMovies } from "../../_actions/searchActions";
import { connect } from "react-redux";

class Search extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
  };
  render() {
    return (
      <div>
        <Jumbotron className="text-center">
          <h1>Hello</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <Form onSubmit={this.onSubmit}>
            <Form.Control
              placeholder=" Search Movies, TV Series.... "
              name="searchText"
              onChange={this.onChange}
            />
            <div className="mt-3">
              <Button variant="primary">Search</Button>
            </div>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  text: state.movies.text,
});
export default connect(mapStateToProps, { searchMovie, fetchMovies })(Search);
