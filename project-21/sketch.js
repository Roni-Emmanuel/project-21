var canvas;
var music;
var block1,block2,block3,block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(200,200,80,80);
    block1.shapeColor = "blue";
    block2 = createSprite(300,200,80,80);
    block2.shapeColor = "green";
    block3 = createSprite(400,200,80,80);
    block3.shapeColor = "red";
    block4 = createSprite(500,200,80,80);
    block4.shapeColor = "yellow";
    // creating a ball for the game
    ball = createSprite(random(20,750));
    ball.shapeColor = "white";
    
   

    //create box sprite and give velocity
    

     

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    //createEdgeSprites();
    //ball.bounceOff(edge);

    //add condition to check if box touching surface and make it box
 
    
  if (block1.isTouching(ball) && ball.bounceOff(block1)){
     // change the color of the block1
     ball.shapeColor = "blue";
     playSound("music");
  }
   // need to stop the ball if the ball touches the block2
  if (block2.isTouching(ball) && ball.bounceOff(block2)){
     // change the color of the block1
     ball.shapeColor = "green";
     ball.velocityX = 0;
     music.stop();
  }
  
  if (block3.isTouching(ball) && ball.bounceOff(block3)){
    // change the color of the block1
   ball.shapeColor = "red"
    playSound("music");
 } 
 
 if (block4.isTouching(ball) && ball.bounceOff(block4)){
    // change the color of the block1
    ball.shapeColor = "yellow";
    playSound("music");
 }





}
