//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


var productosArray = [];

function mostrarProductos(array) {

let articulos = '<br><hr><br>';
  for (let i = 0; i < array.lenght; ++i){
   let productos = array[i];
  
  contenido += `Precio:` + array.price + `<br>;`
    
    
  };
  document.getElementById("productos").innerHTML = articulos;
};

document.addEventListener("DOMContentLoaded", function (e){
  getJSONData(PRODUCTS_URL).then(function (resultado){ 
    if (resultado.status === "ok"){
      productosArray = resultado.data;
      
      mostrarProductos(productosArray);
    }
  })
})
