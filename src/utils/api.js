import axios from "axios";

export default class Api {
    static async getPaintings( limit = 12, page = 1 ) {
        try {
            // const response = await fetch(`https://test-front.framework.team/paintings`)
            //     .then((res) => res.json())
            //     .then((data) => data);
            // return response;
            const response = await axios.get(`https://test-front.framework.team/paintings`, {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async getAuthors() {
        try {
            // const response = await fetch(`https://test-front.framework.team/authors`)
            //     .then((res) => res.json())
            //     .then((data) => data);
            // return response;
            const response = await axios.get(`https://test-front.framework.team/authors`)
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async getLocations() {
        try {
            // const response = await fetch(`https://test-front.framework.team/locations`)
            //     .then((res) => res.json())
            //     .then((data) => data);
            // return response;
            const response = await axios.get(`https://test-front.framework.team/locations`)
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }
}