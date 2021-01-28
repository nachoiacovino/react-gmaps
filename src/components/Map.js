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
  const [searchBox, setSearchBox] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    /*     map.fitBounds(bounds); */
    setMap(map);
  }, []);

  const onSearchLoaded = (ref) => {
    console.log({ ref });
    setSearchBox(ref);
  };

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onPlacesChanged = () => {
    let loc = searchBox.getPlaces()[0].geometry.location;
    let lat = loc.lat();
    let lng = loc.lng();
    console.log(searchBox.getPlaces());
    console.log({ lat, lng });
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
        onLoad={onSearchLoaded}
        onPlacesChanged={onPlacesChanged}
      >
        <input type='text' placeholder='Buscar' className='gInput' />
      </StandaloneSearchBox>
      <Marker onLoad={onLoad} position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
