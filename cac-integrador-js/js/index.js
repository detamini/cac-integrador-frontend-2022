
const valorTicket = 200;
const DTO_ESTUDIANTE = 0.80;
const DTO_TRAINEE = 0.50;
const DTO_JUNIOR = 0.15;
const inputCantidad = document.getElementById("inputCant");
const pTotal = document.getElementById("montoTotal");
const btnResumen = document.getElementById("btnResumen");
const btnBorrar = document.getElementById("btnBorrar");
const selectCategoria = document.getElementById("selectCategoria");


function valorTotal() {    
    let cantidad = inputCantidad.value;
    let categoria = selectCategoria.value;
    let monto = cantidad * valorTicket;
    if (categoria == "Estudiante") {
    monto = monto - (monto*DTO_ESTUDIANTE);
    pTotal.innerHTML = `Total a pagar: $ ${monto}`;        
    } else if (categoria == "Trainee") {
        monto = monto - (monto*DTO_TRAINEE);
        pTotal.innerHTML = `Total a pagar: $ ${monto}`;        
    } else if (categoria == "Junior") {
        monto = monto - (monto*DTO_JUNIOR);
        pTotal.innerHTML = `Total a pagar: $ ${monto}`;        
    } 
}

function borrar() {
    pTotal.innerHTML = `Total a pagar: $ `;
}

btnResumen.onclick = valorTotal;
btnBorrar.onclick = borrar;


