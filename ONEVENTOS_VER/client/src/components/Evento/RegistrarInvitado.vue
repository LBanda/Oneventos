<template>
  <div class="container">
    <div class="header">
      <h5><strong> Registrar Invitado </strong></h5>
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

      <b-form-group label="Subeventos" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="selected"
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
          :state="tipoMenuInfo"
          name="flavour-2a"
          stacked
        >
          <b-form-invalid-feedback :state="tipoMenuInfo"
            >Seleccione sólo uno</b-form-invalid-feedback
          >
          <b-form-valid-feedback :state="tipoMenuInfo"
            >Gracias</b-form-valid-feedback
          >
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group
        label="¿Tienes alguna alergia?"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="selected"
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

      <!-- <div>
        <Calendario />
      </div> -->

      <div class="btn-submit">
        <b-button class="btn btn-success mb-3" variant="success" type="submit"
          >Guardar Registro</b-button
        >
        <b-button
          class="btn btn-success mb-3"
          variant="dark"
          to="/empleadoRegistroC"
          >Cancelar</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
// import Calendario from "@/components/Calendario.vue";
export default {
  name: "RegistrarInvitado",
  // components: {
  //   Calendario,
  // },
  data() {
    return {
      tipoMenuInfo: [],
      fileEvento: null,
      show: true,
      selected: [], // Must be an array reference!
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
    };
  },
  computed: {
    state() {
      return this.tipoMenuInfo.length === 1;
    },
  },
};
</script>

<style scoped>
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