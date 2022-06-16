/*
Think that you have an unlimited number of carrots, but a limited number of carrot
types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
weight and a price. Write a function that takes carrotTypes and capacity and return the
maximum value the bag can hold
Example:
carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
capacity = 36 //kg
getMaxValue(carrotTypes, capacity)
*/

function getMaxValue(data, target) {
  function iter(index, bag, weight, total) {
    if (weight > target) return;
    if (weight === target) {
      if (!result || total < result.total) result = { bag, weight, total };
      return;
    }
    let temp = [...bag];
    temp[index]++;
    iter(index, temp, weight + data[index].kg, total + data[index].price);
    if (++index >= data.length) return;
    iter(index, bag, weight, total);
  }

  var result;
  iter(
    0,
    data.map((_) => 0),
    0,
    0,
  );
  return result;
}

let carrotTypes = [
    { price: 100, kg: 2 },
    { price: 120, kg: 4 },
    { price: 80, kg: 7 },
  ],
  bagCapacity = 36,
  bag = getMaxValue(carrotTypes, bagCapacity);

console.log(bag);
