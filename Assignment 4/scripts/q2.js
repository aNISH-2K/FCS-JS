let student = {
    name: "Helsink",
    age: 24,
    projects: {
        diceGame: "Two Player Dice Game using JavaScript"
    }
}

const { name, age, projects: { diceGame } } = student;
console.log("Name     : ", name);
console.log("Age      : ", age);
console.log("Projects : ", diceGame);