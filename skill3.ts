type ConvertCallback = (celsius:number) => number; 

const convertTemperature = (celsius:number, callback: ConvertCallback) => {
    return callback(celsius);
}

console.log(convertTemperature(26, (celsius: number) =>  {
    return celsius * 9/5 + 32;
}));
console.log(convertTemperature(26, (celsius: number) =>  {
    return celsius +273.15;
}));