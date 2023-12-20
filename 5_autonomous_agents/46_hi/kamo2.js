let oyaImage;
let koImage;
let carImages = [];
let parent;
let child;
let child2;
let child3;
let cars = [];
let lastCarGenerationTime = 0;
const carGenerationInterval = 1000;

function preload() {
  // Load the images
  oyaImage = loadImage('oya.png');
  koImage = loadImage('ko.png');
  carImages.push(loadImage('car.png'));
}

function setup() {
  createCanvas(640, 480);

  parent = new Vehicle(width / 2, height / 2, oyaImage);
  child = new Vehicle(width / 2, height / 2, koImage);
  child2 = new Vehicle(width / 2, height / 2, koImage);
  child3 = new Vehicle(width / 2, height / 2, koImage);

  for (let i = 0; i < 5; i++) {
    let car = new Vehicle(random(width), height, random(carImages));
    cars.push(car);
  }
}

function draw() {
  background(230);
  let mouse = createVector(mouseX, mouseY);

  for (let car of cars) {
    let distanceToParent = dist(parent.pos.x, parent.pos.y, car.pos.x, car.pos.y);
    let distanceToChild = dist(child.pos.x, child.pos.y, car.pos.x, car.pos.y);
    let distanceToChild2 = dist(child2.pos.x, child2.pos.y, car.pos.x, car.pos.y);

    if (distanceToParent < 70 || distanceToChild < 70 || distanceToChild2 < 70) {
      car.speed = 0;
    } else {
      car.speed = 1;
    }
    car.pos.y -= car.speed;
    car.show();
  }
  if (millis() - lastCarGenerationTime > carGenerationInterval && cars.length < 10) {
    for (let i = 0; i < 5; i++) {
      let car = new Vehicle(random(width), height, random(carImages));
      cars.push(car);
    }
    lastCarGenerationTime = millis(); 
  }

  parent.arrive(mouse);
  parent.update();
  parent.show();

  child.arrive(parent.pos);
  child.update();
  child.show();

  child2.arrive(child.pos);
  child2.update();
  child2.show();
  
  child3.arrive(child2.pos);
  child3.update();
  child3.show();
}
