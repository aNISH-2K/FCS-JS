var shoppingList = ["Rice", "Wheat", "Sugar"];

var addList = confirm(`Your List : ${shoppingList}\nDo u want to add more Elements ?`);
if (addList == true) {
    do {
        var addItem = prompt(`Enter Item Name : `);
        shoppingList.push(addItem);
        var more = confirm(`Do u want to add more Item in List ?`);
    } while (more == true);
}
console.log(`Your Final List : \n${shoppingList}`);