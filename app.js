let areaTexto = document.querySelector(".ingresarTexto");
let msjResultado = document.querySelector(".resultado");
let codigoPrimario = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

let listaEncriptado = document.getElementById("historialEncriptado");
let listaDesencriptado = document.getElementById("historialDesencriptado");


function btnEncriptar(){
    let contenido = areaTexto.value;
    if(contenido.length > 0){
        let txtResultado = encriptar(areaTexto.value)
        msjResultado.innerHTML = txtResultado
        areaTexto.value='';
        areaTexto.placeholder='Escribe el Texto a Encriptar o Desencriptar';
        let itemLista = document.createElement("li");
        itemLista.innerHTML = txtResultado;
        listaEncriptado.appendChild(itemLista);
    } else {
        areaTexto.placeholder='No se encontro ningun texto a Encriptar ⚠';
    }
}

function encriptar(textoEncriptado){
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i = 0; i < codigoPrimario.length; i++){
        if(textoEncriptado.includes(codigoPrimario[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(codigoPrimario[i][0], codigoPrimario[i][1] + 'x')
        }
    }
    return textoEncriptado;
}

function btnDesencriptar(){
    let contenido = areaTexto.value;
    if(contenido.length > 0){
        let txtResultado = desencriptar(areaTexto.value)
        msjResultado.innerHTML = txtResultado
        areaTexto.value='';
        areaTexto.placeholder='Escribe el Texto a Encriptar o Desencriptar';
        let itemLista = document.createElement("li");
        itemLista.innerHTML = txtResultado;
        listaDesencriptado.appendChild(itemLista);
    } else {
        areaTexto.placeholder='No se encontro ningun texto a Desencriptar ⚠';
    }
}

function desencriptar(textoDesencriptado){
    textoDesencriptado = textoDesencriptado.toLowerCase()
    for(let i = 0; i < codigoPrimario.length; i++){
        if(textoDesencriptado.includes(codigoPrimario[i][1]) + '#'){
            textoDesencriptado = textoDesencriptado.replaceAll(codigoPrimario[i][1] + 'x', codigoPrimario[i][0])
        }
    }
    return textoDesencriptado;
}

function btnCopiar(){
    let textoCopiado = msjResultado.textContent;
    areaTexto.value=textoCopiado;

    let botonCopy = document.querySelector('.botonCopiar');
    botonCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(msjResultado.textContent)
    });
}

let botonDeTema = document.getElementById('botonTema');
let body = document.body;

botonDeTema.addEventListener('change', function() {
  if(this.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});


const inputHistorial = document.getElementById('inputHistorial');
const posicionHistorial = document.getElementById('posicionHistorial');

inputHistorial.addEventListener('change', function() {
    posicionHistorial.style.display = 'block';
});

function toggleHistorial() {
    var posicionHistorial = document.getElementById("posicionHistorial");
    posicionHistorial.style.display = "none";
}