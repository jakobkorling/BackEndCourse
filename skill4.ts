// Your Own Promise
// "Checking stock!" prints first since the Promise executor runs immediatly
const checkStock = new Promise ((resolve, reject) => {
    console.log("Checking stock!");
    const inStock = false;
    if (inStock) {
        resolve("Item is in stock!");
    } else {
        reject("Item is out of stock!");
    }
});
console.log("Waiting...");
checkStock.then((message) => {
    console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
