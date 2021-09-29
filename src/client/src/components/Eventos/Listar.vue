<template>
  <div>
    <div class="sub-nav">
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
        <div class="dropdown-menu transform-dropdown" aria-labelledby="navbarDropdown">
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
        <div class="dropdown-menu transform-dropdown" aria-labelledby="navbarDropdown">
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
        <div class="dropdown-menu transform-dropdown" aria-labelledby="navbarDropdown">
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
      <router-link to="/CrearEvento"
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
  name: "Eventos",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Eventos.css"></style>
<style scoped>
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
