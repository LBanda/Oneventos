<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item to="/">Inicio</b-nav-item>
      <b-nav-item href="/#/alimentos">Menús y Alergias</b-nav-item>
      <b-nav-item href="/#/usuarios">Usuarios</b-nav-item>

      <b-nav-item-dropdown text="Account" right>
        <b-dropdown-item href="#">Cuenta</b-dropdown-item>
        <b-dropdown-item href="#">Configuracion</b-dropdown-item>
        <b-dropdown-item href="#">Iniciar sesión</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-form>
        <b-form-input class="mr-sm-2" placeholder="Buscar"></b-form-input>
        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit"
          >Buscar</b-button
        >
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
form {
  display: inline-flex !important;
}

nav {
  gap: 5%;
  justify-content: flex-end;
  position: relative;
}

ul {
  margin-right: 1%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
}

li > .form-inline {
  flex-flow: nowrap;
  gap: 2%;
}

li[class*="dropdown"] {
  margin-right: auto;
}
</style>