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
      return { ...state, loading: false, user: action.payload, error: "" };

    case userActionTypes.FETCH_USER_FAILURE:
      return { ...state, loading: false, user: [], error: action.payload };

    case userActionTypes.DELETE_USER_SUCCESS:
      const deletedUsers = state.users.filter(
        (user) => user.id !== action.payload.id
      );
      return {
        ...state,
        loading: false,
        users: deletedUsers,
        error: action.payload,
      };

    case userActionTypes.DELETE_USER_FAILURE:
      return { ...state, loading: false, user: [], error: action.payload };

    default:
      return state;
  }
};

export default reducer;
