import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = '61e5fdd47e53f1e747e2db8e87aa2226'

export const getTrending = async() => {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`)
    return data.results
}

export const getSearchByKeyword = async (keyword) => {
    const { data } = await axios.get(`search/movie?api_key=${API_KEY}`,
        {
            params: {
                page: 1,
                query: keyword,
            }
    })
    return data.results
}


export const getMovieDetails = async movieId => {
    const {data} =await axios.get(`movies/${movieId}?api_key=${API_KEY}`)
    return data
}

export const getMovieReviews = async movieId => {
    const {data} =await axios.get(`movies/${movieId}/reviews?api_key=${API_KEY}`)
    return data.results
}

export const getMovieCast = async movieId => {
    const {data} =await axios.get(`movies/${movieId}/credits?api_key=${API_KEY}`)
    return data.cast
}