type ID = number | string;

const printId = (id: ID) => {
  console.log(id.toUpperCase());
}

const betterPrintId = (id: ID) => {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

type Beverage = string[] | string

const drink = (beverage: Beverage) => {
  if (Array.isArray(beverage)) {
    // Here: 'beverage' is 'string[]'
    console.log("Drinking " + beverage.join(" and "));
  } else {
    // Here: 'beverage' is 'string'
    console.log("Drinking " + beverage);
  }
}

drink(['beer', 'vine', 'champagne', 'soda'])