let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste el numero es : ${numeroUsuario} `);
}else{
    alert('lo siento no acertaste')
}