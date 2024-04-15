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