//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function mostrarCarrito(array) {
    let htmlContentToAppend = '';
    for (let i = 0; i < array.length; i++) {
        producto = array[i]

        htmlContentToAppend += `
        <hr class="my-3">
        <h4 id="productName">${producto.name}</h3>
        <img src="${producto.src}">
        <dl>
        
        <dd>
        <br>
        <p id="precio">Precio:${producto.currency} ${producto.unitCost}</p>
        </dd>
  
        <dt>Cantidad de productos</dt>
        <dd>
        <p id="productCount">${producto.count}</p>
        </dd>
    
    
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