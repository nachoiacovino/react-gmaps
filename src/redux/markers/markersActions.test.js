import { addMarker } from './markersActions';
import { ADD_MARKER } from './markersTypes';

describe('markersActions', () => {
  const mockMarker = { lat: 41.312, lng: 30.298 };

  it('should create an action to add marker', () => {
    const expectedAction = {
      type: ADD_MARKER,
      payload: mockMarker,
    };
    expect(addMarker(expectedAction.payload)).toEqual(expectedAction);
  });
});
