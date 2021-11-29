<template>
  <div class="container">
    <div class="btn-btn">
      <b-button class="btn-fun-table" size="sm" @click="selectAllRows">
        Seleccionar Todo
      </b-button>
      <b-button class="btn-fun-table" size="sm" @click="clearSelected">
        Borrar Seleccion
      </b-button>
    </div>

    <b-table
      :hover="hover"
      :head-variant="headVariant"
      :bordered="bordered"
      :items="items"
      :fields="fields"
      select-mode="multi"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(asistencia)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Asiste</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">No asiste</span>
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
</template>

<script>
export default {
  name: "ListarParticipantes",
  data() {
    return {
      fields: ["asistencia", "asistencia", "empleados_registrados", "Info"],
      items: [
        { empleados_registrados: "Paula Sofia Soto Ayala" },
        { empleados_registrados: "Luis Claudio Soto Ayala" },
        { empleados_registrados: "Vianney Rivera" },
        { empleados_registrados: "Eduardo Larios Fernandez" },
        { empleados_registrados: "Adriana Ayala" },
      ],
      selectMode: "multi",
      asistencia: [],
      bordered: true,
      headVariant: "dark",
      hover: true,
    };
  },
  methods: {
    onRowSelected(items) {
      this.asistencia = items;
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
  },
};
</script>

<style scoped>
span {
  display: block;
  text-align: center;
  margin-top: 8px;
}

.container {
  margin-top: 8%;
}

.btn-sub {
  display: flex;
  align-content: stretch;
  justify-content: space-evenly;
}

.subcon {
  margin-top: 2%;
  width: 15%;
  height: 15%;
}

.btn-table-container {
  display: flex;
  justify-content: space-around;
}

.btn-btn {
  display: flex;
  justify-content: center;
}

.btn-fun-table {
  margin: 2%;
}
</style>