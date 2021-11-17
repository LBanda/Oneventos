<template>
  <div class="lista-flex">
    <b-card
      v-for="subevento in subeventos"
      :key="subevento.titulo"
      :title="subevento.titulo"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-link :to="`/empleadosRegistradosA/${subevento.ID_Subevento}`">
            {{ subevento.Nombre }}
          </b-link>

      <div class="mt-3">
        <b-button-group>
          <b-button variant="success">Reporte</b-button>
          <b-button variant="info">Info</b-button>
          <b-button variant="danger">Eliminar</b-button>
        </b-button-group>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Listar",
  props: {
    subeventos: Array
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lista-flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
