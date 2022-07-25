let resuladosBusqueda=[];

fetch("https://hey-arnold-api.herokuapp.com/api/v1/characters",{
})
.then((response)=>response.json())
.then((data)=>{
    resuladosBusqueda = data;
    dibujar(resuladosBusqueda);
})

const buscar = (evt) =>{
    let nombre = evt.currentTarget.value;

    let filtrados = resuladosBusqueda.filter(function(resultado){
        return resultado.name.toLowerCase().includes(nombre.toLowerCase());
    });

    dibujar(filtrados);

}

/* <div class="column is-3">
    <div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
              <img src="https://vignette.wikia.nocookie.net/heyarnold/images/6/62/Nancy.jpg" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <p><b>Nombre</b></p>
            <p>ID</p>
            <p>Descripción</p>
        </div>

    </div>
</div> */

// function dibujar () {}
const dibujar = (personajes) => {
    document.querySelector("#resultadoPersonajes").innerHTML="";
    
    personajes.forEach(personaje => {
        /* Lectura de cada personaje */
        let div = document.createElement("div");
        div.classList.add("column", "is-3");

        div.innerHTML += `  <div class="card" data-id="${personaje._id}">
                                <div class="card-image">
                                    <figure class="image is-3by5">
                                    <img src="${personaje.image}" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <p><b>${personaje.name}</b></p>
                                    <p>Descripción</p>
                                </div>

                            </div>`;

    document.querySelector("#resultadoPersonajes").append(div);
    });

}

document.querySelector("#busqueda").addEventListener("keyup", buscar);