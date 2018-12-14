//Função construtora
function Carro(cor, velMax){
    this.cor = cor;
    this.velMax = velMax;
    this.velAtual = 0;
}

//Prototype com os métodos
Carro.prototype = {
    acelerar: function(){
        this.velAtual += 10;
    }
}