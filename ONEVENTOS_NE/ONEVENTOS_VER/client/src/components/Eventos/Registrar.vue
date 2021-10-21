<template>
  <div class="container">
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a style="margin-left: 11vw" class="navbar-brand" href="#">
            <i class="bi bi-justify-left"></i>
            Registrar Evento
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
      <div class="mb-3">
        <label class="form-label" for="nombreEvento">Nombre del evento</label>
        <input
          class="form-control"
          type="text"
          name="nombreEvento"
          title="nombreEvento"
          placeholder="Nombre de evento"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="descripcionEvento">
          Descripción del evento</label
        >
        <input
          class="form-control"
          type="text"
          name="descripcionEvento"
          title="descripcionEvento"
          placeholder="Descripción"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="locacion">Locación</label>
        <input
          class="form-control"
          type="text"
          name="locacion"
          title="locacion"
          placeholder="Locacion"
        />
      </div>

      <div class="mb-3 input-col">
        <div style="width: 47%">
          <label class="form-label" for="cupoEvento"
            >Cupo de personas por evento</label
          >
          <input
            class="form-control"
            type="number"
            name="cupoEventos"
            title="cupoEventos"
            placeholder="Cupo por evento"
          />
        </div>

        <div style="width: 47%">
          <label class="form-label" for="cupoInvitado"
            >Cupo de invitados por empleado</label
          >
          <input
            class="form-control"
            type="number"
            name="cupoInvitados"
            title="cupoInvitado"
            placeholder="Cupo de invitados"
          />
        </div>
      </div>

      <div class="mb-3 input-col">
        <div style="width: 47%">
          <label class="form-label" for="Empresa">Empresa</label>
          <div class="container-btn">
            <input
              v-model="empresa.nombreEmpresa"
              id="form-ctrl"
              class="form-control"
              type="text"
              name="empresa"
              title="empresa"
              placeholder="Empresa"
            />
            <button
              v-on:click="agregarEmpresa"
              style="margin-top: 3.5px"
              type="button"
              class="my-btn btn btn-success"
            >
              Agregar
            </button>
          </div>
          <ol v-if="empresas.length">
            <li
              style="display: flex; position: relative; left: -3%"
              v-for="empresa in empresas"
              :key="empresa.nombreEmpresa"
            >
              <b-icon
                class="del-icon"
                icon="x-circle"
                scale="1"
                v-on:click="borrarEmpresa(empresa)"
                variant="danger"
              />
              {{ empresa.nombreEmpresa }}
            </li>
          </ol>
          <button
            type="button"
            style="position: relative; margin-left: auto; margin-right: 3%"
            class="btn btn-md btn-warning resize-del"
            v-on:click="borrarEmpresas"
          >
            Borrar
          </button>
        </div>
      </div>

      <div class="mb-3 input-col">
        <div style="width: 47%">
          <label class="form-label" for="Area">Área de trabajo</label>
          <div class="container-btn">
            <input
              v-model="areaTrabajo.nombreAreaT"
              id="form-ctrl"
              class="form-control"
              type="text"
              name="area"
              title="area"
              placeholder="Area"
            />
            <button
              v-on:click="agregarAreaTrabajo"
              style="margin-top: 3.5px"
              type="button"
              class="my-btn btn btn-success"
            >
              Agregar
            </button>
          </div>
          <ol v-if="areasTrabajo.length">
            <li
              style="display: flex; position: relative; left: -3%"
              v-for="areaTrabajo in areasTrabajo"
              :key="areaTrabajo.nombreAreaT"
            >
              <b-icon
                class="del-icon"
                icon="x-circle"
                scale="1"
                v-on:click="borrarAreaTrabajo(areaTrabajo)"
                variant="danger"
              />
              {{ areaTrabajo.nombreAreaT }}
            </li>
          </ol>
          <button
            type="button"
            style="position: relative; margin-left: auto; margin-right: 3%"
            class="btn btn-md btn-warning resize-del"
            v-on:click="borrarAreasTrabajo"
          >
            Borrar
          </button>
        </div>
      </div>


      <div style="margin-top: 3%">
        <div style="display: flex" class="resize">
          <h5>Subeventos</h5>
          <div>
            <b-button v-b-modal.modal-1>Agregar</b-button>
          </div>
          <!-- <div class="container-btn">
            <button
              type="button"
              style="margin-left: 10px !important; margin-bottom: 10px"
              class="my-btn btn btn-md btn-success resize-add"
              data-bs-toggle="modal"
              data-bs-target="#subeventoModal"
            >
              Agregar
            </button>
          </div> -->
        </div>
        <ol v-if="subeventos.length">
          <li
            style="display: flex; position: relative; left: -3%"
            v-for="subevento in subeventos"
            :key="subevento.nombreS"
          >
            <b-icon
              class="del-icon"
              icon="x-circle"
              scale="1"
              v-on:click="borrarSubevento(subevento)"
              variant="danger"
            />
            {{ subevento.nombreS }}
            {{ subevento.descripcion }}
            {{ subevento.apellidoM }}
          </li>
        </ol>
      </div>

      <div class="container-registro" style="display: flex">
        <div class="button-with-title">
          <button type="submit" class="btn btn-primary mb-3">
            Registrar Evento
          </button>
        </div>
      </div>
    </form>
      <!-- AQUI EMPIEZA EL MODAL -->
      <div>
        <b-modal id="modal-1" title="Subevento">
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <!--  <b-form-group
                id="input-group-1"
                label="Nombre del subevento:"
                label-for="input-1"
                placeholder="Conferencia de @empresa"
                v-model="subevento.nombreS"
                required
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="Descripción del evento"
                  placeholder="Conferencia de @empresa"
                  required
                ></b-form-input>
              </b-form-group> -->

              <b-form-group
                id="input-group-1"
                label="Nombre del subevento"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="subevento.nombreS"
                  placeholder="Ceremonia de apertura"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Descripción del evento"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="subevento.descripcionS"
                  placeholder="Conferencia"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Ubicación"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="subevento.ubicacionS"
                  placeholder="Calle 22, Quéretaro, AV. Peñuelas"
                  required
                ></b-form-input>
              </b-form-group>

              <div>
                <label for="demo-sb"></label>
                <b-form-spinbutton
                  id="demo-sb"
                  v-model="value"
                  min="1"
                  max="10000"
                ></b-form-spinbutton>
              </div>

              <!-- <b-form-group
                id="input-group-3"
                label="Food:"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  v-model="form.food"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  v-model="form.checked"
                  id="checkboxes-4"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-checkbox value="me">Check me out</b-form-checkbox>
                  <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group> -->

              <b-button type="submit" variant="primary" v-on:click="agregarSubevento">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ subeventos }}</pre>
            </b-card> -->
          </div>
        </b-modal>
      </div>
      <!-- AQUI TERMINA EL MODAL -->
  </div>
