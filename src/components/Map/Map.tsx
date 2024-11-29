import type React from "react";
import { useEffect } from "react";
import { MapContainer as LeafletMapContainer, TileLayer } from "react-leaflet";
import { MapWrapper } from "./MapContainer.styles";
import { MapUpdater } from "./MapUpdater";
import "leaflet/dist/leaflet.css";
import "./leaflet-config";

interface MapProps {
	center: [number, number];
	zoom: number;
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Map: React.FC<MapProps> = ({ center, zoom }) => {
	useEffect(() => {
		window.dispatchEvent(new Event("resize"));
	}, []);

	return (
		<MapWrapper>
			<LeafletMapContainer
				center={center}
				zoom={zoom}
				style={{ height: "100%", width: "100%" }}
				scrollWheelZoom={true}
				zoomControl={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapUpdater center={center} zoom={zoom} />
			</LeafletMapContainer>
		</MapWrapper>
	);
};
