import { ADD_PlANETS, DELETE_ALL_PLANETS, FETCH_PLANETS, SET_ERROR } from "./planet.action";

const initialState = {
  data: [],
  fetching: false,
  error: '',
}

export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return {
        ...state,
        fetching: true
      }

    case ADD_PlANETS:
      return {
        ...state,
        data: action.payload,
        fetching: false
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }

    case DELETE_ALL_PLANETS:
      return {
        ...state,
        data: []
      }

    default: return state;
  }
}