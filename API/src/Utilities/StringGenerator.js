const StringGenerator = () => {
    let result= '';
    let counter= 0;
    const characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength= characters.length;

    while (counter < 20) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter++;
    }

    return result;
}

module.exports = {StringGenerator}