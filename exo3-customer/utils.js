exports.priceHT = [
  { name: "Apple", priceHT: 1.0, priceTTC: null },
  { name: "Orange", priceHT: 1.2, priceTTC: null },
  { name: "Raspberry", priceHT: 2.5, priceTTC: null },
];

exports.calculatePriceTTC = (priceHT, tvaRate = 0.2) =>
  parseFloat((priceHT * (1 + tvaRate)).toFixed(2));
