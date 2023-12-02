let walker;
let walker2;
let walker3;
let walker4;
let linerup;
let linerdown;
let linerright;
let linerleft;

function setup(){
    createCanvas(400,400);
    walker=new Walker(100,100);
    walker2=new Walker2(300,300);
    walker3=new Walker3(100,300);
    walker4=new Walker4(300,100);
    linerup=new LinerUp(200,200);
    linerdown=new LinerDown(200,200);
    linerright=new LinerRight(200,200);
    linerleft=new LinerLeft(200,200);
    background(0);
}

function draw(){
    walker.update();
    walker2.update();
    walker3.update();
    walker4.update();
    linerup.update();
    linerdown.update();
    linerright.update();
    linerleft.update();
    walker.show();
    walker2.show();
    walker3.show();
    walker4.show();
    linerup.show();
    linerdown.show();
    linerright.show();
    linerleft.show();
  
}