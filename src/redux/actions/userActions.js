import { ActionTypes } from "../constants/actionsTypes";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};
export const selectedUser = (user) => {
  return {
    type: ActionTypes.SELECTED_USER,
    payload: user,
  };
};
export const removeSelectedUser = (user) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_USER,
    payload: user,
  };
};
