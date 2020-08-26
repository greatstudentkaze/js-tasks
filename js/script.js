'use strict';

const calcCost = (totalCost, goodsAmount, promoCode) => {
  if (goodsAmount >= 10) {
    // Скидка 10%
    totalCost *= 0.9;
  } else if (goodsAmount >= 5) {
    // Скидка 5%
    totalCost *= 0.95;
  }

  if (totalCost >= 100000) {
    totalCost -= (totalCost - 100000) * 0.2;
  }

  if (promoCode === '15' && totalCost >= 25000) {
    // Скидка 15%
    totalCost *= 0.85;
  } else if (promoCode === '100') {
    if (totalCost >= 100) {
      // Скидка 100
      totalCost -= 100;
    } else totalCost = 0;
  }

  return totalCost;
}

console.log(calcCost(200000, 5, '15')); // 146200
console.log(calcCost(150000, 1, '15')); // 119000
console.log(calcCost(150000, 5, '15')); // 113900
console.log(calcCost(150000, 10, '100')); // 127900
console.log(calcCost(102000, 2)); // 101600
console.log(calcCost(105000, 11, '15')); // 80325
console.log(calcCost(110, 10, '100')); // 0
console.log(calcCost(27000, 11, '15')); // 24300
console.log(calcCost(27000, 5, '15')); // 21802,5
console.log(calcCost(22000, 2)); // 22000
console.log(calcCost(22000, 2, '15')); // 22000
console.log(calcCost(22000, 2, '100')); // 21900
