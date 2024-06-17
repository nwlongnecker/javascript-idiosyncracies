/*
 * JavaScript is an interpreted language. When the runtime starts up, it DOES NOT read and execute all the files.
 * Instead, it starts from an entrypoint provided at application startup, and discovers imports as it goes. If a file is never imported, that code won't be executed.
 * This makes it very easy to trace all the files that will be included in the application and what's including them.
 * 
 * For example, the file in this folder named "fileNotImported" will not be executed because it is not imported by this entrypoint file.
 */

import { fileName } from "./fileThatIsImported";

console.log("This file is the entrypoint. Only files imported by this file will be executed.");
console.log(`Imported file: ${fileName}`);

// `yarn run javascript-is-interpreted` to execute this file
