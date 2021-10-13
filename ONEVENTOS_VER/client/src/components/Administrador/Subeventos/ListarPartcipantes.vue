<template>
  <div>
    <div class="btn-sub">
      <b-button class="subcon" variant="dark" to="/eventos"
        >Consultar Subeventos</b-button
      >
      <b-button class="subcon" variant="dark" to="/eventos"
        >Registrar Nuevo Empleado</b-button
      >
    </div>
    <div class="container">
      <div class="btn-btn">
        <b-button class="btn-fun-table" size="sm" @click="selectAllRows"
          >Seleccionar Todo</b-button
        >
        <b-button class="btn-fun-table" size="sm" @click="clearSelected"
          >Borrar Seleccion</b-button
        >
      </div>

      <b-table
        :hover="hover"
        :head-variant="headVariant"
        :bordered="bordered"
        :items="items"
        :fields="fields"
        :select-mode="selectMode"
        responsive="sm"
        ref="selectableTable"
        selectable
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
      <!-- <p>
      Selected Rows:<br />
      {{ selected }}
    </p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ListarParticipantes",
  data() {
    return {
      fields: ["asistencia", "empleados_registrados", "Info"],
      items: [
        { empleados_registrados: "Paula Sofia Soto Ayala" },
        { empleados_registrados: "Luis Claudio Soto Ayala" },
        { empleados_registrados: "Vianney Rivera" },
        { empleados_registrados: "Eduardo Larios Fernandez" },
        { empleados_registrados: "Adriana Ayala" },
      ],
      selectMode: "multi",
      selected: [],
      bordered: true,
      headVariant: "dark",
      hover: true,
    };
  },
  methods: {
    onRowSelected(items) {
      this.selected = items;
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