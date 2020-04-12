import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
} from "../config/constants";
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

export const fetchMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`
    );
    dispatch({
      type: FETCH_MOVIE,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
