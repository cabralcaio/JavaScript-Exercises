//4. Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante

const vogal = "aeiou";
let ehVogal = false;
const letra = prompt("Insira somente uma letra");

for(let i = 0; i < vogal.length; i++) {
    if (letra.toLowerCase() == vogal[i]) {
    ehVogal = true;
    }
}
console.log(ehVogal)
if(ehVogal) {
    alert("A letra digitada é uma vogal")
} else {
    alert("A letra digitada é uma consoante")
}