/*
 * This file demonstrates a handy feature of TypeScript - Object destructuring.
 * Object destructuring allows you to extract properties from an object and bind them to variables.
 *  
 * In the below example, we extract the city and state properties from the address object, assigning them to variables of the same name.
 */

const address = {
    city: "Cambridge",
    state: "Massachusetts",
    country: "USA"
}

const { city, state } = address;

console.log(`I am in ${city}, ${state}`);

// `yarn run object-destructuring` to execute this file
