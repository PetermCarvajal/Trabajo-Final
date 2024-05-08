 var cuadrado=document.querySelector("Cuadrado")
 var iniciarSesion=document.querySelector(inicio-Sesión)
 function regresar(){
    window.history.back();
}

function iniciarSesion() {
document.getElementById("Iniciar").addEventListener("click")
}

function anchoPagina(){
    if(window<1680 && window> 1366 ){
        Contenedor_Header.style.display="block";
    }
}

function verRedes(){
    document.getElementById("li1").addEventListener("click")
    
}

/*function copyToClipboard(text) {
    var portaPapeles = document.createElement("textarea");
    document.body.appendChild(portaPapeles);
    portaPapeles.value = text;
    portaPapeles.select();
    document.execCommand
    document.body.removeChild(portaPapeles);
}*/
function copiarPortapapeles(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Texto copiado al portapapeles: " + text);
        })
        .catch((error) => {
            alert("Error al copiar al portapapeles: " + error);
        });
}
