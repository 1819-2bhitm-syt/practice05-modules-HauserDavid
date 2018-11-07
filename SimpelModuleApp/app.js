let program1 =function(){
    console.log("*** Starting Program1 ***");
    console.log("This is Program1!");
}

let program2 = function() {
    console.log("*** Starting Program2 ***");
    console.log("This is Program2!");
}

let program3 = function() {
    console.log("*** Starting Program3 ***");
    console.log("This is Program3!");

}

const startProgram = require("./startProgram");

startProgram(15, "Program1", program1);
startProgram(20, "Program2", program2);
startProgram(10, "Program3", program3);

