// Alcance de funcion
function greeting() {
    let userName = "Ana"; //Declaramos y asignamos una variable a nivle del bloque de la funcion
    console.log(userName)

    if (userName == "Ana") {
        console.log(`Hello ${userName}!`)
    }
}
//nota puede ser declarado con let, const o var pero el problema de var es que puede ser reasginada por si algo.

greeting();
// saldra un erro de que userName no esta definido porque no hay scope de esa variable 
console.log(userName);