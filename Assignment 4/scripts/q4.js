var num1 = prompt("Enter First Number : ");
var num2 = prompt("Enter Second Number : ");

Calculator(num1, num2);

function Calculator(num1, num2) {
    console.log("Addition       : ", (+num1 + +num2));
    console.log("Subtraction    : ", (num1 - num2));
    console.log("Multiplictaion : ", (num1 * num2));
    console.log("Division       : ", (num1 / num2).toFixed(2));
    console.log("Square Root    : ", Math.sqrt(num1).toFixed(2));
    console.log("Percentage     : ", (num1 + num2) / 100)
}