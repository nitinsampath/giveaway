import { act } from "react-dom/test-utils";

const initialState = {
  raffles: [],
  isLoading: false,
  isLoggedIn: false,
  isLoggingIn: false
};

//TODO: probably need to split into two reducers??
const rafflesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RAFFLE":
      return { ...state, raffles: [...state.raffles, action.raffle] };
    case "LOAD_RAFFLES":
      return { ...state, isLoading: true };
    case "SUCCESS_RAFFLES":
      return { ...state, isLoading: false, raffles: action.raffles };
    case "CREATE_USER_IN_PROGRESS":
      return { ...state, isLoggingIn: true };
    case "CREATE_USER_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        apiToken: action.apiToken
      };
    case "SUCCESSFUL_LOG_IN":
      return {
        ...state,
        isLoggedIn: true
      };
    default:
      return state;
  }
  // case is get all of raffles in the DB....
};

export default rafflesReducer;
