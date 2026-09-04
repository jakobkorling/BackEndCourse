// Uppercase Callback
type uppercaseCallback = (yell: string) => void; 

const uppercaseShout= (shout: string, callback: uppercaseCallback) => {
    const yell = shout.toUpperCase();
    callback(yell)
}

const displayShout = (yell: string) => {
    console.log(yell);
};

uppercaseShout("Hello world!", displayShout); 