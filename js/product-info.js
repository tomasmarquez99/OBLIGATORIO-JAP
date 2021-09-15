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
        console.log(puntos);

         puntosHTML += `<div style="text-align: right;">${puntos}</div><hr>`


        document.getElementById("comments").innerHTML +=  htmlContentToAppend + puntosHTML ;

    }
   

};





document.addEventListener("DOMContentLoaded", function () {


    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (result) {
        if (result.status === 'ok') {
            comentarios = result.data;

            showComments(comentarios);
            
        }

        getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
            if (resultObj.status === "ok") {

                producto = resultObj.data;

                showProducts(producto);
                showImagesGallery(producto.images);
                

            }
        })

    })



})