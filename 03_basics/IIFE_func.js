// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

/**
 * Global scope ke variable or declaration ke pollution ke effect ko function pr na pre isliye ham IIFE ka use krte h..
 */