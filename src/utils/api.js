import axios from "axios";

export default class Api {
    static async getPaintings( limit = 12, page = 1, name, selectedAutor, selectedLocation, gte, lte ) {
        try {
            const response = await axios.get(`https://test-front.framework.team/paintings`, {
                params: {
                    _limit: limit,
                    _page: page,
                    q: name,
                    authorId: selectedAutor,
                    locationId: selectedLocation,
                    created_gte: gte, 
                    created_lte: lte
                }
            })
            return response;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async getAuthors() {
        try {
            const response = await axios.get(`https://test-front.framework.team/authors`)
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async getLocations() {
        try {
            const response = await axios.get(`https://test-front.framework.team/locations`)
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }
}