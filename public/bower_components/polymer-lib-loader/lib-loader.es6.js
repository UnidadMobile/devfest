'use strict'

const Polymer = window.Polymer
const CustomEvent = window.CustomEvent

class libLoader {
  // Define behaviors with a getter.
  get behaviors () {
    return []
  }

  // Element setup goes in beforeRegister instead of createdCallback.
  beforeRegister () {
    this.is = 'lib-loader'

    // Define the properties object in beforeRegister.
    this.properties = {
      /** Link of the library */
      lib: {
        type: String
      },
      /** <script id="" */
      libUniqueId: {
        type: String
      },
      /** True when the lib is ready */
      libReady: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    }
  }

  // on ready try to insert the lib on the page
  attached () {
    if (!this.lib || !this.libUniqueId) {
      console.error('<lib-loader> ERROR: Library or unique id not specified.')
      return false
    }

    this.addEventListener('lib-loaded', (evt) => {
      this.set('libReady', true)
    })
    this._insertLib(this.lib, this.libUniqueId)
  }

  detached () {
    this.removeLib()
  }

  /** Remove lib from the dom */
  removeLib () {
    let lib = document.querySelector('#' + this.libUniqueId)
    lib ? lib.remove() : null
  }

  /** ===============
   * Private methods
   **/
  /* Insert at the end of the body the js lib */
  _insertLib (link, type) {
    // Check for existent lib
    if (document.querySelector('#' + type)) {
      document.querySelector('lib-loader').addEventListener('lib-loaded', (evt) => {
        this._onLoadLib(evt, type)
      })
      return false
    }
    let src = document.createElement('script')
    src.setAttribute('src', link)
    src.id = type
    src.async = true
    src.onreadystatechange = src.onload = (evt) => {
      this._onLoadLib(evt, type)
    }
    document.body.appendChild(src)
  }

  /** ===============
   * Event listeners
   **/
  /* On lib loaded */
  _onLoadLib (evt, type) {
    setTimeout(() => {
      this.dispatchEvent(new CustomEvent('lib-loaded'))
    })
  }

}

// Register the element using Polymer's constructor.
Polymer(libLoader)
