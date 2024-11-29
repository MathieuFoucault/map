import type React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import type { SearchResult } from "../../types/map";
import { searchAddress } from "../../services/geocoding";
import {
	SearchContainer,
	SearchInput,
	SearchIcon,
	ResultsList,
	ResultItem,
} from "./SearchBar.styles";

interface SearchBarProps {
	onSelectLocation: (location: [number, number]) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSelectLocation }) => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<SearchResult[]>([]);

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);

		if (value.length > 2) {
			const searchResults = await searchAddress(value);
			setResults(searchResults);
		} else {
			setResults([]);
		}
	};

	const handleSelectResult = (result: SearchResult) => {
		onSelectLocation([result.lat, result.lon]);
		setQuery(result.display_name);
		setResults([]);
	};

	return (
		<SearchContainer>
			<SearchInput
				type="text"
				placeholder="Rechercher une adresse..."
				value={query}
				onChange={handleSearch}
			/>
			<SearchIcon>
				<Search size={20} />
			</SearchIcon>
			{results.length > 0 && (
				<ResultsList>
					{results.map((result, index) => (
						<ResultItem
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							onClick={() => handleSelectResult(result)}
						>
							{result.display_name}
						</ResultItem>
					))}
				</ResultsList>
			)}
		</SearchContainer>
	);
};
