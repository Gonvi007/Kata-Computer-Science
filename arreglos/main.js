/*
let frutas = ["manzana", "platano", "kiwi"];

frutas [0];
frutas[1].length;

// Push, agrega al final de la lista
frutas.push("limón");


// unshift, agrega al inicio de la lista
frutas.unshift("jicama");

console.clear();

const objeto = {
    name: "Vegeta",
    level: 8000,
    breed: "saiyajin",
    planet: {
        name: "Vegeta",
        population: 0
    },
    habilidades: ["volar", "patadas", "teletransportacion"]
}

console.log(objeto.planet.name);

console.clear();

*/
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// document.querySelector("#boton").addEventListener("click", function(){
//     alert("Diste click en el boton!!")
// })

let peliculas = [];
document.querySelector("#peliculas-form").addEventListener("submit",agregar);

function agregar(evt){
    evt.preventDefault(); // Esto es lo mimo que hacer: document.querySelector("#peliculas-form");
    const {nombre, anio, foto} = evt.target;
    // console.log(evt.target);

    /*
    let nombre = document.querySelector("#nombre").ariaValueMax;
    let anio = document.querySelector("#anio").ariaValueMax;
    let foto = document.querySelector("#foto").ariaValueMax;
    */

   let peli = {
    titulo: nombre.value,
    fecha: anio.value,
    caratula: foto.value
   }


   peliculas.push(peli);
   evt.target.reset();
    //    document.querySelector("#peliculas-form").reset();
    
    // alert(`Pelicula guardada: ${peliculas.length}`);
    dibujar();

}

function dibujar () {
    // Voy a recorrer el array peliculas
    // for(let i = 0; i<peliculas.length; i++){
    // }

    /*
    <div class="col">
        <div class="card">
            <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
    */

    for(let n in peliculas) {
 
        console.log(peliculas[n]);

        document.querySelector("#resultados").innerHTML += `<div class="col">
        <div class="card">
            <img src="${peliculas[n].caratula}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${peliculas[n].titulo}</h5>
                    <p class="card-text">${peliculas[n].fecha}</p>
                </div>
            </div>
        </div>
    </div>`
    }

}