</template>

<script>
export default {
  name: "Registrar",
  data() {
    return {
      show: true,
      empresas: [
        { nombreEmpresa: "Microsoft" },
        { nombreEmpresa: "Google" },
        { nombreEmpresa: "Coca-Cola" },
        { nombreEmpresa: "Amazon" },
        { nombreEmpresa: "Sabritas" },
        { nombreEmpresa: "Barcel" },
      ],
      empresa: {
        nombreEmpresa: " ",
      },
      areasTrabajo: [
        { nombreAreaT: "Área 1" },
        { nombreAreaT: "Área 2" },
        { nombreAreaT: "Área 3" },
        { nombreAreaT: "Área 4" },
        { nombreAreaT: "Área 5" },
        { nombreAreaT: "Área 6" },
      ],
      areaTrabajo: {
        nombreAreaT: " ",
      },
      subeventos: [
        {
          nombreS: "Subevento 1",
          descripcionS: "Descripcion 1",
          ubicacionS: "Locación 1",
        },
        {
          nombreS: "Subevento 2",
          descripcionS: "Descripcion 2",
          ubicacionS: "Locación 2",
        },
        {
          nombreS: "Subevento 3",
          descripcionS: "Descripcion 3",
          ubicacionS: "Locación 3",
        },
        {
          nombreS: "Subevento 4",
          descripcionS: "Descripcion 4",
          ubicacionS: "Locación 4",
        },
        {
          nombreS: "Subevento 5",
          descripcionS: "Descripcion 5",
          ubicacionS: "Locación 5",
        },
      ],
      subevento: {
        nombreS: " ",
        descripcionS: " ",
        ubicacionS: " ",
      },
    };
  },
  methods: {
    agregarEmpresa() {
      this.empresas.push({ ...this.empresa });
      this.empresa.nombreEmpresa = "";
    },
    agregarAreaTrabajo() {
      this.areasTrabajo.push({ ...this.areaTrabajo });
      this.areaTrabajo.nombreAreaT = "";
    },
    agregarSubevento() {
      this.subeventos.push({ ...this.subevento });
      this.subevento.nombreS = "";
      this.subevento.descripcionS = "";
      this.subevento.ubicacionS = "";
    },
    borrarEmpresas() {
      this.empresas = [];
    },
    borrarAreasTrabajo() {
      this.areasTrabajo = [];
    },
    borrarEmpresa(empresa) {
      this.empresas = this.empresas.filter((i) => i !== empresa);
    },
    borrarAreaTrabajo(areaTrabajo) {
      this.areasTrabajo = this.areasTrabajo.filter((i) => i !== areaTrabajo);
    },
    borrarSubevento(subevento) {
      this.subeventos = this.subeventos.filter((i) => i !== subevento);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.subeventos));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.subeventos.nombreS = "";
      this.subeventos.descripcionS = "";
      this.subeventos.ubicacionS = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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