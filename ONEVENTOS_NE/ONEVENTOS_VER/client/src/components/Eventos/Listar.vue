<template>
  <div class="lista-flex">
    <b-card
      v-for="evento in eventos"
      :key="evento.titulo"
      :title="evento.titulo"
      :img-src="require('@/assets/descarga.png')"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ evento.texto }}
      </b-card-text>

      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      <div class="mt-3">
        <b-button-group>
          <b-button variant="success">Reporte</b-button>
          <b-button variant="info">Info</b-button>
          <b-button variant="danger">Eliminar</b-button>
        </b-button-group>
      </div>
    </b-card>

    <!-- <div class="d-grid gap-2 col-2 mx-auto">
      <router-link to="/CrearEvento"
        id="toCrearEvento"
        class="btn_register btn-secondary"
        style="background-color: #1d223b"
      >
        Registrar nuevo evento
      </router-link>
    </div> -->
  </div>
</template>

<script>
export function Evento(titulo, texto) {
  this.titulo = titulo;
  this.texto = texto;
}
export default {
  props: {
    eventos: {
      required: true,
      validator: function (value) {
        return value.every((e) => e instanceof Evento);
      },
    },
  },
  name: "Listar",
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
