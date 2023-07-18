export const generateUniqueId = () => {
    const length = 10
    const characters = '0123456789';
    const charactersLength = characters.length;
    let uniqueId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        uniqueId += characters.charAt(randomIndex);
    }

    return uniqueId;
}