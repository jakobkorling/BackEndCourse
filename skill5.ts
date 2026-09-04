//Pizza Order
type orderStatusFunction = (order: string) => void;

const pizzaOrder = (callback: orderStatusFunction) => {
    console.log("Your pizza order is placed!")
    setTimeout(() => {
        const order = "Your pizza is ready!";
        callback(order);
    }, 3000);
}

const orderStatus = (order: string) => {
    console.log(order);
};

pizzaOrder(orderStatus); 