import { ADD_MARKER } from './markersTypes';

const initialState = [];

const markersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MARKER:
      const markedToAdd = state.find(
        (marker) => marker.lat === payload.lat && marker.lng === payload.lng,
      );
      if (markedToAdd) return state;
      return [...state, { ...payload }];
    default:
      return state;
  }
};

export default markersReducer;
