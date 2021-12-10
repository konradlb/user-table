import { userActionTypes } from "./userTypes";

export const fetchUserRequest = () => {
  return {
    type: userActionTypes.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: userActionTypes.FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: userActionTypes.FETCH_USER_FAILURE,
    payload: error,
  };
};

export const deleteUserRequest = () => {
  return {
    type: userActionTypes.FETCH_USER_REQUEST,
  };
};

export const fetchUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);

    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((user) => {
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};
