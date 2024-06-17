/*
 * Javascript classes are generated based on prototypes, which act as the template for which to create new instances of that class.
 * Prototypes are objects too, and just like all other objects, can be modified.
 * 
 * In the example below, we monkey-patch a class's prototype, so all instances of that class will have different behavior moving forwards.
 */

class Dog {
    bark() {
        console.log("Woof woof");
    }
}

const spot = new Dog();
spot.bark();

Dog.prototype.bark = () => console.log("Bow wow");

spot.bark();
const fido = new Dog();
fido.bark();

// `yarn run prototypes` to execute this file
