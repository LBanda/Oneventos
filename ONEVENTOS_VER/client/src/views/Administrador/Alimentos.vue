<template>
    <Menus  />
</template>

<script>
import Menus from "@/components/Alimentos/Menus.vue"


export default {
    name: "Alimentos",
    components: {
        Menus,
    },
    /*created() {
    // Llama una acción de la store, que se
    // va a completar de manera asíncrona
    this.$store.dispatch("setMenus");
    },*/
    /*computed: {
    // Obtiene los eventos del estado, que inicialmente es []
    menus() { return this.$store.getters.getMenus }
    }*/
    
};
</script>

<style>

</style>