/*
 * In JavaScript, there are three ways to handle asynchronous programming: callbacks, promises, and async/await.
 * Async/await is the newest and is easiest to use and therefore generally preferred,
 * but knowlege of the others is helpful because those patterns still exist in the wild.
 * 
 * Promises are a notable improvement over callbacks, but still have oddities that may surprise you. The following
 * article is old but very, very good at explaining promises:
 * https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
 * 
 * Note that different stages of the Promise chain can return either promises or synchronous values, either works!
 */

interface Carton {
    count: number
    price: number
    size: string
}

const purchaseFromStore = (result: Carton): Promise<Carton> => {
    return new Promise(resolve => setTimeout(() => resolve(result), Math.random() * 100));
}

const carryInside = (carton: Carton): Carton => {
    if (carton.size === "medium") {
        throw new Error(`The ${carton.size} eggs got dropped!`);
    }
    return carton;
}

const cookAndEat = (carton: Carton): Promise<Carton> => {
    return Promise.resolve({
        ...carton,
        count: carton.count - 2
    })
}

const errorHandler = (error: Error) => console.error(error.message);

const largeEggs: Carton = {
    count: 12,
    size: "large",
    price: 599
}
const mediumEggs: Carton = {
    count: 12,
    size: "medium",
    price: 499
}

purchaseFromStore(largeEggs)
    .then(carryInside)
    .then(cookAndEat)
    .then(console.log)
    .catch(errorHandler);

purchaseFromStore(mediumEggs)
    .then(carryInside)
    .then(cookAndEat)
    .then(console.log)
    .catch(errorHandler);

// `yarn run promises` to execute this file
