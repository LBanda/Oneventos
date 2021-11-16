<template>
  <div class="container">
    <div class="header">
      <div class="header">
      <h5><strong> Menús</strong></h5>
    </div>
    </div>
    <form class="form" method="post">
      <div class="mb-3 input-col">
        <div style="width: 47%">
          <label class="form-label" for="Menu">Tipos de menú</label>
          <div class="container-btn">
            <input
              v-model="menu.Tipo_Menu"
              id="form-ctrl"
              class="form-control"
              type="text"
              name="menu"
              title="menu"
              placeholder="Vegetariano"
            />
          </div>
          <ol  v-if="menus.length" >
            <li
              style="display: flex; position: relative; left: -3%"
              v-for="menu in menus"
              :key="menu.ID_Menu"
            >
              <b-icon
                class="del-icon"
                icon="x-circle"
                scale="1"
                v-on:click="borrarMenu(menu)"
                variant="danger"
              />
              {{ menu.Tipo_Menu }}
            </li>
          </ol>
          <button
              v-on:click="agregarMenu"
              style="margin-top: 3.5px"
              type="button"
              class="my-btn btn btn-success"
            >
              Agregar
            </button>
          <button
            type="button"
            style="margin-top: 3.5px; margin-left: 1%"
            class="btn btn-md btn-warning resize-del"
            v-on:click="borrarMenus"
          >
            Borrar
          </button>
        </div>
      </div>    
  </form>    
  </div>
</template>

<script>
export default {
    name: "Menus",
    /*props: {
    menus: Array
    },*/
    data() {
        return {
        show: true,
      
        menu: {
        Tipo_Menu: undefined,
        },
      };
    },
    methods: {
        agregarMenu() {
        this.$store.commit("addMenu", {...this.menu})
        //this.menu.nombreMenu = "";
        this.clearMenu();
        },
        borrarMenus() {
        this.menus = [];
        },/*
        clearMenu() {
        this.menus = this.menus.filter((i) => i !== menu);
        this.menu.Tipo_Menu = undefined;
        },*/
    },
    mounted (){
      this.$store.dispatch("getMenus");
          
    },
    computed: {
      menus() {
        return this.$store.state.menus;
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