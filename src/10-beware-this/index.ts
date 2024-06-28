/*
 * Beware of the `this` keyword; it's frequently misleading in JavaScript. It can reference different things
 * depending on the context in which its used.
 * In general, it's better not to use `this` and instead explicitly reference whichever object you care about.
 * 
 * In JavaScript, functions declared using the function() {} syntax redefine this, while functions declared
 * using the () => {} syntax do not. If you're using `this`, and someone changes the way the wrapping function
 * is declared, it can change what `this` refers to!
 * 
 * Try running the example below: `yarn run beware-this`
 * You might be surprised at the output!
 */

class TownOfCambridge {
    private name = "Cambridge";
    private area = "7.13 sq mi";

    private neighborhoods = [{
        name: "East Cambridge",
        area: "1 sq mi",
        getName: function() {
            return this.name;
        },
        getArea: function() {
            return this.area;
        }
    }, {
        name: "Kendall Square",
        area: "2 sq mi",
        getName: () => {
            return this.name;
        },
        getArea: () => {
            return this.area;
        }
    }]

    listNeighborhoods() {
        this.neighborhoods.forEach(neighborhood =>
            console.log(`The area of ${neighborhood.getName()} is ${neighborhood.getArea()}`));
    }
}

const cambridge = new TownOfCambridge();
cambridge.listNeighborhoods();

// `yarn run beware-this` to execute this file
