/*
 * In JavaScript, there are three ways to handle asynchronous programming: callbacks, promises, and async/await.
 * Async/await is the newest and is easiest to use and therefore generally preferred,
 * but knowlege of the others is helpful because those patterns still exist in the wild.
 * 
 * Promises are a notable improvement over callbacks, but still have oddities that may surprise you. The following
 * article is old but very, very good at explaining promises:
 * https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
 * 
 * The below demonstrates how Promises help to flatten the logic flow compared to what callbacks offered,
 * and we can have a single catch at the end to handle errors anywhere in the chain.
 * Note that different stages of the Promise chain can return either promises or synchronous values, either works!
 */

import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { inFileName, outDirName, outFileName, processFileData } from '../async-programming-helpers/helpers';

readFile(inFileName, 'ascii')
    .then(processFileData)
    // This line is a little wonky to handle piping the data along to the next promise in the chain
    .then(processedData => mkdir(outDirName).then(() => processedData))
    .then(processedData => writeFile(outFileName, processedData))
    .then(() => console.log(`Successfully processed the file and wrote the result to ${outFileName}`))
    .catch((err) => console.error("Error reading and processing the file", err));

// `yarn run promises` to execute this file
