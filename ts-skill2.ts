
// interface "Book" containing title as a string and pages as numbers
interface Book {
    title: string;
    pages: number;
}

// Object theBook 
const theBook: Book = {
    title: "Harry Potter and the Sorcerers Stone",
    pages: 320,
}

// The arrow function describeBook takes a Book object and returns a string with its title and pages.
const describeBook = (book: Book): string => {
    return `The book ${book.title} has ${book.pages} pages.`;
};

// Calls the function with the object and prints it to the console
const bookDescription = describeBook(theBook);
console.log(bookDescription);

/* jakobkorling@MacBook-Pro-som-tillhor-Jakob Week 3 Lesson 1 TypeScript % node ts-skill2.ts
The book Harry Potter and the Sorcerers Stone has 320 pages. */
