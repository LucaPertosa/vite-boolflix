<script>
import { store } from '../store';
import { typo } from '../typo';
import LangFlag from 'vue-lang-code-flags';
export default {
    name: "AppCard",
    components: {
        LangFlag,
    },
    props: {
        result: Object
    },
    emits: ['click'],
    data(){
        return {
            store,
            typo
        }
    },
    methods: {
        onClick() {
            this.$emit('click', this.result);
        }
    }
};
</script>

<template>
    <!-- Card Movies -->
    <div v-if="this.typo.isMovie" @click="onClick" class="ms_prevCont">
            <div class="img_container">
                <img v-if="result.poster_path" :src="store.imgPath + result.poster_path" class="" alt="...">
                <img v-else class="card-prev-img notF" src="../assets/notF.png">
            </div>
        <div class="text_area">
            <h2 class="ms_title">{{ result.title }}</h2>
            <h5>Original title: "{{ result.original_title }}"</h5>
            <h5>
                Original language: 
                <lang-flag :iso="result.original_language" :squared="false"/> 
            </h5>
            <p><b>Trama:</b> "{{ result.overview }}"</p>
            <span>
                voto: {{ result.vote_average }}
            </span>
        </div>
    </div>
    <!-- /Card Movies -->
    <!-- Card Serie TV -->
    <div v-if="this.typo.isTv" @click="onClick" class="ms_prevCont">
            <div class="img_container">
                <img v-if="result.poster_path" :src="store.imgPath + result.poster_path" class="" alt="...">
                <img v-else class="card-prev-img notF" src="../assets/notF.png">
            </div>
        <div class="text_area">
            <h2 class="ms_title">{{ result.name }}</h2>
            <h5>Original title: "{{ result.original_name }}"</h5>
            <h5>
                Original language: 
                <lang-flag :iso="result.original_language" :squared="false"/> 
            </h5>
            <p><b>Trama:</b> "{{ result.overview }}"</p>
            <span>
                voto: {{ result.vote_average }}
            </span>
        </div>
    </div>
    <!-- /Card Serie TV -->
</template>

<style lang="scss">
@use "../style/partials/variables" as *;
.ms_prevCont {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .img_container {
        height: 100%;
        width: calc(50% - 10px);
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .text_area {
        height: 100%;
        width: calc(50% - 10px);
        overflow-y: auto;
        .ms_title {
            font-size: 2rem;
        }
    }
}
</style>