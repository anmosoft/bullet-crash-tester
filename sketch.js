
var bullet,wall;

var speed,weight,thickness;

var damage;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet=createSprite(50,200,30,10);
  

  bullet.velocityX=speed;
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
  	bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
    	wall.shapeColor="green";
    }
      if(damage>10){
    	wall.shapeColor="red";
    }

  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}