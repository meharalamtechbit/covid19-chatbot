import actionType from './actionType';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.IS_LOADING:
      return {
        ...state,
        isLoading: action.data,
      };

    default:
      return state;
  }
};
