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
        }
    },
    methods: {
        showPreview(item) {
            this.show = true;
            this.store.currentPreview = item;
            document.body.style.overflow = 'hidden';
        },
        hidePreview() {
            this.show = false;
            this.store.currentPreview = null;
            document.body.style.overflow = 'auto';
        },
    }
}
</script>

<template>
    <div class="content">
        <div class="ms_label">
            <span class="tic" v-if="this.store.showLabel">
                Film
            </span>
        </div>
        <div class="ms_wrapper">
            <AppCard v-for="(elem, index) in store.movies" :key="index" :result="elem" @click="showPreview(elem)" />
        </div>
        <div class="ms_label">
            <span class="tic" v-if="this.store.showLabel">
                Serie TV
            </span>
        </div>
        <div class="ms_wrapper">
            <AppCard v-for="(elem, index) in store.tvShows" :key="index" :result="elem" @click="showPreview(elem)"/>
        </div>
        <div v-if="show" class="preview" @click="hidePreview">
            <CardPreview :result="this.store.currentPreview" @click="hidePreview"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

    .content {
        height: calc(100% - $AppHeader-h);
        padding: 30px;
        background-color: grey;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .ms_wrapper {
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        overflow-x: auto;
        height: calc(50% - 30px);
        position: relative;
    }
    .ms_label {
        z-index: 999;
    }
    .tic {
        position: absolute;
        text-align: center;
        padding: 10px;
        min-width: 100px;
        color: white;
        background-color: darkred;
        border: 2px solid goldenrod;
    }
    .preview {
        border-radius: 5px;
        position: fixed;
        z-index: 9999;
        top: 10%;
        left: 10%;
        width: 80%;
        height: calc(80%);
        background-color: rgba(0, 0, 0, 1);
        padding: 20px;
        color: #fff;
        box-shadow: 0 0 0 1000px rgba($color: grey, $alpha: .7);
    }
</style>