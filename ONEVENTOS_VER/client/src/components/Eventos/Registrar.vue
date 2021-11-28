<template>
  <div class="container">
    <div class="header">
      <h5><strong> Registrar Evento </strong></h5>
    </div>
    <form class="form" method="post">
      <div class="mb-3">
        <label class="form-label" for="nombreEvento">Nombre del evento</label>
        <input
          v-model.trim="evento.nombre"
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
          v-model.trim="evento.descripcion"
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
          v-model.trim="evento.locacion"
          type="text"
          name="locacion"
          title="locacion"
          placeholder="Queretaro, calle peñitas, numero 102"
        />
      </div>

      <div class="mb-3 input-col">
        <div style="width: 47%">
          <label class="form-label" for="cupoEvento"
            >Cupo de personas por evento</label
          >
          <input
            v-model.number="evento.cupoMaximo"
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
            v-model.number="evento.maximoInvitado"
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
        <Calendario @selected="onDateStartSelected($event)" />
      </div>

      <div>
        <label class="form-label" for="Area">Fecha de Fin</label>
        <Calendario @selected="onDateEndSelected($event)" />
      </div>

      <div style="margin-bottom: 3%">
        <label for="imagen" style="display: block">Elige una imagen:</label>
        <div style="display: flex; gap: 3%">
          <b-form-file
            v-model="evento.imagen"
            :state="!!evento.imagen"
            placeholder="Elige or arrastra un archivo..."
            drop-placeholder="Arrastra un archivo aquí..."
          />
          <button
            @click="evento.imagen = null"
            type="button"
            class="btn btn-danger"
            :disabled="!evento.imagen"
          >
            Eliminar Imagen
          </button>
        </div>
      </div>

      <div style="margin-top: 3%">
        <label class="form-label" for="Area">Subeventos</label>
        <div class="container-btn">
          <b-button id="show-btn" class="btn btn-success" @click="showModal"
            >Agregar
          </b-button>
        </div>
        <ol v-if="subeventos.length">
          <li
            style="display: flex; position: relative; left: -3%"
            v-for="(subevento, id) in subeventos"
            :key="id"
          >
            <b-icon
              class="del-icon"
              icon="x-circle"
              scale="1"
              @click="borrarSubevento(subevento)"
              variant="danger"
            />
            {{ subevento.nombre }}
            {{ subevento.descripcion }}
            {{ subevento.ubicacion }}
          </li>
        </ol>
      </div>

      <div class="container-registro">
        <b-button class="crear" variant="dark" @click="agregarEvento">
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
import axios from "axios";
export default {
  name: "RegistrarEvento",
  components: {
    Calendario,
    Registrar,
  },
  computed: {
    // Carga todos los subeventos del estado
    subeventos() {
      return this.$store.getters.getSubeventos;
    },
  },
  data() {
    return {
      show: true,
      evento: {
        nombre: undefined,
        descripcion: undefined,
        cupoMaximo: undefined,
        fechaInicio: null,
        fechaFin: null,
        locacion: undefined,
        imagen: null,
        maximoInvitado: undefined,
      },
    };
  },
  methods: {
    async agregarEvento() {
      const imageForm = new FormData();
      imageForm.append("image", this.evento.imagen);

      try {
        const imgResponse = await axios.post(
          "http://localhost:8081/images",
          imageForm,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (imgResponse.status != 201) {
          throw new Error("Failed to upload image", imgResponse);
        }

        const { filename } = imgResponse.data?.image ?? {};
        const payload = {
          evento: { ...this.evento, imagen: filename ?? "" },
          subeventos: [...this.subeventos],
        };

        const eventResponse = await axios.post(
          "http://localhost:8081/api/eventos/",
          payload
        );

        if (eventResponse.status != 201) {
          throw new Error("Failed to upload evento", eventResponse);
        }
      } catch (e) {
          console.error(e);
      }
    },
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
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    onDateStartSelected(fechaInicio) {
      this.evento.fechaInicio = fechaInicio;
    },
    onDateEndSelected(fechaFin) {
      this.evento.fechaFin = fechaFin;
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