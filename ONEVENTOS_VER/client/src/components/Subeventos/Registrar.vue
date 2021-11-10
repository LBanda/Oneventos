<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Nombre del subevento"
        label-for="input-1"
        required
      >
        <b-form-input
          id="input-1"
          v-model="subevento.nombre"
          placeholder="Ceremonia de apertura"
          required
        />
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Descripción del evento"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="subevento.descripcion"
          placeholder="Conferencia"
          required
        />
      </b-form-group>
      <b-form-group id="input-group-3" label="Ubicación" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="subevento.ubicacion"
          placeholder="Calle 22, Quéretaro, AV. Peñuelas"
          required
        />
      </b-form-group>
      <div>
        <label class="form-label" for="Area">Fecha de Inicio</label>
        <Calendario />
      </div>
      <div>
        <label class="form-label" for="Area">Fecha de Fin</label>
        <Calendario />
      </div>
      <div>
        <label for="demo-sb">Cupo maximo</label>
        <b-form-spinbutton id="demo-sb" v-model="subevento.cupoMaximo" min="1" max="10000" />
      </div>
      <div style="margin-top: 3%">
        <label for="imagen" style="display: block">Elige una imagen:</label>
        <div style="display: flex; gap: 3%">
          <b-form-file
            v-model="subevento.file"
            :state="Boolean(subevento.file)"
            placeholder="Elige or arrastra un archivo..."
            drop-placeholder="Arrastra un archivo aquí..."
          />
          <button
            v-on:click="eliminarImagenSubEvento"
            type="button"
            class="my-btn btn btn-danger"
            :disabled="!subevento.file"
          >
            Eliminar Imagen
          </button>
        </div>
      </div>
    </b-form>

    <div class="container-btn">
      <b-button
        class="mt-3"
        variant="outline-success"
        block
        @click="agregarSubevento"
      >
        Agregar
      </b-button>

      <slot name="close" />
    </div>
  </div>
</template>

<script>
import Calendario from "@/components/Calendario.vue";
export default {
  name: "Registrar",
  components: {
    Calendario,
  },
  data() {
    return {
      show: true,
      subevento: {
        nombre: undefined,
        descripcion: undefined,
        ubicacion: undefined,
        cupoMaximo: 0,
        file: undefined,
      },
    };
  },
  methods: {
    agregarSubevento() {
      // Envía una mutación junto con un subevento nuevo para el estado 
      this.$store.commit("addSubevento", {...this.subevento});
      this.clearSubevento();
    },
    eliminarImagenSubEvento() {
      this.subevento.file = undefined;
    },
    clearSubevento() {
      this.subevento.nombre = undefined;
      this.subevento.descripcion = undefined;
      this.subevento.ubicacion = undefined;
      this.subevento.file = undefined;
    }
  },
};
</script>

<style scoped>
button[class*="btn"] {
  width: 49%;
  font-size: 1rem;
}

.container-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>