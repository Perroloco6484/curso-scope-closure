var firstName; // valor undefined 
firstName = "Oscar" ; //asignamos ahora si tiene un valor 
console.log(firstName);

var lastName = "David"; // declarar / asignar
lastName = "Ana"; // reasignar 
console.log(lastName);

var secondName = "David"; // declarando / asignando
var secondName = "Ana"; // reasignado 
console.log(secondName);

// let 
let fruit = "Apple"; // declarar y asignar 
fruit = "Kiwi" //reasignar 

 // let fruit = "banana" // redeclaracion  con let ya no se puede redeclarar 
console.log(fruit)

//Const 
const animal = "dog"; // declara y asigna
// animal = "cat"; // no se puede reasignar porque es una constante
// menos redeclarar 
console.log(animal);

//problemas con la inmutabilidad podemos "modificar " una variable const con elementos de arrays por ejemplo
const vehicles = [];
vehicles.push("Carrito");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
