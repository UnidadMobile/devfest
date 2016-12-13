# `<lib-loader>` Polymer (ES6)

[![Build status](https://travis-ci.org/LasaleFamine/polymer-lib-loader.svg?branch=master)](https://travis-ci.org/LasaleFamine/polymer-lib-loader)
[![Bower version](https://badge.fury.io/bo/polymer-lib-loader.svg)](https://badge.fury.io/bo/polymer-lib-loader)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Dependency Status](https://gemnasium.com/badges/github.com/LasaleFamine/polymer-lib-loader.svg)](https://gemnasium.com/github.com/LasaleFamine/polymer-lib-loader)
 

> Library loader WebComponent for external (or internal) library. Written in [Polymer 1.0](https://www.polymer-project.org/1.0/) in ES6 syntax.

## Why

A simple component for delegate the task to import an external library.  
If you need to wrap a functionality of a library and load it only inside a component.  
Example:

``` html
<link rel="import" href="[your_bower_folder]/polymer-lib-loader/lib-loader.html">

<lib-loader
lib="https://cdnjs.cloudflare.com/ajax/libs/[lib]/[version]/[lib].js"
lib-unique-id="uniqueIdHere"
 on-lib-loaded="yourCallbackOnLoad"></lib-loader>

[...]

yourCallbackOnLoad: function () {
  console.log('loaded')
  yourLib.doingSomenthing('yo')
},

[...]
```

See the [`demo`](https://github.com/LasaleFamine/polymer-lib-loader/blob/master/demo/) folder for more details.

## Install

    $ bower install polymer-lib-loader


## Default Properties
``` js

{
  /** Instance link **/
  lib: {
    type: String
  },
  /** <script id=""> */
  libUniqueId: {
    type: String
  },
  /** True when the lib is ready */
  libReady: {
    type: Boolean,
    value: false
  }
}

```

## Note on library load
The ability of the component to load the library and not reload it again and again is related to the `libUniqueId`.  
The `<script id="yourId" src="yourLibLink">` will be attached as a child of the `body` and **removed when the component is detached** (or when a wrapper of it is detached).

## API

#### .removeLib()
Remove the library from the page
____


### Events

#### on-lib-loaded
When the initialization of the library is complete


## Develop

Clone the repository ***inside a folder*** (ex: `sandbox-polymer-lib-loader/polymer-lib-loader`) and inside the `polymer-lib-loader` folder:

    $ npm install && bower install

Developing mode: **watch** on base files and **Babel** that transpiles (http://localhost:8080/polymer-lib-loader/demo)

    $ npm start

Build: only the **Babel** action simply run

    $ npm run build


## Test

[Standard](https://github.com/feross/standard) for coding style and [WCT](https://github.com/polymer/web-component-tester) for unit test:

    $ npm test

## License

[MIT](https://github.com/LasaleFamine/polymer-lib-loader/blob/master/LICENSE.md) &copy; LasaleFamine
