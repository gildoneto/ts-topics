# TypeScript Topics

> Obs.: [clique aqui](./README-pt-BR.md) para ler a versão traduzida em português brasileiro.

## 1. Type Aliases vs Interfaces

`Type Aliases` and `Interface` are two different ways that the typescript language provide us for defining a custom object.

The [typescript documentation](https://www.typescriptlang.org/docs/handbook/2/objects.html) recommends that we always define custom object types using interfaces instead of `Type Aliases`.

We can use `type` for creating a practical alias for a type that  would take a long time to write and would have to reproduce in multiple parts of the application.

```typescript
type PhoneStatus = 'refund' | 'broken' | 'new' | 'used'
```

The main difference is that interfaces can be extended.

For example:

```typescript
interface Phone {
  title: string;
  price: number;
};

const iPhone: Phone = {
  title: 'iPhone X',
  price: 799,
  isOffer: false // <- we can't use isOffer 
  // until we extende Phone interface on code below
};

interface Phone {
  isOffer: boolean;
};
```

If we try to the same thing with `Type` we get a compilation error.

```typescript
type Phone = {
  title: string,
  price: number,
};

type Phone = { // <- Duplicate identifier 'Phone'.ts(2300)
   isOffer: boolean
}
```

### 1.1 Property Modifiers

#### 1.1.1 Optional Properties

Much of the time, we’ll find ourselves dealing with objects that *might* have a property set. In those cases, we can mark those properties as optional by adding a question mark (`?`) to the end of their names.

```typescript
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
```

#### 1.1.2 `readonly` Properties

Properties can also be marked as `readonly` for TypeScript. While it won’t change any behavior at runtime, a property marked as `readonly` can’t be written to during type-checking.

## 2. Generic Object Types

Let’s imagine a Box type that can contain any value - `string`s, `number`s, `Giraffe`s, whatever.

```typescript
interface Box {
  contents: any;
}
```

We can make a generic `Box` type which declares a type parameter.

```typescript
interface Box<Type> {
  contents: Type;
}
```

You might read this as “A `Box` of `Type` is something whose `contents` have type `Type`”. Later on, when we refer to Box, we have to give a *type argument* in place of `Type`.

```typescript
let box: Box<string>;
```

Think of `Box` as a template for a real type, where `Type` is a placeholder that will get replaced with some other type. When TypeScript sees `Box<string>`, it will replace every instance of `Type` in `Box<Type>` with `string`, and end up working with something like `{ contents: string }`.

```typescript
interface Box<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}

let boxA: Box<string> = { contents: "hello" };
boxA.contents; // (property) Box<string>.contents: string

let boxB: StringBox = { contents: "world" };
boxB.contents; // (property) StringBox.contents: string
```

`Box` is reusable in that `Type` can be substituted with anything. That means that when we need a box for a new type, we don’t need to declare a new `Box` type at all (though we certainly could if we wanted to).

```typescript
interface Box<Type> {
  contents: Type;
}
 
interface Apple {
  // ....
}
 
// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;
```
