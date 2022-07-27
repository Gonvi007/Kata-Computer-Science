let resulados=[];

fetch("https://hey-arnold-api.herokuapp.com/api/v1/characters",{
})
.then((response)=>response.json())
.then((data)=>{
    resulados = data;
    dibujar(resulados);
})

const buscar = (evt) =>{
    let nombre = evt.currentTarget.value;

    let filtrados = resulados.filter(function(resultado){
        return resultado.name.toLowerCase().includes(nombre.toLowerCase());
    });

    dibujar(filtrados);

}

//function dibujar() {
const dibujar = (personajes) => {
  
   document.querySelector("#resultado").innerHTML="";
   
   personajes.forEach((personaje) => {
    /*Cada personaje*/
    let div =document.createElement("div");
    div.classList.add("column", "is-3");
    div.innerHTML +=`<div class="card" data-id="${personaje._id}">
            <div class="card-image">
                <figure class="image is-3by5">
                    <img src="${personaje.image}" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <p><b>${personaje.name}</b></p>
            </div>
        </div>`;
     document.querySelector("#resultado").append(div);
   });
} 

let ordenAZ = document.querySelector('#ordenAZ');

ordenAZ.addEventListener("click", (evt) => {
    evt.preventDefault();
    document.querySelector("#container").value = "";
    resuladosBusqueda.sort(function(a,b){
        return a.name > b.name ? 1 : -1
    })
    dibujar(resuladosBusqueda);
});

let ordenZA = document.querySelector('#ordenZA');

ordenZA.addEventListener("click", (evt) => {
    evt.preventDefault();
    document.querySelector("#container").value = "";
    resuladosBusqueda.reverse();

    dibujar(resuladosBusqueda);
});

document.querySelector("#busqueda").addEventListener("keyup", buscar);
document.querySelector("#busqueda").addEventListener("keyup", buscar);

