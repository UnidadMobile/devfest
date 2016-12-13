'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polymer = window.Polymer;
var CustomEvent = window.CustomEvent;

var libLoader = function () {
  function libLoader() {
    _classCallCheck(this, libLoader);
  }

  _createClass(libLoader, [{
    key: 'beforeRegister',


    // Element setup goes in beforeRegister instead of createdCallback.
    value: function beforeRegister() {
      this.is = 'lib-loader';

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
      };
    }

    // on ready try to insert the lib on the page

  }, {
    key: 'attached',
    value: function attached() {
      var _this = this;

      if (!this.lib || !this.libUniqueId) {
        console.error('<lib-loader> ERROR: Library or unique id not specified.');
        return false;
      }

      this.addEventListener('lib-loaded', function (evt) {
        _this.set('libReady', true);
      });
      this._insertLib(this.lib, this.libUniqueId);
    }
  }, {
    key: 'detached',
    value: function detached() {
      this.removeLib();
    }

    /** Remove lib from the dom */

  }, {
    key: 'removeLib',
    value: function removeLib() {
      var lib = document.querySelector('#' + this.libUniqueId);
      lib ? lib.remove() : null;
    }

    /** ===============
     * Private methods
     **/
    /* Insert at the end of the body the js lib */

  }, {
    key: '_insertLib',
    value: function _insertLib(link, type) {
      var _this2 = this;

      // Check for existent lib
      if (document.querySelector('#' + type)) {
        document.querySelector('lib-loader').addEventListener('lib-loaded', function (evt) {
          _this2._onLoadLib(evt, type);
        });
        return false;
      }
      var src = document.createElement('script');
      src.setAttribute('src', link);
      src.id = type;
      src.async = true;
      src.onreadystatechange = src.onload = function (evt) {
        _this2._onLoadLib(evt, type);
      };
      document.body.appendChild(src);
    }

    /** ===============
     * Event listeners
     **/
    /* On lib loaded */

  }, {
    key: '_onLoadLib',
    value: function _onLoadLib(evt, type) {
      var _this3 = this;

      setTimeout(function () {
        _this3.dispatchEvent(new CustomEvent('lib-loaded'));
      });
    }
  }, {
    key: 'behaviors',

    // Define behaviors with a getter.
    get: function get() {
      return [];
    }
  }]);

  return libLoader;
}();

// Register the element using Polymer's constructor.


Polymer(libLoader);