import { ADUN } from "../ActionCreator/actionTypes";

const initialState = {
  counter2: 10,
};

 function reducerTwo(state = initialState, action) {
  switch (action.type) {
    case ADUN:
      return {
        counter2: state.counter2 + action.payload,
      };
    

    default:
      return state;
  }
}
export default reducerTwo;