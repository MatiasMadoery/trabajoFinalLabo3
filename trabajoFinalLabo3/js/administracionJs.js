// Muestra el contenedor al cargar la página
document.addEventListener("formularioLoad", function() {    
    document.getElementById("contenedorAdmin").style.display = "flex";
});

//Login
function loginCorrecto() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if(usuario === "amo" && clave === "123") {
        document.getElementById("contenedorAdmin").style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        alert("Ususario o clave incorrectos!");
    }  
}

//Buscar
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

//URL APi
var urlBase = 'https://api.yumserver.com/16976/products';

//Mostrar articulos
function CargarLista(event){
    event.preventDefault();
    MostrarProductos();
}

fetch(urlBase)
.then(response => response.json())
.then(MostrarProductos)
.catch(error => console.error('Error:', error));

function MostrarProductos(productos){
    let html = ``;
    for(let i = 0; i < productos.length; i++){
        html += `
         <tr>
            <td>${productos[i].idcod}</td>
            <td>${productos[i].titulo}</td>
            <td>${productos[i].precioPeso}</td>
            <td>${productos[i].precioDolar}</td>
            <td>${productos[i].fecha}</td>
        </tr>
        `;
        document.getElementById('contenidoTabla').innerHTML = html;
    }
}

//Nuevo articulo
function CrearProducto(){
    let producto = {
        titulo: document.getElementById('agregarTitulo').value,
        precioPeso: document.getElementById('agregarPrecioPesos').value,
        precioDolar: document.getElementById('agregarPrecioDolar').value,
        fecha: document.getElementById('agregarFecha').value
    };
    fetch(urlBase, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(producto)
    })
    .then(response => response.text())
    .then(
        function(data) {
            console.log(data);
            if(data.trim() === 'OK'){
                alert('Se creo el producto correctamente!')
                MostrarProductos();
            }else {
                alert('No se pudo crear el producto!')
            }
        }
    )
    .catch(erro => console.error('Error:', error));
}