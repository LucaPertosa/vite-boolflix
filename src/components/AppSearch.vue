<script>
import { store } from "../store";
export default {
    name: "AppSearch",
    emits: ['search'],
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div>
        <div class="input-group" >
            <input v-model.trim="store.userSearch" @keyup.enter="$emit('search')" type="text" class="form-control" placeholder="Scrivi qui il titolo" aria-label="Scrivi qui il titolo" aria-describedby="basic-addon1">
            <button class="input-group-text w-25" id="basic-addon1" @click="$emit('search')" >Cerca</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
input{
    &:focus-visible{
        outline-offset: none;
        outline: none;
    }
    &:focus {
        box-shadow: 0px 0px 0px .25rem rgba($color: red, $alpha: 0.3);
        border-color: rgba($color: red, $alpha: .3);
    }
}
</style>