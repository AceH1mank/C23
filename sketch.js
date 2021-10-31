const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var playArcher
//var playerArcherImg


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
 // playerArcherImg = loadImage("./assets/playerArcher.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(windowWidth, windowHeight);


  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playArcher = new PlayerArcher(340,240,180,150);

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
//  image(playerArcherImg,playerArcher.position.x,playerArcher.position.y,180,150);
  playArcher.show();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}




