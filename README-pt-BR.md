# Tópicos TypeScript

> [click here](./README.md) to read in english.

## 1. Type Aliases vs Interfaces

`Type` e `Interface` são duas maneiras diferentes que a linguagem TypeScript disponibiliza para definir objetos customizados.

A [documentação do TypeScript](https://www.youtube.com/watch?v=Xo_ZwKDSjFI) recomenda sempre usar interfaces quando o tipo for um objeto customizado.

Podemos usar `Type Aliases` para tipos mais simples e que serão usados em várias partes da aplicação.

```typescript
type PhoneStatus = 'refund' | 'broken' | 'new' | 'used'
```

A principal diferença entre eles é que interfaces podem ser extensíveis.

Por exemplo:

```typescript
interface Phone {
  title: string;
  price: number;
};

const iPhone: Phone = {
  title: 'iPhone X',
  price: 799,
  isOffer: false // <- não podemos usar isOffer 
  // até extender a interface no código abaixo
};

interface Phone {
  isOffer: boolean;
};
```

Se tentarmos fazer mesma coisa com `Type` tomaremos um erro de compilação

```typescript
type Phone = {
  title: string,
  price: number,
};

type Phone = { // <- Duplicate identifier 'Phone'.ts(2300)
   isOffer: boolean
}
```

### Optional 