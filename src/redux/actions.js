import axios from "axios";
import {API_URL, API_KEY} from "@env";

export const GET_MOVIES = "GET_MOVIES";
export const ADD_FAVORITE_ITEM = "ADD_FAVORITE_ITEM";
export const REMOVE_FAVORITE_ITEM = "REMOVE_FAVORITE_ITEM";

const PARAMS = "page=1";
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data
        });
      } else {
        console.log("Unable to fetch");
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log("ERR - ", error);
  }
};

export const addFavorite = movie => dispatch => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: movie
  });
};

export const removeFavorite = movie => dispatch => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: movie
  });
};
