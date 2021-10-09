<template>
  <div class="container">
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a style="margin-left: 11vw" class="navbar-brand" href="#">
            <i class="bi bi-justify-left"></i>
            Menú y Alergias
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
    
        <form class="form" method="post">
            <div class="mb-3 input-col">
        <div style="width: 47%">
          <label class="form-label" for="Menu">Tipos de menú</label>
          <div class="container-btn">
            <input
              v-model="menu.nombreMenu"
              id="form-ctrl"
              class="form-control"
              type="text"
              name="menu"
              title="menu"
              placeholder="Vegetariano"
            />
            <button
              v-on:click="agregarMenu"
              style="margin-top: 3.5px"
              type="button"
              class="my-btn btn btn-success"
            >
              Agregar
            </button>
          </div>
          <ol v-if="menus.length">
            <li
              style="display: flex; position: relative; left: -3%"
              v-for="menu in menus"
              :key="menu.nombreMenu"
            >
              <b-icon
                class="del-icon"
                icon="x-circle"
                scale="1"
                v-on:click="borrarMenu(menu)"
                variant="danger"
              />
              {{ menu.nombreMenu }}
            </li>
          </ol>
          <button
            type="button"
            style="position: relative; margin-left: auto; margin-right: 3%"
            class="btn btn-md btn-warning resize-del"
            v-on:click="borrarMenus"
          >
            Borrar
          </button>
        </div>
      </div>

      <div class="mb-3 input-col">
        <div style="width: 47%">
          <label class="form-label" for="Menu">Tipos de alergias</label>
          <div class="container-btn">
            <input
              v-model="alergia.nombreAlergia"
              id="form-ctrl"
              class="form-control"
              type="text"
              name="alergia"
              title="alergia"
              placeholder="Mariscos"
            />
            <button
              v-on:click="agregarAlergia"
              style="margin-top: 3.5px"
              type="button"
              class="my-btn btn btn-success"
            >
              Agregar
            </button>
          </div>
          <ol v-if="alergias.length">
            <li
              style="display: flex; position: relative; left: -3%"
              v-for="alergia in alergias"
              :key="alergia.nombreAlergia"
            >
              <b-icon
                class="del-icon"
                icon="x-circle"
                scale="1"
                v-on:click="borrarAlergia(alergia)"
                variant="danger"
              />
              {{ alergia.nombreAlergia }}
            </li>
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
export default {
    name: "MenuAlergias",
    data() {
        return {
        show: true,
        menus: [
            { nombreMenu: "Vegano" },
            { nombreMenu: "Vegetariano" },
            { nombreMenu: "Postres sin azúcar" },
            { nombreMenu: "Menú alternativo para alérgicos" },
        ],
        menu: {
        nombreMenu: " ",
      },
      alergias: [
            { nombreAlergia: "Mariscos" },
            { nombreAlergia: "Huevo" },
            { nombreAlergia: "Nueces" },
        ],
        alergia: {
        nombreAlergia: " ",
      },
    };
    },
    methods: {
        agregarMenu() {
        this.menus.push({ ...this.menu });
        this.menu.nombreMenu = "";
        },
        agregarAlergia() {
        this.alergias.push({ ...this.alergia });
        this.alergia.nombreAlergia = "";
        },
        borrarMenus() {
        this.menus = [];
        },
        borrarAlergias() {
        this.alergias = [];
        },
        borrarMenu(menu) {
        this.menus = this.menus.filter((i) => i !== menu);
        },
        borrarAlergia(alergia) {
        this.alergias = this.alergias.filter((i) => i !== alergia);
        },
    },
};
</script>

<style scoped>
.del-icon {
  margin-right: 2%;
  cursor: pointer;
}

.container {
  display: grid;
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