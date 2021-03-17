import {CHANGE_AUTH} from "../actions/types";

const initialState = false

export default function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_AUTH:
      return action.payload
    default:
      return state
  }
}