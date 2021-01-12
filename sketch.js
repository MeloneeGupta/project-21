var canvas;
var block1,block2,block3,block4;
var cube;

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    block1=createSprite(70,500,150,25);
    block1.shapeColor=("orange");
    block2=createSprite(260,500,150,25);
   block2.shapeColor=("pink");
    block3=createSprite(450,500,150,25);
   block3.shapeColor=("blue");
    block4=createSprite(640,500,150,25);
   block4.shapeColor=("black");

   cube=createSprite(360,300,30,30);
   cube.shapeColor=("white");


  cube.velocityX=-5;
  cube.velocityY=-5;


}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    createEdgeSprites();
    cube.bounceOff(canvas);

    //add condition to check if box touching surface and make it box

    drawSprites();
}
