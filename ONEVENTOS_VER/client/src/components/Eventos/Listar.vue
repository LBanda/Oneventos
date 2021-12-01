<template>
  <div class="lista-flex">

    <b-card
      v-for="evento in eventos"
      :img-src="require('@/assets/descarga.png')"
      :key="evento.Nombre"
      class="mb-2"
      img-alt="Image"
      img-top
      style="max-width: 20rem"
      tag="article"
    >
      <b-card-body>

        <b-card-title>
          <b-link :to="`/empleadosRegistradosA/${evento.ID_Evento}`">
            {{ evento.Nombre }}
          </b-link>
        </b-card-title>

        <b-card-text>
          {{ evento.Descripcion }}
        </b-card-text>

      </b-card-body>

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
    eventos: Array
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Eventos.css"></style>
<style scoped>
.lista-flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
