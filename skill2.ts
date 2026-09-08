// Countdown timer
// The order is "Countdown started", "Waiting..." and then "Time's up!" and "Countdown finished" because countdown has as setTimeout set to 3 seconds while the rest runs instantly. 
type timesUp = () => void;

const countdown = (seconds: number, callback: timesUp) => {
    setTimeout(() => {
        console.log("Time's up!");
        callback();
    }, seconds * 1000);
}; 

console.log("Countdown started!")
countdown(3, () => console.log("Countdown finished"));
console.log("Waiting...")