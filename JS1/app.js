// 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

// 👉 Crear una función que acepte ese array como parámetro. 

// Dentro de la función, debemos lograr lo siguiente: 
// 👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
// 👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
// 👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
// Los ingredientes impares son: (ingredientes en array impares)."

const INGREDIENTES = ["queso", "aceitunas", "oregano", "tomate", "rucula", "morron", "jamon", "calabresa", "palmitos","huevo"];

const CONTARINGREDIENTES = () => {
    const INGREDIENTESPARES = [];
    const INGREDIENTESIMPARES = [];

    for(let i = 0; i < INGREDIENTES.length; i++){
        // const CONTADOR_INGREDIENTES = INGREDIENTES[i].length;

        if(INGREDIENTES[i].length % 2 === 0){
            INGREDIENTESPARES.push(INGREDIENTES[i]);
        }
        else{
            INGREDIENTESIMPARES.push(INGREDIENTES[i]);
        }
    }
    console.log(`Los ingredientes pares son: ${INGREDIENTESPARES} y 
    los ingredientes imapares son: ${INGREDIENTESIMPARES}` ); 
}
CONTARINGREDIENTES()