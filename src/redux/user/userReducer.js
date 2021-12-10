import { userActionTypes } from "./userTypes";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USER_REQUEST:
      return { ...state, loading: true };

    case userActionTypes.FETCH_USER_SUCCESS:
      return { loading: false, user: action.payload, error: "" };

    case userActionTypes.FETCH_USER_FAILURE:
      return { loading: false, user: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
