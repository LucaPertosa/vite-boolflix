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
    <div>
        <div class="input-group" >
            <input v-model.trim="userInSearch" @keyup.enter="searchContent" type="text" class="form-control" placeholder="Scrivi qui il titolo" aria-label="Scrivi qui il titolo" aria-describedby="basic-addon1">
            <button class="input-group-text w-25" id="basic-addon1" @click="searchContent" >Cerca</button>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>