interface Aquatic {
    water: string
}

interface Dog {
    whiskers: boolean
    fur: string | boolean
    barks: boolean
}

type Seal = Aquatic & Dog

const buddy: Seal = {
    water: 'fresh',
    whiskers: true,
    barks: true,
    fur: 'wet'
} 

const pal: Seal = {
    water: 'fresh',
    whiskers: true,
    barks: true,
    fur: 'wet',
    tail: 'fluffy'
}

type Languages = 'JS' | 'Java' | 'SQL' | 'Python'
type Frameworks = 'NextJS' | 'Angular' | 'Nuxt' | 'AmberJS'

interface Developer {
  language: Languages[]
  framework: Frameworks[]
}

const sealDev: Seal & Developer = {
  water: 'cold',
  whiskers: false,
  barks: true,
  fur: 'wet',
  language: ['JS', 'Python'],
  framework: ['NextJS']
}
