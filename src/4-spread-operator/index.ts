/*
 * The spread operator (...) allows you to take the contents of one object and assign them to another.
 * 
 * For example, the spread operator can be used to create a shallow copy of an object very concisely, optionally with some variables changed.
 * The spread operator can also be used to unpack the contents of one array and put them in another.
 */
const oldAddress = {
    city: "Cambridge",
    state: "Massachusetts",
    country: "USA"
}

const newAddress = {
    ...oldAddress,
    city: "Boston"
};

console.log(newAddress);
console.log("");


const cityAndState = ["Boston", "Massachusetts"];
const street = ["Boylston St"];

console.log([street, cityAndState]);
console.log([...street, ...cityAndState]);

// `yarn run spread-operator` to execute this file
