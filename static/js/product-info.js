//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var producto = {};

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `
       
        

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showProducts(array) {
    let htmlContentToAppend = "";

    htmlContentToAppend +=
        `
        <h3 id="productName">${array.name}</h3>
        <hr class="my-3">
        <dl>
        <dt>Descripción</dt>
        <dd>
        <p id="productDescription">${array.description}</p>
        </dd>
  
        <dt>Cantidad de productos disponibles</dt>
        <dd>
        <p id="productCount">${array.soldCount}</p>
        </dd>
    
        `
    document.getElementById("contenido").innerHTML = htmlContentToAppend;


}



function showComments(comentarios) {
    for (let i = 0; i < comentarios.length; i++) {

        let misComentarios = comentarios[i];

        let htmlContentToAppend = "";


        htmlContentToAppend +=
            `<p>${misComentarios.user} dice:</p>
            <p>${misComentarios.description}</p>
            
            `


        let puntos = '';
        let puntosHTML = '';

        for (let i = 1; i <= misComentarios.score; ++i) {
            puntos += `<span class="fa fa-star checked"></span>`

        }
        for (let i = misComentarios.score + 1; i <= 5; ++i) {
            puntos += `<span class="fa fa-star"></span>`

        }


        puntosHTML += `<div style="text-align: right;">${puntos}</div><hr>`


        document.getElementById("comments").innerHTML += htmlContentToAppend + puntosHTML;

    }


};

function productoRedireccion(){
    window.location = 'product-info.html'
}






document.addEventListener("DOMContentLoaded", function () {


    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (result) {
        if (result.status === 'ok') {
            comentarios = result.data;

            showComments(comentarios);

        }

        getJSONData(PRODUCT_INFO_URL)
            .then(function (resultObj) {
                if (resultObj.status === "ok") {

                    producto = resultObj.data;

                    showProducts(producto);
                    showImagesGallery(producto.images);


                }
                getJSONData(PRODUCTS_URL)
                    .then(function (resultado) {
                        if (resultado.status === "ok") {

                            productoRelated = resultado.data;

                            console.log(resultado)


                            let relatedArray = producto.relatedProducts;


                            function productosRelacionados(relatedArray, productoRelated) {
                                for (let i = 0; i < relatedArray.length; i++) {

                                    let productosAMostrar = productoRelated[relatedArray[i]];
                                    let inserto = document.getElementById('relatedProducts');
                                    let articulos = '';
                                    articulos += `
          
          <a onclick="productoRedireccion()" class="list-group-item list-group-item-action">
              <div class="row">
                  <div class="col-3">
                      <img src="` + productosAMostrar.imgSrc + `" alt="` + productosAMostrar.description + `" class="img-thumbnail">
                  </div>
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ productosAMostrar.name + `</h4>
                          <small class="text-muted"> U$D ` + productosAMostrar.cost + ` </small>
                      </div>
                      <p class="mb-1">` + productosAMostrar.description + `</p>
                      </div>
              </div>
            </a>
            `

                                    inserto.innerHTML += articulos
                                }

                            }

                            productosRelacionados(relatedArray, productoRelated)

                        };


                    })


            })



    })
})