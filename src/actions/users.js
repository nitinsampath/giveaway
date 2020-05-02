import axios from "axios";
import { myFirebase, googleProvider } from "../firebase/firebase";

export const addUser = (userInfo) => {
  return (dispatch) => {
    //ADD ERROR CHECKING
    let webToken = null;
    dispatch(createUserInProgress());
    myFirebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((user) => {
        userInfo = { ...userInfo, userID: user.user.uid };
        console.log(userInfo);
        myFirebase
          .auth()
          .currentUser.getIdToken()
          .then((token) => {
            webToken = token;
            axios.post(
              "http://localhost:5000/giveaway-4989b/us-central1/webAPI/users",
              {
                headers: {
                  token,
                },
                userInfo,
              }
            );
          })
          .then((response) => {
            const userState = {
              firstName: userInfo.firstName,
              lastName: userInfo.lastName,
              email: userInfo.email,
              apiToken: webToken,
            };
            dispatch(createUserSuccessful(userState));
          });
      });
  };
};
export const loginWithGoogle = (response) => {
  myFirebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((user) => {
      if (user.additionalUserInfo.isNewUser) {
        const userInfo = {
          displayName: user.user.displayName,
          email: user.user.email,
          userID: user.user.uid,
        };
        myFirebase
          .auth()
          .currentUser.getIdToken()
          .then((token) => {
            axios.post(
              "http://localhost:5000/giveaway-4989b/us-central1/webAPI/users",
              {
                headers: {
                  token,
                },
                userInfo,
              }
            );
          });
      }
    });
};

export const logoutUser = () => {
  return (dispatch) => {
    myFirebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logOutUserSuccessful());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
const createUserInProgress = () => {
  return {
    type: "CREATE_USER_IN_PROGRESS",
  };
};

//TODO: NEED TO EDIT TO GO ALONG WITH SIGN IN BUTTON WHEN IMPLEMENTED
// PASS IN USER INFORMATION AS WELL.
export const logInUser = () => {
  return (dispatch) => {
    const currentUser = myFirebase.auth().currentUser;
    const uid = currentUser.uid;
    let userToken;
    myFirebase
      .auth()
      .currentUser.getIdToken()
      .then((token) => {
        userToken = token;
        axios
          .get(
            "http://localhost:5000/giveaway-4989b/us-central1/webAPI/users/" +
              uid,
            {
              headers: {
                userToken,
              },
            }
          )
          .then((response) => {
            const userState = {
              ...response.data,
              apiToken: userToken,
            };
            console.log("userState");
            console.log(userState);
            dispatch(successfulLogin(userState));
          });
      });
  };
};

const successfulLogin = (userState) => {
  return {
    type: "SUCCESSFUL_LOG_IN",
    userState,
  };
};
const createUserSuccessful = (userState) => {
  return {
    type: "CREATE_USER_SUCCESS",
    userState,
  };
};

const logOutUserSuccessful = () => {
  return {
    type: "LOG_OUT_SUCCESS",
  };
};
