// Actividad 2 javascript

// Crear una variable llamada mes y que tenga asignado por defecto el valor 10
var mes = 10

/*Crear un programa que verifique si el valor de mes está entre 12 y 2 (12, 1 o 2),
 entonces que imprima en pantalla “es invierno”, si el valor de mes está entre 3 y 5,
 que imprima en pantalla “es primavera”, si el valor de mes se encuentra entre 6 y 8 que imprima en pantalla “es verano” 
y si se encuentra entre 9 y 11 que imprima en pantalla “es otoño”.*/

if (mes == 12 || mes <= 2) {
    console.log('es invierno');
} else if (mes <= 5) {
    // aqui abarace 3,4 y 5
    console.log('es primavera');
} else if (mes <= 8) {
    // aqui abarace 6,7 y 9
    console.log('es verano');
} else {
    console.log('es otoño”')
    // aqui abarace 9,10 y 11
}

/* Al finalizar debe imprimir en pantalla un mensaje que indique su número de carné y su nombre completo. */
console.log("numero de carnet: 06140047  nombre completo: Juan Francisco Jose Marroquin")

