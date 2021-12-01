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
          <b-button v-on:click="borrarEvento(evento.ID_Evento)" variant="danger">Eliminar</b-button>
        </b-button-group>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Config from '@/api/config';
Vue.use(VueAxios, axios)


export default {
  name: "Listar",
  props: {
    eventos: Array
  },
  methods:{
      borrarEvento(id) {
          const response = confirm(`¿Estás seguro que quieres borrar este evento?`)
          if(response){
            this.axios.delete(`${Config.BASE_URL}/api/eventos/`+ id)
              .then(() =>{
            //console.warn(result)
            //this.$store.state.users = result.data
            this.$store.dispatch("setEventosAction"); 
              })
          }    
        },
  },
  /*computed: {
    eventos() {
      return this.$store.state.eventos;
    }
  },*/
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
