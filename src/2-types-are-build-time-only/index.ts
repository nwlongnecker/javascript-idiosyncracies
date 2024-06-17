/*
 * This file demonstrates how TypeScript can provide a false sense of security regarding types.
 * Types are checked at build time only. At runtime, types are not enforced, so anything can happen.
 * Variables are not guaranteed to have the declared types.
 * 
 * For example: The getNextString declares that it will return a string.
 * Even though `getNextString()` says it will return a string, sometimes it actually returns a number, or null, or a function!
 * Run the code below to see what happens: `yarn run types-are-build-time-only`
 * Regardless of the type returned, it's still successfully added to the stringArray, which, despite being explicitly declared
 * as an array of strings, ends up holding all sorts of things, not just strings!
 */
import { getNextString } from "./getNextString";

const stringArray: string[] = ["3", "4"]

stringArray.push(getNextString());
stringArray.push(getNextString());
stringArray.push(getNextString());
stringArray.push(getNextString());
stringArray.push(getNextString());
stringArray.push(getNextString());

console.log(stringArray);

// `yarn run types-are-build-time-only` to execute this file
