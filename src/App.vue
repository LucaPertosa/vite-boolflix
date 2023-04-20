<script>
import AppHeader from "./components/AppHeader.vue";
import AppCardList from "./components/AppCardList.vue";
import { store } from "./store";
import { typo } from "./typo";
import axios from "axios";

export default {
    components: {
        AppHeader,
        AppCardList
    },
    data() {
        return {
            store,
            typo
        }
    },
    mounted(){
        console.log(store.movies[0]);
    },
    methods: {
        searchContent() {
            this.store.isLoading = true;
            if (this.store.userSearch) {
                if (this.typo.isMovie || this.typo.isTv) {
                    axios.get(store.apiURLMovie, {
                        params: {
                            api_key: "de3507c62d433528c9b3f5fb88fb2a68",
                            query: this.store.userSearch,
                            language: "it"
                        }
                    }).then((resp) => {
                        this.store.movies = resp.data.results
                    }).catch(() => {
                        alert('Inserire un valore valido');
                    }).finally(() => {
                        this.store.isLoading = false
                    });;
                    axios.get(store.apiURLTv, {
                        params: {
                            api_key: "de3507c62d433528c9b3f5fb88fb2a68",
                            query: this.store.userSearch,
                            language: "it"
                        }
                    }).then((resp) => {
                        this.store.tvShows = resp.data.results
                    }).catch(() => {
                        alert('Inserire un valore valido');
                    }).finally(() => {
                        this.store.isLoading = false
                    });
                } else {
                    alert('Prego selezionare una tipologia dal menu a fianco al logo')
                }
            }
        },
    }
}    
</script>

<template>
    <div class="ms_app">
        <AppHeader @search="searchContent"/>
        <div v-if="store.isLoading">Loading...</div>
        <AppCardList v-else/>
    </div>
    <!-- <ul>
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
            titolo:{{ result.name }},
            titolo originale:{{ result.original_name }},
            lingua: {{ result.original_language }},
            voto: {{ result.vote_average }}
        </li>
    </ul> -->
</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables" as *;

.ms_app {
    width: 100%;
    height: 100vh;
}
</style>