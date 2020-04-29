import axios from "axios";
import { myFirebase } from "../firebase/firebase";

export const addUser = userInfo => {
  return dispatch => {
    //ADD ERROR CHECKING
    let webToken = null;
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
            webToken = token;
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
            const userState = {
              firstName: userInfo.firstName,
              lastName: userInfo.lastName,
              email: userInfo.email,
              apiToken: webToken
            };
            console.log("dispatching success....");
            dispatch(createUserSuccessfull(userState));
          });
      });
  };
};

const createUserInProgress = () => {
  return {
    type: "CREATE_USER_IN_PROGRESS"
  };
};

//TODO: NEED TO EDIT TO GO ALONG WITH SIGN IN BUTTON WHEN IMPLEMENTED
// PASS IN USER INFORMATION AS WELL.
export const logInUser = () => {
  return {
    type: "SUCCESSFUL_LOG_IN"
  };
};
const createUserSuccessfull = userState => {
  return {
    type: "CREATE_USER_SUCCESS",
    userState
  };
};
