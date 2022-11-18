# TypeScript Topics

> Obs.: [clique aqui](./README-pt-BR.md) para ler a versão traduzida em português brasileiro.

## 1. Type Aliases vs Interfaces

`Type Aliases` and `Interface` are two different ways that the typescript language provide us for defining a custom object.

The [typescript documentation](https://www.youtube.com/watch?v=Xo_ZwKDSjFI) recommends that we always define custom object types using interfaces instead of `Type Aliases`.

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

### Optional Properties
