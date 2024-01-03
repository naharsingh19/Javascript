// Immediately Invoked Function Expressions (IIFE)
//kyuki global scope k population se kbhi kbhi dikkat hoti hai thats why we use iife

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')