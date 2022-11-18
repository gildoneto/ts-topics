interface Tablet {
  title: string;
  price: number;
};

const motorola: Tablet = {
  title: 'Moto Pad Pro',
  price: 1199,
  isOffer: true
};

interface Tablet {
  isOffer: boolean;
};