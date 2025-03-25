//Suma
function sumar(num1, num2) {
    return num1 + num2;
}
//Resta
function restar(num1, num2) {
    return num1 - num2;
}
//Multiplicacion
function multiplicar(num1, num2) {
    return num1 * num2;
}
//Division
function dividir(num1, num2) {
    if (num2 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return num1 / num2;
}