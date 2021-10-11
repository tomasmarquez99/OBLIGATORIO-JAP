//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function mostrarCarrito(array) {
    let htmlContentToAppend = '';
    for (let i = 0; i < array.length; i++) {
        producto = array[i]

        htmlContentToAppend += `

    <div class="row border">
        
        <div class='col-1'></div>
        <img class="col-2 p-2" src="${producto.src}">
        <div class="col-4 p-2" id="productName">${producto.name}</div>
        <div class="col-3 p-2" id="precio">Precio unitario: ${producto.currency} ${producto.unitCost}</div>
        <div class='col-2 p-2' id="productCount">${producto.count}</div>
    </div>
    <br>
    
    `
    document.getElementById('carrito').innerHTML = htmlContentToAppend

    }
}

function mostrarCarro(array){
    let htmlContentToAppend = '';
    for (let i = 0; i < array.length; i++) {
        producto = array[i]
    htmlContentToAppend += `
    <div class="row border">
    <div class='col-6'>${producto.name}</div>
    <div class='col-3'></div>
    <div class='col-3'>${producto.currency} ${producto.unitCost}</div>
</div>

    `


    document.getElementById('compraCarrito').innerHTML = htmlContentToAppend
    }
}

function mostrarSuma(array){
     let precio = []
    for (let i = 0; i < array.length; i++) {
        producto = array[i];
        
        precio += producto.unitCost


        
    }

    console.log(precio)

    htmlContentToAppend = `
    <div class="row border">
    <div class="col-9">
    <p class="font-weight-bold">Subtotal:</p>
</div>
<div class="col-3">
${precio}
</div>
    </div>
    <div class="row border">
    <div class="col-9">
    <p class="font-weight-bold">Costo de envío:</p>
</div>
<div class="col-3">
Costo
</div>
    </div>
    `

    document.getElementById('sumaCarrito').innerHTML = htmlContentToAppend

}


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData('https://japdevdep.github.io/ecommerce-api/cart/654.json')
        .then(function (resultObj) {
            if (resultObj.status === "ok") {

                productoCarrito = resultObj.data;

                
                mostrarCarrito(productoCarrito.articles);
                mostrarCarro(productoCarrito.articles)
mostrarSuma(productoCarrito.articles)
            }

        });
})