function Nave(context, teclado, imagem){
    this.context = context;
    this.teclado = teclado;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
}
Nave.prototype = {
    atualizar: function(){
        if(this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0)
            this.x -= this.velocidade;
        
        if(this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - (this.imagem.width + 11))
            this.x += this.velocidade;

        if(this.teclado.pressionada(SETA_ACIMA) && this.y > 0)
            this.y -= this.velocidade;

        if(this.teclado.pressionada(SETA_ABAIXO) && this.y < this.context.canvas.height - this.imagem.height)
            this.y += this.velocidade;
    },
    desenhar: function(){
        this.context.drawImage(this.imagem, this.x, this.y, this.imagem.height, this.imagem.height);
    },
    //Não esquecer da vírgula quando for criar outro método
    atirar: function(){
        var t = new Tiro(this.context, this);
        this.animacao.novoSprite(t);
    }
}