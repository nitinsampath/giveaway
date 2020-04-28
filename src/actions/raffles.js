import { v4 as uuid } from "uuid";
import axios from "axios";

export const addRaffle = newRaffle => {
  return dispatch => {
    newRaffle = { ...newRaffle, id: uuid() };
    return axios
      .post(
        "http://localhost:5000/giveaway-4989b/us-central1/webAPI/raffle/new",
        newRaffle
      )
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: "ADD_RAFFLE",
            raffle: newRaffle
          });
        } else {
          console.log("ERROR: could not create Raffle");
        }
      });
  };
};

export const getRaffles = () => {
  //make axios request to pass as payload to reducer
  return dispatch => {
    console.log("here");
    dispatch(loadingRaffles());
    axios
      .get("http://localhost:5000/giveaway-4989b/us-central1/webAPI/raffles")
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          dispatch(displayRaffles(response.data));
        } else {
          console.log("error in fetching raffles");
        }
      });
  };
};

export const loadingRaffles = () => {
  return {
    type: "LOAD_RAFFLES"
  };
};

export const displayRaffles = raffles => {
  return {
    type: "SUCCESS_RAFFLES",
    raffles
  };
};
