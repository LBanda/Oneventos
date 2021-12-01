<template>
    <div class="container">
        <div class="header p-3">
            <h3><strong> Información del evento </strong></h3>
        </div>
        <br><br>
        <div class="datos-evento1">
            <h5 >Nombre del evento: </h5>
            <p for="Nombre">{{ this.evento.Nombre }}</p>
        </div><br>
        <div class="datos-evento2">
            <h5>Descripción: </h5>
            <p>{{ this.evento.Descripcion }}</p>
        </div><br>
        <div class="datos-evento3">
            <h5>Cupo Máximo: </h5>
            <p>{{ this.evento.CupoMaximo }}</p>
        </div><br>
        <div class="datos-evento4">
            <h5>Fecha de inicio: </h5>
            <p>{{ this.evento.FechaInicio }}</p>
        </div><br>
        <div class="datos-evento6">
            <h5>Fecha de fin: </h5>
            <p>{{ this.evento.FechaFin }}</p>
        </div><br>
        <div class="datos-evento7">
            <h5>Locación: </h5>
            <p>{{ this.evento.Locacion }}</p>
        </div><br>
        <div class="datos-evento8">
            <h5>Imagen: </h5>
            <p>{{ this.evento.Imagen }}</p>
        </div><br>
        <div class="datos-evento9">
            <h5>Máximo de invitados por empleado: </h5>
            <p>{{ this.evento.MaximoInvitados }}</p>
        </div><br>
        <div class="container-boton crear">
            <b-button  class="mr-4" type="reset" variant="dark" to="/">
            Regresar
            </b-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Config from '@/api/config';
Vue.use(VueAxios, axios)

export default {
    data(){
        return {
            evento: {}
        }
    },
    async mounted(){
        console.warn(this.$route.params.id)
        const result = await axios.get(`${Config.BASE_URL}/api/eventos/consultar/${this.$route.params.id}`)
        console.warn(result.data)
        this.evento = result.data
    },

}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
.container {
  display: grid;
  grid-template-areas:
    "header"
    "form"
    "footer";
  grid-template-rows: 7vh auto 7vh;
}
.crear {
  position: fixed;
  width: 30vw;
  bottom: 3%;
  left: 35vw;
  z-index: 2;

  animation-name: slide-in-bottom;
  animation-duration: 0.75s;
}
.container-boton {
  display: flex;
  justify-content: space-around;
}
</style>