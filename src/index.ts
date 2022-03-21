const multiply = (number: number) => {
    return number * 2;
}

const addOne = (number: number) => {
    return number + 1;
}

const compose = (...fns: Function[]) => (arg: number) => {
    return fns.reduce((composed, f) => {
        return f(composed)
    }, arg);
}

const chainCalc = compose(
    multiply,
    addOne
);

console.log(chainCalc(3)); // output: 7
