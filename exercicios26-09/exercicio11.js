//11. Leia um número binário e transforme-o em decimal

let decimal = parseInt(prompt("Insira um número decial para converter pra binário: "));
let binario = [];

while (decimal != 1 || decimal != 0) {
   decimal = decimal / 2
   if (decimal % 2 == 0) {
        binario.push(0);
   } else {
         binario.push(1);
   }
}

alert("muero binario igual a" + binario)