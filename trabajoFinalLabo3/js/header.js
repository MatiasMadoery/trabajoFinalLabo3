document.write(`
        <header>
        <div class="logo">  
            <img  id="logo" src="/trabajoFinalLabo3/img/logoCompletoNegro.png" alt="Logo">           
        </div>        
        <div class="contenedorBuscador">
            <input id="parametro" type="text">
            <button id="botonBuscar" onclick="Buscar()">Buscar</button>
        </div>        
        <nav id="navHeader">
            <a href="/trabajoFinalLabo3/index.html">Inicio</a>
            <a href="#nuestrosProductos" onclick="DesplegarMenuProductos()">Productos</a>
            <a href="/trabajoFinalLabo3/seccion/nosotrosHtml.html" target="_blank" >Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="/trabajoFinalLabo3/seccion/administracionHtml.html" target="_blank" >Login</a>            
        </nav>
        <div class="menuHambur" id="botonMenu" onclick="DesplegarMenuHam()"></div>
        <nav id="navHambur" class="navHamburCerrado" onmouseleave="CerrarMenuHam()">
            <a href="/trabajoFinalLabo3/index.html">Inicio</a>
            <a href="#nuestrosProductos" onclick="DesplegarMenuProductos()">Productos</a>
            <a href="/trabajoFinalLabo3/seccion/nosotrosHtml.html" target="_blank">Nosotros</a>
            <a href="#contacto">Contacto</a> 
            <a href="/trabajoFinalLabo3/seccion/administracionHtml.html" target="_blank" >Login</a>
        </nav>        
        <nav id="navProductos" class="navProductosCerrado" onmouseleave="CerrarMenuProductos()">
            <a href="/trabajoFinalLabo3/seccion/productos/egresados.html">Egresados</a>
            <a href="/trabajoFinalLabo3/seccion/productos/deportivo.html">Deportivo</a>
            <a href="/trabajoFinalLabo3/seccion/productos/institucional.html">Institucional</a>           
        </nav>
    </header>
    `)