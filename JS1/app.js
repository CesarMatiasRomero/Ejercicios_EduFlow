// 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

// 👉 Crear una función que acepte ese array como parámetro. 

// Dentro de la función, debemos lograr lo siguiente: 
// 👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
// 👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
// 👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
// Los ingredientes impares son: (ingredientes en array impares)."

const Ingredientes = ["queso", "aceitunas", "oregano", "tomate", "rucula", "morron", "jamon", "calabresa", "palmitos","huevo"];

const ContarIngredientes = () => {
    const IngredientesPares = [];
    const IngredientesImpares = [];

    for(let i = 0; i < Ingredientes.length; i++){
        

        if(Ingredientes[i].length % 2 === 0){
            IngredientesPares.push(Ingredientes[i]);
        }
        else{
            IngredientesImpares.push(Ingredientes[i]);
        }
    }
    console.log(`Los ingredientes pares son: ${IngredientesPares} y 
    los ingredientes imapares son: ${IngredientesImpares}` ); 
}
ContarIngredientes()