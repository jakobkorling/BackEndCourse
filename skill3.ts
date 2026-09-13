// Delayed Message
const delayedMessage = (message: string, delay: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
};

const getMessage = async () => {
  try {
    const message = await delayedMessage("The sun is shining!", 3000);
    console.log(message);
  } catch (error) {
    console.log("rejected reason:", error);
  }
};

getMessage();