# Tópicos TypeScript

> [click here](./README.md) to read in english.

## 1. Type Aliases vs Interfaces

`Type` e `Interface` são duas maneiras diferentes que a linguagem TypeScript disponibiliza para definir objetos customizados.

A [documentação do TypeScript](https://www.typescriptlang.org/docs/handbook/2/objects.html) recomenda sempre usar interfaces quando o tipo for um objeto customizado.

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

Se tentarmos fazer mesma coisa com `Type` tomaremos um erro de compilação.

```typescript
type Phone = {
  title: string,
  price: number,
};

type Phone = { // <- Duplicate identifier 'Phone'.ts(2300)
   isOffer: boolean
}
```

### Property Modifiers

#### Optional Properties

Na maior parte do tempo, nos encontraremos lidando com objetos que *podem* ou não ter um conjunto de propriedades. Nesses casos, podemos marcar essas propriedades como opcionais adicionando um ponto de interrogação (`?`) no final de seus nomes.

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

#### `readonly` Properties

As propriedades também podem ser marcadas como `readonly` no TypeScript. Embora não altere nenhum comportamento em tempo de execução, uma propriedade marcada como `readonly` não pode ser alterada durante a verificação de tipo.

