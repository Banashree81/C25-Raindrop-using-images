var rainDrops = [];
var babyDrops = []


function setup() {
  createCanvas(800,400);
  for(var i = 0; i < 300; i++){
    rainDrops.push(new Raindrop());
 }
 for(var i = 0; i < 300; i++){
  babyDrops.push(new Babydrop());
}
}
  


function draw() {
  background(255,255,255);  
  displayRaindrops(); 
  
  //console.log(rainDrops.length);
   
}

function displayRaindrops(){
 for(var i = 0; i < 300; i++){
    rainDrops[i].display();
    rainDrops[i].fall();
  }

  for(var i = 0; i < 300; i++){
    babyDrops[i].display();
    babyDrops[i].fall();
  }
}