/*
 * JavaScript does support classes, but they don't work the same as Java or C# classes.
 * Developers expecting them to work the same will have a false sense of security about the privacy of their variables
 * and may be surprised by what JavaScript actually allows.
 * 
 * From the class declaration below, you may think there's no way to change the length of an Armadillo once it's been created.
 * The example below demonstrates that it's quite easy to bypass the 'private' protection.
 */

class Armadillo {
    private length: number;
    
    constructor(initialLength: number) {
        this.length = initialLength;
    }

    getLength() {
        return this.length;
    }
}

const dillo = new Armadillo(3);

console.log(`The armadillo is ${dillo.getLength()} units long`);

// JavaScript will stop you from doing the following:
// dillo.length = 5

// ... but has no protections stopping you from doing this:
dillo['length'] = 5

console.log(`Now the armadillo is ${dillo.getLength()} units long`);

// `yarn run classes` to execute this file
