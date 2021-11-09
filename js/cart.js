//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var suma = undefined
var subtotal = 0



function calcSubTotal(i) {
    let productos = parseInt(document.getElementById(`cantidad${i}`).value)
    subtotal = producto.unitCost * productos
    document.getElementById('subtotal').innerHTML = producto.currency + " " + (parseInt(subtotal))
    calcTotal();
}

function guardar() {};

function calcTotal() {
    
    let costoEnvio = 0

    let premium = document.getElementById("premium").checked
    let express = document.getElementById("express").checked
    let standard = document.getElementById("standard").checked

    if (premium) {
        costoEnvio = Math.floor(subtotal * 15) / 100
    }
    if (express) {
        costoEnvio = Math.floor(subtotal * 7) / 100
    }
    if (standard) {
        costoEnvio = Math.floor(subtotal * 5) / 100
    }
    document.getElementById('total').innerHTML = producto.currency + " " + (parseInt(subtotal) + parseInt(costoEnvio))
    document.getElementById('envio').innerHTML = producto.currency + " " + costoEnvio

    console.log(producto.currency)
}


function mostrarCarrito(array) {
    let htmlContentToAppend = '';
    for (let i = 0; i < array.length; i++) {
        producto = array[i]


        htmlContentToAppend += `

     <div class="row">
        
        <div class='col-1'></div>
        <img class="col-2 p-2" src="${producto.src}">
        <div class="col-4 p-2" id="productName">${producto.name}</div>
        <div class="col-3 p-2" id="precio">Precio unitario: ${producto.currency} ${producto.unitCost}</div>
        <div class='col-2 p-2'>
        <input class="input-number" id='cantidad${i}' onchange='calcSubTotal(${i})' style="width : 50px" type="number" value="${producto.count}" min="0" max="4">
        </div>
    

     </div>
    
    
    `
        document.getElementById('carrito').innerHTML = htmlContentToAppend



        let htmlContentToAppend2 = '';
        htmlContentToAppend2 += `
          <div class="row border">
           <div class='col-6'>${producto.name}</div>
           <div class='col-3'></div>
           <div class='col-3'>${producto.currency}  ${producto.unitCost}</div>
          </div>

    `


        document.getElementById('compraCarrito').innerHTML = htmlContentToAppend2;



        let htmlContentToAppend3 = '';

        htmlContentToAppend3 = `
    <div class="row border">
    <div class="col-9">
    <p class="font-weight-bold">Subtotal:</p>
    </div>
    <div class="col-3" id='subtotal'>
    </div>
    </div>
    <div class="row border">
    <div class="col-9">
    <p class="font-weight-bold">Costo de envío:</p>
    </div>
    <div class="col-3" id="envio">
    </div>
    </div>

    <div class="row border" style="height: 50px">
    </div>

    <div class="row border">
    <div class="col-9">
    <p class="font-weight-bold">Costo TOTAL</p>
    </div>
    <div class="col-3" id='total'>
    
    </div>
    </div>
    `

        document.getElementById('sumaCarrito').innerHTML = htmlContentToAppend3




        let htmlContentToAppend4 = "";

        htmlContentToAppend4 = `
<div class="form-check">
              <input class="form-check-input" onchange='calcSubTotal(${i})' type="radio" name="envio" id="premium" value="premium" checked>
              <label class="form-check-label" for="exampleRadios1">
                Premium (2-5 días)
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" onchange='calcSubTotal(${i})' type="radio" name="envio" id="express" value="express">
              <label class="form-check-label" for="exampleRadios2">
                Express (5-8 días)
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" onchange='calcSubTotal(${i})' type="radio" name="envio" id="standard" value="standard">
              <label class="form-check-label" for="exampleRadios3">
                Standard (12 a 15 días)
              </label>
            </div>
`



        document.getElementById('checkBox').innerHTML = htmlContentToAppend4


        calcSubTotal(i)

    }

}






document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL)
        .then(function (resultObj) {
            if (resultObj.status === "ok") {

                productoCarrito = resultObj.data;

                mostrarCarrito(productoCarrito.articles);

            }

        });



})