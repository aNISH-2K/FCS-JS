/*
class User {
    constructor(name, age, email, lucoins, course) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.lucoins = 0;
        this.course = [];
    }

    login() {
        console.log(`Welcome ${this.name}.You just logged in`);
        return this;
    }

    logout() {
        console.log(`Hey ${this.name}.You logged out`);
        return this;
    }
}

class Moderator extends User {
    constructor(name, age, email, lucoins, role, course) {
        super(name, age, email, lucoins, course);
        this.role = "Moderator";
    }

    addCoins(user) {
        user.lucoins += 1;
        console.log(`${user.name} has ${user.lucoins} LU Coins`);
        return this;
    }

    removecoins(user) {
        if (user.lucoins > 0) {
            user.lucoins -= 1;
            console.log(`${user.name} has ${user.lucoins} LU Coins`);
            return this;
        } else {
            console.log(`${user.name} has ${user.lucoins} LU Coins`)
        }
    }
}

class Admin extends Moderator {
    constructor(name, age, email, lucoins, role, course) {
        super(name, age, email, lucoins, course);
        this.role = "Admin";
    }

    addcourse(user, coursee) {
        user.course.push(coursee);
        console.log(`${user.name} enrolled in ${user.course}`)
        return this;
    }

    deletecourse(user) {
        user.course.pop();
        console.log(`${user.name} enrolled in ${user.course}`)
        return this;
    }
}

let user1 = new User('rahul', 20, 'r@gmail.com')
let user2 = new User('loki', 30, 'l@gmail.com')

let users = [user1, user2];

console.log(users);

let mod = new Moderator('thor', 35, 't@gmail.com')

let admn = new Admin('stark', 32, 's@gmail.com')

mod.addCoins(user1).addCoins(user1).removecoins(user1);

admn.addcourse(user1, 'Course1').addcourse(user1, 'Course2').deletecourse(user1);
*/
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.courses = [];
    }

    login() {
        console.log(`\n ${this.name} has logged in`);
    }

    logout() {
        console.log(`\n ${this.name} has logged out`);
    }
}

class Moderator extends User {
    constructor(name, age, email, coins = 0) {
        super(name, age, email);
        this.coins = coins;
    }

    addCoins() {
        this.coins++;
        console.log(`\n ${this.name} has added coins and now total coins are ${this.coins}`);
    }

    removeCoins() {
        this.coins--;
        console.log(`\n ${this.name} has removed coins and now total coins are ${this.coins}`);
    }

}

class Admin extends Moderator {
    addCourse(user, course) {
        // course=prompt("Enter Course Name - ");
        user.courses.push(course);
        console.log(`\n ${this.name} has allocated for course ${course}`);
    }

    deleteCourse(user) {

        console.log(`\n ${this.name} has deallocated from course ${user.courses.pop()}`);
    }
}

let moderator1 = new Moderator("Anish", 20, "anish@gmail.com");
let admin1 = new Admin("Anish", 20, "anish@gmail.com")

moderator1.login();
moderator1.addCoins();
moderator1.addCoins();
moderator1.removeCoins();
admin1.addCourse(moderator1, "Java");
admin1.addCourse(moderator1, "Python");
admin1.deleteCourse(moderator1);
moderator1.logout();