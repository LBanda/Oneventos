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

      <!-- <div>
        <Calendario />
      </div> -->

      <div class="container-registro" style="display: flex">
        <div class="button-with-title">
          <button type="submit" class="btn btn-success mb-3">
            Registrar Evento
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import Calendario from "@/components/Calendario.vue";
export default {
  name: "Registrar",
  // components: {
  //   Calendario,
  // },
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
    eliminarImagenSubEvento() {
      this.subevento.file = null;
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

.my-btn {
  display: grid !important;
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

.button-with-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-registro {
  display: flex;
  justify-content: space-around;
}
</style>