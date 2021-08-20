//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var productosArray = [];
var minCount = undefined;
var maxCount = undefined;

function mostrarProductos(array) {

    let articulos = "";

    for (let i = 0; i < array.length; i++) {
        let productos1 = array[i];
        
    if (((minCount == undefined) || (minCount != undefined && parseInt(productos1.productCount) >= minCount)) &&
          ((maxCount == undefined) || (maxCount != undefined && parseInt(productos1.productCount) <= maxCount))){

          articulos += `
          <br><br>
          
              <div class="row">
                  <div class="col-3">
                      <img src="` + productos1.imgSrc + `" alt="` + productos1.description + `" class="img-thumbnail">
                  </div>
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ productos1.name +`</h4>
                          <small class="text-muted"> U$D ` + productos1.cost + ` </small>
                      </div>
                      <p class="mb-1">` + productos1.description + `</p>
                  </div>
              </div>
              <br>
          
          `
      }
    }

      document.getElementById("productos").innerHTML += articulos;
  }


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (response) {
        if (response.status === "ok") {
            productosArray = response.data;

            mostrarProductos(productosArray);
        }
    })
});

