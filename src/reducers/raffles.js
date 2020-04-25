const rafflesDefault = [];

const rafflesReducer = (state = rafflesDefault, action) => {
    switch (action.type) {
        case("ADD_RAFFLE"):
            return [...state, action.raffle]

    }

};

export default rafflesReducer;