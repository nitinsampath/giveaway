const initialState = { raffles: [] };

const rafflesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RAFFLE":
      return { ...state, raffles: [...state.raffles, action.raffle] };
  }
  // case is get all of raffles in the DB....
};

export default rafflesReducer;
