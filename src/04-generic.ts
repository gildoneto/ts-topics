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
    hours: 80
  }
}