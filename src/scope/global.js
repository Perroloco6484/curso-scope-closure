//Variables 

var a; //declarando
var b = "b"; // declaramos y asignamos 
b = "bb" // reasignacion 
var a = "aa"; // redeclaracion 

// global scope 
// aquellas variables declaradas en la parte superior del documento que no esten en bloque son globales

var fruit = "Apple"; // global 

function bestFruit() {
    console.log(fruit)
}

bestFruit();

//NOTA: cuando no declaramos una variable si no solo la asignamos se vuelve global 

function countries() {
    country = "Colombia"; // Global, aca solo lo asignamos mas no la declaramos entonces se vuelve global
    console.log(country);
}

countries();
console.log(country);
