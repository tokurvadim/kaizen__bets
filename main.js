/* Button setting */

let button = document.getElementById('button');
let aiContainer = document.getElementById('AI_container');
let image = document.getElementById('image');
var console = document.getElementById("console");
const msg = document.querySelector(".msg");
button.addEventListener('click', () => {
    setTimeout(() => {foo();}, 200);
    setTimeout(() => {insertImage();}, 6500);
});

/*function insertImageHTML(imagePath) {
  let container = document.getElementById('container');
  container.innerHTML = <img id="image" src=''></img>
}*/

function foo() {
  var intervalID = window.setInterval(updateScreen, 200);
  image.style.display = 'none';
  button.style.pointerEvents = 'none';
    button.style.opacity = '0.6';
var console = document.getElementById("console");
const msg = document.querySelector(".msg");
msg.style.background = "red";
msg.innerHTML = "SCANNING";
console.style.display = 'block';
msg.style.boxShadow = "0 0 30px red";
msg.style.display = "block";

var txt = [
  "FORCE: XX0022. ENCYPT://000.222.2345",
  "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "BACKDOOR FOUND (23.45.23.12.00000000)",
  "BACKDOOR FOUND (13.66.23.12.00110000)",
  "BACKDOOR FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "BRUTE.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (console.firstChild) {
    console.removeChild(console.firstChild);
  }
  console.appendChild(docfrag); 
}

setTimeout(() => {
  clearInterval(intervalID);
msg.style.background = "limegreen";
msg.innerHTML = "SUCCESS";
msg.style.boxShadow = "0 0 30px limegreen";}, 4000);
setTimeout(() => {msg.style.display = 'none'; console.style.display = 'none';}, 6000);
}

function showAI() {
    aiContainer.style.display = 'block';
    image.style.display = 'none';
    button.style.pointerEvents = 'none';
    button.style.opacity = '0.6';
    aiContainer.style.opacity = 1;
}

/*function hideAI() {
  aiContainer.style.opacity = 0;
}*/

function generateImagePath() {
    let imageNumber = Math.floor(Math.random() * (50 - 1) + 1);
    let imagePath = `fields/${imageNumber}.jpg`
    return imagePath
}

function insertImage() {
    let image = document.getElementById('image');
    image.src = generateImagePath();
    /*aiContainer.style.display = 'none';*/
    image.style.display = 'block';
    button.style.pointerEvents = 'fill';
    button.style.opacity = '1';
}



/* new animation */





/* Canvas */

/*var points = [],
    velocity2 = 5, // velocity squared
    canvas = 
document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  radius = 5,
  boundaryX = 150,
  boundaryY = 150,
  numberOfPoints = 30;

init();

function init() {
  // create points
  for (var i = 0; i<numberOfPoints; i++) {
    createPoint();
  }
  // create connections
  for (var i = 0, l=points.length; i<l; i++) {
    var point = points[i];
    if(i == 0) {
      points[i].buddy = points[points.length-1];
    } else {
      points[i].buddy = points[i-1];
    }
  }
  
  // animate
  animate();
}

function createPoint() {
  var point = {}, vx2, vy2;
  point.x = Math.random()*boundaryX;
  point.y = Math.random()*boundaryY;
  // random vx 
  point.vx = (Math.floor(Math.random())*2-1)*Math.random();
  vx2 = Math.pow(point.vx, 2);
  // vy^2 = velocity^2 - vx^2
  vy2 = velocity2 - vx2;
  point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
  points.push(point);
}

function resetVelocity(point, axis, dir) {
  var vx, vy;
  if(axis == 'x') {
    point.vx = dir*Math.random();  
    vx2 = Math.pow(point.vx, 2);
  // vy^2 = velocity^2 - vx^2
  vy2 = velocity2 - vx2;
  point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
  } else {
    point.vy = dir*Math.random();  
    vy2 = Math.pow(point.vy, 2);
  // vy^2 = velocity^2 - vx^2
  vx2 = velocity2 - vy2;
  point.vx = Math.sqrt(vx2) * (Math.random()*2-1);
  }
}

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#97badc';
  context.fill();  
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = '#8ab2d8'
  context.stroke();
}  

function draw() {
  for(var i =0, l=points.length; i<l; i++) {
    // circles
    var point = points[i];
    point.x += point.vx;
    point.y += point.vy;
    drawCircle(point.x, point.y);
    // lines
    drawLine(point.x, point.y, point.buddy.x, point.buddy.y);
    // check for edge
    if(point.x < 0+radius) {
      resetVelocity(point, 'x', 1);
    } else if(point.x > boundaryX-radius) {
      resetVelocity(point, 'x', -1);
    } else if(point.y < 0+radius) {
      resetVelocity(point, 'y', 1);
    } else if(point.y > boundaryY-radius) {
      resetVelocity(point, 'y', -1);
    } 
  }
}

function animate() {
  context.clearRect ( 0 , 0 , 150 , 150 );
  draw();
  requestAnimationFrame(animate);
}*/