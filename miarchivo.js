const personas = [
    {nombre: 'Narnia', isbn: 9789507322310, local: 'Cuspide'},
    {nombre: 'Juego de Tronos', isbn: 9789506442279, local: 'Yenny'},
    {nombre: 'Eragon', isbn: 9788496940581, local: 'Yenny'},
    {nombre: 'El Señor de los Anillos', isbn: 9789505470679, local: 'Cuspide'},
]

const formulario = document.querySelector('#formulario');
const boton1 = document.querySelector('#boton1');
const resultado = document.querySelector('#resultado');

const filtrar = () => {

    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();

    for (let persona of personas) {
        let nombre = persona.nombre.toLowerCase();
        if (texto == "narnia") {
            resultado.innerHTML = `<section class="titulos--1">
                                    <div class="cardflexrow">
                                        <div class="cardflexrow--transicion">
                                            <img src="Imagenes/Narnia.jpg" width="350" alt="Narnia" title="Narnia">
                                        </div>
                                    </div>
                                    <h2> Producto: ${personas[0].nombre} </h2>
                                    <h2> Local: ${personas[0].local} </h2>
                                    <h2> ISBN: ${personas[0].isbn} </h2>
                                    </section>`;
            document.body.appendChild(resultado);
        }
        if (texto == "juego de tronos") {
            resultado.innerHTML = `<section class="titulos--1">
                                    <div class="cardflexrow">
                                        <div class="cardflexrow--transicion">
                                            <img src="Imagenes/Juego de Tronos.jpg" width="350" alt="JuegodeTronos" title="Juego de Tronos">
                                        </div>
                                    </div>
                                    <h2> Producto: ${personas[1].nombre} </h2>
                                    <h2> Local: ${personas[1].local} </h2>
                                    <h2> ISBN: ${personas[1].isbn} </h2>
                                    </section>`;
            document.body.appendChild(resultado);
        }
        
        if (texto == "eragon") {
            resultado.innerHTML = `<section class="titulos--1">
                                    <div class="cardflexrow">
                                        <div class="cardflexrow--transicion">
                                            <img src="Imagenes/Eragon.jpg" width="350" alt="Eragon" title="Eragon">
                                        </div>
                                    </div>
                                    <h2> Producto: ${personas[2].nombre} </h2>
                                    <h2> Local: ${personas[2].local} </h2>
                                    <h2> ISBN: ${personas[2].isbn} </h2>
                                    </section>`;
            document.body.appendChild(resultado);
        }
        
        if (texto == "el señor de los anillos") {
            resultado.innerHTML = `<section class="titulos--1">
                                    <div class="cardflexrow">
                                        <div class="cardflexrow--transicion">
                                            <img src="Imagenes/El señor de los anillos.jpg" width="350" alt="Elseñordelosanillos" title="El Señor de los Anillos">
                                        </div>
                                    </div>
                                    <h2> Producto: ${personas[3].nombre} </h2>
                                    <h2> Local: ${personas[3].local} </h2>
                                    <h2> ISBN: ${personas[3].isbn} </h2>
                                    </section>`;
            document.body.appendChild(resultado);
        }
    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML = `<h3>Sin Resultados</h3>`;
    }
}

boton1.addEventListener('click', filtrar)


$("img").fadeOut("slow", function(){
    $("img").fadeIn("slow");
}); 

