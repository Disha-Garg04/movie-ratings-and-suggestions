import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2QyZmViMjE1NDQxZjhkOWY0ODI0M2NkNGM2ZWE2YSIsInN1YiI6IjY2NTQ0YTg3ZjkyZGE4NDlkMTkxMWYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2BdQO6C9YYa_tk_jpR-jJZmQD94Xqzi4axnSzGLG4Ik";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url,params) => {
    try{
        const {data} =await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }catch (err){
        console.log(err);
        return err;
    }
}