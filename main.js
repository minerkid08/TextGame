function mouseClick(event){
    try{
        let a = new Renderer();
        a.drawText("e", 0, 0);
        a.drawText("e", 1, 0);
        a.drawText("eee", 0, 1);
    }catch(e){
        alert(e + " : " + e.stack);
    }
}

document.onload = function(){
    try{
        
    }catch(e){

    }
}

class Renderer{
    constructor(){
        this.canvas = document.getElementById("board");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "30px Courier New";
    }
    drawText(char, x, y, color){
        this.ctx.fillText(char, x * 30, y * 30);
    }
}