//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (){

    


document.getElementById('submitBtn').addEventListener('click', function(){

let inputMail = document.getElementById('Mail');
let inputPassword = document.getElementById('Password');
let camposCompletos = true;


if (inputMail.value === ''){
    inputMail.classList.add('invalid');
    camposCompletos = false;
}else{
    inputMail.classList.remove('invalid');
}

if (inputPassword.value === ''){
    inputPassword.classList.add('invalid');
    camposCompletos = false;
}else{
    inputPassword.classList.remove('invalid');
}

 if (camposCompletos){
    localStorage.setItem('usuario',JSON.stringify({email: inputMail.value}));
    window.location = "inicio.html";
 }
}

)


})


