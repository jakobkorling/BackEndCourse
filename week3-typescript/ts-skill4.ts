/* wrapInArray function that returns
input1 in an array no matter what type it is*/
const wrapInArray = <T>(input1: T): T[] => {
    return [input1]
} 
// Console.logs both with a string and a number
console.log(wrapInArray("Cat"));
console.log(wrapInArray(2));