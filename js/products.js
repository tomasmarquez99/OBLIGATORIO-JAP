//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var productosArray = [];
var minCount = undefined;
var maxCount = undefined;
var currentSortCriteria = undefined;
const ORDER_ASC_BY_COST = "+-";
const ORDER_DESC_BY_COST = "-+";
const ORDER_BY_SOLD_COUNT = "Cant.";
var inputSearch = document.getElementById('inputSearch');
var producto;

function sortProductos(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_COST) {
        result = array.sort(function (a, b) {
            let aCost = parseInt(a.cost)
            let bCost = parseInt(b.cost)


            if (aCost < bCost) { return -1; }
            if (aCost > bCost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_COST) {
        result = array.sort(function (a, b) {
            aCost = parseInt(a.cost)
            bCost = parseInt(b.cost)


            if (aCost > bCost) { return -1; }
            if (aCost < bCost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_SOLD_COUNT) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;
}

function mostrarProductos() {

    let articulos = "";

    for (let i = 0; i < productosArray.length; i++) {
        let productos1 = productosArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(productos1.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(productos1.cost) <= maxCount))) {
            let nombre = productos1.name

            articulos += `
            <div class="col">
          
          <a onclick="descripcionProducto(`+ productos1.soldCount + `)" class="list-group-item list-group-item-action">
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
            </a>
          </div>
          `
        }
    }

    document.getElementById("cat-list-container").innerHTML += articulos;
}




function sortAndShowCategories(sortCriteria, arrayProductos) {
    currentSortCriteria = sortCriteria;

    if (arrayProductos != undefined) {
        productosArray = arrayProductos;
    }

    productosArray = sortProductos(currentSortCriteria, productosArray);


    mostrarProductos();
}

function descripcionProducto(saldo) {
    // localStorage.setItem('idProducto', JSON.stringify({soldCount: saldo}))

    window.location = 'product-info.html';

};




document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (response) {
        if (response.status === "ok") {
            sortAndShowCategories(ORDER_ASC_BY_COST, response.data);

        }
    });




    document.getElementById("inputSearch").addEventListener('input', function () {
        let articulos = '';
        inputSearch = document.getElementById("inputSearch").value.toLowerCase();
        document.getElementById("cat-list-container").innerHTML = '';
        if (inputSearch != '') {
            for (i = 0; i < productosArray.length; ++i) {
                if ((productosArray[i].name.toLowerCase().indexOf(inputSearch) != -1) || (productosArray[i].description.toLowerCase().indexOf(inputSearch) != -1)) {
                    articulos += `
          <br><br>
          <a onclick="descripcionProducto(`+ productosArray[i].soldCount + `)" class="list-group-item list-group-item-action">
              <div class="row">
                  <div class="col-3">
                      <img src="` + productosArray[i].imgSrc + `" alt="` + productosArray[i].description + `" class="img-thumbnail">
                  </div>
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ productosArray[i].name + `</h4>
                          <small class="text-muted"> U$D ` + productosArray[i].cost + ` </small>
                      </div>
                      <p class="mb-1">` + productosArray[i].description + `</p>
                  </div>
              </div>
              
          </a>
          
          `
                }
            }

            document.getElementById("cat-list-container").innerHTML += articulos;
        } else {
            mostrarProductos();
        }
    })




    document.getElementById("sortAsc").addEventListener("click", function () {
        document.getElementById("cat-list-container").innerHTML = '';
        sortAndShowCategories(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function () {
        document.getElementById("cat-list-container").innerHTML = '';
        sortAndShowCategories(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function () {
        document.getElementById("cat-list-container").innerHTML = '';
        sortAndShowCategories(ORDER_BY_SOLD_COUNT);
    });




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

        mostrarProductos();

    });

    document.getElementById("clearRangeFilter").addEventListener('click', function () {

        document.getElementById("cat-list-container").innerHTML = '';
        document.getElementById("rangeFilterCountMin").value = '';
        document.getElementById("rangeFilterCountMax").value = '';
        minCount = undefined;
        maxCount = undefined;

        mostrarProductos();

    })

});