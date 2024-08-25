class Pessoa {
    nome: string;
    sobreNome: string;

    constructor(seuNome: string, seuSobreNome: string) {
        this.nome = seuNome;
        this.sobreNome = seuSobreNome;
    }
}

function giveGreeting(seuNome: string, seuSobreNome: string): string {
        return `Seja Bem-vindo ${seuNome} ${seuSobreNome}`
}

console.log(giveGreeting('Gabriel', 'Lucas'));