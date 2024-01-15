// Given array of battery batches
const batteryBatches = [
  { batteryAmount: 50 },
  { batteryAmount: 30 },
  { batteryAmount: 20 },
];

// Use reduce to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch.batteryAmount, 0);

// Display the result
console.log(totalBatteries); 