import markers, { initialState } from './markersReducer';
import { ADD_MARKER } from './markersTypes';

describe('markersReducers', () => {
  const mockMarker = { lat: 41.312, lng: 30.298 };

  it('should return the initial state', () => {
    expect(markers(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_MARKER', () => {
    expect(
      markers(initialState, {
        type: ADD_MARKER,
        payload: mockMarker,
      }),
    ).toEqual([mockMarker]);
  });
});
