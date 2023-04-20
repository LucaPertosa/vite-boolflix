<script>
import { reactive } from 'vue';
import { store } from '../store';
import { typo } from '../typo'
export default {
    name: "AppCard",
    props: {
        result: Object
    },
    data(){
        return {
            store,
            typo
        }
    },
};
</script>

<template>
    <!-- Card Movies -->
    <div class="card" v-if="this.typo.isMovie">
        <img v-if="result.poster_path" :src="store.imgPath + result.poster_path" class="card-img-top" alt="...">
        <img v-else class="card-img-top notF" src="../assets/notF.png">
        <div class="card-body">
            <h5 class="card-title">{{ result.title }}</h5>
        </div>
    </div>
    <!-- /Card Movies -->
    <!-- Card Serie TV -->
    <div class="card" v-if="this.typo.isTv">
        <img v-if="result.poster_path" :src="store.imgPath + result.poster_path" class="card-img-top" alt="...">
        <img v-else class="card-img-top notF" src="../assets/notF.png">
        <div class="card-body">
            <h5 class="card-title">{{ result.name }}</h5>
        </div>
    </div>
    <!-- /Card Serie TV -->
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