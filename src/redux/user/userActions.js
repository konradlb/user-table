import { userActionTypes } from "./userTypes";

// fetchUser------------------------------------------
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

export const fetchUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
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

// deleteUser------------------------------------------

export const deleteUserSuccess = (responseData) => {
  return {
    type: userActionTypes.DELETE_USER_SUCCESS,
    payload: { responseData: responseData },
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: userActionTypes.DELETE_USER_FAILURE,
    payload: error,
  };
};

export const deleteUser = (userId) => {
  console.log("(deleteUser = userId)");
  console.log(userId);

  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/11`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        console.log(response.json());
        return response.json();
      })
      .then((responseData) => {
        dispatch(
          deleteUserSuccess({ userId: userId, success: responseData.ok })
        );
      })
      .catch((error) => {
        dispatch(deleteUserFailure(error));
      });
  };
};
