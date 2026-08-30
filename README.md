## @mintproject/modelcatalog_client@8.0.1

> **This repository is read-only history.** The generated client is no longer
> maintained. The npm package `@mintproject/modelcatalog_client` stays
> published, because `mintproject/mint-ui-lit` still depends on it. Use the
> REST API in
> [`mintproject/monorepo`](https://github.com/mintproject/monorepo), in the
> `model-catalog-api/` directory.

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @mintproject/modelcatalog_client@8.0.1 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
