<div align="center">

  <h1><code>Candy Apple</code></h1>

  <strong>A sweet <a href="https://www.npmjs.com/package/express">Express</a> templating engine with a WASM core.</strong>

  <!-- <p>
    <a href="https://travis-ci.org/rustwasm/wasm-pack-template"><img src="https://img.shields.io/travis/rustwasm/wasm-pack-template.svg?style=flat-square" alt="Build Status" /></a>
  </p>

  <h3>
    <a href="https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html">Tutorial</a>
    <span> | </span>
    <a href="https://discordapp.com/channels/442252698964721669/443151097398296587">Chat</a>
  </h3>

  <sub>Built with 🦀🕸 by <a href="https://rustwasm.github.io/">The Rust and WebAssembly Working Group</a></sub>
  -->
 </div> 

## About

**Candy Apple** is a templating language and engine designed to be used with the [Express](https://www.npmjs.com/package/express) web framework. Candy Apple depends heavily on [Grotto](https://www.npmjs.com/package/grotto), a Rust WASM core for manipulating pure data functionally.

## 🚴 Usage
```sh 
npm i candyapple
```
Then add it as an Express view engine
```js
const {engine} = require('candyapple')
const express = require('express')
const app = express()
const port = 3030

app.engine('html', engine);
app.set('views', './examples')
app.set('view engine', 'html')

app.get('/', (req, res) => {
    try {
        res.render('index', { title: "Grotto!" })
    } catch (e) {
        console.error(e);
    }
})

app.get('/test', (req, res) => {
    res.send('hi')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```

<!-- ### 🐑 Use `cargo generate` to Clone this Template -->

