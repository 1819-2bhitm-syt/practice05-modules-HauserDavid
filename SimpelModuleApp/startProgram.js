let startProgram = function (waitTime, programName, program) {
    console.log("*** Starting "+programName+" in "+waitTime+" seconds***")

    setTimeout(program, (waitTime * 1000));
};

module.exports = startProgram;