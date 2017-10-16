/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.2
 *   @summary Project 3 demo code || created: 03.16.2016
 *   @todo
 */ //Application info such as author, version, name, and when it was created.

"use strict"; //Places program in strict operating context.
const PROMPT = require('readline-sync');

let continueResponse;
let custID, dogAge, dogWeight, totalBill;
let dogName, dogBreed; //List of variables

function main() { //Start of main function. Open curly brace indicates start of block
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == 0) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setCustID();
        setDogName();
        setDogBreed();
        setDogAge();
        dogWeight = setDogWeight(); //demonstrating return values
        setTotalBill();
        printTotalBill();
        setContinueResponse(); //List of functions
        return main(); //proper tail recursion
    }
    printGoodbye();
} //End curly brace indicates end of block

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `)); //Prints question
        if (continueResponse !== 0 && continueResponse !== 1) { //If 1 is typed then program will continue, type 0 and it will exit.
            console.log(`${continueResponse} is an incorrect value. Please try again.`); //If something other than 1 or 0 is typed.
            continueResponse = 1;
            setContinueResponse(); //improper recursion
        }
    } else {
        continueResponse = 1;
    }
}

function setCustID() {
    custID = Math.floor((Math.random() * 20) + 1);  //JavaScript random number 1 - 20
}

function setDogName() {
    dogName = PROMPT.question(`\nPlease enter dog's name: `);
}

function setDogBreed() {
    dogBreed = PROMPT.question(`\nPlease enter dog's breed: `);
}

function setDogAge() {
    dogAge = Number(PROMPT.question(`\nPlease enter dog's age: `));
}

function setDogWeight() {
    return Number(PROMPT.question(`\nPlease enter dog's weight: `)); //demonstrating return values
}

function setTotalBill() {
    totalBill = 0;
    const SMALL_DOG_FEE = 55,
        MEDIUM_DOG_FEE = 75,
        LARGE_DOG_FEE = 105,
        JUMBO_DOG_FEE = 125,
        SMALL_DOG_WEIGHT = 15,
        MEDIUM_DOG_WEIGHT = 30,
        LARGE_DOG_WEIGHT = 80; //List of specified values
    if (dogWeight > 0) {
        if (dogWeight > 0 && dogWeight < SMALL_DOG_WEIGHT) { //If dog weighs less than small value
            totalBill = SMALL_DOG_FEE + dogAge;
        } else if (dogWeight < MEDIUM_DOG_WEIGHT) { //If dog weighs less than medium value
            totalBill = MEDIUM_DOG_FEE + dogAge;
        } else if (dogWeight < LARGE_DOG_WEIGHT) { //If dog weighs less than large value
            totalBill = LARGE_DOG_FEE + dogAge;
        } else {
            totalBill = JUMBO_DOG_FEE + dogAge; //If dog weighs greater than large value
        }
    }
}

function printTotalBill() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${dogName} \$${totalBill}. ${custID}`); //Prints your entered data.
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tThank you, Goodbye.`); //Prints goodbye screen when finished.
}