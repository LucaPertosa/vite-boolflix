<script>
import { store } from '../store';
import { typo } from '../typo';
import AppCard from './AppCard.vue';
import CardPreview from './CardPreview.vue';
export default {
    name: "AppCardList",
    components: {
        AppCard,
        CardPreview
    },
    data(){
        return {
            store,
            typo,
            show: false,
            currentPreview: null,
        }
    },
    methods: {
        showPreview(item) {
            this.show = true;
            this.currentPreview = item;
            document.body.style.overflow = 'hidden';
        },
        hidePreview() {
            this.show = false;
            this.currentPreview = null;
            document.body.style.overflow = 'auto';
        },
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
            <AppCard v-if="typo.isMovie" v-for="(elem, index) in store.movies" :key="index" :result="elem" @click="showPreview" />
            <AppCard v-if="typo.isTv" v-for="(elem, index) in store.tvShows" :key="index" :result="elem" @click="showPreview"/>
            <div v-if="show" class="preview" @click="hidePreview">
                    <CardPreview v-if="typo.isTv" :result="currentPreview" @click="showPreview" />
                    <CardPreview v-if="typo.isMovie" :result="currentPreview" @click="showPreview" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

    .content {
        height: calc(100% - $AppHeader-h);
        padding: 30px;
        background-color: grey;
        overflow-y: auto;
        position: relative;
        
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
        .preview {
            position: fixed;
            top: calc($AppHeader-h + 10%);
            left: 10%;
            width: 80%;
            height: calc(80% - $AppHeader-h);
            background-color: rgba(0, 0, 0, 1);
            padding: 20px;
            color: #fff;
            box-shadow: 0 0 0 1000px rgba($color: grey, $alpha: .7);
        }
        .fade-in {
            opacity: 0;
            transition: opacity .5s ease-in-out;
        }

        .fade-in.active {
            opacity: 1;
        }
    }
</style>