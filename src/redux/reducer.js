import { LOGIN, LOGOUT, SHOW } from "./actions";

const initialState = {
  user: { },
  show: { },
  devices: { },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, user: action.user };
    }
    case LOGOUT: {
      return { ...state, user: {} };
    }
    case SHOW: {
      const temp = { ...state.devices };
      temp[action.name] = !temp[action.name];
      return { ...state, devices: temp };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;