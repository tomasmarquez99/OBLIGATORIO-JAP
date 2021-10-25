//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function insertLocal() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;

    localStorage.setItem('nombre', JSON.stringify(nombre))
    localStorage.setItem('apellido', JSON.stringify(apellido))
    localStorage.setItem('edad', JSON.stringify(edad))
    localStorage.setItem('correo', JSON.stringify(correo))
    localStorage.setItem('telefono', JSON.stringify(telefono))

};



function mostrarDatos() {


    var showNombre = JSON.parse(localStorage.getItem('nombre'));
    var showApellido = JSON.parse(localStorage.getItem('apellido'));
    var showEdad = JSON.parse(localStorage.getItem('edad'));
    var showCorreo = JSON.parse(localStorage.getItem('correo'));
    var showTelefono = JSON.parse(localStorage.getItem('telefono'));

    htmlContentToAppend = '';

    htmlContentToAppend += `
    <ul>
     <li>
    <p class="m-2">Nombre: ${showNombre} ${showApellido}</p>
  </li>
  <li>
   <p class="m-2">Edad: ${showEdad}</p>
  </li>
  <li>
   <p class="m-2"> Email: ${showCorreo}</p>
  </li>
  <li>
   <p class="m-2"> Teléfono: ${showTelefono}</p>
  </li>
  </ul>
    `


    document.getElementById('datos').innerHTML = htmlContentToAppend
};



document.addEventListener("DOMContentLoaded", function () {

    var showNombre = JSON.parse(localStorage.getItem('nombre'));
    
    if (showNombre != null) {
        mostrarDatos();
    }


    document.getElementById("btnDatos").addEventListener('click', function () {
        insertLocal();
        mostrarDatos();


    })

});