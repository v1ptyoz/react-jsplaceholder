import { types } from "./types";

const initialState = {
  loading: false,
  users: [],
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      }

      case types.SET_USERS:
        return {
          ...state,
          users: action.payload.users,
          loading: false,
        }

      case types.SORT_BY_CITY:
        const sortedByCity = (users) => {
          return users.sort((user1, user2) => (
            user1.address.city.toLowerCase() > user2.address.city.toLowerCase() ? 1 : -1)
          )
        }

        return {
          ...state,
          users: [].concat(sortedByCity(state.users)),
        }

      case types.SORT_BY_ORG:
        const sortedByOrg = (users) => {
          return users.sort((user1, user2) => (
            user1.company.name.toLowerCase() > user2.company.name.toLowerCase() ? 1 : -1)
          )
        }
        return {
          ...state,
          users: [].concat(sortedByOrg(state.users)),
        }

      default:
        return state;
  }
}

export default usersReducer;