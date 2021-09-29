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
              <i
                v-on:click="borrarEmpresa(empresa)"
                style="margin-right: 2%; cursor: pointer; color: red"
                class="bi bi-x-lg"
              >
              </i>
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
              <i
                v-on:click="borrarAreaTrabajo(areaTrabajo)"
                style="margin-right: 2%; cursor: pointer; color: red"
                class="bi bi-x-lg"
              >
              </i>
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
          <div class="container-btn">
            <button
              type="button"
              style="margin-left: 10px !important; margin-bottom: 10px"
              class="my-btn btn btn-md btn-success resize-add"
              data-bs-toggle="modal"
              data-bs-target="#subeventoModal"
            >
              Agregar
            </button>
          </div>
        </div>
        <ol v-if="subeventos.length">
          <li
            style="display: flex; position: relative; left: -3%"
            v-for="subevento in subeventos"
            :key="subevento.nombreS"
          >
            <i
              v-on:click="borrarSubevento(subevento)"
              style="margin-right: 2%; cursor: pointer; color: red"
              class="bi bi-x-lg"
            >
            </i>
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

      <div class="modal" id="subeventoModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Agregar Subevento</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label class="form-label" for="nombreSubevento"
                    >Nombre del subevento</label
                  >
                  <input
                    v-model="subevento.nombreS"
                    class="form-control"
                    type="text"
                    name="nombreSub"
                    title="nombreSub"
                    placeholder="Nombre Subevento"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="descripcionSubevento"
                    >Descripción del subevento</label
                  >
                  <input
                    v-model="subevento.descripcionS"
                    class="form-control"
                    type="text"
                    name="descripcionSub"
                    title="descripcionSub"
                    placeholder="Descripcioón Subevento"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="locacionSubevento"
                    >Locación</label
                  >
                  <input
                    v-model="subevento.locacionS"
                    class="form-control"
                    type="text"
                    name="locacionSub"
                    title="locacionSub"
                    placeholder="Locación Subevento"
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
                      placeholder=""
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button> -->
              <button
                v-on:click="agregarSubevento"
                type="button"
                class="btn btn-primary"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="footer">
      <footer class="footer mt-auto py-3 bg-light">
        <div class="container">
          <span class="text-muted"
            >Sofiringa Inc. 2021© - All Rights Reserved</span
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registrar",
  data() {
    return {
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
          locacionS: "Locación 1",
        },
        {
          nombreS: "Subevento 2",
          descripcionS: "Descripcion 2",
          locacionS: "Locación 2",
        },
        {
          nombreS: "Subevento 3",
          descripcionS: "Descripcion 3",
          locacionS: "Locación 3",
        },
        {
          nombreS: "Subevento 4",
          descripcionS: "Descripcion 4",
          locacionS: "Locación 4",
        },
        {
          nombreS: "Subevento 5",
          descripcionS: "Descripcion 5",
          locacionS: "Locación 5",
        },
      ],
      subevento: {
        nombreS: " ",
        descripcionS: " ",
        locacionS: " ",
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
      this.subevento.locacionS = "";
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
  },
};
</script>

<style scoped>
.container {
    display: grid;
    grid-template-areas: 
        'header'
        'form'
        'footer';
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
            'titulo' 'titulo'
            'borrar' 'agregar';
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