import { ActionTypes } from "../constants/action-types";



export const setEvents = (events) => ({
  type: ActionTypes.SET_DATA,
  payload: Array.isArray(events) ? events : [events],
});



