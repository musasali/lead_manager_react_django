import axios from "axios";
import { returnErrors } from "./messages";

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "./types";

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
  //User Loading
  dispatch({ type: USER_LOADING });

  // Get token from state
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `token ${token}`;
  }

  axios
    .get("/api/auth/user", config)
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      localStorage.removeItem("token");
      dispatch({ type: AUTH_ERROR });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
