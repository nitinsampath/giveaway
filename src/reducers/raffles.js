const initialState = {
  raffles: [],
  isLoading: false
};

const rafflesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RAFFLE":
      return { ...state, raffles: [...state.raffles, action.raffle] };
    case "LOAD_RAFFLES":
      return { ...state, isLoading: true };
    case "SUCCESS_RAFFLES":
      return { ...state, isLoading: false, raffles: action.raffles };
    default:
      return state;
  }
  // case is get all of raffles in the DB....
};

export default rafflesReducer;
