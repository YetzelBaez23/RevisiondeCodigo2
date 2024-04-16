/* cambiar las constantes para que no sean var*/

const formulario = document.querySelector("#form")

formulario.onsubmit = function(age) {

  age.preventDefault(); //se añade el Default. 
  


  let name = formulario.elements[0] //se cambio el nombre de la variable de n a name
  let age = formulario.elements[1] //se cambio el nombre de la variable de e a age
  let nationality = formulario.elements[2] //se cambio el nombre de la variable de na a nationality

  let nombre = name.value; //agregué;
  let edad = age.value; //agregué;

  let i = nationality.selectedIndex; // agruegué ;
  let nacionalidad = nationality.options[i].value; // agruegué ;
  console.log(nombre, edad); // agruegué ;
  console.log(nacionalidad); // agruegué ;

  if (nombre.length === 0) {
    name.classList.add("error"); // agruegué ;
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error"); // agruegué ;
  }

if (nombre.length > 0 && (edad >= 18  && edad <= 120) ) /* añadí el signo de =*/{
  agregarInvitado(nombre, edad, nacionalidad); // agruegué ;
  }
};

const botonBorrarGlobal = document.createElement("button"); // agruegué ;
botonBorrarGlobal.textContent = "Eliminar invitado";// agruegué ;
botonBorrarGlobal.id = "boton-borrar-global"; // agruegué ;
/*const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)*/
document.body.appendChild(botonBorrarGlobal);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"; // agruegué ;
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"; // agruegué ;
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"; // agruegué ;
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"; // agruegué ;
  }

const lista = document.getElementById("lista-de-invitados"); // agruegué ;

const elementoLista = document.createElement("div"); // agruegué ;
elementoLista.classList.add("elemento-lista"); // le puse add en lugar de added.
lista.appendChild(elementoLista); // agruegué ;

/*saqué la funcion crear elemento,*/

crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidad, elementoLista);

  const botonBorrarLocal = document.createElement("button");
  botonBorrarLocal.textContent = "Eliminar invitado";
  botonBorrarLocal.classList.add("boton-borrar-local");
  elementoLista.appendChild(botonBorrarLocal);

  botonBorrarLocal.onclick = function() {
    elementoLista.remove();
  };
}

function crearElemento(descripcion, valor, elementoPadre) {
  let spanNombre = document.createElement("span");
  let inputNombre = document.createElement("input");
  let espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  elementoPadre.appendChild(spanNombre);
  elementoPadre.appendChild(inputNombre);
  elementoPadre.appendChild(espacio);
}