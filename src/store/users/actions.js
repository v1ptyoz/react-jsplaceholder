import axios from "axios";
import { types } from "./types";

export const loadUsers = () => {
  return (dispatch) => {
    dispatch(setLoading());

    axios("https://jsonplaceholder.typicode.com/users")
      .then(res => {dispatch(setUsers(res.data))})
  }
}

export const sortByCity = () => ({
  type: types.SORT_BY_CITY
})

export const sortByOrg = () => ({
  type: types.SORT_BY_ORG
})

export const setLoading = () => ({
  type: types.SET_LOADING,
})

export const setUsers = (users) => ({
  type: types.SET_USERS,
  payload: {
    users,
  }
})