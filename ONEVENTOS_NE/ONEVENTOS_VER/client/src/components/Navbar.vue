<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/">Inicio</b-nav-item>
      <b-nav-item href="/#/alimentos">Menús y Alergias</b-nav-item>

      <b-nav-item-dropdown text="Usuario" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-form>
        <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit"
          >Search</b-button
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
    gap: 5%;
  }

  nav {
    gap: 5%;
    /* justify-content: flex-end; */
  }

  ul {
    margin-right: 1%;;
  }
</style>