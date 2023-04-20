<script>
import AppSearch from './AppSearch.vue';
import { store } from '../store';

export default {
    name: "AppHeader",
    components: {
        AppSearch
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="ms_container">
            <div class="logo">
                <h1>BOOLFLIX</h1>
            </div>
            <AppSearch/>
        </div>
    </header>
</template>

<style lang="scss">
header {
    background-color: black;
    padding: 15px;
}
.ms_container {
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1  {
        color: red;
        text-shadow: 6px 2px .1px rgba($color: white, $alpha: 0.3);
    }
    .logo {
        width: 1%;
    }
}
</style>