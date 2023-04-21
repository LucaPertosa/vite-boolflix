<script>
import AppHeader from "./components/AppHeader.vue";
import AppCardList from "./components/AppCardList.vue";
import { store } from "./store";
import { typo } from "./typo";
import axios from "axios";
import LangFlag from "vue-lang-code-flags";

export default {
    components: {
        AppHeader,
        AppCardList,
        LangFlag
    },
    data() {
        return {
            store,
            typo
        }
    },
    mounted(){

    },
    methods: {
        searchContent() {
            this.store.isLoading = true;
            if (this.store.userSearch) {
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
                    this.store.isLoading = false,
                    this.store.showLabel = true,
                    this.store.userSearch = ""
                });
                axios.get(store.apiURLTv, {
                    params: {
                        api_key: "de3507c62d433528c9b3f5fb88fb2a68",
                        query: this.store.userSearch,
                        language: "it"
                    }
                }).then((resp) => {
                    this.store.tvShows = resp.data.results
                    console.log(resp.data);
                }).catch(() => {
                    alert('Inserire un valore valido');
                }).finally(() => {
                    this.store.isLoading = false,
                    this.store.showLabel = true
                });
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
</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables" as *;

.ms_app {
    width: 100%;
    height: 100vh;
}
</style>