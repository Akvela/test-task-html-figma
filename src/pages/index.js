import './index.css';

const inputCarCost = document.getElementById('car-cost');
const inputRangeCarCost = document.getElementById('car-cost-range');
const inputAnInitialFee = document.getElementById('an-initial-fee');
const inputRangeAnInitialFee = document.getElementById('an-initial-fee-range');
const inputRentalPeriod = document.getElementById('rental-period');
const inputRangeRentalPeriod = document.getElementById('rental-period-range');
const percent = document.getElementById('percent');
const leasingSum = document.getElementById('leasing-sum');
const monthlyPayment = document.getElementById('monthly-payment');
const buttonForm = document.querySelector('.calculator__button');

//добавление нулей с конца строки через каждые три символа
function format(num) {
  var n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

//обновление суммы договора лизинга
function updateLeasing() {
  const sumLeasing = Number(inputRentalPeriod.value) * Number(monthlyPayment.textContent.split(' ').join('').split('₽').join('')) + Number(inputAnInitialFee.value)
  leasingSum.textContent = format(sumLeasing) + '₽';
}

//обновление ежемесячного платежа
function updatePayment() {
  const payment = (Number(inputCarCost.value) - Number(inputAnInitialFee.value)) * (0.05 * Math.pow((1 + 0.05), Number(inputRentalPeriod.value)) / (Math.pow((1 + 0.05), Number(inputRentalPeriod.value)) - 1));
  monthlyPayment.textContent = format(parseInt(payment)) + '₽';
}

//слушатель бегунка input range для стоимости автомобиля
inputRangeCarCost.addEventListener('input', () => {
  const value = inputRangeCarCost.value;
  inputRangeCarCost.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`;
  
  if (value <= 15) {
    inputCarCost.value = 1500000;
    value = 15;
    inputRangeCarCost.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 0%, #E1E1E1 0%, #E1E1E1 100%)`;
  } else {
    inputCarCost.value = value * 100000;
  }

  updateLeasing();
  updatePayment();
});

//слушатель ввода данных с клавиатуры для стоимости автомобиля
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

  updateLeasing();
  updatePayment();
});

//слушатель бегунка input range для первоначального взноса
inputRangeAnInitialFee.addEventListener('input', () => {
  const value = (inputRangeAnInitialFee.value - 10) * 2;
  inputRangeAnInitialFee.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`
  
  if (inputRangeAnInitialFee.value > 9 && inputRangeAnInitialFee.value < 61) {
    inputAnInitialFee.value = inputCarCost.value / 100 * inputRangeAnInitialFee.value;
    percent.textContent = inputRangeAnInitialFee.value + '%';
  }

  updateLeasing();
  updatePayment();
});

//слушатель ввода данных с клавиатуры для первоначального взноса
inputAnInitialFee.addEventListener('change', () => {
  const price = parseInt(Number(inputAnInitialFee.value) * 100 / Number(inputCarCost.value))

  if (price <= 10) {
    inputRangeAnInitialFee.value = 0;
    percent.textContent = 10 + '%';
    inputRangeAnInitialFee.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 0%, #E1E1E1 0%, #E1E1E1 100%)`;
    inputAnInitialFee.value = inputCarCost.value / 100 * 10;
  } else if (price >= 60) {
    inputRangeAnInitialFee.value = 60;
    percent.textContent = 60 + '%';
    inputRangeAnInitialFee.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 100%, #E1E1E1 100%, #E1E1E1 100%)`;
    inputAnInitialFee.value = inputCarCost.value / 100 * 60;
  } else {
    percent.textContent = price + '%';
    inputRangeAnInitialFee.value = price;
    inputRangeAnInitialFee.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${(price - 10) * 2}%, #E1E1E1 ${(price - 10) * 2}%, #E1E1E1 100%)`;
  }

  updateLeasing();
  updatePayment();
});

//слушатель бегунка input range для срока лизинга
inputRangeRentalPeriod.addEventListener('input', () => {
  const value = inputRangeRentalPeriod.value * 100 / 120;
  inputRangeRentalPeriod.style.background = `-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ${value}%, #E1E1E1 ${value}%, #E1E1E1 100%)`

  if (inputRangeRentalPeriod.value > 5 && inputRangeRentalPeriod.value < 121) {
    inputRentalPeriod.value = parseInt(inputRangeRentalPeriod.value);
  }

  updateLeasing();
  updatePayment();
});

//слушатель ввода данных с клавиатуры для срока лизинга
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

  updateLeasing();
  updatePayment();
});

updateLeasing();
updatePayment();

function submitFormHandler(evt) {
  evt.preventDefault(); 
  buttonForm.disabled = true;

  const data = {
    'Стоимость автомобиля': inputCarCost.value,
    'Первоначальный взнос': inputAnInitialFee.value,
    'Срок лизинга': inputRentalPeriod.value,
    'Сумма договора лизинга': leasingSum.textContent,
    'Ежемесячный платеж от': monthlyPayment.textContent
  };

  alert(JSON.stringify(data)); 
}

buttonForm.addEventListener('click', submitFormHandler)