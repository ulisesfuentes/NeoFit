const inputUsuario = document.getElementById('correoUsuario');
const inputClave = document.getElementById('contraseña');
let boton = document.getElementById('btn');
boton.disabled = true;
inputUsuario.addEventListener('keyup',()=>{
    let usuario = inputUsuario.value.length;
    inputClave.addEventListener('keyup',()=>{
        let clave = inputClave.value.length;
        if(usuario >= 10 && clave>=8){
            boton.classList.add('submitb');
            boton.disabled = false;
            boton.classList.remove('submit');
        }
   
    })
 
})
 
boton.addEventListener('click', e =>{
    e.preventDefault();
    let capa = document.getElementById('capa');
    let h1 = document.createElement("h1");
    h1.innerHTML= "Gracias por registrarse!!";
    capa.appendChild(h1);
    let body = document.querySelector("body")
    body.classList.add('move');
})
