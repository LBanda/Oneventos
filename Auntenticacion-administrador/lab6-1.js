let con1 = document.getElementById("contraseña1");
let con2 = document.getElementById("contraseña2");
let fuerza = document.getElementById("barra_fuerza");
let conf = document.getElementById("btn_confirmar");
let min = document.getElementById("minuscula");
let may = document.getElementById("mayuscula");
let numCar = document.getElementById("num");
let lonCon = document.getElementById("longitud_con");
let eqCon = document.getElementById("ig_con");




function cambiar_fuente(){
    document.getElementById("titulo_pag").style.fontStyle = "italic";
    document.getElementById("titulo_pag").style.color = 'black' ;
}

function mostrar_con1(){
  let x = con1;
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function mostrar_con2(){
  let x = con2;
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function mostrarPanel(){
    document.getElementById("mensaje").style.display = "block";
}

function ocultarPanel(){
    document.getElementById("mensaje").style.display = "none";;
}
/*
con1.onfocus = function() {
  document.getElementById("mensaje").style.display = "block";
}

con1.onblur = function() {
  document.getElementById("mensaje").style.display = "none";
}
con2.onfocus = function() {
  document.getElementById("mensaje").style.display = "block";
}

con2.onblur = function() {
  document.getElementById("mensaje").style.display = "none";
}
*/

// Cuando el usuario comienza a escribir algo dentro del campo de contraseña
//con1.onkeyup = function() {
function crearContraseña(){
  // Validar minusculas
  var lowerCaseLetters = /[a-z]/g;
  if(con1.value.match(lowerCaseLetters)) {
    min.classList.remove("condition");
    min.classList.add("valid");
  } else {
    min.classList.remove("valid");
    min.classList.add("condition");
}

  // Validar mayusculas
  var upperCaseLetters = /[A-Z]/g;
  if(con1.value.match(upperCaseLetters)) {
    may.classList.remove("condition");
    may.classList.add("valid");
  } else {
    may.classList.remove("valid");
    may.classList.add("condition");
  }

  // Validar numeros
  var numbers = /[0-9]/g;
  if(con1.value.match(numbers)) {
    numCar.classList.remove("condition");
    numCar.classList.add("valid");
  } else {
    numCar.classList.remove("valid");
    numCar.classList.add("condition");
  }

  // Validar longitud
  if(con1.value.length >= 8) {
    lonCon.classList.remove("condition");
    lonCon.classList.add("valid");
  } else {
    lonCon.classList.remove("valid");
    lonCon.classList.add("condition");
  }
  
}
//Validar contraseña
function validarContraseña(){
    if (con2.value.match(con1)){
    eqCon.classList.remove("condition");
    eqCon.classList.add("valid");
    return true;
  } else {
    eqCon.classList.remove("valid");
    eqCon.classList.add("condition");
  }
}

function confirmar(){
    alert('Validación exitosa :)');
}



