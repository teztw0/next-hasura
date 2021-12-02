export const fetchTailsJson = async () => {
    const tailsData = await fetch(process.env.TAILS_URL, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return await tailsData.json();
}