import { userActionTypes } from "./userTypes";

const initialState = {
  loading: false,
  showDeleteAlert: false,
  user: [],
  error: "",
  afterDelete: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USER_REQUEST:
      return { ...state, loading: true };

    case userActionTypes.FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: "" };

    case userActionTypes.FETCH_USER_FAILURE:
      return { ...state, loading: false, user: [], error: action.payload };

    case userActionTypes.DELETE_USER_REQUEST:
      return { ...state, loading: true };

    case userActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        showDeleteAlert: true,
        afterDelete: action.payload,
      };

    case userActionTypes.DELETE_USER_ALERT_CLOSE:
      return {
        ...state,
        showDeleteAlert: false,
      };

    case userActionTypes.DELETE_USER_FAILURE:
      return { ...state, loading: false, user: [], error: action.payload };

    default:
      return state;
  }
};

export default reducer;
