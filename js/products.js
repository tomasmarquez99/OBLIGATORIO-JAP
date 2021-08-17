//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var arrayProductos = [];
  
    
function arrayProductos(array) {

            for (let i = 0; i < array.length; ++i) {
                console.log(array[i].name);
                


           
              
                
            };
        };
            
      


document.addEventListener("DOMContentLoaded", function (e){
getJSONData(PRODUCTS_URL).then(function (resultado) {


})}

);
