import { v4 as uuid } from "uuid";
import axios from "axios";

<<<<<<< HEAD
// export const addRaffle = (
//     {
//         raffleName = '',
//         raffleDescription = '',
//         startDate = new Date(),
//         endDate = new Date()
//     } = {}) => ({
//     type: 'ADD_RAFFLE',
//     raffle: {
//         id: uuid(),
//         raffleName,
//         raffleDescription,
//         startDate,
//         endDate
//     }
// });
=======
export const addRaffle = (
    {
        raffleName = '',
        raffleDescription = '',
        startDate = new Date(),
        endDate = new Date(),
        entries = []
    } = {}) => ({
    type: 'ADD_RAFFLE',
    raffle: {
        id: uuid(),
        raffleName,
        raffleDescription,
        startDate,
        endDate,
        entries
    }
});
>>>>>>> 2aada500bba6b45965327223df3f826e72976352

export const addRaffle = newRaffle => {
  return dispatch => {
    return axios
      .post(
        "http://localhost:5000/giveaway-4989b/us-central1/webAPI/raffle/new",
        newRaffle
      )
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: "ADD_RAFFLE",
            raffle: {
              id: uuid(),
              raffleName: newRaffle.raffleName,
              raffleDescription: newRaffle.raffleDescription,
              startDate: newRaffle.startDate,
              endDate: newRaffle.endDate
            }
          });
        } else {
          console.log("ERROR: could not create Raffle");
        }
      });
  };
};
