import { act } from "react-dom/test-utils";

const initialState = {
  raffles: [],
  isLoadingRaffles: false,
  isLoggedIn: false,
  isLoggingIn: false,
  isUserDataFetched: false,
};

//TODO: probably need to split into two reducers??
const rafflesReducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(state);
  switch (action.type) {
    case "ADD_RAFFLE":
      return { ...state, raffles: [...state.raffles, action.raffle] };
    case "LOAD_RAFFLES":
      return { ...state, isLoadingRaffles: true };
    case "SUCCESS_RAFFLES":
      return { ...state, isLoadingRaffles: false, raffles: action.raffles };
    case "CREATE_USER_IN_PROGRESS":
      return { ...state, isLoggingIn: true };
    case "CREATE_USER_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
      };
    case "SUCCESSFUL_LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "USER_DATA_FETCH_COMPLETE":
      return {
        ...state,
        userID: action.userState.userID,
        isUserDataFetched: true,
        displayName: action.userState.displayName,
        email: action.userState.email,
        apiToken: action.userState.apiToken,
      };
    case "LOG_OUT_SUCCESS":
      return initialState;
    default:
      return state;
  }
  // case is get all of raffles in the DB....
};

export default rafflesReducer;
