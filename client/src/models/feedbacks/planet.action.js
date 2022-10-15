export const ADD_PlANETS = "ADD_PlANETS";
export const DELETE_ALL_PLANETS = "DELETE_ALL_PLANETS";
export const FETCH_PLANETS = "FETCH_PLANETS";
export const SET_ERROR = "SET_ERROR";

export const GET_PLANETS = "GET_PLANETS";

export const addPlanetsAction = data => ({
  type: ADD_PlANETS,
  payload: data
})

export const deletePlanetsAction = () => ({
  type: DELETE_ALL_PLANETS
})

export const fetchPlanetsAction = () => ({
  type: FETCH_PLANETS
})

export const setErrorPlanetsAction = error => ({
  type: SET_ERROR,
  payload: error
})

export const getPlanetsAction = () => ({
  type: GET_PLANETS
})


