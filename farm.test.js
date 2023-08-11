// your code here
const { cropWateringCalculator } = require("./farm");

describe("cropWateringCalculator", () => {
  test("should return 0 for an empty forecast", () => {
    const forecast = [];

    const result = cropWateringCalculator(forecast);

    expect(result).toBe(0);
  });

  test("should return 0 when there are all rainy days", () => {
    const forecast = [{ day: 1, weather: "rain" }];

    const result = cropWateringCalculator(forecast);

    expect(result).toBe(0);
  });

  test('should return 1 when there is only one non-"rain" forecast', () => {
    const forecast = [{ day: 1, weather: "sunny" }];

    const result = cropWateringCalculator(forecast);

    expect(result).toBe(1);
  });

  test('should return the count of non-"rain" weather forecasts', () => {
    const forecast = [
      { day: 1, weather: "rain" },
      { day: 2, weather: "sunny" },
      { day: 3, weather: "cloudy" },
      { day: 4, weather: "sunny" },
    ];

    const result = cropWateringCalculator(forecast);

    expect(result).toBe(3);
  });
});
