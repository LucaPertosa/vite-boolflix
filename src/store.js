import { reactive } from "vue";

export const store = reactive({
    apiURLMovie: "https://api.themoviedb.org/3/search/movie",
    movies: [],
    apiURLTv: "https://api.themoviedb.org/3/search/tv",
    tvShows: []
});