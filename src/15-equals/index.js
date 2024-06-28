/*
 * JavaScript has two basic operators for checking equality, == and ===.
 * Almost always you will want to use ===.
 * 
 * == does type coersion, meaning that it can return true when values aren't exactly the same.
 * === checks both type and value, ensuring that the values are truly equal.
 */

console.log(`'5' == 5           => ${'5' == 5}`);
console.log(`'5' === 5          => ${'5' === 5}`);
console.log();
console.log(`null == undefined  => ${null == undefined}`);
console.log(`null === undefined => ${null === undefined}`);
console.log();
console.log(`[] == false        => ${[] == false}`);
console.log(`[] === false       => ${[] === false}`);

// `yarn run equals` to execute this file
