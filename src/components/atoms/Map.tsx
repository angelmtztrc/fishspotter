import MapBoxMap from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { EnvironmentVariables } from '@/utils/enviroment-variables.util';

const Map = () => {
  return (
    <div className="h-screen max-h-screen w-full relative">
      <MapBoxMap
        initialViewState={{
          longitude: -100.66245,
          latitude: 28.428436,
          zoom: 14
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxAccessToken={EnvironmentVariables.MAPBOX_ACCESS}
      />
    </div>
  );
};

export default Map;
