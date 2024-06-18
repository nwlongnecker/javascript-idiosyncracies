/*
 * In JavaScript, there are three ways to handle asynchronous programming: callbacks, promises, and async/await.
 * Async/await is the newest and is easiest to use and therefore generally preferred,
 * but knowlege of the others is helpful because those patterns still exist in the wild.
 * 
 * Callbacks are the oldest way to handle async programming. The community has standardized on a pattern of
 * having the last two parameters for an async function be `resolve` and `reject`. When the async work is completed
 * or has an error, the corresponding function is invoked.
 */

type Resolve = (result: string) => void;
type Reject = (error: Error) => void;
type Pet = {
    name: string;
    anxiety: number;
}

const visitVet = (pet: Pet, resolve: Resolve, reject: Reject): void => {
    // do any asynchronous processing needed, mimicked by a random delay
    setTimeout(() => {
        if (pet.anxiety > 10) {
            reject(new Error(`${pet.name} was too anxious to go to the vet today`));
        } else {
            resolve(`${pet.name} had a pleasant time at the vet`);
        }
    }, Math.random() * 10);
}

const pets = [{
    name: 'Rhino',
    anxiety: 1,
}, {
    name: 'Mica',
    anxiety: 15
}, {
    name: 'Pickles',
    anxiety: 9,
}];

const successfulVisit = (outcome: string) => console.log(outcome);
const unsuccessfulVisit = (error: Error) => console.error(error.message);

pets.forEach(pet => visitVet(pet, successfulVisit, unsuccessfulVisit));

// `yarn run callbacks` to execute this file
