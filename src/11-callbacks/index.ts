/*
 * In JavaScript, there are three ways to handle asynchronous programming: callbacks, promises, and async/await.
 * Async/await is the newest and is easiest to use and therefore generally preferred,
 * but knowlege of the others is helpful because those patterns still exist in the wild.
 * 
 * Callbacks are the oldest way to handle async programming. Sometimes it is implemented by having the last parameter
 * be a callback that accepts both an error object and a data object, with the appropriate one populated based on the
 * result of the async function, and other times it is implemented by having the last two parameters be `resolve` and
 * `reject`. When the async work is completed or has an error, the corresponding function is invoked.
 * 
 * Note that it is very easy to get very deeply nested code when using callbacks.
 */
import { readFile, mkdir, writeFile } from 'node:fs';
import { inFileName, outDirName, outFileName, processFileData } from '../async-programming-helpers/helpers';


readFile(inFileName, 'ascii', (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
        console.error("Error reading file", err);
    } else {
        const newFileData = processFileData(data);
        mkdir(outDirName, (err: NodeJS.ErrnoException | null) => {
            if (err) {
                console.error("Error creating outDir", err);
            } else {
                writeFile(outFileName, newFileData, (err: NodeJS.ErrnoException | null) => {
                    if (err) {
                        console.error("Error creating outDir", err);
                    } else {
                        console.log(`Successfully processed the file and wrote the result to ${outFileName}`);
                    }
                })
            }
        })
    }
});

// `yarn run callbacks` to execute this file
