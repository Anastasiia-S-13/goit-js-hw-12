import axios from "axios";
import { perPage } from "../main";

const API_KEY = '51396657-6a58d607ccd7d0682078fb53f';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
    const params = new URLSearchParams({
        page: page,
        per_page: perPage
    });

    const response = await axios.get(`?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch&${params}`);
    return response.data;
}