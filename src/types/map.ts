export interface MapState {
  center: [number, number];
  zoom: number;
}

export interface SearchResult {
  lat: number;
  lon: number;
  display_name: string;
}