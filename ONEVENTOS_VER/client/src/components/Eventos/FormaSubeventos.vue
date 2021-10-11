<template>
  <b-modal ref="my-modal" hide-footer title="Subevento" id="modal-sm" size="lg">
    <div class="d-block text-center"></div>
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

        <b-form-group id="input-group-3" label="Ubicación" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="subevento.ubicacionS"
            placeholder="Calle 22, Quéretaro, AV. Peñuelas"
            required
          ></b-form-input>
        </b-form-group>

        <Calendario />

        <div>
          <label for="demo-sb">Cupo maximo</label>
          <b-form-spinbutton
            id="demo-sb"
            v-model="value"
            min="1"
            max="10000"
          ></b-form-spinbutton>
        </div>

        <div style="margin-bottom: 3%">
          <label for="imagen" style="display: block">Elige una imagen:</label>
          <b-form-file
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Elige or arrastra un archivo..."
            drop-placeholder="Arrastra un archivo aquí..."
          />

          <div class="mt-3" v-if="file1 && file1.name">
            Archivo seleccionado: {{ file1.name }}
          </div>
        </div>
      </b-form>
    </div>

    <b-button
      class="mt-3"
      variant="outline-success"
      block
      @click="agregarSubevento"
      >Agregar</b-button
    >
    <b-button
      class="mt-3"
      style="margin-left: 1%"
      variant="outline-warning"
      block
      @click="hideModal"
    >
      Cerrar
    </b-button>
  </b-modal>
</template>

<script>
export default {
    name="FormaSubeventos",
    data() {
      return {
          subevento: {
          nombreS: " ",
          descripcionS: " ",
          ubicacionS: " ",
        }
      }
    }
};
</script>

<style>
</style>