
let topping = prompt("¿Que topping te provoca?");
let precio = 0.00;
let helado = 1.90;
let totalHelado = 0.00;

if (topping == "oreo") {
    precio = 1;
} else if (topping == "kitkat") {
    precio = 1.50;
} else if (topping == "brownie") {
    precio = 0.75;
} else if (topping == "lacasitos") {
    precio = 0.95;
} else {
    document.write("no tenemos este topping, lo sentimos. ");
    precio = 0;
}

totalHelado = helado + precio;
document.write("EL precio de tu helado es " + totalHelado.toFixed(2) + " €");
