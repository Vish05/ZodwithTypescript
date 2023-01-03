## Introduction

Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object.

https://github.com/colinhacks/zod

Some other great aspects:

- Zero dependencies
- Works in Node.js and all modern browsers
- Tiny: 8kb minified + zipped
- Immutable: methods (e.g. .optional()) return a new instance
- Concise, chainable interface
- Functional approach: parse, don't validate
- Works with plain JavaScript too! You don't need to use TypeScript.

## Content

- [Installation](#installation)
- [Run](#run)
- [Comparison](#comparison)

## Installation

```js
npm install
```

## Run

```js
npx ts-node index.ts
```

## Comparison

Typescript

`Typescript is not provide runtime type checking so we got error "Cannot read properties of undefined (reading 'forEach')"`

Typescript-withzod

Typescript with Zod provide runtime type checking. It will read json and dispaly output

Typescript-withyup

Typescript with Yup provide runtime type checking. It will read json and dispaly output

Yup is a full-featured library that was implemented first in vanilla JS, and later rewritten in TypeScript.

https://github.com/jquense/yup

- Supports casting and transforms
- All object fields are optional by default
- Missing object methods: (partial, deepPartial)
- Missing promise schemas
- Missing function schemas
- Missing union & intersection schemas
