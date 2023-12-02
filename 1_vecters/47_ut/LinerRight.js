class LinerRight{
    constructor(x,y){
        this.pos=createVector(x,y);
    }
    update(){
        this.pos.x=this.pos.x+0.5;
    }
    show(){
        stroke(255,100);
        strokeWeight(5);
        point(this.pos.x,this.pos.y);
    }
}