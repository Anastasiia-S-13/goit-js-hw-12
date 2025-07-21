import axios from "axios";


const API_KEY = '51396657-6a58d607ccd7d0682078fb53f';
axios.defaults.baseURL = 'https://pixabay.com/api/';


export function getImagesByQuery(query) {
    return axios.get(`?key=${API_KEY}&q=${query}&per_page=9&image_type=photo&orientation=horizontal&safesearch`)
        .then(res => res.data.hits)
        .catch(error => console.log(error));
};