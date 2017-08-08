import {
  LOGINLOGOUT
} from '../actions/App';

const initialState = {
  status: 'not cool'
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case LOGINLOGOUT:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export default app;
