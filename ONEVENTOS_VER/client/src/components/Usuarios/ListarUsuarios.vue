<template>
    <div class="container">
        <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a style="margin-left: 11vw" class="navbar-brand" href="#">
                <i class="bi bi-justify-left"></i>
                Usuarios
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            </div>
        </nav>
        </div>
        <b-table 
        hover :items="usuarios"

        ></b-table>
        <ol 
            v-if="usuarios.length"
        >
            <li
            
              style="display: flex; position: relative; left: -3%"
              v-for="usuario in usuarios"
              :key="usuario.nombreUsuario"
              
            >
              <b-icon
              
                class="del-icon"
                icon="x-circle"
                scale="1"
                v-on:click="borrarUsuario(usuario)"
                variant="danger"
              />
              <!--{{ usuario.nombreC }} -->
              {{ usuario.nombreUsuario }}
              <!-- {{ usuario.rol }} -->
              <!--{{ usuario.contraseña }} -->

            </li>
          </ol>
          <b-button class="crear_usuario" variant="dark" v-b-modal.modal-3>Agregar usuario</b-button>
          <!-- AQUI EMPIEZA EL MODAL -->
      <div>
        <b-modal id="modal-3" title="Nuevo Usuario">
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

              <b-form-group
                id="input-group-1"
                label="Nombre completo:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="usuario.nombreC"
                  placeholder="Arturo González Gutiérrez"
                  required
                ></b-form-input>
              </b-form-group>
              <br>

              <b-form-group
                id="input-group-2"
                label="Nombre de usuario: "
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="usuario.nombreUsuario"
                  placeholder="artg99"
                  required
                ></b-form-input>
              </b-form-group>

              <!--<b-dropdown 
                    id="input-3"
                    size="sm" 
                    label="Rol" 
                    text="Rol"
                    v-model="usuario.rol"
                    class="m-2"
                    required
                    
                    
                <b-dropdown-item-button>Administrador</b-dropdown-item-button>
                <b-dropdown-item-button>Control de accesos</b-dropdown-item-button>
              </b-dropdown> -->
              
                <b-form-select 
                v-model="usuario.rol" 
                :options="options" 
                size="sm" 
                class="mt-3">
                </b-form-select>
                <br><br>
                Seleccionado: 
                <strong>{{ usuario.rol }}</strong>

              

              <div>
              <br>    
              <b-form-group
                id="input-group-4"
                label="Contraseña: "
                label-for="input-4"
              >
              <b-form-input
                  id="input-4"
                  name="password"
                  type="password"
                  v-model="usuario.contraseña"
                  placeholder="*******"
                  required
              ></b-form-input>
              </b-form-group>
              </div>
              <br>
              <br>
              <b-button type="submit" variant="primary" v-on:click="agregarUsuario">Registrar nuevo usuario</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
        </b-modal>
      </div>
    </div>


</template>

<script>
export default {
    data() {
      return {
        show: true,
        usuarios: [
          /*{ usuario: 'misaelg21' },
          { usuario: 'jlbanda' },
          { usuario: 'admin27' }, */
          {
          //nombreC: "Jose Luis Banda",
          nombreUsuario: "jlbanda",
          rol: "Administrador",
          //contraseña: "*********",
        },
        {
          //nombreC: "Misael Guzmán",
          nombreUsuario: "misaelg21",
          rol: "Control de accesos",
          //contraseña: "**********",
        },
        ],
        usuario: {
            nombreC: "",
            nombreUsuario: "",
            rol: "",
            contraseña: "",
      },
        rol: null,
        options: [
            {value: null, text:'Rol'},
            {value: 'Administrador', text:'Administrador'},
            {value: 'Control de accesos', text:'Control de accesos'},
        ],

      };
    },
    methods: {
        borrarUsuario(usuario) {
            this.usuarios = this.usuarios.filter((i) => i !== usuario);
    },
        agregarUsuario() {
            this.usuarios.push({ ...this.usuario});
            this.usuario.nombreC = "";
            this.usuario.nombreUsuario = "";
            this.usuario.rol = "";
            this.usuario.contraseña = "";
    },
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.usuarios));
    },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.usuarios.nombreC = "";
            this.usuarios.nombreU = "";
            this.usuarios.rol = "";
            this.usuarios.contraseña = "";
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
            this.show = true;
      });
    },
    }

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

</style>