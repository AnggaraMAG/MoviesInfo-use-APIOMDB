import { combineReducers } from "redux";
import moviesReducers from "./moviesReducers";

export default combineReducers({
  movies: moviesReducers,
});
