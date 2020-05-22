import constants from '../constants';
const iState = {
  data: [],
};
const details = (state = iState, action) => {
  switch (action.type) {
    case constants.GET:
      return {
        ...state,
        data: [...action.payload],
      };
    default:
      return state;
  }
};

export default details;
