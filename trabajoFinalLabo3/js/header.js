document.write(`
        <header>
        <div class="logo">            
        </div>        
        <div class="contenedorBuscador">
            <input id="parametro" type="text">
            <button id="botonBuscar" onclick="Buscar()">Buscar</button>
        </div>        
        <nav id="navHeader">
            <a href="#inicio">Inicio</a>
            <a href="#nuestrosProductos" onclick="DesplegarMenuProductos()">Productos</a>
            <a href="seccion/nosotrosHtml.html" target="_blank" >Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="seccion/administracionHtml.html" target="_blank" >Login</a>            
        </nav>
        <div class="menuHambur" id="botonMenu" onclick="DesplegarMenuHam()"></div>
        <nav id="navHambur" class="navHamburCerrado" onmouseleave="CerrarMenuHam()">
            <a href="#inicio">Inicio</a>
            <a href="#nuestrosProductos" onclick="DesplegarMenuProductos()">Productos</a>
            <a href="seccion/nosotrosHtml.html" target="_blank">Nosotros</a>
            <a href="#contacto">Contacto</a> 
            <a href="seccion/administracionHtml.html" target="_blank" >Login</a>
        </nav>        
        <nav id="navProductos" class="navProductosCerrado" onmouseleave="CerrarMenuProductos()">
            <a href="">Egresados</a>
            <a href="">Deportiva</a>
            <a href="">Institucional</a>           
        </nav>
    </header>
    `)