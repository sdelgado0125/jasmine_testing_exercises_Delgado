describe('sumPaymentTotal', function() {
    it('should sum the total tip amount', function() {
      // Arrange
      // You should set up some test data in the 'allPayments' object
  
      // Act
      const result = sumPaymentTotal('tipAmt');
  
      // Assert
      expect(result).toBe(/* expected sum of tipAmt values */);
    });
  
    it('should sum the total bill amount', function() {
      // Arrange
      // Set up test data in the 'allPayments' object
  
      // Act
      const result = sumPaymentTotal('billAmt');
  
      // Assert
      expect(result).toBe(/* expected sum of billAmt values */);
    });
  
    // Add more test cases as needed
  });