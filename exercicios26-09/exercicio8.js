// 8. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de
// cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo
// usuário).

const latao = prompt("Indique a quantidade de latão desejada: ");
const cobre = latao * 0.7;
const zinco = latao * 0.3; 

alert(`Será necessário ${cobre} de cobre e ${zinco} de zinco`);