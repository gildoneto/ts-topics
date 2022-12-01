interface Tax {
  federalFee: number;
  stateFee: number;
  customs?: number;
}

const calculateTax = (fees: Tax) => {
  // ..
}

calculateTax({ federalFee: 1.5, stateFee: 2.4 });
calculateTax({ federalFee: 2.7, stateFee: 5.8, customs: 9 });