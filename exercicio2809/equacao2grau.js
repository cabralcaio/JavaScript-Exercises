/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */

function equacao (a,b,c){
    const delta = b*b - 4 * a * c;
    const xNegativo = (-b - Math.sqrt(delta)) / 2 * a;
    const xPositivo = (-b + Math.sqrt(delta)) / 2 * a;
    return console.log("x' = " + xPositivo + " x'' = " + xNegativo)
}
equacao(1,-1,-12);