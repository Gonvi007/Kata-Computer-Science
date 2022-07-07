function precioTotal() {
    let par = parseInt(document.querySelector("#pares").value);
    let precio = parseInt(document.querySelector("#precio").value);
    // let total = 0;

    return precio * par;
}

document.querySelector("#calcular-boton").addEventListener("click",darPrecio);

function darPrecio() {
    let costoTotal = precioTotal();
    document.querySelector("#total").innerHTML='<div class="mt-5 is-size-3 notification is-success is-light">El costo de tus zapatos <b>$'+costoTotal+'</b><div>'
}