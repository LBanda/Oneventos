<template>
  <div>
    <header>
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <img
            style="border-radius: 50%"
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
          <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
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
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
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
</style>