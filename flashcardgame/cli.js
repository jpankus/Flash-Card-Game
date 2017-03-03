
var basicExports = require("./basicflash.js");
var clozeExports = require("./clozeflash.js");

//Inquirer
var inquirer = require('inquirer');

//fs
var fs = require('fs');

//ask user to select a flashcard type
var cardGenerator = function() {
    inquirer.prompt([{
        type: "list",
        name: "flashType",
        message: "What do you want to do?",
        choices: ["Create a basic flashcard", "Create a cloze flashcard"]
    }]).then(function(answers) {

        switch (answers.flashType) {
            case "Create a Basic Flashcard":
                basicCreate();
                break;

            case "Create a Cloze Flashcard":
                clozeCreate();
                break;
        }
    })
};

//user inputs for the basic flash card constructor
var basicCreate = function() {
    inquirer.prompt([{
            type: "input",
            message: "What do you want to put on the front of your card?",
            name: "question",
            default: ""
        },

        {
            type: "input",
            message: "What do you want to put on the back of your card?",
            name: "answer",
            default: ""
        }

    ]).then(function(input) {
        var NewBasic = new basicExports.BasicFlash(input.question, input.answer);
        NewBasic.writeBasic();
        console.log("Here is your new flashcard:" + input.question +
   input.answer)
    });
};

// inputs for the cloze flashcard
var clozeCreate = function() {
    inquirer.prompt([{
            type: "input",
            message: "Please enter the entire question and answer",
            name: "text",
            default: ""
        },

        {
            type: "input",
            message: "Please enter the cloze answer",
            name: "cloze",
            default: ""
        }

    ]).then(function(input) {
        var NewCloze = new clozeExports.ClozeFlash(input.text, input.cloze).findCloze();

        console.log("Here is your new cloze fashcard:" + input.text + input.cloze)
        

           
    });
};
cardGenerator();