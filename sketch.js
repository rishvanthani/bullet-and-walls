
var wall1, wall2, thickness1, thickness2
var bulletweight1, bulletweight2
var bulletspeed1, bulletspeed2
var bullet1, bullet2
var damage1, damage2

function setup() {

 
  createCanvas(1700,700);


 thickness1 = random(22,83);
 thickness2 = random(22,83);


 bulletweight1 = random(30,52);
 bulletweight2 = random(30,52);

 
 bulletspeed1 = random(200,300);

 bulletspeed2 = random(200,300);


 damage1 = (0.5*bulletspeed1*bulletspeed1*bulletweight1)/(thickness1*thickness1*thickness1);
 damage2 = (0.5*bulletspeed2*bulletspeed2*bulletweight2)/(thickness2*thickness2*thickness2);
 
 wall1 = createSprite(1600,200,thickness1,250)
 wall1.shapeColor = "brown"
 wall2 = createSprite(1600,500,thickness2,250)
 wall2.shapeColor = "brown"


 bullet1 = createSprite(50,100,100,10);
 bullet1.velocityX = bulletspeed1;
 bulletspeed1.shapeColor = "grey";

 bullet2 = createSprite(50,500,100,10);
 bullet2.velocityX = bulletspeed1;
 bulletspeed2.shapeColor = "grey";






}

 function draw() 
{
  background(0);  


  if(wall1.x - bullet1.x <= (wall1.width + bullet1.width)/2)
  {
    bullet1.velocityX = 0
    if(damage1 > 10)
    {
      wall1.shapeColor = "red"
    }

    if (damage1 < 10)
    {
      wall1.shapeColor = "green"
    }
  }

 
  if(wall2.x - bullet2.x <= (wall2.width + bullet2.width)/2)
  {
    bullet2.velocityX = 0
    if(damage2 > 10)
    {
      wall2.shapeColor = "red"
    }

    if (damage2 < 10)
    {
      wall2.shapeColor = "green"
    }
  }
  drawSprites();
 } 