function setup() {
   createCanvas(400,400);
   background(0);
   colorMode( HSB, 360, 100, 100 );
}


function draw() {
   translate(width / 2, height / 2);
   
   let v = createVector(random(-400, 400) , random(-400, 400));
   
   strokeWeight(random(2));
   stroke(random(360), 360, 100);
   line(0 ,0, v.x, v.y);
}
