/*
 * In JavaScript, there are three ways to handle asynchronous programming: callbacks, promises, and async/await.
 * Async/await is the newest and is easiest to use and therefore generally preferred,
 * but knowlege of the others is helpful because those patterns still exist in the wild.
 * 
 * Async/await is the preferred way to handle asynchronous programming: it provides the most natural syntax,
 * has the fewest pitfalls, and allows you to do error handling using the familiar try/catch pattern.
 * 
 * Below you can see how it even further simplified the sequence of calls beyond what we had when using a promise chain
 */


import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { inFileName, outDirName, outFileName, processFileData } from '../async-programming-helpers/helpers';

// Wrapping in an iife so the compiler doesn't complain about async/await at the top level
(async () => {
    try {
        const fileData = await readFile(inFileName, 'ascii');
        const processedData = processFileData(fileData);
        await mkdir(outDirName);
        await writeFile(outFileName, processedData);
        console.log(`Successfully processed the file and wrote the result to ${outFileName}`);
    } catch (err) {
        console.error("Error reading and processing the file", err);
    }
})();

// `yarn run async-await` to execute this file
