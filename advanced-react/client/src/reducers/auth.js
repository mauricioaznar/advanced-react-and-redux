import {AUTH_ERROR, AUTH_USER} from "../actions/types";

const initialState = {
  authenticated: '',
  errorMessage: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload,
        errorMessage: ''
      }
    case AUTH_ERROR:
      return {
        ...state,
        authenticated: '',
        errorMessage: action.payload
      }
    default:
      return state
  }
}