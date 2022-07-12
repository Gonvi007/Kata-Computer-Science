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

function agregar (evt){
    // console.log(evt.target);
    // alert(1);

    evt.preventDefault();
    console.log(evt.target);
    let nombre = document.querySelector("#nombre").ariaValueMax;
    let anio = document.querySelector("#anio").ariaValueMax;
    let foto = document.querySelector("#foto").ariaValueMax;

}