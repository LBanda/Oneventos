<template>
  <div>
    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <img
              src="@/assets/descarga.png"
              width="100"
              height="100"
            />
          </div>
          <form class="col-4 d-flex justify-content-end align-items-center">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-secondary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      <div class="nav-scroller py-1 mb-2">
        <nav
          class="nav d-flex justify-content-between"
          style="background-color: #1d223b"
        >
          <li class="nav-item active">
            <a class="nav-link" href="#">Home </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Usuarios </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Menús y alergias</a>
          </li>
        </nav>
      </div>
    </div>

    <div>
      <div class="dropdown dropdown-Nombre">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Nombre
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="5">A-Z</a>
          <a class="dropdown-item" href="6">Z-A</a>
        </div>
      </div>

      <div class="dropdown dropdown-Fecha">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Fecha
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="1">Más Recientes</a>
          <a class="dropdown-item" href="2">Más Antiguo</a>
        </div>
      </div>

      <div class="dropdown dropdown-Evento">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Evento/Conferencia
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="3">Evento</a>
          <a class="dropdown-item" href="4">Conferencia</a>
        </div>
      </div>
    </div>
    <!-- AQUÍ ESTÁN LAS CARTAS DE LOS EVENTOS-->
    <div class="row row-cols-1 row-cols-md-4 g-4 p-5">
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Evento 1</h5>
            <p class="card-text">Fecha</p>
            <p class="card-text">Hora</p>
          </div>
          <img
            src="@/assets/descarga.png"
            class="card-img-top"
            alt="..."
          />
          <div class="btn-group">
            <a href="#" class="btn btn-primary" aria-current="page">Info</a>
            <a href="#" class="btn btn-primary">Reporte</a>
            <a href="#" class="btn btn-primary">Elminar</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Evento 2</h5>
            <p class="card-text">Fecha</p>
            <p class="card-text">Hora</p>
          </div>
          <img
            src="@/assets/descarga.png"
            class="card-img-top"
            alt="..."
          />
          <div class="btn-group">
            <a href="#" class="btn btn-secondary" aria-current="page">Info</a>
            <a href="#" class="btn btn-secondary">Reporte</a>
            <a href="#" class="btn btn-secondary">Eliminar</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Evento 3</h5>
            <p class="card-text">Fecha</p>
            <p class="card-text">Hora</p>
          </div>
          <img
            src="@/assets/descarga.png"
            class="card-img-top"
            alt="..."
          />
          <div class="btn-group">
            <a href="#" class="btn btn-primary" aria-current="page">Info</a>
            <a href="#" class="btn btn-primary">Reporte</a>
            <a href="#" class="btn btn-primary">Eliminar</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Evento 4</h5>
            <p class="card-text">Fecha</p>
            <p class="card-text">Hora</p>
          </div>
          <img
            src="@/assets/descarga.png"
            class="card-img-top"
            alt="..."
          />
          <div class="btn-group">
            <a href="#" class="btn btn-primary" aria-current="page">Info</a>
            <a href="#" class="btn btn-primary">Reporte</a>
            <a href="#" class="btn btn-primary">Eliminar</a>
          </div>
        </div>
      </div>
    </div>

    <!--Botón de Registrar nuevo evento-->
    <div class="d-grid gap-2 col-2 mx-auto">
      <router-link to="/eventos/crear"
        id="toCrearEvento"
        class="btn_register btn-secondary"
        style="background-color: #1d223b"
      >
        Registrar nuevo evento
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hack",
};
</script>

<style scoped>
body {
  /*
    display: flex;
    */
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f3f3f3;
}

.nav-link {
  color: rgb(255, 255, 255);
}

.card-body {
  text-align: center;
}

.card-img-top {
  width: 45%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2em;
}

div.btn-group {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2em;
}

.btn-group a {
  background-color: black;
  border-color: black;
}

a .btn:hover {
  color: #f2f2f2 !important;
}

.dropdown-Nombre a {
  color: black;
}

.dropdown-Fecha a {
  color: black;
}

.dropdown-Evento a {
  color: black;
}

#toCrearEvento {
  min-height: 40px;
  min-width: 100px;
  border-radius: 20px;
  padding: 10px;
}

.sub-nav {
  display: flex;
  justify-content: space-around;
}

.sub-nav > * {
  flex-basis: 40%;
}

.transform-dropdown {
  transform: translate3d(8rem, 50px, 0px) !important;
}
</style>