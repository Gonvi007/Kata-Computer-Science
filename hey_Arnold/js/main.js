fetch("https://hey-arnold-api.herokuapp.com/api/v1/characters")
    .then((response) => response.json())
    .then((data) => {
        dibujar(data);
    })



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
    let div = document.createElement("div");
    div.classList.add("column", "is-3");
    
    div.innerHTML = `<div class="card">
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

                    </div>`;
}