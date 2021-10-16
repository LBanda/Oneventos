<template>
  <div class="container">
    <div class="header">
      <h5><strong> Registrar Empleado </strong></h5>
    </div>
    <form class="form" method="post">
      <div class="mb-3">
        <label class="form-label" for="nombreEmpleado">Nombre</label>
        <input
          class="form-control"
          type="text"
          name="nombreEmpleado"
          title="nombreEmpleado"
          placeholder="John"
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="apellido">Apellido</label>
        <input
          class="form-control"
          type="text"
          name="apellido"
          title="apellido"
          placeholder="Doe"
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="email">Email</label>
        <input
          class="form-control"
          type="email"
          name="email"
          title="email"
          placeholder="John_Doe@gmail.com"
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="NoEmpleado">Numero de empleado</label>
        <input
          class="form-control"
          type="text"
          name="NoEmpleado"
          title="NoEmpleado"
          placeholder="M18183231"
          required
        />
      </div>

      <b-form-group label="Empresa" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="empresaInfo"
          :options="empresa"
          :aria-describedby="ariaDescribedby"
          :state="stateEmpresa"
          name="flavour-2a"
          stacked
        >
          <b-form-invalid-feedback :state="stateEmpresa"
            >Seleccione sólo uno</b-form-invalid-feedback
          >
          <b-form-valid-feedback :state="stateEmpresa"
            >Gracias</b-form-valid-feedback
          >
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group label="Area de Trabajo" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="areaTrabajoInfo"
          :options="areaTrabajo"
          :aria-describedby="ariaDescribedby"
          :state="stateAreaTrabajo"
          name="flavour-2a"
          stacked
        >
          <b-form-invalid-feedback :state="stateAreaTrabajo"
            >Seleccione sólo uno</b-form-invalid-feedback
          >
          <b-form-valid-feedback :state="stateAreaTrabajo"
            >Gracias</b-form-valid-feedback
          >
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group label="Subeventos" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="subeventoInfo"
          :options="subeventos"
          :aria-describedby="ariaDescribedby"
          name="flavour-2a"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-group label="Tipo de Menu" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="tipoMenuInfo"
          :options="menu"
          :aria-describedby="ariaDescribedby"
          :state="stateMenu"
          name="flavour-2a"
          stacked
        >
          <b-form-invalid-feedback :state="stateMenu"
            >Seleccione sólo uno</b-form-invalid-feedback
          >
          <b-form-valid-feedback :state="stateMenu"
            >Gracias</b-form-valid-feedback
          >
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group
        label="¿Tienes alguna alergia?"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="alergiaInfo"
          :options="alergias"
          :aria-describedby="ariaDescribedby"
          name="flavour-2a"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>

      <div>
        <b-form-group label="Comentarios adicionales" class="mb-0">
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Comentarios"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </div>

      <div class="invitados-tabla">
        <b-table
          :hover="hover"
          :head-variant="headVariant"
          :bordered="bordered"
          :items="items"
          :fields="fields"
          :select-mode="selectMode"
          responsive="sm"
          ref="selectableTable"
          @row-selected="onRowSelected"
        >
          <!-- Example scoped slot for select state illustrative purposes -->
          <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>

          <template #cell(Info)>
            <div class="btn-table-container">
              <b-button class="btn-table" variant="dark" to="/eventos"
                >Consultar</b-button
              >
              <b-button class="btn-table" variant="dark" to="/eventos"
                >Eliminar</b-button
              >
            </div>
          </template>
        </b-table>
      </div>

      <div class="btn-submit">
        <b-button class="btn btn-success mb-3" variant="success" type="submit"
          >Guardar Registro</b-button
        >
        <b-button
          class="btn btn-success mb-3"
          variant="dark"
          to="/invitadoRegistroC"
          >Registrar Nuevo Invitado</b-button
        >
        <b-button
          class="btn btn-success mb-3"
          variant="dark"
          to="/empleadosRegistradosC"
          >Cancelar</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
// import Calendario from "@/components/Calendario.vue";
export default {
  name: "RegistrarEmpleado",
  // components: {
  //   Calendario,
  // },
  data() {
    return {
      tipoMenuInfo: [],
      empresaInfo: [],
      areaTrabajoInfo: [],
      fileEvento: null,
      show: true,
      selected: [],
      subeventosInfo: [],
      alergiasInfo: [],
      subeventos: [
        { text: "Conferencia 1", value: "Conferencia 1" },
        { text: "Conferencia 2", value: "Conferencia 2" },
        { text: "Conferencia 3", value: "Conferencia 3" },
        { text: "Conferencia 4", value: "Conferencia 4" },
      ],
      alergias: [
        { text: "Alergia 1", value: "Alergia 1" },
        { text: "Alergia 2", value: "Alergia 2" },
        { text: "Alergia 3", value: "Alergia 3" },
        { text: "Alergia 4", value: "Alergia 4" },
      ],
      menu: [
        { text: "Vegano", value: "Vegano" },
        { text: "Vegetariano", value: "Vegetariano" },
        { text: "Normal", value: "Normal" },
      ],
      empresa: [
        { text: "Microsoft", value: "Microsoft" },
        { text: "GE", value: "GE" },
        { text: "Oneventos", value: "Oneventos" },
        { text: "Wiseline", value: "Wiseline" },
      ],
      areaTrabajo: [
        { text: "Area de Trabajo 1", value: "Area de Trabajo 1" },
        { text: "Area de Trabajo 2", value: "Area de Trabajo 2" },
        { text: "Area de Trabajo 3", value: "Area de Trabajo 3" },
        { text: "Area de Trabajo 4", value: "Area de Trabajo 4" },
      ],
      fields: ["invitados", "Info"],
      items: [
        { invitados: "Paula Sofia Soto Ayala" },
        { invitados: "Luis Claudio Soto Ayala" },
        { invitados: "Vianney Rivera" },
        { invitados: "Eduardo Larios Fernandez" },
        { invitados: "Adriana Ayala" },
      ],
      selectMode: "multi",
      bordered: true,
      headVariant: "dark",
      hover: true,
    };
  },
  computed: {
    stateMenu() {
      return this.tipoMenuInfo.length === 1;
    },
    stateEmpresa() {
      return this.empresaInfo.length === 1;
    },
    stateAreaTrabajo() {
      return this.areaTrabajoInfo.length === 1;
    },
  },
};
</script>

<style scoped>
.invitados-tabla {
  margin: 3%;
}

.btn-submit {
  display: flex;
  justify-content: center;
  margin: 5%;
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3%;
}

button {
  width: 49%;
  font-size: 1rem;
}

.del-icon {
  margin-right: 2%;
  cursor: pointer;
}

/* .container {
  display: grid;
  justify-content: center;
  grid-template-areas:
    "header"
    "form"
    "footer";
  grid-template-rows: 7vh auto 7vh;
} */

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

/* .my-btn {
  display: grid !important;
} */

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