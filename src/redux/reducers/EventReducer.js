import { ActionTypes } from "../constants/action-types";
const intialState = {
  events: [],
};

export const eventReducer = (state= intialState, { type, payload }) => {
  switch (type) {
    
    case ActionTypes.SET_DATA:
      console.log("Payload:", payload);
      return {
        ...state,
        events: [...state.events, ...payload],
      };
    default:
      return state;
  }
};

