// Level 1
function cropWateringCalculator(forecast) {
  let count = 0;
  for (let i = 0; i < forecast.length; i++) {
    if (forecast[i].weather !== "rain") {
      count += 1;
    }
  }
  return count;
}

// Level 2 and 3
function cropWateringCalculatorImproved(forecast, numOfCrops) {}

module.exports = { cropWateringCalculator, cropWateringCalculatorImproved };
