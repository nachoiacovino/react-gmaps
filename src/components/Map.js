import { GoogleMap, Marker, StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';
import { memo, useCallback, useState } from 'react';

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

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    /*     map.fitBounds(bounds); */
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onPlacesChanged = (e) => console.log(e);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
        <input
          type='text'
          placeholder='Buscar'
          style={{
            marginTop: `70px`,
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `260px`,
            height: `50px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `18px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: 'absolute',
            left: '50%',
            marginLeft: '-130px',
          }}
        />
      </StandaloneSearchBox>
      <Marker onLoad={onLoad} position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
