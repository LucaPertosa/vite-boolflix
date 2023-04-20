<script>
import { store } from '../store';
import { typo } from '../typo';
import AppCard from './AppCard.vue';
export default {
    name: "AppCardList",
    components: {
        AppCard,
    },
    data(){
        return {
            store,
            typo
        }
    }
}
</script>

<template>
    <div class="content">
        <div class="wrapper">
            <div class="col-12 mx-3" v-if="this.typo.isMovie">
                <h2 class="">Film</h2>
            </div>
            <div class="col-12 mx-3" v-if="this.typo.isTv">
                <h2 class="">Serie Tv</h2>
            </div>
            <AppCard v-if="this.typo.isMovie" v-for="elem in store.movies" :key="elem.id" :result="elem"/>
            <AppCard v-if="this.typo.isTv" v-for="elem in store.tvShows" :key="elem.id" :result="elem"/>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/partials/variables" as *;

    .content {
        height: calc(100% - $AppHeader-h);
        padding: 30px;
        background-color: grey;
        overflow-y: auto;
        
        .wrapper {
            display: flex;
            flex-wrap: wrap;

            .card {
                width: calc(100% / 4 - 10px);
                margin: 5px;
                border: none;
                background-color: inherit;
                border-radius: 0 0 10px 10px;

                img {
                    width: 100%;
                    height: 600px;
                    object-fit: cover;
                }
                .notF {
                    object-fit: fill;
                }
                .card-body {
                    border-radius: 0 0 10px 10px;
                    background-color: black;
                    .card-title {
                        color: white;
                    }
                }
            }
        }
    }
</style>