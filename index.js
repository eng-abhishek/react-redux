const BUY_CAKE = "BUY_CAKE";

// Action creator
function makeCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

const initialState = {
  numOfCakes: 30,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
