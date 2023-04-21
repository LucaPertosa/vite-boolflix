<script>
import { store } from '../store';

import { typo } from '../typo'
export default {
    name: "AppCard",
    props: {
        result: Object
    },
    emits: ['click'],
    data(){
        return {
            store,
            typo,
            hover: false, 
            showCard: true, 
            showHover: false 
        }
    },
    mounted(){
        this.getStars(5)
    },
    methods: {
        onClick() {
            this.$emit('click', this.result);
            this.hover = !this.hover;
        },
        onTransitionEnd() {
            this.showCard = !this.hover;
            this.showHover = this.hover;
        },
        getStars() {
            return parseInt(this.result.vote_average / 2)
        }
    }
};
</script>

<template>
    <div class="ms_card" @click="onClick">
        <img v-if="result.poster_path" :src="store.imgPath + result.poster_path" class="" alt="...">
        <img v-else class="notF" src="../assets/notF.png">
        <div class="ms_card_hover" @transitionend="onTransitionEnd"> 
            <div class="hover-content">
                <h4>{{ result.title ? result.title : result.name }}</h4>
                <p>
                    Vote: 
                    <i v-for="number in getStars()" class="fa-solid fa-star"></i>
                    <i v-for="star in (5 - getStars())" class="fa-regular fa-star"></i>
                </p>
            </div>
        </div> 
    </div>
</template>

<style lang="scss">
@use "../style/partials/variables" as *;
    .ms_card_hover {
        display: none;
        margin-right: 10px;
        background-color: rgba($color: #000000, $alpha: .5);
        border-radius: 10px;
        color: white;
        position: absolute;
        padding: 10px;
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%;
        z-index: -1;
    }
    .hover-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .ms_card {
        width: calc(100% / 6);
        height: 100%;
        margin-right: 10px ;
        background-color: inherit;
        border-radius: 10px;
        position: relative; 
        transition: transform 1s ease; 
        z-index: 1;

        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            object-fit: cover;
            filter: none;
            opacity: 1;
        }
        .notF {
            object-fit: fill;
            filter: none;
            opacity: 1;
        }
        .card-body {
            border-radius: 0 0 10px 10px;
            background-color: black;
            .card-title {
                color: white;
            }
        }
    }
    .ms_card:hover img{ 
        filter: blur(1px);
        opacity: .7;
    } 
    .ms_card:hover .ms_card_hover{ 
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    } 
    .fa-solid.fa-star {
        color: gold;
    }
</style>