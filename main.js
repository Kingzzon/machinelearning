
var dataIndex = 0;
var randomRGB = [];
var blackorwhite = "";
var data = [];
const brain = require("brain.js")
const network = new brain.NeuralNetwork()
const result = network.run()
function getBackground(){
  randomRGB[0] = Math.floor(Math.random() * 255) + 1;
  randomRGB[1] = Math.floor(Math.random() * 255) + 1;  
  randomRGB[2] = Math.floor(Math.random() * 255) + 1;
  //$("#backgroundColor").css("background-color", "rgb(" + randomRGB[0] + "," + randomRGB[1] + "," + randomRGB[2] + ")");
  document.getElementById("backgroundColor").style.backgroundColor = "rgb(" + randomRGB[0] + "," + randomRGB[1] + "," + randomRGB[2] + ")";
}

getBackground();

function whitebutton(){
   document.getElementById("blackorwhite").style.color = "white";
   blackorwhite = "white";
}

function blackbutton(){
   document.getElementById("blackorwhite").style.color = "black";
   blackorwhite = "black";
}

function confirm(){
   var blackorwhiteint = 0;
   if (blackorwhite == "black"){
     blackorwhiteint = 1;
   };
   data[dataIndex] = [
      {input: {r: randomRGB[0], g: randomRGB[1], b: randomRGB[2]}, output: {blackorwhite: blackorwhiteint}}
    ];
   network.train(data)
   dataIndex += 1;
   console.log(data);
   getBackground();
};

function testmachine(){
   alert(network.run({ r: randomRGB[0], g: randomRGB[1], b: randomRGB[2]}))
};
