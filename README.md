# Emtr

A lightweight event emitter for Javascript

## Dependecy Installation

**yarn:**

```bash
yarn add @katrieltsepelevish/emtr
```

## Usage

```js

import Emtr from '@katrieltsepelevish/emtr';

const emitter = new Emtr();

const cb = emitter.handle('test', () => console.log('fired!'));

emitter.fire('test');

const num = emitter.count('test');
console.log(num);

emitter.remove('test', cb);

emitter.clear();

```

## Publish

Make sure to bump the version before publishing

```bash
yarn build
npm publish --access=public
```