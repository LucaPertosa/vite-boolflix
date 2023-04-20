<script>
import AppSearch from "./components/AppSearch.vue";
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";

export default {
    components: {
        AppSearch,
        AppHeader
},
    data() {
        return {
            store,
        }
    }
}    
</script>

<template>
    <AppHeader/>
    <ul>
        <li><h2>film</h2></li>
        <li v-for="result in store.movies" :key="result.id">
            titolo:{{ result.title }},
            titolo originale:{{ result.original_title }}, 
            lingua: {{ result.original_language }}, 
            voto: {{ result.vote_average }}
        </li>
    </ul>
    <ul>
        <li><h2>serie tv</h2></li>
        <li v-for="result in store.tvShows" :key="result.id">
            titolo:{{ result.name }}, titolo originale:{{ result.original_name }}, lingua: {{ result.original_language }}, voto: {{ result.vote_average }}
        </li>
    </ul>
</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables" as *;

</style>