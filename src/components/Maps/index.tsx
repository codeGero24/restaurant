import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Maps = () => {
  const [currentPosition, setCurrentPosition] = React.useState({ lat: 0, lng: 0 });
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBPytjcK0R8XxgcEjgGdvxg4G20kosGVnQ',
  });

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        () => {
          console.error('Geolocalizzazione non consentita');
        }
      );
    } else {
      console.error('Geolocalizzazione non supportata dal browser');
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className='flex items-center justify-center bg-white text-gray-500'>
        Caricamento della mappa...
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center bg-white'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={15}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <Marker position={currentPosition} />
      </GoogleMap>
    </div>
  );
};

export default Maps;
