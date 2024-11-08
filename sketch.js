let flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  angleMode(DEGREES);
  // Inicia com uma flor
  flowers.push(new Flower(random(width), random(height)));
}

function draw() {
  background(30, 30, 50);
  
  // Adiciona novas flores a cada intervalo
  if (frameCount % 60 === 0 && flowers.length < 10) {
    flowers.push(new Flower(random(width), random(height)));
  }
  
  // Atualiza e desenha as flores
  for (let flower of flowers) {
    flower.grow();
    flower.display();
  }



}

function mousePressed() {
    flowers.push(new Flower(mouseX, mouseY));
  }
  

// Classe Flower para criar flores
class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 0;
    this.maxSize = random(50, 100);
    this.petalCount = int(random(6, 12));
    this.colors = [
      color(255, 100, 100, 150),
      color(255, 150, 150, 150),
      color(255, 200, 200, 150)
    ];
  }
  
  grow() {
    if (this.size < this.maxSize) {
      this.size += 0.5;
    }
  }
  
  display() {
    push();
    translate(this.x, this.y);
    for (let i = 0; i < this.petalCount; i++) {
      let col = this.colors[i % this.colors.length];
      fill(col);
      ellipse(0, this.size / 2, this.size / 2, this.size);
      rotate(360 / this.petalCount);
    }
    pop();
  }
}
