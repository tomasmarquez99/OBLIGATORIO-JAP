//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var suma = undefined

function calcSubTotal(i) {
    let productos = parseInt(document.getElementById(`cantidad${i}`).value)
    subtotal = producto.unitCost * productos
    document.getElementById('subtotal').innerHTML = subtotal
    calcTotal();
}

function calcTotal() {
    let subtotal = document.getElementById('subtotal').innerHTML
    document.getElementById('total').innerHTML = subtotal
    console.log(subtotal)
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
    <div class="col-3">
      Costo
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

        calcSubTotal(i)

    }

}

/*
function mostrarCarro(array) {
    let htmlContentToAppend = '';
    let dolares = ''
    for (let i = 0; i < array.length; i++) {
        producto = array[i]
        htmlContentToAppend2 += `
    <div class="row border">
    <div class='col-6'>${producto.name}</div>
    <div class='col-3'></div>
    <div class='col-3'>${producto.currency}  ${producto.unitCost}</div>
</div>

    `


        document.getElementById('compraCarrito').innerHTML = htmlContentToAppend2;


    }
}

function mostrarSuma(array) {
    let precio = []

    for (let i = 0; i < array.length; i++) {
        producto = array[i];

        precio += producto.currency + " " + producto.unitCost



    }

    console.log(precio)

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
    <div class="col-3">
      Costo
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

}
*/

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL)
        .then(function (resultObj) {
            if (resultObj.status === "ok") {

                productoCarrito = resultObj.data;


                mostrarCarrito(productoCarrito.articles);
                /*mostrarCarro(productoCarrito.articles)
                mostrarSuma(productoCarrito.articles)*/

            }

        });
})