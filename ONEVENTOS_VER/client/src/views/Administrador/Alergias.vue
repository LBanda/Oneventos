<template>
  <TipoAlergias />
</template>

<script>
import TipoAlergias from "@/components/Alergias/TipoAlergias.vue"

export default {
    name: "Alergias",
    components: {
        TipoAlergias,
    },
    /*created() {
    // Llama una acción de la store, que se
    // va a completar de manera asíncrona
    this.$store.dispatch("setAlergias");
    },    */
};
</script>

<style>

</style>