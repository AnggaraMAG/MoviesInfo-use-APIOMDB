import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import Spinner from "../layout/Spinner";
import MovieContainer from "./MovieContainer";

class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div>
        <Search />
        {loading ? <Spinner /> : <MovieContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});
export default connect(mapStateToProps)(Landing);
