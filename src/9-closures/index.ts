/*
 * A safer way to get similar functionality to JavaScript classes is to use closures.
 * Closures capture the scope in which a function executes and preserve the ability for objects in that
 * scope to reference variables from that scope without making them visible to code outside that scope.
 * 
 * In the example below, we use a closure to create variables that are truly private.
 */

function constructSnake(initialLength: number) {
    let length = initialLength;

    return {
        getLength: () => length
    }
}

const snake = constructSnake(4);

console.log(`The length of the snake is ${snake.getLength()}, and this time there's no way to change it.`)

snake['getLength'] = () => 2;

console.log(`\n...but someone could still monkey-patch the getLength() function: ${snake.getLength()}`)

// `yarn run closures` to execute this file
