import { GoogleMap, Marker, StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';
import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMarker } from '../redux/markers/markersActions';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 41.3851,
  lng: 2.1734,
};

const Map = () => {
  const [libraries] = useState(['places']);
  const dispatch = useDispatch();
  const markers = useSelector(({ markers }) => markers);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState(null);
  const [searchBox, setSearchBox] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onSearchLoad = useCallback(function callback(ref) {
    setSearchBox(ref);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onPlacesChanged = () => {
    let loc = searchBox.getPlaces()[0].geometry.location;
    let lat = loc.lat();
    let lng = loc.lng();
    dispatch(addMarker({ lat, lng }));
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <StandaloneSearchBox
        onLoad={onSearchLoad}
        onPlacesChanged={onPlacesChanged}
      >
        <div className='gInput-container'>
          <input type='text' placeholder='Buscar' className='gInput' />
        </div>
      </StandaloneSearchBox>
      {markers.map((marker) => (
        <Marker key={marker.lat} onLoad={onLoad} position={marker} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
