<template>
    <div class="container">
        <div class="header">
          <div class="container-fluid">
          <div class="header p-2">
            <h3><strong> Usuarios</strong></h3>
            <br>
          </div>
          </div>
        </div>
        <div class="flex-table">
          <div><strong> ID usuario </strong></div>
          <div><strong> Nombre de usuario </strong></div>
          <div><strong> Email </strong></div>
          <div><strong> ID rol </strong></div>
          <div><strong>  Acciones </strong></div>

        </div>
        <div v-for="user in users" v-bind:key="user.ID_Usuario" class="flex-table">
            <div>{{ user.ID_Usuario }}</div>
            <div>{{ user.NombreUsuario }}</div>
            <div>{{ user.Email }}</div>
            <div>{{ user.ID_Rol }}</div>
            <div class="actions">
              <b-button variant="dark" size="sm" class="mr-2">
                <b-icon icon="pencil-square" aria-hidden="true"></b-icon> Editar
              </b-button>
              <b-button v-on:click="borrarUsuario(user.ID_Usuario)" variant="danger" size="sm" class="mr-4">
                <b-icon icon="x-circle" aria-hidden="true" ></b-icon> Eliminar
              </b-button>
            </div>
          <!--<b-table hover :items="users"></b-table>-->

        </div>
          <b-button to="/usuarios/add" class="crear_usuario" variant="dark">Agregar usuario</b-button>
    </div> 


</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Config from '@/api/config';
Vue.use(VueAxios, axios)

export default {
  //v-on:click="borrarUsuario(user)"
    data() {
      return {
        show: true,    

      };
    },
    methods: {
      borrarUsuario(id) {
            const response = confirm(`¿Estas seguro que quieres borrar este usuario?`)
            if(response){
              this.axios.delete(`${Config.BASE_URL}/api/usuarios/`+ id)
               .then(() =>{
              //console.warn(result)
              //this.$store.state.users = result.data
              this.$store.dispatch("getUsers"); 
               })
            }    
      },
    },
    computed: {
      users() {
        return this.$store.state.users;
      }
    },
      mounted (){
      this.$store.dispatch("getUsers");     
    },
}


</script>

<style scoped>
.crear_usuario {
  position: absolute;
  width: 30vw;
  bottom: 3%;
  left: 35vw;
  z-index: 2;
}
.header {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
.flex-table{
  display: grid;
  grid-template-columns: repeat(auto-fill, 20%);
  padding: 10px;
  border-bottom: 1px black solid;
}

</style>