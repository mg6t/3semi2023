const w = 570;
const h = 360;
const wDiv = 285;
const hDiv = 180;
const nStep = 0.005;

function setup() {
  createCanvas(w, h);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop();
}

function draw() {

  let cellW = w / wDiv;
  let cellH = h / hDiv;
  let baseHue = random(360);

  background(0, 0, 0, 100);
  noStroke();

  for (let x = 0; x < w; x += cellW) {
    let nX = x * nStep;
    for (let y = 0; y < h; y += cellH) {
      let nY = y * nStep;

      let d = dist(x, y, w * 0.5, h * 0.5);
      let angle = atan2(y - h * 0.5, x - w * 0.5);

      let nP = cos(angle * 5) * 5 + sin(dist(x, y, w * 0.5, h * 0.5) / w * HALF_PI) * 5;
      //let nP = (cos(nX * 2) + sin(nY))*5 +sin(dist(x, y, w * 0.5, h * 0.5) / w * HALF_PI) * 5;
      let nValH = noise(10+nP, nX, nY);
      let nValS = noise(20+nP, nX, nY);
      let nValB = noise(30+nP, nX, nY);
      let nHue = (baseHue + nValH * 240) % 360;
      let nSat = 30 + 60 * nValS;
      let nBri = 20 + 80 * nValB;

      fill(nHue, nSat, nBri, 100);
      rect(x, y, cellW, cellH);
    }
  }

}

function mouseClicked() {
  let dt = new Date();
  noiseSeed(dt.getTime());
  redraw();
}
