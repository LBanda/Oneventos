<template>
  <div class="container">
    <div class="header">
      <h5><strong> Registrar Evento </strong></h5>
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

      <div>
        <label class="form-label" for="Area">Fecha de Inicio</label>
        <Calendario />
      </div>

      <div>
        <label class="form-label" for="Area">Fecha de Fin</label>
        <Calendario />
      </div>

      <div style="margin-bottom: 3%">
        <label for="imagen" style="display: block">Elige una imagen:</label>
        <div style="display: flex; gap: 3%">
          <b-form-file
            v-model="fileEvento"
            :state="Boolean(fileEvento)"
            placeholder="Elige or arrastra un archivo..."
            drop-placeholder="Arrastra un archivo aquí..."
          />
          <button
            v-on:click="eliminarImagen"
            type="button"
            class=" btn btn-danger"
            :disabled="!fileEvento"
          >
            Eliminar Imagen
          </button>
        </div>
      </div>

      <div class="mb-3 input-col" style="gap: 5%">
        <div>
          <label class="form-label" for="Empresa">Empresa</label>
          <div class="container-btn">
            <input
              v-model="empresa.nombreEmpresa"
              id="form-ctrl"
              class="form-control"
              type="text"
              name="empresa"
              title="empresa"
              placeholder="Toyota México"
            />
            <button
              v-on:click="agregarEmpresa"
              style="margin-top: 3.5px"
              type="button"
              class=" btn btn-success"
            >
              Agregar
            </button>
            <button
              v-on:click="borrarEmpresas"
              style="margin-top: 3.5px; margin-left: 1%"
              type="button"
              class=" btn btn-warning"
            >
              Borrar
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
        </div>

        <div>
          <label class="form-label" for="Area">Área de trabajo</label>
          <div class="container-btn">
            <input
              v-model="areaTrabajo.nombreAreaT"
              id="form-ctrl"
              class="form-control"
              type="text"
              name="area"
              title="area"
              placeholder="Restaurantes"
            />
            <button
              v-on:click="agregarAreaTrabajo"
              style="margin-top: 3.5px"
              type="button"
              class=" btn btn-success"
            >
              Agregar
            </button>
            <button
              v-on:click="borrarAreasTrabajo"
              style="margin-top: 3.5px; margin-left: 1%"
              type="button"
              class=" btn btn-warning"
            >
              Borrar
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
        </div>
      </div>

      <div style="margin-top: 3%">
        <label class="form-label" for="Area">Subeventos</label>
        <div class="container-btn">
          <b-button
            id="show-btn"
            class=" btn btn-success"
            @click="showModal"
            >Agregar
          </b-button>
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

      <div class="container-registro">
        <b-button class="crear" variant="dark" to="/eventosRegistroA">
          Registrar Evento
        </b-button>
      </div>
    </form>

    <!-- AQUI EMPIEZA EL MODAL -->
    <b-modal
        ref="my-modal"
        hide-footer
        title="Subevento"
        id="modal-lg"
        size="lg"
    >
          <Registrar>
            <template v-slot:close>
              <b-button
                class="mt-3"
                variant="outline-warning"
                block
                @click="hideModal"
              >
                Cerrar
              </b-button>
            </template>
          </Registrar>
          
      </b-modal>
    <!-- AQUI TERMINA EL MODAL -->
  </div>
</template>

<script>
import Calendario from "@/components/Calendario.vue";
import Registrar from "@/components/Subeventos/Registrar.vue";
export default {
  name: "RegistrarEvento",
  components: {
    Calendario,
    Registrar,
  },
  data() {
    return {
      value: 0,
      fileEvento: null,
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
        nombreEmpresa: undefined,
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
        nombreAreaT: undefined,
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
        nombreS: undefined,
        descripcionS: undefined,
        ubicacionS: undefined,
        file: undefined,
      },
    };
  },
  methods: {
    agregarEmpresa() {
      if (!this.empresa.nombreEmpresa) return;

      this.empresas.push({ ...this.empresa });
      this.empresa.nombreEmpresa = "";
    },
    agregarAreaTrabajo() {
      if (!this.areaTrabajo.nombreAreaT) return;

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
    eliminarImagen() {
      this.fileEvento = null;
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
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
};
</script>

<style scoped>
/* ----------------------------------------------
 * Generated by Animista on 2021-10-10 23:2:25
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
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