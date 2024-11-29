import { useMap } from 'react-leaflet';

interface MapUpdaterProps {
  center: [number, number];
  zoom: number;
}

export const MapUpdater: React.FC<MapUpdaterProps> = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};