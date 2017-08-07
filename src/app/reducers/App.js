import {
  LOGINLOGOUT
} from '../actions/App';

const initialState = {
  isLoggedIn: true
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case LOGINLOGOUT:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    default:
      return state;
  }
};

export default app;
