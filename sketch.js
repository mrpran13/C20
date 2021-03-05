var mRect,fRect



function setup() {
  createCanvas(800,400);
 fRect= createSprite(400, 200, 50, 50);
 fRect.shapeColor="blue";
 mRect= createSprite(100, 100, 20, 60);


 mRect.shapeColor="blue";
}
function draw() {
  background(0);
  mRect.x =mouseX
  mRect.y=mouseY
  console.log(fRect.x-mRect.x)

  if(mRect.y-fRect.y <mRect.height/2+fRect.height/2 && fRect.y-mRect.y<mRect.height/2+fRect.height/2 && mRect.x-fRect.x <mRect.width/2+fRect.width/2 && fRect.x-mRect.x<mRect.width/2+fRect.width/2){
    mRect.shapeColor="green";
    fRect.shapeColor="green";
  }
else{
  fRect.shapeColor="blue";
  mRect.shapeColor="blue";
}
  drawSprites();
}