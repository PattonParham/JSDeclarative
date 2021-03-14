/**********/
// EXAMPLES
/**********/

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false };

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const { price, taxable } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/

// prices: (items: [{price: number}]) -> [number]
const prices = (items) => {

let pricesArray = [];

for (var i = 0; i < items.length; i++){

  pricesArray.push(items[i].price);
}

return pricesArray;
} 


// sum: (numbers: [number]) -> number
const sum = (prices) => {
  let sumNum = 0;
  for (var i = 0; i < prices.length; i++){

    sumNum += prices[i];
  }
  
  return sumNum;
} 


// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = (items) =>{
  let taxableItems = [];
  for (var i = 0; i < items.length; i++){
    if (items[i].taxable == true){
      taxableItems.push(items[i]);
    }
  }
  return taxableItems;

} 

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = (prices, tax) =>{
  let pricesArray = [];
  
  for (var i = 0; i < prices.length; i++){
  pricesArray.push(prices[i] * tax);
  } 

  return pricesArray;
} 

// baseSum :: Array -> Number
const baseSum = items => sum(prices(items));

// taxSum :: Array, Number -> Number
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// calculateTotalDeclarative :: Array, Number -> Number
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, Math.abs(tax));

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
};
