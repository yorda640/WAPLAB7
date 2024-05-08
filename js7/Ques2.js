let i = 0;

console.log("Before the loop, initial value of i:", i);  // This logs the initial value of i before the loop starts.

// Schedule a function to log the value of i after 100ms
setTimeout(() => {
    console.log('After the loop, in the setTimeout callback, value of i:', i); // This will show the value of i after the loop has completed.
    // Answer: What is console.log going to show in setTimeout? -> 100000000
}, 100);

// Start of the heavy computation loop
console.log("In the beginning of the loop."); // Indicates the start of the loop
for(let j = 0; j < 100000000; j++) {
    i++;
}

console.log('Loop done, value of i:', i); // This logs right after the loop, showing i = 100000000

// Answer: When will the scheduled function run? -> After the loop.
// Answer: What is console.log going to show right after the loop? -> 100000000
