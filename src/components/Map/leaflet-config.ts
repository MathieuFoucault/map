import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet's default icon path issues
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
// biome-ignore lint/performance/noDelete: <explanation>
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
	iconUrl,
	iconRetinaUrl,
	shadowUrl,
});