// Hello Callback
type helloFunction = (message: string) => void;

const helloMessage = (callback: helloFunction) => {
    const message = "Hello from callback!";
    callback(message);
}

const displayMessage = (message: string) => {
    console.log(message);
};

helloMessage(displayMessage);
