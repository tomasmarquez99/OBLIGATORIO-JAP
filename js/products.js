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

        if (((minCount == undefined) || (minCount != undefined && parseInt(productos1.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(productos1.cost) <= maxCount))) {

            articulos += `
          <br><br>
          <a class="list-group-item">
              <div class="row">
                  <div class="col-3">
                      <img src="` + productos1.imgSrc + `" alt="` + productos1.description + `" class="img-thumbnail">
                  </div>
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ productos1.name + `</h4>
                          <small class="text-muted"> U$D ` + productos1.cost + ` </small>
                      </div>
                      <p class="mb-1">` + productos1.description + `</p>
                  </div>
              </div>
              <br>
          </a>
          `
        }
    }

    document.getElementById("cat-list-container").innerHTML += articulos;
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (response) {
        if (response.status === "ok") {
            productosArray = response.data;

            mostrarProductos(productosArray);
        }
    })



    document.getElementById("rangeFilterCount").addEventListener('click', function () {


        document.getElementById("cat-list-container").innerHTML = '';
        minCount = document.getElementById("rangeFilterCountMin").value
        maxCount = document.getElementById("rangeFilterCountMax").value

        if ((minCount != undefined) && (minCount != '') && (parseInt(minCount) >= 0)) {
            minCount = parseInt(minCount);
        } else {
            minCount = undefined
        }

        if ((maxCount != undefined) && (maxCount != '') && (parseInt(maxCount) >= 0)) {
            maxCount = parseInt(maxCount);
        } else {
            maxCount = undefined
        }

        mostrarProductos(productosArray);

    });

    document.getElementById("clearRangeFilter").addEventListener('click', function () {

        document.getElementById("cat-list-container").innerHTML = '';
        document.getElementById("rangeFilterCountMin").value = '';
        document.getElementById("rangeFilterCountMax").value = '';
        
        minCount = undefined

        maxCount = undefined

mostrarProductos(productosArray);

    })
});