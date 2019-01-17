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
        this.colisor.novoSprite(t);
    },
    retangulosColisao: function(){
        //Valores serão ajustados aos poucos
        var rets = [
            {x: this.x + 2, y: this.y + 19, largura: 13, altura: 13},
            {x: this.x + 15, y: this.y + 3, largura: 17, altura: 33},
            {x: this.x + 32, y: this.y + 19, largura: 13, altura: 13}
        ];

        //Desenhando os retângulos para visualizacao
        var ctx = this.context;

        // for(var i in rets){
        //     ctx.save();
        //     ctx.strokeStyle = 'yellow';
        //     ctx.strokeRect(rets[i].x, rets[i].y, rets[i].largura, rets[i].altura);
        //     ctx.restore();
        // }

        return rets;
    },
    colidiuCom: function(outro){
        //Se colidiu com um Ovni
        if(outro instanceof Ovni){
            //Fim de jogo
            this.animacao.desligar();
            alert('GAME OVER');
        }
    }
}