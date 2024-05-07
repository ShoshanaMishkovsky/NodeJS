const SEC_TO_MS = 1000;

console.log("Typscript is running!");

// function runInterval() {
//     console.log("2 secs has passed: ", new Date());
//     setTimeout(runInterval, 2 * SEC_TO_MS);
// }

// const id = setTimeout(runInterval, 2 * SEC_TO_MS);

// const id = setInterval(() => {
//     console.log("2 secs has passed: ", new Date());
// }, 2 * SEC_TO_MS);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Interval stopped");
// }, 10 * SEC_TO_MS);


const id = setTimeout(() => {
    setTimeout(() => {
        console.log("Inside nested timeout", new Date());
    }, 0);
    console.log("0 secs has passed: ", new Date());
}, 0);

console.log("After timeout");