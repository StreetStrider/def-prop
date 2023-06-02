# def-prop [![Coveralls](https://img.shields.io/coveralls/StreetStrider/def-prop.svg?style=flat-square)](https://coveralls.io/github/StreetStrider/def-prop) [![MIT licensed](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](license) [![typescript](http://img.shields.io/badge/type-script-0074C1.svg?style=flat-square)](//typescriptlang.org) [![npm: def-prop](http://img.shields.io/badge/npm-def--prop-CB3837.svg?style=flat-square)](https://www.npmjs.org/package/def-prop)

Simple and easy API around Object.defineProperty.
* `def` — `Object.defineProperty`.
* `val` — const value, not enumerable, writable or configurable. Append `:enum`,
  `:write` and `:config` string literals to enable corresponding traits.
* `getset` — getter-setter pair. If no setter then it is disabled. Append `:enum`,
  `:write` and `:config` string literals to enable corresponding traits.

* `:enum` — enumerable.
* `:write` — writable.
* `:config` — configurable.

```sh
npm i def-prop
```

```js
import def from 'def-prop'
import val from 'def-prop/val'
import getset from 'def-prop/getset'

var object = {}

def(object,'prop', val(5))
def(object,'prop', val(5, ':enum'))
def(object,'prop', val(5, ':config', ':enum'))

def(object, 'prop', getset(() => 'getter'))
def(object, 'prop', getset(() => 'getter', v => { 'setter' }))
def(object, 'prop', getset(() => 'getter', ':enum'))
def(object, 'prop', getset(() => 'getter', v => { 'setter' }, ':enum'))
```

Vanilla CJS package, available both in ESM/CJS. Typings included.

# license
MIT. © Strider, 2023.
