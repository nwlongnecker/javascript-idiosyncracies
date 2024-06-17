/*
 * This file gives an example of Duck Typing.
 * In TypeScript, objects don't need to share a common base class to have common code operate on them.
 * 
 * For example, in a language like Java, we might declare an interface Bird (like below) and have all the other birds inherit from it.
 * In TypeScript, that's unnecessary - note that none of the birds actually have any sort of declaration that they extend the Bird interface.
 * As far as TypeScript is concerned, any object that has a fly() method is a Bird, and the allBirdsFly() function below will work on it.
 */

interface Bird {
    fly: () => void,
}
function allBirdsFly(birds: Bird[]): void {
    birds.forEach((bird) => bird.fly());
}

const duck = {
    quack: () => console.log("quack"),
    fly: () => console.log("The duck is flying")
};
const crow = {
    caw: () => console.log("caw"),
    fly: () => console.log("The crow is flying")
}
const robin = {
    chirp: () => console.log("chirp"),
    fly: () => console.log("The robin is flying")
}

const birds = [duck, crow, robin];

allBirdsFly(birds)

// `yarn run duck-typing` to execute this file
