// Muestra el contenedor al cargar la página
document.addEventListener("formularioLoad", function() {    
    document.getElementById("contenedor").style.display = "flex";
});

function loginCorrecto() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if(usuario === "amo" && clave === "123") {
        document.getElementById("contenedor").style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        alert("Ususario o clave incorrectos!");
    }  
}

function Buscar() {
    let entrada = document.getElementById("parametro");
    let terminoBuscado = entrada.value.toUpperCase();

    let filas = document.querySelectorAll("#contenidoTabla tr");

    filas.forEach(fila => {        
        let celdas = fila.querySelectorAll("td");
        let encontrado = false;

        celdas.forEach(celda => {
            if (celda.textContent.toUpperCase().includes(terminoBuscado)) {
                encontrado = true;
            }
        });
        
        if (encontrado) {
            fila.style.display = "";
        }else {
            fila.style.display = "none";
        }
    });
}