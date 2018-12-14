function Bola(context){
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.velX = 0;
    this.velY = 0;

    //Atributos de desenho padrão
    this.cor = 'black';
    this.raio = 10;
}
Bola.prototype = {
    atualizar: function(){
        // var ctx = this.context;

        // if(this.x < this.raio || this.x > ctx.canvas.width - this.raio)
        //     this.velX *= -1;

        // if(this.y < this.raio || this.y > ctx.canvas.width - this.raio)
        //     this.velY *= -1;

        this.x += this.velX;
        this.y += this.velY;
    },
    desenhar: function(){
        var ctx = this.context;

        //Guardar configurações atuais do contexto
        ctx.save();

        //Configurar o contexto de acordo com a bola
        ctx.fillStyle = this.cor;

        //Desenhar
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio, 0, 2*Math.PI, false);
        ctx.fill();

        //Voltar às configurações anteriores
        ctx.restore();
    }
}