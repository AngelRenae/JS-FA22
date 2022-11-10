'use strict';
const userInput = document.getElementById('total-input');
const tipSlider = document.getElementById('slider');
const tipSliderValue = document.getElementById('slider-val');
const tipOutput = document.getElementById('tip-output');
const totalOutput = document.getElementById('total-output');

let tipVal = 0;
let cost = 0;

tipSlider.addEventListener('change', (e) => {
  tipVal = e.target.value;
  tipSliderValue.textContent = `${tipVal}%`;
  renderTotals();
});

userInput.addEventListener('change', (e) => {
  cost = e.target.value;
  renderTotals();
});

const calculateTipAmount = () => {
  const decimal = tipVal * 0.01;
  return (cost * decimal.toFixed(2));
};

const calculateTotalCost = (tip) => {
  return (cost + tip).toFixed(2);
};

const renderTotals = () => {
  const tip = Number(calculateTipAmount());
  tipOutput.textContent = `$${tip}`;
  const total = Number(calculateTotalCost(tip));
  totalOutput.textContent = `$${total}`;
};
