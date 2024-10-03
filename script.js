// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;
        if (/^[\d+\-*/.() ]+$/.test(expression)) {
            let result = new Function('return ' + expression)(); 
            display.value = result;
        } else {
            throw new Error("Invalid Input");
        }
    } catch (error) {
        display.value = "Error";
    }
}