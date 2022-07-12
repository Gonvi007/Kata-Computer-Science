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

document.querySelector("#peliculas-form").addEventListener("submit",agregar);

let peliculas = 0;
function agregar(evt){
    // console.log(evt.target);
    // alert(1);

    evt.preventDefault(); // Esto es lo mimo que hacer ...
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
    
    alert(`Pelicula guardada: ${peliculas.length}`);


}

function dibujar () {
    // Voy a recorrer el array peliculas
    /* 
    for(let i = 0; i<peliculas.length; i++){
    }

    for(let n in peliculas) {
        console.log(peliculas[n]);
        document.querySelector("#resultados").innerHTML += 
        `<div class="cpñ-4">
            <div class="card mb-4">
                <img src="${peliculas[n].caratula}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${peliculas[n].titulo}</h5>
                    <p class="card-text">${peliculas[n].fecha}></p>

                </div>
            </div>
        
        </div>`;
    }
    */

   for(let n in peliculas) {
    console.log(peliculas[n]);
   }
}