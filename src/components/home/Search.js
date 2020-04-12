import React, { Component } from "react";
import { Jumbotron, Button, Form } from "react-bootstrap";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../_actions/searchActions";
import { connect } from "react-redux";

class Search extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };
  render() {
    return (
      <div>
        <Jumbotron className="text-center">
          <h1>Search for a Movie ,TV Series</h1>
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
export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(Search);
