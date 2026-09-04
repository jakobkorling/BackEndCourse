//Math Callback
type mathCallback = (result: number) => void; 

const mathResult = (a: number, b: number, callback: mathCallback) => {
    const result = a + b;
    callback(result);
};

const callback = (result:number) => {
    console.log("The numbers equal:", result);
};
mathResult(17, 25, callback);