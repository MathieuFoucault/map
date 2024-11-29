import axios from "axios";
import type { SearchResult } from "../types/map";

export const searchAddress = async (query: string): Promise<SearchResult[]> => {
	try {
		const response = await axios.get(
			`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
				`${query}, France`,
			)}&format=json&countrycodes=fr`,
		);
		return response.data;
	} catch (error) {
		console.error("Error searching address:", error);
		return [];
	}
};
