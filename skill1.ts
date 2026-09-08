// Order Confirmation
type OrderCallback = () => void;

const placeOrder = (firstName: string, callback: OrderCallback) => {
    console.log(`Order placed for ${firstName}`);
    callback();
}; 

placeOrder("Jakob", () => {console.log("Thanks for your order!")});