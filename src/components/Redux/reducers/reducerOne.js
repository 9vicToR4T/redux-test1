import { ADD, MIN } from "../ActionCreator/actionTypes";

const initialState = {
  counter: 0,
};

 function reducerOne(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        counter: state.counter + 1,
      };
    case MIN:
      return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}
export default reducerOne;