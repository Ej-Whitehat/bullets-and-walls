var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,600);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50, 300, 25, 5);
  bullet.velocityX=speed;
  wall = createSprite(700,300,thickness,300);
  wall.shapeColor=(80,80,80);
  bullet.depth=wall.depth+1;
}

function draw() {
  background(0,0,0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false
}