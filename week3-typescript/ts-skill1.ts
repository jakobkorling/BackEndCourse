
// Declares IDType to be both number OR string
type IDType = number | string; 

// Arrow function "showID" that takes an input of type IDType and returns a string with that id
const showID = (id:IDType): string => {
    return `Your ID is: ${id}`;
};

// Declares resultNumber and resultBoth as different versions of showID
const resultNumber = showID(12345);
const resultBoth = showID("ABC123");

// console.logs both of above
console.log(resultNumber);
console.log(resultBoth);

/*
jakobkorling@MacBook-Pro-som-tillhor-Jakob Week 3 Lesson 1 TypeScript % node ts-skill1.ts
Your ID is: 12345
Your ID is: ABC123
*/