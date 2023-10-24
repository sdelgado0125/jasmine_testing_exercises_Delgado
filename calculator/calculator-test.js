
it('should calculate the monthly rate correctly', function () {
  const values = { amount: 10000, years: 10, rate: 4.5 };
    const result = calculateMonthlyPayment(values);
    expect(result).toBeCloseTo(93.22, 2); 
});


it("should return a result with 2 decimal places", function() {
  const values = { amount: 10000, years: 10, rate: 4.5 };
  const result = calculateMonthlyPayment(values);
  const decimalPlaces = (result.split('.')[1] || '').length;
  expect(decimalPlaces).toBe(2);
});


