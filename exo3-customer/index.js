const { Utils, priceHT } = require("./utils");

priceHT.forEach((item) => {
  item.priceTTC = Utils.calculatePriceTTC(item.priceHT);
});

console.log(priceHT);
