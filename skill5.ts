// A Different Advice Slip
type AdviceSlipType = {
    slip: {
        id: number;
        advice: string;
    };
};

const fetchAdviceAndLog = (id: number): void => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
        .then((response: Response): Promise<AdviceSlipType> => {
            if (!response.ok) {
                throw new Error("Fetching did not work");
            }
            return response.json();
        })
        .then((data: AdviceSlipType): void => {
            console.log(`Advice ID: ${data.slip.id}: ${data.slip.advice}`);
        })
        .catch((error: Error): void => {
            console.log(error.message);
        });
};

fetchAdviceAndLog(1);
fetchAdviceAndLog(5);
fetchAdviceAndLog(10);