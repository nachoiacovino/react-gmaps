import { ADD_MARKER } from './markersTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MARKER:
      return [...state, { ...payload }];
    default:
      return state;
  }
};
