import axios from "axios";

const BASE_URL = 'https://restcountries.com/v3.1';


export const api = {
    getAllcountries: async () => {
        return await axios.get(`${BASE_URL}/all`)
            .then( response => response.data)
            .catch ( err => console.error(err))        
    },

    getByCountries: async (countries: string) => {
        return await axios.get(`${BASE_URL}/name/${countries}?fullText=true`)
            .then( response => response.data)
            .catch ( err => console.error(err))
    },

    getByCountriesRegions: async (region: string) => {
        return await axios.get(`${BASE_URL}/region/${region}`)
            .then( response => response.data)
            .catch ( err => console.error(err))
    }
}