// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior.

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón.

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.




const inputNum = document.querySelector("#inputNum")
const title = document.querySelector("#title")
const precio = document.querySelector("#precio")
const buscar = document.querySelector("#buscar")




function filtrarPizzas() {
    let data = inputNum.value

    pizzas.map(pizza => {
        if (data == pizza.Id) {
            title.textContent += pizza.Nombre
            precio.textContent += pizza.Precio
        }
    })
}

buscar.addEventListener("click", filtrarPizzas)