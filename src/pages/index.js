import './index.css';

const inputCarCost = document.getElementById('car-cost');
const inputRangeCarCost = document.getElementById('car-cost-range');
const inputAnInitialFee = document.getElementById('an-initial-fee');
const inputRangeAnInitialFee = document.getElementById('an-initial-fee-range');
const inputRentalPeriod = document.getElementById('rental-period');
const inputRangeRentalPeriod = document.getElementById('rental-period-range');
const percent = document.getElementById('percent');

inputRangeCarCost.addEventListener('input', () => {
  const value = inputRangeCarCost.value
  inputRangeCarCost.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`
  
  if (inputRangeCarCost.value > 14) {
    inputCarCost.value = inputRangeCarCost.value * 100000;
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

inputRangeRentalPeriod.addEventListener('input', () => {
  const value = inputRangeRentalPeriod.value * 100 / 120;
  inputRangeRentalPeriod.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`

  if (inputRangeRentalPeriod.value > 5 && inputRangeRentalPeriod.value < 121) {
    inputRentalPeriod.value = parseInt(inputRangeRentalPeriod.value);
  }
});