<template>
  <div class="container">
    <div class="header">
      <div class="header">
      <h5><strong> Alergias </strong></h5>
    </div>
    </div>
    
    <form @submit="postAlergia" class="form" method="post">
      <div class="mb-3 input-col">
        <div style="width: 47%">
          <label class="form-label" for="nombreAlergia">Tipos de alergias</label>
          <div class="container-btn">
            <input
              v-model="alergia.nombre"
              id="form-control"
              class="form-control"
              type="text"
              name="nombreAlergia"
              title="nombreAlergia"
              placeholder="Mariscos"
            />
          </div>
          <ol>
            <li
              style="display: flex; position: relative; left: -3%"
              v-for="alergia in alergias"
              :key="alergia.ID_Alergia"
            >
              <b-icon
                class="del-icon"
                icon="x-circle"
                scale="1"
                v-on:click="borrarAlergia(alergia)"
                variant="danger"
              />
              {{ alergia.Nombre }}
            </li>
            <button
              @click="addAlergia"
              style="margin-top: 3.5px"
              type="submit"
              class="my-btn btn btn-success"
            >
              Agregar
          </button>
          </ol>
          <button
            type="button"
            style="position: relative; margin-left: auto; margin-right: 3%"
            class="btn btn-md btn-warning resize-del"
            v-on:click="borrarAlergias"
          >
            Borrar
          </button>
        </div>
      </div> 
    </form>    
  </div>
</template>

<script>
//v-if="alergias.length > 0"
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Config from '@/api/config';
Vue.use(VueAxios, axios)

export default {
    name: "TipoAlergias",
    data() {
        return {
        show: true,
    
        alergia: {
        nombre: undefined,
        },
      };
    },
    methods: {

        async postAlergia(e){
        this.axios.post(`${Config.BASE_URL}/api/alergias/`, 
        {alergia: { ...this.alergia}})
        .then((result) =>{
        console.warn(result)
        })
        e.preventDefault();
        },

        borrarAlergias() {
        this.alergias = [];
        },
        addAlergia() {
        this.$store.commit("addAlergia", {...this.alergia})
        //this.alergia.nombreAlergia = "";
        //this.clearAlergia();
        },
        clearAlergia() {
        //this.menus = this.menus.filter((i) => i !== menu);
        this.alergia.Nombre = undefined;
        },
    },
    mounted (){
      this.$store.dispatch("getAlergias");
          
    },
    computed: {
      alergias() {
        return this.$store.state.alergias;
      }
    },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  margin-top: 2%;
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

.header {
  grid-area: header;
}

.form {
  grid-area: form;
  justify-self: center;

  width: 80vw;
  min-height: 60vh;
  padding: 4%;
}

#form-ctrl {
  width: 40% !important;
  margin: 3px;
}

.container-btn {
  display: flex;
  flex-wrap: wrap;
}

.my-btn {
  display: grid !important;
  block-size: 45px !important;
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
}

.button-with-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-registro {
  display: flex;
  justify-content: space-around;
}

@media only screen and (max-width: 540px) {
  .resize {
    display: grid !important;
    grid-template-areas:
      "titulo" "titulo"
      "borrar" "agregar";
    grid-gap: 5%;
    padding-bottom: 10%;
    position: relative;
  }

  .resize-tit {
    grid-area: titulo;
    justify-self: center;
  }

  .resize-del {
    grid-area: borrar;
    width: 100%;
  }

  .rezie-add {
    grid-area: agregar;
    width: 100%;
  }
}

</style>