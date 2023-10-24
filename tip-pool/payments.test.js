describe('Payment.js Tests', function () {
    let allPayments;
    let paymentTbody;
    let summaryTds;
    let billAmtInput;
    let tipAmtInput;
  
    beforeEach(function () {
      allPayments = {};
      paymentTbody = document.createElement('tbody');
      summaryTds = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
      ];
      billAmtInput = document.createElement('input');
      tipAmtInput = document.createElement('input');
    });
  
    describe('submitPaymentInfo', function () {
      it('should add a new payment to allPayments and update tables', function () {
        billAmtInput.value = '30';
        tipAmtInput.value = '5';
  
        submitPaymentInfo();
  
        expect(Object.keys(allPayments).length).toBe(1);
        expect(allPayments.payment1.billAmt).toBe('30');
        expect(allPayments.payment1.tipAmt).toBe('5');
  
      });
  
      it('should not add a new payment with negative or empty input', function () {
        billAmtInput.value = '-10';
        tipAmtInput.value = '';
  
        submitPaymentInfo();
  
        expect(Object.keys(allPayments).length).toBe(0);
  
      });
    });
  
    describe('createCurPayment', function () {
      it('should create a payment object with valid input values', function () {
        billAmtInput.value = '30';
        tipAmtInput.value = '5';
  
        const payment = createCurPayment();
  
        expect(payment.billAmt).toBe('30');
        expect(payment.tipAmt).toBe('5');
        expect(payment.tipPercent).toBe(16.67);
  
      });
  
      it('should return undefined with negative or empty input', function () {
        billAmtInput.value = '-10';
        tipAmtInput.value = '';
  
        const payment = createCurPayment();
  
        expect(payment).toBeUndefined();
      });
    });
  
    describe('appendPaymentTable', function () {
      it('should create a new table row element and append it to the payment table', function () {
        const curPayment = {
          billAmt: '30',
          tipAmt: '5',
          tipPercent: 16.67,
        };
  
        appendPaymentTable(curPayment);
  
        const rows = paymentTbody.querySelectorAll('tr');
        expect(rows.length).toBe(1);
      });
    });
  
    describe('updateSummary', function () {
      it('should calculate and update the summary table', function () {
        allPayments = {
          payment1: { billAmt: '30', tipAmt: '5' },
          payment2: { billAmt: '40', tipAmt: '7' },
        };
  
        updateSummary();
  
        expect(summaryTds[0].textContent).toBe('$70');
        expect(summaryTds[1].textContent).toBe('$12');
        expect(summaryTds[2].textContent).toBe('16.67%');
      });
    });
  });