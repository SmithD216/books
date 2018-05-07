// calculator/lib/calc.js

//The following will export both the multiply function and the MY_CONSTANT const
let notExported = 'abc';
export function multiply(x) {
    return x * MY_CONSTANT;
}
export const MY_CONSTANT = 7;