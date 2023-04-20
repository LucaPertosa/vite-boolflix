<script>
import axios from "axios";
import { store } from "../store";
export default {
    name: "AppSearch",
    data() {
        return {
            store,
            userInSearch: "",
        }
    },
    methods: {
        searchContent() {
            axios.get(store.apiURLMovie, {
                params: {
                    api_key: "de3507c62d433528c9b3f5fb88fb2a68",
                    query: this.userInSearch,
                    language: "it"
                }
            }).then((resp) => {
                this.store.movies = resp.data.results
            });
            axios.get(store.apiURLTv, {
                params: {
                    api_key: "de3507c62d433528c9b3f5fb88fb2a68",
                    query: this.userInSearch,
                    language: "it"
                }
            }).then((resp) => {
                this.store.tvShows = resp.data.results
            });
        },
    }
}
</script>

<template>
    <input type="text" @keyup.enter="searchContent" v-model="userInSearch">
</template>

<style scoped lang="scss">

</style>