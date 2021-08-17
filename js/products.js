//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function (e) {

});
=======
function getJSONData(PRODUCTS_URL) {
    var contenedor = document.getElementsByClassName("producto");
    
    fetch(PRODUCTS_URL)
        .then(respuesta => respuesta.json())

        .then(datos => {
            for (let i in datos){
                var datosJSON = datos[i].name;
                console.log(datosJSON);
                document.createTextNode(datosJSON);
parrafo = document.createElement('p');
document.body.appendChild(parrafo);
parrafo.appendChild(datosJSON);



           
              
                
            };
            
      


        })
        .catch(error => alert("Hubo un error: " + error));
};
document.addEventListener("DOMContentLoaded", getJSONData(PRODUCTS_URL));




>>>>>>> Tomas
