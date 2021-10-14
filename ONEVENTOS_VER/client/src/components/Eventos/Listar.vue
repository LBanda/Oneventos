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
      to="/empleadosRegistrados"
    >
      <b-card-text>
        {{ evento.texto }}
      </b-card-text>

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
export function Evento(titulo, texto) {
  this.titulo = titulo;
  this.texto = texto;
}
export default {
  name: "Listar",
  props: {
    eventos: {
      required: true,
      validator: function (value) {
        return value.every((e) => e instanceof Evento);
      },
    },
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
