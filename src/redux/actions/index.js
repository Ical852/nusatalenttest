import { action } from "../../services";

export const fetchPokemonsData = async () => {
    try {
        const response = await action('pokemon');
        return response.data;
    } catch (error) {
        throw error;
    }
};