//Delayed Greeting
type greetingMessage = (message: string) => void;

const sayHelloLater = (callback: greetingMessage) => {
    setTimeout(() => {
        const message = "Hi, I am late!";
        callback(message);
    }, 2000);
}

const showMessage = (message: string) => {
    console.log(message);
};

sayHelloLater(showMessage); 