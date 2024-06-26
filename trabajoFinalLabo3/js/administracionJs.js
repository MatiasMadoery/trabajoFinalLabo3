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
    let entrada = document.getElementById("parametroAbm");
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


//Funciones para manejo de tabla
MostrarProductos()

function MostrarProductos(){
    fetch(urlBase)
    .then(response => response.json())
    .then(productos => {
        let html = ``;
    for(let i = 0; i < productos.length; i++){
        html += `
         <tr onclick=SeleccionarFila(this)>
            <td>${productos[i].idcod}</td>
            <td>${productos[i].titulo}</td>
            <td>${productos[i].precioPeso}</td>
            <td>${productos[i].precioDolar}</td>
            <td>${productos[i].fecha}</td>
            <td><button id="${productos[i].idcod}" onclick="EliminarProducto(id)">Eliminar</button></td>
        </tr>
        `;
        document.getElementById('contenidoTabla').innerHTML = html;
    }
    })
    .catch(error => console.error('Error:', error));    
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
    .then(data => {
            console.log(data);
            if(data.trim() === 'OK'){
                alert('El producto se creo correctamente!')
                MostrarProductos();
                document.getElementById('agregarTitulo').value = "";
                document.getElementById('agregarPrecioPesos').value = "";
                document.getElementById('agregarPrecioDolar').value = "";
                document.getElementById('agregarFecha').value = "";
            }else {
                alert('No se pudo crear el producto!')
            }
        }
    )
    .catch(error => console.error('Error:', error));
}


//Seleccion de fila a modificar
function SeleccionarFila(fila){
    let filas = document.querySelectorAll('#contenidoTabla tr');

    filas.forEach(f => f.classList.remove('filaSeleccionada'));

    fila.classList.add('filaSeleccionada');

    let celdas = fila.getElementsByTagName('td');
    
    document.getElementById('modificarId').value = celdas[0].textContent;
    let idMod = document.getElementById('modificarId').value 


    fetch(urlBase).then(response => response.json())
    .then(producto =>{
        for(let i=0; i<producto.length;i++){
            if(producto[i].idcod == idMod){
                document.getElementById('modificarTitulo').value = producto[i].idcod;
                document.getElementById('modificarTitulo').value = producto[i].titulo;
                document.getElementById('modificarPrecioPeso').value = producto[i].precioPeso;
                document.getElementById('modificarPrecioDolar').value = producto[i].precioDolar;
                document.getElementById('modificarFecha').value = producto[i].fecha;
            }else{
                console.log("Hola")
            }
        }
    })
}


//Modificar articulo seleccionado
function ModificarProducto(){    

    if (document.getElementById('modificarId').value === ""){
        alert('Debe seleccionar un producto de la lista!');
    }   

    let producto = {    
        idcod : document.getElementById('modificarId').value,   
        titulo: document.getElementById('modificarTitulo').value,
        precioPeso: document.getElementById('modificarPrecioPeso').value,
        precioDolar: document.getElementById('modificarPrecioDolar').value,
        fecha: document.getElementById('modificarFecha').value
    };   

    fetch(urlBase, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if (data.trim() === 'OK') {
            alert('El producto se modificó correctamente!');
            MostrarProductos();
            document.getElementById('modificarId').value = "";
            document.getElementById('modificarTitulo').value = "";
            document.getElementById('modificarPrecioPesos').value = "";
            document.getElementById('modificarPrecioDolar').value = "";
            document.getElementById('modificarFecha').value = "";
        } else {
            alert('No se pudo modificar el producto!');
        }
    })
    .catch(error => console.error('Error:', error));
}


//Eliminar articulo seleccionado
function EliminarProducto(id){ 
    
    if (!confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        return;
    }   

    fetch(urlBase, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify({
            idcod : id
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if (data.trim() === 'OK') {
            alert('El producto se eliminó correctamente!');
            MostrarProductos();
            document.getElementById('modificarId').value = "";
            document.getElementById('modificarTitulo').value = "";
            document.getElementById('modificarPrecioPesos').value = "";
            document.getElementById('modificarPrecioDolar').value = "";
            document.getElementById('modificarFecha').value = "";
        } else {
            alert('No se pudo eliminar el producto!');
        }
    })
    .catch(error => console.error('Error:', error));   
}

