import { SEARCH_MOVIE, FETCH_MOVIES } from "../config/constants";
import axios from "axios";
import { APIKey } from "../config/APIKey";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`
    );
    dispatch({
      type: FETCH_MOVIES,
      payload: response.data.Search,
    });
  } catch (err) {
    console.log(err);
  }
};
