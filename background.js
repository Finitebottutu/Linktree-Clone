let canvas;
const blobs = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-container');
  noStroke();
  for (let i = 0; i < 300; i++) {
    blobs.push(new Blob());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  blobs.forEach(function(blob, i) {
    blobs[i].show().walk().checkPos(mouseX, mouseY);
  });
}

class Blob {
  constructor() {
    this.x = width;
    this.y = height;
    this.acc = random(10, 1500);
    this.colors = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
      a: 20
    };
    this.diam = random(2);
    this.positionTo = [random(-width/2, width + width/2), random(-height/2, height + height/2)];
  }
  
  show() {
    fill(this.colors.r, this.colors.g, this.colors.b, this.colors.a);
    ellipse(this.x, this.y, this.diam, this.diam);
    return this;
  }
  
  walk() {
    this.diam += this.diam/60;
    this.colors.a += this.colors.a/3;
    this.acc -= this.acc/20;
    if ((this.x !== this.positionTo[0]) && !!this.x) this.x += (this.positionTo[0] - this.x) / this.acc;
    if ((this.y !== this.positionTo[1]) && !!this.y) this.y += (this.positionTo[1] - this.y) / this.acc;
    return this;
  }
  
  checkPos(x, y) {
    if ((this.x > width || this.x < 0 || this.y > height || this.y < 0) ||
        (Math.abs(this.x - this.positionTo[0]) < 100) &&
        (Math.abs(this.y - this.positionTo[1]) < 100)) {
      this.x = x || width/2;
      this.y = y || height/2;
      this.acc = random(10000, 15000);
      this.diam = random(2);
      this.colors = {
        r: random(100, 255),
        g: random(100, 255),
        b: random(100, 255),
        a: 20
      };
      this.positionTo = [random(-width/2, width + width/2), random(-height/2, height + height/2)];
    }
  }
}