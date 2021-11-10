<template>
    <Menus />
</template>

<script>
import Menus from "@/components/Alimentos/Menus.vue"
import MenusClient from "@/api/MenusClient";

export default {
    name: "Alimentos",
    components: {
        Menus,
    },
};
</script>

<style>

</style>