import { userActionTypes } from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case userActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload, error: "" };

    case userActionTypes.FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
