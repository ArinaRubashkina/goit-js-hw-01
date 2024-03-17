function makeTransaction (quantity, pricePerDroid) {
    let totalPrice = quantity*pricePerDroid;
    return `You picked ${quantity} droids worth ${totalPrice} credits!`;
};
makeTransaction(5, 3000)

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"