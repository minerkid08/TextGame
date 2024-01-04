function mouseClick(event){
    try{
        let a = new Renderer();
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
        this.ctx.fillText("Hello World", 10, 50);
    }
}