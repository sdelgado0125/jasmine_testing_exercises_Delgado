describe('sumPaymentTotal', function() {
    let allPayments;
  
    beforeEach(function () {
      allPayments = {
        payment1: { billAmt: 30, tipAmt: 5 },
        payment2: { billAmt: 40, tipAmt: 7 },
        payment3: { billAmt: 25, tipAmt: 4 },
      };
    });
  
    it('should sum the total tip amount for multiple payments', function () {
      const result = sumPaymentTotal('tipAmt');
      expect(result).toBe(16);
    });
  
    it('should sum the total bill amount for multiple payments', function () {
      const result = sumPaymentTotal('billAmt');
      expect(result).toBe(95); 
    });
  
    it('should handle an empty allPayments object', function () {
      allPayments = {}; 
      const result = sumPaymentTotal('tipAmt');
      expect(result).toBe(0);
    });
  
    it('should handle undefined or missing type', function () {
      const resultUndefined = sumPaymentTotal(undefined);
      expect(resultUndefined).toBe(0);
  
      const resultMissing = sumPaymentTotal('missingType');
      expect(resultMissing).toBe(0);
    });
  });