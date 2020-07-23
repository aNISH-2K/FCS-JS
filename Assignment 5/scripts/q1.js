/*
let num = 0;
while (num <= 0) {
    num = prompt("Enter a positive number", 5);
    if (num == null) {
        console.log("User Cancelled");
        break;
    }
}
if (num > 0) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.round(Math.random() * (10 - 1 + 1) + 1));
    }
    console.log(arr);
    let oddnum = arr.filter(el => el % 2 != 0);
    let result = oddnum.map(el => el ** 3);
    console.log("Odd numbers in the array:");
    console.log(oddnum);
    console.log("Cube of odd numbers in the array:");
    console.log(result);
}
*/
var arr = [];
do {
    var num = prompt("Enter a Positive Number : ");
    num = +num;
    if (num > 0)
        arr.push(num);
    var nextNum = confirm("Do you want to add more number in Array");
} while (nextNum == true)

let oddNum = arr.filter((num) => { // Filter
    if (num % 2 == 1)
        return num;
}).map((num) => { // Map
    return num ** 3;
})
console.log(oddNum);