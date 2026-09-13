// Two Fetches in a Row
const fetchTwoAdvices = async (firstId: number, secondId: number) => {
    try {
        const firstResponse = await fetch(
            `https://api.adviceslip.com/advice/${firstId}`
        );
        const firstData = await firstResponse.json();
        console.log(`Advice ID: ${firstId}: ${firstData.slip.advice}`);
        const secondResponse = await fetch(
            `https://api.adviceslip.com/advice/${secondId}`
        );
        const secondData = await secondResponse.json();
        console.log(`Advice ID: ${secondId}: ${secondData.slip.advice}`);
    } catch (error) {
        console.log("Error fetching advice:", error);
    }
};

fetchTwoAdvices(3, 7);