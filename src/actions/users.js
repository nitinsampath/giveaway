import axios from "axios";
import { myFirebase } from "../firebase/firebase";

export const addUser = userInfo => {
  return dispatch => {
    //CREATE_USER_IN_PROGRESS
    dispatch(createUserInProgress());
    myFirebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(user => {
        userInfo = { ...userInfo, userID: user.user.uid };
        console.log(userInfo);
        myFirebase
          .auth()
          .currentUser.getIdToken()
          .then(token => {
            axios.post(
              "http://localhost:5000/giveaway-4989b/us-central1/webAPI/users",
              {
                headers: {
                  token
                },
                userInfo
              }
            );
          })
          .then(response => {
            console.log(response); //remove
            // TODO: add action to loginuser redirect to dashboard
            // if (response.status === 200) {
            //       dispatch(createUserSuccessfull(response.data));
            // } else {
            // //   console.log("error in fetching raffles");
            //     //error handling show
            // }
          });
      });
  };
};

const createUserInProgress = () => {
  return {
    type: "CREATE_USER_IN_PROGRESS"
  };
};

const createUserSuccessfull = () => {
  return {
    type: "CREATE_USER_SUCCESS"
  };
};
