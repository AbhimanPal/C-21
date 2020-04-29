var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600, 400);
  speed=floor(random(30,52));
  weight=floor(random(223,321));
  thickness = floor(random(22,83))
  //bullet=new Bullet(weight,speed)
  wall=createSprite(1500,200, 60, 400);
  wall.shapeColor=color(80,80,80)
  bullet = createSprite(10,200,50,70);
  bullet.shapeColor = "white"
}


function draw() {
  background(0);  
  bullet.collide(wall,deformation)
  bullet.velocityX = 20;
  //deformation();
  //bullet.shapeColor = "white"
  textSize(100)
  text( "WMSC",800,200)
  drawSprites();
 
}

function deformation()
{
	
  var def=(0.5 *weight * speed * speed) /(thickness*thickness*thickness);
  console.log(def);
	if(def>10)
	{
		bullet.shapeColor= "green"
	}
	

	if(def<10)
	{
		bullet.shapeColor="red"
	}

}
