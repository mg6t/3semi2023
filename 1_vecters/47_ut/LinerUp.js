class LinerUp{
    constructor(x,y){
        this.pos=createVector(x,y);
    }
    update(){
        this.pos.y=this.pos.y-1;
    }
    show(){
        stroke(255,100);
        strokeWeight(5);
        point(this.pos.x,this.pos.y);
    }
}