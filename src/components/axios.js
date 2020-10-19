import axios from 'axios';

// base url to tht tmdb dataset
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;