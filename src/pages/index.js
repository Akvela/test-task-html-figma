import './index.css';

const inputCarCost = document.getElementById('car-cost');
const inputRangeCarCost = document.getElementById('car-cost-range');
const inputAnInitialFee = document.getElementById('an-initial-fee');
const inputRangeAnInitialFee = document.getElementById('an-initial-fee-range');
const inputRentalPeriod = document.getElementById('rental-period');
const inputRangeRentalPeriod = document.getElementById('rental-period-range');
const percent = document.getElementById('percent');

inputRangeCarCost.addEventListener('input', () => {
  const value = inputRangeCarCost.value;
  inputRangeCarCost.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`;
  
  if (inputRangeCarCost.value > 14) {
    inputCarCost.value = inputRangeCarCost.value * 100000;
  }
});

inputCarCost.addEventListener('change', () => {
  if (inputCarCost.value < 1500000) {
    inputCarCost.value = 1500000;
    inputRangeCarCost.value = 0
    inputRangeCarCost.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 0%, #E1E1E1 0%, #E1E1E1 100%)`;
  } else if (inputCarCost.value > 10000000) {
    inputCarCost.value = 10000000;
    inputRangeCarCost.value = 100;
    inputRangeCarCost.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 100%, #E1E1E1 100%, #E1E1E1 100%)`;
  } else {
    const value = inputCarCost.value / 100000;
    inputRangeCarCost.value = value;
    inputRangeCarCost.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`;
  }
});

inputRangeAnInitialFee.addEventListener('input', () => {
  const value = (inputRangeAnInitialFee.value - 10) * 2;
  inputRangeAnInitialFee.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`
  
  if (inputRangeAnInitialFee.value > 9 && inputRangeAnInitialFee.value < 61) {
    inputAnInitialFee.value = inputCarCost.value / 100 * inputRangeAnInitialFee.value;
    percent.textContent = inputRangeAnInitialFee.value + '%';
    
  }
});

// inputAnInitialFee.addEventListener('input', () => {
//  const 
//   if (inputAnInitialFee.value < 10) {
//     inputRangeAnInitialFee.value = 10;
//     inputRangeAnInitialFee.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 0%, #E1E1E1 0%, #E1E1E1 100%)`;
//   } else if (inputAnInitialFee.value > 60) {
//     inputRangeAnInitialFee.value = 60;
//     inputRangeAnInitialFee.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 100%, #E1E1E1 100%, #E1E1E1 100%)`;
//   } else {
//     const value = inputAnInitialFee.value * 120 / 100;
//     inputRangeAnInitialFee.value = value;
//     inputRangeAnInitialFee.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`;
//   }
// });

inputRangeRentalPeriod.addEventListener('input', () => {
  const value = inputRangeRentalPeriod.value * 100 / 120;
  inputRangeRentalPeriod.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`

  if (inputRangeRentalPeriod.value > 5 && inputRangeRentalPeriod.value < 121) {
    inputRentalPeriod.value = parseInt(inputRangeRentalPeriod.value);
  }
});

inputRentalPeriod.addEventListener('change', () => {
  if (inputRentalPeriod.value < 6) {
    inputRentalPeriod.value = 6;
    inputRangeRentalPeriod.value = 0;
    inputRangeRentalPeriod.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 0%, #E1E1E1 0%, #E1E1E1 100%)`;
  } else if (inputRentalPeriod.value > 120) {
    inputRentalPeriod.value = 120;
    inputRangeRentalPeriod.value = 120;
    inputRangeRentalPeriod.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 100%, #E1E1E1 100%, #E1E1E1 100%)`;
  } else {
    const value = parseInt(inputRentalPeriod.value / 114 * 100);
    inputRangeRentalPeriod.value = value;
    inputRangeRentalPeriod.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value * 100 / 120}%, #E1E1E1 ${value * 100 / 120}%, #E1E1E1 100%)`;
  }
});