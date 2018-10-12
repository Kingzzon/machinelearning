
$(document).ready(function () {
    
    const net = new brain.recurrent.RNN();

    net.train([{input: [2, 0, 1, 0, 2, 0, 2, 1, 1], output: [4]},
           {input: [1, 0, 0, 0, 0, 0, 0, 0, 0], output: [5]},
           {input: [2, 1, 0, 2, 2, 0, 1, 0, 1], output: [8]},
           {input: [1, 0, 0, 1, 2, 0, 0, 0, 2], output: [7]}]);

    //let output = net.run([0, 0, 2]);  // [0]
    function machineMakeMove(){
        var arrayBoard = [];
        for (i=1;i<10;i++){
          var push = $("#box" + i.toString()).css("background-color");  
          if(push == "rgb(0, 0, 255)"){
              arrayBoard.push(1);
          } else if (push == "rgb(255, 0, 0)"){
              arrayBoard.push(2);
          } else{
              arrayBoard.push(0);
          }
        };
        var output = net.run(arrayBoard);
        console.log(output, arrayBoard);
        $("#box" + output.toString()).css("background-color", "red");
    };
    
    $("#box1").click(function () {
        $("#box1").css("background-color", "blue");
        console.log("ja");
        machineMakeMove();
    });
    $("#box2").click(function () {
        $("#box2").css("background-color", "blue");
        console.log("ja");
        machineMakeMove();
    });
    $("#box3").click(function () {
        $("#box3").css("background-color", "blue");
        console.log("ja");
        machineMakeMove();
    });
    $("#box4").click(function () {
        $("#box4").css("background-color", "blue");
        console.log("ja");
        machineMakeMove();
    });
    $("#box5").click(function () {
        $("#box5").css("background-color", "blue");
        console.log("ja");
        machineMakeMove();
    });
    $("#box6").click(function () {
        $("#box6").css("background-color", "blue");
        console.log("ja");
        machineMakeMove();
    });
    $("#box7").click(function () {
        $("#box7").css("background-color", "blue");
        console.log("ja");
        machineMakeMove();
    });
    $("#box8").click(function () {
        $("#box8").css("background-color", "blue");
        console.log("ja");
        machineMakeMove();
    });
    $("#box9").click(function () {
        $("#box9").css("background-color", "blue");
        console.log("ja");
        machineMakeMove();
    });
});
