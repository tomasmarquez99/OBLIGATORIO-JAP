//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function mostrarCarrito(array) {
    let htmlContentToAppend = '';
    for (let i = 0; i < array.length; i++) {
        producto = array[i]

        htmlContentToAppend += `

    <div class="row">
        
        <div class='col-1'></div>
        <img class="col-1" src="${producto.src}">
        <div class="col-2" id="productName">${producto.name}</div>
        <div class="col-2" id="precio">Precio: ${producto.currency} ${producto.unitCost}</div>
        <div id="productCount">Cant. ${producto.count}</div>
    </div>
    <br>
    
    `
    document.getElementById('carrito').innerHTML = htmlContentToAppend

    }
}


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData('https://japdevdep.github.io/ecommerce-api/cart/654.json')
        .then(function (resultObj) {
            if (resultObj.status === "ok") {

                productoCarrito = resultObj.data;

                
                mostrarCarrito(productoCarrito.articles);


            }

        });
})