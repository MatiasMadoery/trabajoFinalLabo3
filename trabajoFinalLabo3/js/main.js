function DesplegarMenuHam() 
{
    var desplegarMenu = document.getElementById('navHambur')
    var body = document.body;

    if(desplegarMenu)
    {
        if(desplegarMenu.className == 'navHamburCerrado')
        {
            desplegarMenu.className = 'navHambur';
            body.classList.add('menuAbierto');            
        }
        else
        {
            desplegarMenu.className = 'navHamburCerrado';
            body.classList.remove('menuAbierto');
        }
    } 
}

function CerrarMenuHam() 
{
    var desplegarMenu = document.getElementById('navHambur')
    var body = document.body;

    if(desplegarMenu)
    {
        if(desplegarMenu.className == 'navHambur')
        {
            desplegarMenu.className = 'navHamburCerrado';
            body.classList.remove('menuAbierto');           
        }       
    } 
}

function DesplegarMenuProductos() 
{
    var desplegarMenu = document.getElementById('navProductos')
    var body = document.body;

    if(desplegarMenu)
    {
        if(desplegarMenu.className == 'navProductosCerrado')
        {
            desplegarMenu.className = 'navProductos';
            body.classList.add('menuAbierto');
        } else{
            desplegarMenu.className = 'navProductosCerrado';
            body.classList.remove('menuAbierto');
        }  
    } 
}

function CerrarMenuProductos(){
    var desplegarMenu = document.getElementById('navProductos')
    var body = document.body;

    if(desplegarMenu)
    {
        if(desplegarMenu.className == 'navProductos')
        {
            desplegarMenu.className = 'navProductosCerrado';
            body.classList.remove('menuAbierto');
        }      
    } 
}

function Buscar() {
    let entrada = document.getElementById("parametro");
    let terminoBuscado = entrada.value.toLowerCase();
    
    let secciones = document.querySelectorAll("#contenedor section");
    
    secciones.forEach(seccion => {
        let titulo = seccion.querySelector("h1");
        if (titulo) {
            if (titulo.textContent.toLowerCase().includes(terminoBuscado)) {
                seccion.removeAttribute('style');
            } else {
                seccion.setAttribute('style', 'display: none');
            }
        }
    });
}
