import { useState } from "react";
import styled from "styled-components";
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { Map } from "./components/Map/Map";
import { SearchBar } from "./components/SearchBar/SearchBar";
import type { MapState } from "./types/map";
import { GlobalStyles } from "./styles/GlobalStyles";

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

function App() {
	const [mapState, setMapState] = useState<MapState>({
		center: [46.603354, 1.888334], // Center of France
		zoom: 6,
	});

	const handleLocationSelect = (location: [number, number]) => {
		setMapState({
			center: location,
			zoom: 13,
		});
	};

	return (
		<>
			<GlobalStyles />
			<AppContainer>
				<SearchBar onSelectLocation={handleLocationSelect} />
				<Map center={mapState.center} zoom={mapState.zoom} />
			</AppContainer>
		</>
	);
}

export default App;
