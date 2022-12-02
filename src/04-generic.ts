import { Address } from "cluster";

// generic function
function echo<T>(obj: T): T {
  return obj;
}

console.log(echo<string>("Mbappé"));
console.log(echo<number>(27));

// generic in types
interface Hourly {
  base: number,
  hours: number
}

interface Salary {
  base: number
}

interface Person<T> {
  name: string,
  age: number,
  wage: T
}

const salaryWorker:Person<Salary> = {
  name:'Mbappé',
  age: 27,
  wage: {
    base: 200000
  }
}

const hourlyWorker:Person<Hourly> = {
  name:'Joe',
  age: 50,
  wage: {
    base: 200,
    hours: 80
  }
}

// mismatched generics
const mismatchedGenerics:Person<Salary> = {
  name:'Joe',
  age: 50,
  wage: {
    base: 200,
    // hours: 80
  }
}

// ============================================= //

function notNull<T>(arg: T) {
  if (arg !== null) return arg;
  else return null;
}

notNull('Some string');

// ============================================= //

type Flag = '🇪🇨'| '🇨🇱'| '🇨🇦'| '🇺🇸'| '🇧🇷'| '🇮🇷'| '🇲🇽';
type RedFruit = '🍎' | '🍒' | '🍓' | '🍉';

const redFruits: RedFruit[] = ['🍎' , '🍒' , '🍓' , '🍉'];
const flags: Flag[] = ['🇮🇷', '🇪🇨', '🇨🇱', '🇨🇦', '🇲🇽', '🇧🇷', '🇺🇸'];

const numbers = [5.2, 7.1, 2.6, 6, 9.89, 4.001, 0.9];
const allFruits = ['🍏', '🍎', '🍋', '🍒', '🍓', '🍍', '🍊', '🍌', '🍉'];

function firstFive<T>(list: T[]): T[] {
  return list.slice(0, 5);
}

// const firstFiveArrow = <T> (lista: T[]): T[] => {
//   return lista.slice(0, 5);
// }

// console.log(firstFive(numbers));
// console.log(firstFive(redFruits));
// console.log(firstFive(flags));

// ============================================= //

// interface dataType<T> {
//   data: T;
//   type: string;
// }

function dataType<T>(data: T): {data: T, type: string} {
  const result = {
    data: data,
    type: typeof data
  };
  return result;
}

console.log(dataType('Pixies 🦜').type)

// ============================================= //

interface Address {
  logradouro: string;
  bairro: string;
  uf: string;
}
interface Product {
  title: string;
  price: number;
}

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

async function handleData() {
  const data = await getData<Address>('https://viacep.com.br/ws/01310300/json/');
  // const data = await getData<Product>('https://fakestoreapi.com/products/1');
  return data;
}