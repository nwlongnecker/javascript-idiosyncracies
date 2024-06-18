/*
 * Monkey Patching is the term for when you dynamically update the behavior of some code at runtime.
 * JavaScript allows you to monkey patch just about whatever you want to. This is very flexible and very powerful, but can lead to some very surprising behavior.
 * 
 * In the example below, we monkey-patch the speak method on an instance of the Parrot class so that instance has different behavior.
 */

class Parrot {
    speak() {
        console.log("Polly want a cracker");
    }
}

const polly = new Parrot();

polly.speak();

// Just like how we could modify an object's private variables, we can also modify its functions
polly['speak'] = () => console.log("Polly doesn't want a cracker");

polly.speak();

// `yarn run monkey-patching` to execute this file
