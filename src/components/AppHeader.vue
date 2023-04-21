<script>
import AppSearch from './AppSearch.vue';
import { typo } from '../typo';
import { store } from '../store';

export default {
    name: "AppHeader",
    emits: ['search'],
    components: {
        AppSearch
    },
    data() {
        return {
            typo,
            store
        }
    },
    methods: {
        pickTypo(string) {

            if (string === 'film') {
                this.typo.isTv = false
                this.typo.isMovie = true
            }
            if (string === 'tv') {
                this.typo.isMovie = false
                this.typo.isTv = true
            }
        }
    }
}
</script>

<template>
    <header>
        <div class="ms_container">
            <div class="logo">
                <h1>BOOLFLIX</h1>
                <!-- <ul class="nav">
                    <button class="mx-3" :class="{'actives' : typo.isMovie, '' : typo.isTv}" @click="pickTypo('film')">Film</button>
                    <button class="mx-3" :class="{'actives' : typo.isTv, '' : typo.isMovie}" @click="pickTypo('tv')">Serie Tv</button>
                </ul> -->
            </div>
            <AppSearch @search="$emit('search')"/>
        </div>
    </header>
</template>

<style lang="scss">
@use "../style/partials/variables" as *;
@use "../style/general.scss" as *;

header {
    background-color: black;
}
.ms_container {
    height: $AppHeader-h;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1  {
        color: red;
        margin: 0;
        text-shadow: 4px 4px 10px darkred;
        margin-right: 1rem;
    }
    .logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .nav {
        button {
            background-color: inherit;
            padding: 10px;
            border-radius: 10px;
            border: none;
            color: white;
            cursor: pointer;
            &.actives {
                border-color: inherit;
                border: none;
                box-shadow: 4px 4px 10px rgba($color: red, $alpha: 0.3);
            }
        }
    }
}
</style>