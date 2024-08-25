"use strict";
class Pessoa {
    constructor(seuNome, seuSobreNome) {
        this.nome = seuNome;
        this.sobreNome = seuSobreNome;
    }
}
function giveGreeting(seuNome, seuSobreNome) {
    return `Seja Bem-vindo ${seuNome} ${seuSobreNome}`;
}
console.log(giveGreeting('Gabriel', 'Lucas'));
