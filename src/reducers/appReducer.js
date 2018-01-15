import { APP_LOAD } from 'actions/actionTypes';

const initialState = {
  loaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    default:
      return state;
  }
};
