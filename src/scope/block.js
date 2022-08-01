// de esta forma solo se imprimiria el valor de var apples
function fruits() {
    if (true) {
        var fruit1 = "Apple"; // funcion scope
        let fruit2 = "Kiwi"; // block scope
        const fruit3 = "Banana"; // block scope 
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

// de esta forma si podriamos imprimir todos los valores

function fruits() {
    if (true) {
        var fruit1 = "Apple"; // funcion scope
        let fruit2 = "Kiwi"; // block scope
        const fruit3 = "Banana"; // block scope 
        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);
}

fruits();