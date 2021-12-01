<template>
    <div class="container">

        <div class="header p-2 ">
            <h3><strong> Editar usuario </strong></h3>
            <br>
        </div>
        

        <b-form class="form" method="post" v-if="show">

            <div class="mb-3 ">
                <b-form-group
                    id="input-group-1"
                    label="Correo electrónico"
                    label-for="input-1"
                >
                <b-form-input
                    name="email"
                    type="text"
                    id="input-1"
                    v-model="user.Email"
                    placeholder="admin21@oneventos.com"
                    required
                ></b-form-input>
                </b-form-group>
                <br>
            </div>

            <div class="mb-3">
                <b-form-group
                    id="input-group-2"
                    label="Nombre de usuario "
                    label-for="input-2"
                >
                <b-form-input
                    id="input-2"
                    name="nombre"
                    v-model="user.NombreUsuario"
                    placeholder="admin21"
                    required
                ></b-form-input>
                </b-form-group>
                <br>
            </div>
            
            <div class="mb-3">
                <label class="form-select" for="Rol">Rol</label>
                <b-form-select 
                    name="rol"
                    v-model="user.ID_Rol" 
                    :options="options" 
                    size="sm" 
                    class="mt-3">
                    
                </b-form-select>
                <br><br>
                Seleccionado: <strong>{{ user.ID_Rol }}</strong>
            </div>

            <div class="mb-3">
                <br>    
                <b-form-group
                    @submit.stop.prevent
                    id="input-group-4"
                    label="Contraseña: "
                    label-for="feedback-user"
                >
                <b-form-input
                    id="feedback-user"
                    name="password"
                    type="password"
                    v-model="user.Password"
                    placeholder="*********"
                    required
                ></b-form-input>
                <!--:state="validation"> -->
                <b-form-invalid-feedback > <!--:state="validation"> -->
                    Su contraseña debe contener minimo 8 caracteres de longitud.
                </b-form-invalid-feedback>
                <b-form-valid-feedback><!--:state="validation"> -->
                    Su contraseña contiene 8 o más caracteres de longitud. :D                                              
                </b-form-valid-feedback>
                </b-form-group>
            </div>
            <br>
            <br>
            <div class="container-registro crear">
                <b-button class="mr-4" type="button" variant="dark" v-on:click="updateUser">
                Actualizar usuario
                </b-button>
                <b-button  class="mr-4" type="reset" variant="dark" to="/usuarios">
                Regresar
                </b-button>
            </div>

        </b-form>

    </div>
</template>

<script>
//action="/usuarios/add"
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Config from '@/api/config';
Vue.use(VueAxios, axios)

export default {
    data() {
      return {
        show: true,
        //users: [],
        user: {
            email: '',
            nombre: '',
            rol: '',
            password: '',
      },
        rol: null,
        options: [
            {value: null, text:'Rol'},
            {value: 1, text:'Admin'},
            {value: 2, text:'ControlA'},
        ],

      };
    },
    async mounted(){
        console.warn(this.$route.params.id)
        const result = await axios.get(`${Config.BASE_URL}/api/usuarios/${this.$route.params.id}`)
        console.warn(result.data)
        this.user = result.data
    },
    methods: {
        async updateUser() {
          const response = confirm(`Confirmar actualización de usuario`)
            console.warn(this.user)
            if (response){
              const result = await this.axios.put(`${Config.BASE_URL}/api/usuarios/editar/${this.$route.params.id}`,{
                //user: { ...this.user}
                user: {email: this.user.Email, nombre: this.user.NombreUsuario, rol: this.user.ID_Rol, password: this.user.Password}
                })
                if(result.status == 200){
                  this.$router.push({name: 'ListarUsuarios'})
            }
            }
        },
    },
    }
    /*computed: {
      validation() {
        return this.user.password
      }
    }*/



</script>

<style scoped>

@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
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

button {
  width: 49%;
  font-size: 1rem;
}

.del-icon {
  margin-right: 2%;
  cursor: pointer;
}

.container {
  display: grid;
  justify-content: center;
  grid-template-areas:
    "header"
    "form"
    "footer";
  grid-template-rows: 7vh auto 7vh;
}

nav > a {
  color: rgba(255, 255, 255, 0.5) !important;
  background: #343a40;
  padding: 1%;
  border-radius: 10px;
}

@media only screen and (max-width: 600px) {
  nav {
    justify-content: center;
  }
  form {
    width: 90%;
  }
}

.header {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

.form {
  grid-area: form;
  justify-self: center;
  min-height: 60vh;
}

#form-ctrl {
  width: 100% !important;
  margin-bottom: 2%;
}

.container-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.input-col {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.footer {
  grid-area: footer;
}

ol {
  list-style: circle;
  margin-top: 3%;
}

.container-registro {
  display: flex;
  justify-content: space-around;
}


</style>