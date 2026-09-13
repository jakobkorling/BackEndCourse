// Coin Flip
const flipCoin = () => {
    return new Promise((resolve, reject) => {
        const outcome = Math.random() > 0.5;
        outcome ? resolve("You win!") : reject("You lose!");
    });
};

const coinFlip = async () => {
    try {
        const result = await flipCoin();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

coinFlip();