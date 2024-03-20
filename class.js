class Person {
    eat() {
        console.log('EAT');
    }
    sleep() {
        console.log('SLEEP');
    }
}

class Singer extends Person{
    sing() {
        console.log('SING');
    }
}

Singer.prototype = Object.create(Person.prototype);

const singer1 = new Singer();

singer1.sing();
singer1.eat();
singer1.sleep();