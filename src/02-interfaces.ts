interface Tablet {
  title: string;
  price: number;
};

const Motorola: Tablet = {
  title: 'Moto Pad Pro',
  price: 1199,
  isOffer: true
};

interface Tablet {
  isOffer: boolean;
};

// yields error because we cannot override existing attributes
interface Tablet {
  price: boolean;
};