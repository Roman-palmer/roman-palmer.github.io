/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/svg-baker-runtime/browser-symbol.js":
/*!***********************************************************!*\
  !*** ../node_modules/svg-baker-runtime/browser-symbol.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js":
/*!*************************************************************************!*\
  !*** ../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: /msie/i.test(ua) || /trident/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE || browser.isEdge) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./assets.js":
/*!*******************!*\
  !*** ./assets.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requireAll = function requireAll(r) {
  return r.keys().forEach(r);
};

// include svg-sprite
requireAll(__webpack_require__("./ico sync recursive \\.svg$"));
// include pug-templates
requireAll(__webpack_require__("./pug sync \\.pug$"));

/***/ }),

/***/ "./ico sync recursive \\.svg$":
/*!*************************!*\
  !*** ./ico sync \.svg$ ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./euroview-grey.svg": "./ico/euroview-grey.svg",
	"./euroview.svg": "./ico/euroview.svg",
	"./microphone.svg": "./ico/microphone.svg",
	"./nerd.svg": "./ico/nerd.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ico sync recursive \\.svg$";

/***/ }),

/***/ "./ico/euroview-grey.svg":
/*!*******************************!*\
  !*** ./ico/euroview-grey.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "euroview-grey",
  "use": "euroview-grey-usage",
  "viewBox": "0 0 96 100",
  "content": "<symbol fill=\"none\" viewBox=\"0 0 96 100\" id=\"euroview-grey\"><path d=\"M43.331 19.918C46.716 14.3 50.896 9.59 56.188 5.895 60.358 2.979 64.875.825 69.969.19c8.75-1.087 15.453 2.522 20.464 9.386 4.976 6.807 6.13 14.644 5.34 22.804-1.042 10.656-6.199 19.451-12.943 27.48-6.554 7.806-14.324 14.362-21.916 21.104-3.235 2.871-6.463 5.756-9.382 8.951-2.384 2.605-4.538 5.349-5.87 8.668-.639 1.594-1.764 1.888-2.713.649-2.86-3.713-6.793-6.039-10.633-8.482-6.44-4.071-12.955-8.015-18.563-13.243C3.013 67.512-1.17 55.166.278 40.766c.795-7.905 3.322-15.113 8.687-21.152 3.801-4.279 8.423-7.305 14.038-8.73 5.49-1.39 15.846 1.332 20.328 9.034zm39.117 17.004c2.432-7.436 2.283-14.816-.987-21.942-3.02-6.587-8.587-9.406-15.727-7.895-7.993 1.694-13.452 6.967-17.788 13.547a16.948 16.948 0 0 0-2.891 5.983c-.261.95-.695 1.96-1.863 2.009-1.095.041-1.737-.773-2.245-1.653a6.622 6.622 0 0 1-.577-1.436c-1.084-3.954-3.499-6.766-7.297-8.412a12.486 12.486 0 0 0-4.673-1.077c-5.418-.11-9.375 2.623-12.416 6.729-4.945 6.615-6.255 14.285-6.147 22.308 0 5.014.973 9.796 3.423 14.23.538 1.725 1.556 3.188 2.536 4.662 4.58 6.901 10.772 12.184 17.225 17.232 3.524 3.02 7.46 5.58 10.3 9.534 1.167-3.005 3.065-5.331 4.76-7.781 6.804-7.743 14.275-14.882 20.888-22.798 1.984-2.374 4.09-4.682 5.525-7.467 3.645-4.769 6.435-9.952 7.954-15.773z\" fill=\"#E5E5E5\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./ico/euroview.svg":
/*!**************************!*\
  !*** ./ico/euroview.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "euroview",
  "use": "euroview-usage",
  "viewBox": "0 0 96 100",
  "content": "<symbol fill=\"none\" viewBox=\"0 0 96 100\" id=\"euroview\"><path d=\"M43.331 19.918C46.716 14.3 50.896 9.59 56.188 5.895 60.358 2.979 64.875.825 69.969.19c8.75-1.087 15.453 2.522 20.464 9.386 4.976 6.807 6.13 14.644 5.34 22.804-1.042 10.656-6.199 19.451-12.943 27.48-6.554 7.806-14.324 14.362-21.916 21.104-3.235 2.871-6.463 5.756-9.382 8.951-2.384 2.605-4.538 5.349-5.87 8.668-.639 1.594-1.764 1.888-2.713.649-2.86-3.713-6.793-6.039-10.633-8.482-6.44-4.071-12.955-8.015-18.563-13.243C3.013 67.512-1.17 55.166.278 40.766c.795-7.905 3.322-15.113 8.687-21.152 3.801-4.279 8.423-7.305 14.038-8.73 5.49-1.39 15.846 1.332 20.328 9.034zm39.117 17.004c2.432-7.436 2.283-14.816-.987-21.942-3.02-6.587-8.587-9.406-15.727-7.895-7.993 1.694-13.452 6.967-17.788 13.547a16.948 16.948 0 0 0-2.891 5.983c-.261.95-.695 1.96-1.863 2.009-1.095.041-1.737-.773-2.245-1.653a6.622 6.622 0 0 1-.577-1.436c-1.084-3.954-3.499-6.766-7.297-8.412a12.486 12.486 0 0 0-4.673-1.077c-5.418-.11-9.375 2.623-12.416 6.729-4.945 6.615-6.255 14.285-6.147 22.308 0 5.014.973 9.796 3.423 14.23.538 1.725 1.556 3.188 2.536 4.662 4.58 6.901 10.772 12.184 17.225 17.232 3.524 3.02 7.46 5.58 10.3 9.534 1.167-3.005 3.065-5.331 4.76-7.781 6.804-7.743 14.275-14.882 20.888-22.798 1.984-2.374 4.09-4.682 5.525-7.467 3.645-4.769 6.435-9.952 7.954-15.773z\" fill=\"#DB002A\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./ico/microphone.svg":
/*!****************************!*\
  !*** ./ico/microphone.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "microphone",
  "use": "microphone-usage",
  "viewBox": "0 0 52 65",
  "content": "<symbol fill=\"none\" viewBox=\"0 0 52 65\" id=\"microphone\"><path d=\"M47.535 4.434A15.196 15.196 0 0 0 36.757 0c-4.071 0-7.9 1.574-10.778 4.434a14.99 14.99 0 0 0-4.465 10.705c0 1.128.128 2.236.369 3.31L1.25 43.604c-1.233 1.503-1.316 3.71-.326 5.334-1.547 2.215-1.14 5.308 1.12 7.552 2.99 2.969 8.388 3.598 13.714-1.691 3.078-3.058 7.542-4.815 10.117-2.258 1.858 1.846 1.92 5.759-2.336 9.986a1.442 1.442 0 0 0 0 2.05 1.46 1.46 0 0 0 1.032.424 1.46 1.46 0 0 0 1.031-.425c5.674-5.635 5.188-11.251 2.336-14.084-1.598-1.587-3.944-2.313-6.438-1.99-2.653.341-5.352 1.81-7.806 4.247-4.167 4.138-7.768 3.498-9.587 1.692-1.137-1.13-1.359-2.395-1.03-3.338.755.471 1.64.712 2.525.712 1.04 0 2.081-.33 2.909-.999l25.654-20.757c.848.143 1.713.22 2.591.22 4.072 0 7.9-1.574 10.778-4.434A14.988 14.988 0 0 0 52 15.14c0-4.043-1.586-7.846-4.465-10.705zM6.67 48.569c-.638.516-1.71.462-2.292-.117l-.747-.742c-.583-.579-.637-1.642-.117-2.276l19.488-23.76a15.153 15.153 0 0 0 2.978 4.17 15.227 15.227 0 0 0 4.791 3.223L6.669 48.57zm38.803-24.774a12.286 12.286 0 0 1-8.715 3.585 12.285 12.285 0 0 1-8.715-3.585 12.119 12.119 0 0 1-3.61-8.656 12.12 12.12 0 0 1 3.61-8.656 12.286 12.286 0 0 1 8.715-3.585c3.292 0 6.387 1.273 8.715 3.585a12.12 12.12 0 0 1 3.61 8.656 12.12 12.12 0 0 1-3.61 8.656z\" fill=\"#DB002A\" /><path d=\"M43.707 9.053a1.466 1.466 0 0 0-2.063-.017 1.442 1.442 0 0 0-.017 2.05c1.123 1.132 1.766 2.763 1.766 4.472 0 1.71-.643 3.34-1.766 4.474a1.442 1.442 0 0 0 .017 2.049 1.46 1.46 0 0 0 1.023.416c.378 0 .755-.145 1.04-.433 1.655-1.671 2.604-4.042 2.604-6.506 0-2.463-.949-4.834-2.604-6.505z\" fill=\"#DB002A\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./ico/nerd.svg":
/*!**********************!*\
  !*** ./ico/nerd.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "nerd",
  "use": "nerd-usage",
  "viewBox": "0 0 62 30",
  "content": "<symbol fill=\"none\" viewBox=\"0 0 62 30\" id=\"nerd\"><path d=\"M5.388 9.549l-.932-.65c0 .463.28.65.932.65zm1.59 1.21c.347.776.599 1.59.748 2.427.08.746.115 1.495.105 2.245a.247.247 0 0 0 .28.28 5.21 5.21 0 0 1 1.218.188 1.009 1.009 0 0 1 .735 1.022v.092a.93.93 0 0 1-.938.65 8.865 8.865 0 0 1-4.39-1.301 9.409 9.409 0 0 1-4.678-7.56A5.673 5.673 0 0 1 1.277 4.41a10.168 10.168 0 0 1 9.91-4.294 4.929 4.929 0 0 1 4.207 3.455c.291.874.45 1.786.47 2.707a7.805 7.805 0 0 0 1.954 4.671c.213.237.403.494.566.768.175.11.308.275.378.468a1.546 1.546 0 0 1-.749 1.952 1.393 1.393 0 0 0-.651 1.4c.078.457.109.921.092 1.385v.56a2.05 2.05 0 0 1-2.338 1.867c-.56 0-1.121-.189-1.681-.189-.38 0-.38 0-.38.371a.923.923 0 0 1-.84.937h-.56l-4.207.189H6.417a.906.906 0 0 1-.652-.84.722.722 0 0 1 .652-.748 2.23 2.23 0 0 1 .762-.092h1.498a23.544 23.544 0 0 0 2.522-.183.653.653 0 0 0 .54-.378 1.203 1.203 0 0 1 1.127-.846h1.219c.469 0 .938.092 1.4.092.463 0 .56-.184.56-.56 0-.376-.091-.93-.091-1.398a2.744 2.744 0 0 1 1.12-2.688l.28-.188-.84-1.113a7.576 7.576 0 0 1-1.772-3.832 22.739 22.739 0 0 1-.286-2.602 4.397 4.397 0 0 0-1.023-2.46 4.237 4.237 0 0 0-3.088-1.118A9.599 9.599 0 0 0 3.987 3.76a5.239 5.239 0 0 0-2.06 5.789 8.014 8.014 0 0 0 4.02 5.322c.295.166.61.29.939.371v-.18a9.202 9.202 0 0 0-.938-4.484.324.324 0 0 0-.28-.097 2.104 2.104 0 0 0-.75-.065 1.48 1.48 0 0 1-1.492-1.464v-.033c0-.748.47-1.21 1.212-.93a4.5 4.5 0 0 1 1.238.716c.208.232.396.482.56.748l.378-.184a1.568 1.568 0 0 1-.47-1.684 1.092 1.092 0 0 1 .834-.839 1.024 1.024 0 0 1 .932.56c.283.444.386.979.288 1.496l.931-.097-.195-.184a1.418 1.418 0 0 1 0-1.685c.097-.092.097-.182.189-.28a.802.802 0 0 1 1.103.261l.011.019c.263.35.397.78.378 1.217v.468l.28-.376c.195-.35.449-.664.749-.93.371-.378.84-.19 1.022.37 0 .098 0 .098.098.19a1.45 1.45 0 0 1-1.12 1.678c-.19 0-.28.188-.378.377-.532 2.23-.4 4.565.378 6.721a.546.546 0 0 1-.19.65h-.091c-.19.091-.378 0-.47-.28a4.591 4.591 0 0 1-.468-1.217 15.307 15.307 0 0 1-.28-5.042c.091-.469.188-.84.28-1.4-.19 0-.372-.097-.47 0a2.902 2.902 0 0 1-2.15.372.344.344 0 0 0-.28.092c-.264.21-.545.396-.84.56l.092.473zm.937 12.142c.6.082 1.192.209 1.772.378a7.925 7.925 0 0 1 3.466 1.399.651.651 0 0 1 .28.748.613.613 0 0 1-.846.184c-.182-.092-.463-.28-.651-.371A31.318 31.318 0 0 0 7.83 23.74a15.311 15.311 0 0 1-1.87-.742.417.417 0 0 1-.37-.566.475.475 0 0 1 .468-.371c1.401-.189 2.802-.468 4.209-.56.807-.09 1.623-.09 2.43 0h.092c.28.092.47.28.378.56a.527.527 0 0 1-.567.469h-.28a15.502 15.502 0 0 0-4.672.37h.266zm-.658 5.98a8.9 8.9 0 0 1-.56-.938 1.201 1.201 0 0 1 .378-1.119c.28-.28.56-.091.84 0l2.34.84c.324.086.638.213.931.377h.092a.442.442 0 0 1 .19.56A2.226 2.226 0 0 1 9.407 30a3.06 3.06 0 0 1-2.15-1.12zm4.678-1.406l-4.02-1.587c-.651-.28-1.303-.462-1.954-.742h-.085a.593.593 0 0 1-.28-.846c.092-.28.189-.462.75-.28.56.183 1.029.378 1.491.567l4.678 1.867a.52.52 0 0 1 .376.632l-.005.018c-.092.28-.371.56-.652.468a.442.442 0 0 1-.299-.097zm25.642-1.652a1.467 1.467 0 0 1-1.081-.398 1.592 1.592 0 0 1-.385-1.145v-3.584h-.716a.24.24 0 0 1-.17-.059.265.265 0 0 1-.058-.183v-.441l.964-.13.254-1.796a.26.26 0 0 1 .085-.15.256.256 0 0 1 .17-.059h.565v2.011h1.694v.807h-1.694v3.507a.781.781 0 0 0 .17.54.612.612 0 0 0 .455.176.875.875 0 0 0 .274-.04.96.96 0 0 0 .202-.097l.143-.092a.205.205 0 0 1 .11-.04.186.186 0 0 1 .085 0 .343.343 0 0 1 .066.085l.325.534c-.188.174-.41.309-.651.398-.258.099-.53.152-.807.156zm3.434-6.032v3.787c-.023.36.083.714.3 1.002a1.108 1.108 0 0 0 .905.364c.291 0 .578-.074.834-.214.273-.152.52-.348.73-.58v-4.359h1.113v5.94h-.651a.274.274 0 0 1-.293-.22l-.085-.651c-.251.26-.541.479-.86.65a2.295 2.295 0 0 1-1.094.254c-.289.025-.58-.01-.854-.104a1.613 1.613 0 0 1-.651-.455 2.006 2.006 0 0 1-.378-.71 2.954 2.954 0 0 1-.13-.918v-3.786h1.114zm9.818 5.94a.274.274 0 0 1-.294-.22l-.097-.697a3.46 3.46 0 0 1-.41.41c-.143.123-.298.23-.463.32a2.33 2.33 0 0 1-1.113.272 2.025 2.025 0 0 1-.92-.201 1.842 1.842 0 0 1-.71-.58 2.684 2.684 0 0 1-.456-.948 4.932 4.932 0 0 1-.156-1.302 4.1 4.1 0 0 1 .176-1.224c.106-.356.279-.69.508-.982a2.358 2.358 0 0 1 1.882-.891c.318-.006.634.057.925.183.248.123.469.292.65.5v-3.254h1.128v8.615h-.65zm-2.014-.813c.307.006.61-.072.874-.227.27-.17.505-.391.69-.65v-2.825a1.56 1.56 0 0 0-.613-.52 1.714 1.714 0 0 0-.735-.15 1.449 1.449 0 0 0-1.239.572 2.69 2.69 0 0 0-.462 1.66c-.005.327.027.655.098.975.057.232.154.452.286.65.117.166.276.297.462.379.191.09.4.138.613.137h.026zm5.655-6.974a.732.732 0 0 1-.228.54.744.744 0 0 1-.254.162.691.691 0 0 1-.3.065.653.653 0 0 1-.293-.065.747.747 0 0 1-.24-.163.747.747 0 0 1-.229-.54.772.772 0 0 1 .47-.715.65.65 0 0 1 .292-.065.69.69 0 0 1 .3.065.84.84 0 0 1 .254.163.763.763 0 0 1 .228.553zm-.214 1.847v5.94H53.14v-5.94h1.115zm4.195-.097a3.13 3.13 0 0 1 1.185.214c.342.135.649.344.9.612.254.276.447.602.566.957.27.824.27 1.713 0 2.537-.119.36-.312.69-.566.97-.251.267-.558.476-.9.611a3.38 3.38 0 0 1-2.37 0 2.506 2.506 0 0 1-.906-.612 2.705 2.705 0 0 1-.567-.969 4.086 4.086 0 0 1 0-2.537c.118-.358.311-.686.565-.963.254-.268.563-.477.906-.613a3.133 3.133 0 0 1 1.187-.207zm0 5.25a1.474 1.474 0 0 0 1.303-.572 2.647 2.647 0 0 0 .398-1.594 2.693 2.693 0 0 0-.423-1.62 1.474 1.474 0 0 0-1.303-.58 1.494 1.494 0 0 0-1.303.58 2.693 2.693 0 0 0-.384 1.62c-.037.57.11 1.136.422 1.615a1.485 1.485 0 0 0 1.29.55v.002zM39.434 6.773c.337-.004.673.056.989.176.296.113.564.288.788.513.229.24.406.523.52.833.132.363.196.747.19 1.133a.689.689 0 0 1-.06.345.233.233 0 0 1-.207.084h-3.908c0 .32.051.639.15.944.082.239.21.46.378.65.155.175.35.311.566.398.238.089.49.133.743.13a2.23 2.23 0 0 0 1.128-.28l.345-.194a.47.47 0 0 1 .247-.085.223.223 0 0 1 .202.104l.313.404a2.2 2.2 0 0 1-.47.416 2.99 2.99 0 0 1-.579.286c-.211.077-.43.134-.651.17-.216.033-.434.05-.652.051a3.117 3.117 0 0 1-1.14-.208 2.61 2.61 0 0 1-.9-.605 2.79 2.79 0 0 1-.566-.97 3.967 3.967 0 0 1-.214-1.36 3.291 3.291 0 0 1 .195-1.15 2.7 2.7 0 0 1 .547-.931c.249-.268.55-.481.887-.625.365-.158.76-.236 1.159-.229zm0 .807a1.558 1.558 0 0 0-1.154.423 2.082 2.082 0 0 0-.52 1.17h3.146c.003-.22-.03-.44-.098-.65a1.52 1.52 0 0 0-.286-.5 1.455 1.455 0 0 0-1.068-.442h-.02zm3.733 5.205V6.863h.651a.36.36 0 0 1 .254.065c.045.07.068.151.065.234l.072.86c.161-.355.397-.67.69-.925.277-.228.626-.348.984-.338a1.7 1.7 0 0 1 .365.04.888.888 0 0 1 .3.13l-.079.826a.175.175 0 0 1-.188.156 1.066 1.066 0 0 1-.241-.033 1.47 1.47 0 0 0-.352 0 1.425 1.425 0 0 0-.489.078 1.306 1.306 0 0 0-.384.24 1.84 1.84 0 0 0-.3.385c-.094.167-.175.34-.24.52v3.715l-1.108-.032zm8.319 0a.267.267 0 0 1-.287-.221l-.104-.697a2.74 2.74 0 0 1-.404.417 3.159 3.159 0 0 1-.456.312c-.166.087-.34.155-.521.202a2.464 2.464 0 0 1-.593.072 2.114 2.114 0 0 1-.92-.196 1.888 1.888 0 0 1-.705-.585 2.648 2.648 0 0 1-.454-.943 4.878 4.878 0 0 1-.156-1.302 4.107 4.107 0 0 1 .176-1.224c.108-.354.28-.685.508-.976a2.3 2.3 0 0 1 1.876-.885c.315-.008.629.052.92.176.248.123.469.294.65.503V4.183h1.115v8.6l-.645.001zm-2-.813c.303.008.603-.069.866-.221.27-.17.505-.391.69-.651v-2.81a1.566 1.566 0 0 0-.612-.521 1.72 1.72 0 0 0-.736-.15 1.442 1.442 0 0 0-1.231.573 2.703 2.703 0 0 0-.417 1.652c-.005.326.027.652.097.97.056.232.153.453.287.65.115.165.273.296.456.378.19.084.393.128.6.13zm-15.213 8.803a.23.23 0 0 1-.217.13.41.41 0 0 1-.199-.065 4.784 4.784 0 0 0-.273-.144 2.559 2.559 0 0 0-.384-.146 1.83 1.83 0 0 0-.527-.067c-.161-.002-.321.02-.475.067a1.14 1.14 0 0 0-.361.184.82.82 0 0 0-.229.272.73.73 0 0 0-.079.337.56.56 0 0 0 .132.38c.098.11.217.2.35.264.157.08.322.145.492.196.184.057.372.117.565.182.194.064.382.136.566.214.177.074.343.173.493.293.145.117.265.264.35.43.088.17.132.374.132.612.003.26-.047.518-.147.759a1.658 1.658 0 0 1-.433.603 2.093 2.093 0 0 1-.705.4 2.893 2.893 0 0 1-.962.147c-.414 0-.79-.067-1.126-.202a2.853 2.853 0 0 1-.856-.518l.246-.398a.36.36 0 0 1 .111-.117.302.302 0 0 1 .164-.041.394.394 0 0 1 .223.082c.078.055.173.115.285.181a1.863 1.863 0 0 0 1.005.264c.181.003.361-.023.534-.08.14-.045.27-.118.38-.213a.844.844 0 0 0 .226-.31.96.96 0 0 0 .074-.375.624.624 0 0 0-.132-.407 1.113 1.113 0 0 0-.349-.276 2.86 2.86 0 0 0-.495-.2 40.65 40.65 0 0 1-.57-.178 6.211 6.211 0 0 1-.568-.214 2.001 2.001 0 0 1-.495-.301 1.364 1.364 0 0 1-.35-.448 1.445 1.445 0 0 1-.131-.647 1.602 1.602 0 0 1 .551-1.204c.195-.167.42-.295.662-.378.262-.093.561-.14.897-.14.392 0 .742.06 1.053.183.299.116.573.288.806.507l-.234.382zm-3.827-7.93V6.91h.627c.149 0 .24.073.276.217l.082.643a3.32 3.32 0 0 1 .868-.691c.32-.176.69-.264 1.108-.264.325 0 .611.054.858.161.241.103.454.26.623.46.172.21.3.451.378.711.089.298.132.608.129.919v3.777h-1.05V9.066c0-.449-.102-.797-.306-1.045-.205-.248-.516-.372-.936-.372a1.765 1.765 0 0 0-.87.223 2.762 2.762 0 0 0-.736.603v4.369h-1.051z\" fill=\"#fff\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./pug sync \\.pug$":
/*!**************************************!*\
  !*** ./pug sync nonrecursive \.pug$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.pug": "./pug/index.pug"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./pug sync \\.pug$";

/***/ }),

/***/ "./pug/index.pug":
/*!***********************!*\
  !*** ./pug/index.pug ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9pY28gc3luYyBcXC5zdmckIiwid2VicGFjazovLy8uL2ljby9ldXJvdmlldy1ncmV5LnN2ZyIsIndlYnBhY2s6Ly8vLi9pY28vZXVyb3ZpZXcuc3ZnIiwid2VicGFjazovLy8uL2ljby9taWNyb3Bob25lLnN2ZyIsIndlYnBhY2s6Ly8vLi9pY28vbmVyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVnIHN5bmMgbm9ucmVjdXJzaXZlIFxcLnB1ZyQiLCJ3ZWJwYWNrOi8vLy4vcHVnL2luZGV4LnB1ZyJdLCJuYW1lcyI6WyJyZXF1aXJlQWxsIiwiciIsImtleXMiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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RTVDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhO0FBQUEsU0FBS0MsRUFBRUMsSUFBRixHQUFTQyxPQUFULENBQWlCRixDQUFqQixDQUFMO0FBQUEsQ0FBbkI7O0FBRUE7QUFDQUQsV0FBVyxtREFBWDtBQUNBO0FBQ0FBLFdBQVcseUNBQVgsRTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EscUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxxRTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Qzs7Ozs7Ozs7Ozs7QUN4QkEsc0QiLCJmaWxlIjoiLi9qcy9hc3NldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMuanNcIik7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZVN5bWJvbCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIFNwcml0ZVN5bWJvbCA9IGZ1bmN0aW9uIFNwcml0ZVN5bWJvbChyZWYpIHtcbiAgdmFyIGlkID0gcmVmLmlkO1xuICB2YXIgdmlld0JveCA9IHJlZi52aWV3Qm94O1xuICB2YXIgY29udGVudCA9IHJlZi5jb250ZW50O1xuXG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy52aWV3Qm94ID0gdmlld0JveDtcbiAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBbJ2lkJywgJ3ZpZXdCb3gnLCAnY29udGVudCddLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDFbcHJvcF07IH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIGhhc0ltcG9ydE5vZGUgPSAhIWRvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgd2hpY2ggYXJlIHRocm93aW5nIFdyb25nRG9jdW1lbnRFcnJvclxuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzk4NjUxOS80NjI0NDAzXG4gICAqL1xuICBpZiAoaGFzSW1wb3J0Tm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKGRvYywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gZG9jO1xufTtcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGluZGV4ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gaW5kZXgoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxucmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbn0pKSk7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGRlZXBtZXJnZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG4vLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJvZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgbmFtZXNwYWNlc18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xudmFyIG5hbWVzcGFjZXMgPSB7XG4gIHN2Zzoge1xuICAgIG5hbWU6ICd4bWxucycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIH0sXG4gIHhsaW5rOiB7XG4gICAgbmFtZTogJ3htbG5zOnhsaW5rJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuYW1lc3BhY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxudmFyIHN2ZyA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmsgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0QXR0cnMgPSB7fTtcbmRlZmF1bHRBdHRyc1tzdmcubmFtZV0gPSBzdmcudXJpO1xuZGVmYXVsdEF0dHJzW3hsaW5rLm5hbWVdID0geGxpbmsudXJpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29udGVudF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHdyYXBJblN2Z1N0cmluZyA9IGZ1bmN0aW9uIChjb250ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmICggY29udGVudCA9PT0gdm9pZCAwICkgY29udGVudCA9ICcnO1xuXG4gIHZhciBhdHRycyA9IGRlZXBtZXJnZShkZWZhdWx0QXR0cnMsIGF0dHJpYnV0ZXMgfHwge30pO1xuICB2YXIgYXR0cnNSZW5kZXJlZCA9IG9iamVjdFRvQXR0cnNTdHJpbmcoYXR0cnMpO1xuICByZXR1cm4gKFwiPHN2ZyBcIiArIGF0dHJzUmVuZGVyZWQgKyBcIj5cIiArIGNvbnRlbnQgKyBcIjwvc3ZnPlwiKTtcbn07XG5cbnZhciBzdmckMSA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmskMSA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGF0dHJzOiAoIG9iaiA9IHtcbiAgICBzdHlsZTogWydwb3NpdGlvbjogYWJzb2x1dGUnLCAnd2lkdGg6IDAnLCAnaGVpZ2h0OiAwJ10uam9pbignOyAnKVxuICB9LCBvYmpbc3ZnJDEubmFtZV0gPSBzdmckMS51cmksIG9ialt4bGluayQxLm5hbWVdID0geGxpbmskMS51cmksIG9iaiApXG59O1xudmFyIG9iajtcblxudmFyIFNwcml0ZSA9IGZ1bmN0aW9uIFNwcml0ZShjb25maWcpIHtcbiAgdGhpcy5jb25maWcgPSBkZWVwbWVyZ2UoZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcbiAgdGhpcy5zeW1ib2xzID0gW107XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAqIEBwYXJhbSB7U3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICovXG5TcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoc3ltYm9sKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBleGlzdGluZyA9IHRoaXMuZmluZChzeW1ib2wuaWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHN5bWJvbHNbc3ltYm9scy5pbmRleE9mKGV4aXN0aW5nKV0gPSBzeW1ib2w7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3ltYm9sICYgZGVzdHJveSBpdFxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGZvdW5kICYgc3VjY2Vzc2Z1bGx5IGRlc3Ryb3llZCwgYGZhbHNlYCAtIG90aGVyd2lzZVxuICovXG5TcHJpdGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIHN5bWJvbCA9IHRoaXMuZmluZChpZCk7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHN5bWJvbHMuc3BsaWNlKHN5bWJvbHMuaW5kZXhPZihzeW1ib2wpLCAxKTtcbiAgICBzeW1ib2wuZGVzdHJveSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1Nwcml0ZVN5bWJvbHxudWxsfVxuICovXG5TcHJpdGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kIChpZCkge1xuICByZXR1cm4gdGhpcy5zeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pWzBdIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGlkKSB7XG4gIHJldHVybiB0aGlzLmZpbmQoaWQpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgdmFyIHJlZiA9IHRoaXMuY29uZmlnO1xuICAgIHZhciBhdHRycyA9IHJlZi5hdHRycztcbiAgdmFyIHN0cmluZ2lmaWVkU3ltYm9scyA9IHRoaXMuc3ltYm9scy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuc3RyaW5naWZ5KCk7IH0pLmpvaW4oJycpO1xuICByZXR1cm4gd3JhcEluU3ZnU3RyaW5nKHN0cmluZ2lmaWVkU3ltYm9scywgYXR0cnMpO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG59O1xuXG52YXIgU3ByaXRlU3ltYm9sID0gZnVuY3Rpb24gU3ByaXRlU3ltYm9sKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciB2aWV3Qm94ID0gcmVmLnZpZXdCb3g7XG4gIHZhciBjb250ZW50ID0gcmVmLmNvbnRlbnQ7XG5cbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnZpZXdCb3ggPSB2aWV3Qm94O1xuICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIFsnaWQnLCAndmlld0JveCcsICdjb250ZW50J10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMVtwcm9wXTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxudmFyIGRlZmF1bHRDb25maWckMSA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBmb2xsb3dpbmcgb3B0aW9ucyBiZSBhdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZWQ6XG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGF1dG9Db25maWd1cmU6IHRydWUsXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbW91bnRpbmcgc2VsZWN0b3JcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIG1vdW50VG86ICdib2R5JyxcblxuICAvKipcbiAgICogRml4IGRpc2FwcGVhcmluZyBTVkcgZWxlbWVudHMgd2hlbiA8YmFzZSBocmVmPiBleGlzdHMuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgyNjUzMzYvNzk2MTUyXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2V2ZXJkaW1lbnNpb24vYW5ndWxhci1zdmctYmFzZS1maXhcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2lzc3Vlcy84OTM0I2lzc3VlY29tbWVudC01NjU2ODQ2NlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN5bmNVcmxzV2l0aEJhc2VUYWc6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG91bGQgc3ByaXRlIGxpc3RlbiBjdXN0b20gbG9jYXRpb24gY2hhbmdlIGV2ZW50XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudDogdHJ1ZSxcblxuICAvKipcbiAgICogQ3VzdG9tIHdpbmRvdyBldmVudCBuYW1lIHdoaWNoIHNob3VsZCBiZSBlbWl0dGVkIHRvIHVwZGF0ZSBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VFdmVudDogJ2xvY2F0aW9uQ2hhbmdlJyxcblxuICAvKipcbiAgICogRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcjogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIHRvIGZpbmQgc3ltYm9scyB1c2FnZXMgd2hlbiB1cGRhdGluZyBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdXNhZ2VzVG9VcGRhdGU6ICd1c2VbKnxocmVmXScsXG5cbiAgLyoqXG4gICAqIEZpeCBGaXJlZm94IGJ1ZyB3aGVuIGdyYWRpZW50cyBhbmQgcGF0dGVybnMgZG9uJ3Qgd29yayBpZiB0aGV5IGFyZSB3aXRoaW4gYSBzeW1ib2wuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIGlzIHJlbmRlcmVkLCBidXQgbm90IG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzA2Njc0XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzUzNTc1XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTIzNTM2NFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sOiBmYWxzZVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IGFycmF5TGlrZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbnZhciBhcnJheUZyb20gPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufTtcblxudmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxudmFyIGJyb3dzZXIgPSB7XG4gIGlzQ2hyb21lOiAvY2hyb21lL2kudGVzdCh1YSksXG4gIGlzRmlyZWZveDogL2ZpcmVmb3gvaS50ZXN0KHVhKSxcblxuICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTAzKHY9dnMuODUpLmFzcHhcbiAgaXNJRTogL21zaWUvaS50ZXN0KHVhKSB8fCAvdHJpZGVudC9pLnRlc3QodWEpLFxuICBpc0VkZ2U6IC9lZGdlL2kudGVzdCh1YSlcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICBldmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCBkYXRhKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuLyoqXG4gKiBJRSBkb2Vzbid0IGV2YWx1YXRlIDxzdHlsZT4gdGFncyBpbiBTVkdzIHRoYXQgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBwYWdlLlxuICogVGhpcyB0cmljayB3aWxsIHRyaWdnZXIgSUUgdG8gcmVhZCBhbmQgdXNlIGFueSBleGlzdGluZyBTVkcgPHN0eWxlPiB0YWdzLlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vaWNvbmljL1NWR0luamVjdG9yL2lzc3Vlcy8yM1xuICogQHNlZSBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMDg5ODQ2OS9cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgRE9NIEVsZW1lbnQgdG8gc2VhcmNoIDxzdHlsZT4gdGFncyBpblxuICogQHJldHVybiB7QXJyYXk8SFRNTFN0eWxlRWxlbWVudD59XG4gKi9cbnZhciBldmFsU3R5bGVzSUVXb3JrYXJvdW5kID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIHVwZGF0ZWROb2RlcyA9IFtdO1xuXG4gIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCArPSAnJztcbiAgICAgIHVwZGF0ZWROb2Rlcy5wdXNoKHN0eWxlKTtcbiAgICB9KTtcblxuICByZXR1cm4gdXBkYXRlZE5vZGVzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0gSWYgbm90IHByb3ZpZGVkIC0gY3VycmVudCBVUkwgd2lsbCBiZSB1c2VkXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBnZXRVcmxXaXRob3V0RnJhZ21lbnQgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiAodXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zcGxpdCgnIycpWzBdO1xufTtcblxuLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICovXG52YXIgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG4gICAgJHJvb3RTY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbiAoZSwgbmV3VXJsLCBvbGRVcmwpIHtcbiAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCB7IG9sZFVybDogb2xkVXJsLCBuZXdVcmw6IG5ld1VybCB9KTtcbiAgICB9KTtcbiAgfV0pO1xufTtcblxudmFyIGRlZmF1bHRTZWxlY3RvciA9ICdsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIHBhdHRlcm4nO1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gZnVuY3Rpb24gKHN2Zywgc2VsZWN0b3IpIHtcbiAgaWYgKCBzZWxlY3RvciA9PT0gdm9pZCAwICkgc2VsZWN0b3IgPSBkZWZhdWx0U2VsZWN0b3I7XG5cbiAgYXJyYXlGcm9tKHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSkuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgYXJyYXlGcm9tKHN5bWJvbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc3ltYm9sLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHN5bWJvbCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW21hdGNoZXJdXG4gKiBAcmV0dXJuIHtBdHRyW119XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIG1hdGNoZXIpIHtcbiAgdmFyIGF0dHJzID0gYXJyYXlGcm9tKG5vZGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIHZhciBhcnJheWZpZWQgPSBhcnJheUZyb20obm9kZS5hdHRyaWJ1dGVzKTtcbiAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoZXIgPyBhcnJheWZpZWQuZmlsdGVyKG1hdGNoZXIpIDogYXJyYXlmaWVkO1xuICAgIHJldHVybiBhY2MuY29uY2F0KG1hdGNoZWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGF0dHJzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8Tm9kZX0gbm9kZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Nsb25lPXRydWVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxudmFyIHhMaW5rTlMgPSBuYW1lc3BhY2VzXzEueGxpbmsudXJpO1xudmFyIHhMaW5rQXR0ck5hbWUgPSAneGxpbms6aHJlZic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxudmFyIHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4gPSAvW3t9fFxcXFxcXF5cXFtcXF1gXCI8Pl0vZztcblxuZnVuY3Rpb24gZW5jb2Rlcih1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiAoXCIlXCIgKyAobWF0Y2hbMF0uY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlZmVyZW5jZXMobm9kZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIGFycmF5RnJvbShub2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBocmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoeExpbmtBdHRyTmFtZSk7XG4gICAgaWYgKGhyZWYgJiYgaHJlZi5pbmRleE9mKHN0YXJ0c1dpdGgpID09PSAwKSB7XG4gICAgICB2YXIgbmV3VXJsID0gaHJlZi5yZXBsYWNlKHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoeExpbmtOUywgeExpbmtBdHRyTmFtZSwgbmV3VXJsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuLyoqXG4gKiBMaXN0IG9mIFNWRyBhdHRyaWJ1dGVzIHRvIHVwZGF0ZSB1cmwoKSB0YXJnZXQgaW4gdGhlbVxuICovXG52YXIgYXR0TGlzdCA9IFtcbiAgJ2NsaXBQYXRoJyxcbiAgJ2NvbG9yUHJvZmlsZScsXG4gICdzcmMnLFxuICAnY3Vyc29yJyxcbiAgJ2ZpbGwnLFxuICAnZmlsdGVyJyxcbiAgJ21hcmtlcicsXG4gICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXJNaWQnLFxuICAnbWFya2VyRW5kJyxcbiAgJ21hc2snLFxuICAnc3Ryb2tlJyxcbiAgJ3N0eWxlJ1xuXTtcblxudmFyIGF0dFNlbGVjdG9yID0gYXR0TGlzdC5tYXAoZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIChcIltcIiArIGF0dHIgKyBcIl1cIik7IH0pLmpvaW4oJywnKTtcblxuLyoqXG4gKiBVcGRhdGUgVVJMcyBpbiBzdmcgaW1hZ2UgKGxpa2UgYGZpbGw9XCJ1cmwoLi4uKVwiYCkgYW5kIHVwZGF0ZSByZWZlcmVuY2luZyBlbGVtZW50c1xuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IHJlZmVyZW5jZXNcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHt2b2lkfVxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcuc3ByaXRlJyk7XG4gKiBjb25zdCB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1c2UnKTtcbiAqIHVwZGF0ZVVybHMoc3ByaXRlLCB1c2FnZXMsICcjJywgJ3ByZWZpeCMnKTtcbiAqL1xudmFyIHVwZGF0ZVVybHMgPSBmdW5jdGlvbiAoc3ZnLCByZWZlcmVuY2VzLCBzdGFydHNXaXRoLCByZXBsYWNlV2l0aCkge1xuICB2YXIgc3RhcnRzV2l0aEVuY29kZWQgPSBlbmNvZGVyKHN0YXJ0c1dpdGgpO1xuICB2YXIgcmVwbGFjZVdpdGhFbmNvZGVkID0gZW5jb2RlcihyZXBsYWNlV2l0aCk7XG5cbiAgdmFyIG5vZGVzID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoYXR0U2VsZWN0b3IpO1xuICB2YXIgYXR0cnMgPSBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGxvY2FsTmFtZSA9IHJlZi5sb2NhbE5hbWU7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgcmV0dXJuIGF0dExpc3QuaW5kZXhPZihsb2NhbE5hbWUpICE9PSAtMSAmJiB2YWx1ZS5pbmRleE9mKChcInVybChcIiArIHN0YXJ0c1dpdGhFbmNvZGVkKSkgIT09IC0xO1xuICB9KTtcblxuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBhdHRyLnZhbHVlID0gYXR0ci52YWx1ZS5yZXBsYWNlKHN0YXJ0c1dpdGhFbmNvZGVkLCByZXBsYWNlV2l0aEVuY29kZWQpOyB9KTtcbiAgdXBkYXRlUmVmZXJlbmNlcyhyZWZlcmVuY2VzLCBzdGFydHNXaXRoRW5jb2RlZCwgcmVwbGFjZVdpdGhFbmNvZGVkKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgZW1pdHRlciBldmVudHNcbiAqIEBlbnVtXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRXZlbnRzID0ge1xuICBNT1VOVDogJ21vdW50JyxcbiAgU1lNQk9MX01PVU5UOiAnc3ltYm9sX21vdW50J1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGUgPSAoZnVuY3Rpb24gKFNwcml0ZSQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlKGNmZykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggY2ZnID09PSB2b2lkIDAgKSBjZmcgPSB7fTtcblxuICAgIFNwcml0ZSQkMS5jYWxsKHRoaXMsIGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnJDEsIGNmZykpO1xuXG4gICAgdmFyIGVtaXR0ZXIgPSBtaXR0KCk7XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5ub2RlID0gbnVsbDtcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQ29uZmlndXJlKSB7XG4gICAgICB0aGlzLl9hdXRvQ29uZmlndXJlKGNmZyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnKSB7XG4gICAgICB2YXIgYmFzZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBlbWl0dGVyLm9uKEV2ZW50cy5NT1VOVCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcyQxLnVwZGF0ZVVybHMoJyMnLCBiYXNlVXJsKTsgfSk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZUxvY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGhhbmRsZUxvY2F0aW9uQ2hhbmdlO1xuXG4gICAgLy8gUHJvdmlkZSB3YXkgdG8gdXBkYXRlIHNwcml0ZSB1cmxzIGV4dGVybmFsbHkgdmlhIGRpc3BhdGNoaW5nIGN1c3RvbSB3aW5kb3cgZXZlbnRcbiAgICBpZiAoY29uZmlnLmxpc3RlbkxvY2F0aW9uQ2hhbmdlRXZlbnQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50LCBoYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAgaWYgKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKSB7XG4gICAgICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50KTtcbiAgICB9XG5cbiAgICAvLyBBZnRlciBzcHJpdGUgbW91bnRlZFxuICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAoc3ByaXRlTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzcHJpdGVOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFmdGVyIHN5bWJvbCBtb3VudGVkIGludG8gc3ByaXRlXG4gICAgZW1pdHRlci5vbihFdmVudHMuU1lNQk9MX01PVU5ULCBmdW5jdGlvbiAoc3ltYm9sTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzeW1ib2xOb2RlLnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnJvd3Nlci5pc0lFIHx8IGJyb3dzZXIuaXNFZGdlKSB7XG4gICAgICAgIGV2YWxTdHlsZXNJRVdvcmthcm91bmQoc3ltYm9sTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIFNwcml0ZSQkMSApIEJyb3dzZXJTcHJpdGUuX19wcm90b19fID0gU3ByaXRlJCQxO1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZSQkMSAmJiBTcHJpdGUkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZTtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBwcm90b3R5cGVBY2Nlc3NvcnMuaXNNb3VudGVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF0aGlzLm5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF1dG9tYXRpY2FsbHkgY29uZmlndXJlIGZvbGxvd2luZyBvcHRpb25zXG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5fYXV0b0NvbmZpZ3VyZSA9IGZ1bmN0aW9uIF9hdXRvQ29uZmlndXJlIChjZmcpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcblxuICAgIGlmICh0eXBlb2YgY2ZnLnN5bmNVcmxzV2l0aEJhc2VUYWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcuc3luY1VybHNXaXRoQmFzZVRhZyA9IHR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSAnYW5ndWxhcicgaW4gd2luZG93O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gYnJvd3Nlci5pc0ZpcmVmb3g7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwub2xkVXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwubmV3VXJsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5faGFuZGxlTG9jYXRpb25DaGFuZ2UgPSBmdW5jdGlvbiBfaGFuZGxlTG9jYXRpb25DaGFuZ2UgKGV2ZW50KSB7XG4gICAgdmFyIHJlZiA9IGV2ZW50LmRldGFpbDtcbiAgICB2YXIgb2xkVXJsID0gcmVmLm9sZFVybDtcbiAgICB2YXIgbmV3VXJsID0gcmVmLm5ld1VybDtcbiAgICB0aGlzLnVwZGF0ZVVybHMob2xkVXJsLCBuZXdVcmwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHN5bWJvbC4gSWYgc3ltYm9sIHdpdGggdGhlIHNhbWUgaWQgZXhpc3RzIGl0IHdpbGwgYmUgcmVwbGFjZWQuXG4gICAqIElmIHNwcml0ZSBhbHJlYWR5IG1vdW50ZWQgLSBgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKWAgd2lsbCBiZSBjYWxsZWQuXG4gICAqIEBmaXJlcyBFdmVudHMjU1lNQk9MX01PVU5UXG4gICAqIEBwYXJhbSB7QnJvd3NlclNwcml0ZVN5bWJvbH0gc3ltYm9sXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgICB2YXIgc3ByaXRlID0gdGhpcztcbiAgICB2YXIgaXNOZXdTeW1ib2wgPSBTcHJpdGUkJDEucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIHN5bWJvbCk7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQgJiYgaXNOZXdTeW1ib2wpIHtcbiAgICAgIHN5bWJvbC5tb3VudChzcHJpdGUubm9kZSk7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLlNZTUJPTF9NT1VOVCwgc3ltYm9sLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc05ld1N5bWJvbDtcbiAgfTtcblxuICAvKipcbiAgICogQXR0YWNoIHRvIGV4aXN0aW5nIERPTSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9IGF0dGFjaGVkIERPTSBFbGVtZW50LiBudWxsIGlmIG5vZGUgdG8gYXR0YWNoIG5vdCBmb3VuZC5cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCAodGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgc3ByaXRlID0gdGhpcztcblxuICAgIGlmIChzcHJpdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gc3ByaXRlLm5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIEVsZW1lbnQgKi9cbiAgICB2YXIgbm9kZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHNwcml0ZS5ub2RlID0gbm9kZTtcblxuICAgIC8vIEFscmVhZHkgYWRkZWQgc3ltYm9scyBuZWVkcyB0byBiZSBtb3VudGVkXG4gICAgdGhpcy5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKTtcbiAgICAgIHRoaXMkMS5fZW1pdHRlci5lbWl0KEV2ZW50cy5TWU1CT0xfTU9VTlQsIHN5bWJvbC5ub2RlKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBzeW1ib2xzIGZyb20gZXhpc3RpbmcgRE9NIG5vZGVzLCBhZGQgYW5kIG1vdW50IHRoZW1cbiAgICBhcnJheUZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2xOb2RlKSB7XG4gICAgICAgIHZhciBzeW1ib2wgPSBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUoc3ltYm9sTm9kZSk7XG4gICAgICAgIHN5bWJvbC5ub2RlID0gc3ltYm9sTm9kZTsgLy8gaGFjayB0byBwcmV2ZW50IHN5bWJvbCBtb3VudGluZyB0byBzcHJpdGUgd2hlbiBhZGRpbmdcbiAgICAgICAgc3ByaXRlLmFkZChzeW1ib2wpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLk1PVU5ULCBub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICAgIHZhciBfZW1pdHRlciA9IHJlZi5fZW1pdHRlcjtcblxuICAgIHN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kZXN0cm95KCk7IH0pO1xuXG4gICAgX2VtaXR0ZXIub2ZmKCcqJyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAZmlyZXMgRXZlbnRzI01PVU5UXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IFt0YXJnZXRdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBlbmQ9ZmFsc2VdXG4gICAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gcmVuZGVyZWQgc3ByaXRlIG5vZGUuIG51bGwgaWYgbW91bnQgbm9kZSBub3QgZm91bmQuXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQsIHByZXBlbmQpIHtcbiAgICBpZiAoIHRhcmdldCA9PT0gdm9pZCAwICkgdGFyZ2V0ID0gdGhpcy5jb25maWcubW91bnRUbztcbiAgICBpZiAoIHByZXBlbmQgPT09IHZvaWQgMCApIHByZXBlbmQgPSBmYWxzZTtcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBzcHJpdGUubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnROb2RlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSBzcHJpdGUucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIGlmIChwcmVwZW5kICYmIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICBtb3VudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW91bnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHJldHVybiBwYXJzZSh0aGlzLnN0cmluZ2lmeSgpKTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0YWNoIHNwcml0ZSBmcm9tIHRoZSBET01cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgVVJMcyBpbiBzcHJpdGUgYW5kIHVzYWdlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1VybFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBVUkxzIHdhcyB1cGRhdGVkLCBgZmFsc2VgIC0gc3ByaXRlIGlzIG5vdCBtb3VudGVkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS51cGRhdGVVcmxzID0gZnVuY3Rpb24gdXBkYXRlVXJscyQxIChvbGRVcmwsIG5ld1VybCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy51c2FnZXNUb1VwZGF0ZSk7XG5cbiAgICB1cGRhdGVVcmxzKFxuICAgICAgdGhpcy5ub2RlLFxuICAgICAgdXNhZ2VzLFxuICAgICAgKChnZXRVcmxXaXRob3V0RnJhZ21lbnQob2xkVXJsKSkgKyBcIiNcIiksXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChuZXdVcmwpKSArIFwiI1wiKVxuICAgICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlO1xufShTcHJpdGUpKTtcblxudmFyIHJlYWR5JDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKiFcbiAgKiBkb21yZWFkeSAoYykgRHVzdGluIERpYXogMjAxNCAtIExpY2Vuc2UgTUlUXG4gICovXG4hZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcblxuICB7IG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpOyB9XG5cbn0oJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmbnMgPSBbXSwgbGlzdGVuZXJcbiAgICAsIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoYWNrID0gZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbFxuICAgICwgZG9tQ29udGVudExvYWRlZCA9ICdET01Db250ZW50TG9hZGVkJ1xuICAgICwgbG9hZGVkID0gKGhhY2sgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoZG9jLnJlYWR5U3RhdGUpO1xuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIHsgZG9jLmFkZEV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIpO1xuICAgIGxvYWRlZCA9IDE7XG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIHsgbGlzdGVuZXIoKTsgfVxuICB9KTsgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZucy5wdXNoKGZuKTtcbiAgfVxuXG59KTtcbn0pO1xuXG52YXIgc3ByaXRlTm9kZUlkID0gJ19fU1ZHX1NQUklURV9OT0RFX18nO1xudmFyIHNwcml0ZUdsb2JhbFZhck5hbWUgPSAnX19TVkdfU1BSSVRFX18nO1xudmFyIGlzU3ByaXRlRXhpc3RzID0gISF3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG52YXIgc3ByaXRlO1xuXG5pZiAoaXNTcHJpdGVFeGlzdHMpIHtcbiAgc3ByaXRlID0gd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdO1xufSBlbHNlIHtcbiAgc3ByaXRlID0gbmV3IEJyb3dzZXJTcHJpdGUoeyBhdHRyczogeyBpZDogc3ByaXRlTm9kZUlkIH0gfSk7XG4gIHdpbmRvd1tzcHJpdGVHbG9iYWxWYXJOYW1lXSA9IHNwcml0ZTtcbn1cblxudmFyIGxvYWRTcHJpdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDaGVjayBmb3IgcGFnZSBhbHJlYWR5IGNvbnRhaW5zIHNwcml0ZSBub2RlXG4gICAqIElmIGZvdW5kIC0gYXR0YWNoIHRvIGFuZCByZXVzZSBpdCdzIGNvbnRlbnRcbiAgICogSWYgbm90IC0gcmVuZGVyIGFuZCBtb3VudCB0aGUgbmV3IHNwcml0ZVxuICAgKi9cbiAgdmFyIGV4aXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3ByaXRlTm9kZUlkKTtcblxuICBpZiAoZXhpc3RpbmcpIHtcbiAgICBzcHJpdGUuYXR0YWNoKGV4aXN0aW5nKTtcbiAgfSBlbHNlIHtcbiAgICBzcHJpdGUubW91bnQoZG9jdW1lbnQuYm9keSwgdHJ1ZSk7XG4gIH1cbn07XG5cbmlmIChkb2N1bWVudC5ib2R5KSB7XG4gIGxvYWRTcHJpdGUoKTtcbn0gZWxzZSB7XG4gIHJlYWR5JDEobG9hZFNwcml0ZSk7XG59XG5cbnZhciBzcHJpdGUkMSA9IHNwcml0ZTtcblxucmV0dXJuIHNwcml0ZSQxO1xuXG59KSkpO1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJjb25zdCByZXF1aXJlQWxsID0gciA9PiByLmtleXMoKS5mb3JFYWNoKHIpO1xuXG4vLyBpbmNsdWRlIHN2Zy1zcHJpdGVcbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuL2ljby8nLCB0cnVlLCAvXFwuc3ZnJC8pKTtcbi8vIGluY2x1ZGUgcHVnLXRlbXBsYXRlc1xucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4vcHVnLycsIGZhbHNlLCAvXFwucHVnJC8pKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9ldXJvdmlldy1ncmV5LnN2Z1wiOiBcIi4vaWNvL2V1cm92aWV3LWdyZXkuc3ZnXCIsXG5cdFwiLi9ldXJvdmlldy5zdmdcIjogXCIuL2ljby9ldXJvdmlldy5zdmdcIixcblx0XCIuL21pY3JvcGhvbmUuc3ZnXCI6IFwiLi9pY28vbWljcm9waG9uZS5zdmdcIixcblx0XCIuL25lcmQuc3ZnXCI6IFwiLi9pY28vbmVyZC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0cmV0dXJuIG1vZHVsZTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKCdDYW5ub3QgZmluZCBtb2R1bGUgXCInICsgcmVxICsgJ1wiLicpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vaWNvIHN5bmMgcmVjdXJzaXZlIFxcXFwuc3ZnJFwiOyIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJldXJvdmlldy1ncmV5XCIsXG4gIFwidXNlXCI6IFwiZXVyb3ZpZXctZ3JleS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgOTYgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDk2IDEwMFxcXCIgaWQ9XFxcImV1cm92aWV3LWdyZXlcXFwiPjxwYXRoIGQ9XFxcIk00My4zMzEgMTkuOTE4QzQ2LjcxNiAxNC4zIDUwLjg5NiA5LjU5IDU2LjE4OCA1Ljg5NSA2MC4zNTggMi45NzkgNjQuODc1LjgyNSA2OS45NjkuMTljOC43NS0xLjA4NyAxNS40NTMgMi41MjIgMjAuNDY0IDkuMzg2IDQuOTc2IDYuODA3IDYuMTMgMTQuNjQ0IDUuMzQgMjIuODA0LTEuMDQyIDEwLjY1Ni02LjE5OSAxOS40NTEtMTIuOTQzIDI3LjQ4LTYuNTU0IDcuODA2LTE0LjMyNCAxNC4zNjItMjEuOTE2IDIxLjEwNC0zLjIzNSAyLjg3MS02LjQ2MyA1Ljc1Ni05LjM4MiA4Ljk1MS0yLjM4NCAyLjYwNS00LjUzOCA1LjM0OS01Ljg3IDguNjY4LS42MzkgMS41OTQtMS43NjQgMS44ODgtMi43MTMuNjQ5LTIuODYtMy43MTMtNi43OTMtNi4wMzktMTAuNjMzLTguNDgyLTYuNDQtNC4wNzEtMTIuOTU1LTguMDE1LTE4LjU2My0xMy4yNDNDMy4wMTMgNjcuNTEyLTEuMTcgNTUuMTY2LjI3OCA0MC43NjZjLjc5NS03LjkwNSAzLjMyMi0xNS4xMTMgOC42ODctMjEuMTUyIDMuODAxLTQuMjc5IDguNDIzLTcuMzA1IDE0LjAzOC04LjczIDUuNDktMS4zOSAxNS44NDYgMS4zMzIgMjAuMzI4IDkuMDM0em0zOS4xMTcgMTcuMDA0YzIuNDMyLTcuNDM2IDIuMjgzLTE0LjgxNi0uOTg3LTIxLjk0Mi0zLjAyLTYuNTg3LTguNTg3LTkuNDA2LTE1LjcyNy03Ljg5NS03Ljk5MyAxLjY5NC0xMy40NTIgNi45NjctMTcuNzg4IDEzLjU0N2ExNi45NDggMTYuOTQ4IDAgMCAwLTIuODkxIDUuOTgzYy0uMjYxLjk1LS42OTUgMS45Ni0xLjg2MyAyLjAwOS0xLjA5NS4wNDEtMS43MzctLjc3My0yLjI0NS0xLjY1M2E2LjYyMiA2LjYyMiAwIDAgMS0uNTc3LTEuNDM2Yy0xLjA4NC0zLjk1NC0zLjQ5OS02Ljc2Ni03LjI5Ny04LjQxMmExMi40ODYgMTIuNDg2IDAgMCAwLTQuNjczLTEuMDc3Yy01LjQxOC0uMTEtOS4zNzUgMi42MjMtMTIuNDE2IDYuNzI5LTQuOTQ1IDYuNjE1LTYuMjU1IDE0LjI4NS02LjE0NyAyMi4zMDggMCA1LjAxNC45NzMgOS43OTYgMy40MjMgMTQuMjMuNTM4IDEuNzI1IDEuNTU2IDMuMTg4IDIuNTM2IDQuNjYyIDQuNTggNi45MDEgMTAuNzcyIDEyLjE4NCAxNy4yMjUgMTcuMjMyIDMuNTI0IDMuMDIgNy40NiA1LjU4IDEwLjMgOS41MzQgMS4xNjctMy4wMDUgMy4wNjUtNS4zMzEgNC43Ni03Ljc4MSA2LjgwNC03Ljc0MyAxNC4yNzUtMTQuODgyIDIwLjg4OC0yMi43OTggMS45ODQtMi4zNzQgNC4wOS00LjY4MiA1LjUyNS03LjQ2NyAzLjY0NS00Ljc2OSA2LjQzNS05Ljk1MiA3Ljk1NC0xNS43NzN6XFxcIiBmaWxsPVxcXCIjRTVFNUU1XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiZXVyb3ZpZXdcIixcbiAgXCJ1c2VcIjogXCJldXJvdmlldy11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgOTYgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDk2IDEwMFxcXCIgaWQ9XFxcImV1cm92aWV3XFxcIj48cGF0aCBkPVxcXCJNNDMuMzMxIDE5LjkxOEM0Ni43MTYgMTQuMyA1MC44OTYgOS41OSA1Ni4xODggNS44OTUgNjAuMzU4IDIuOTc5IDY0Ljg3NS44MjUgNjkuOTY5LjE5YzguNzUtMS4wODcgMTUuNDUzIDIuNTIyIDIwLjQ2NCA5LjM4NiA0Ljk3NiA2LjgwNyA2LjEzIDE0LjY0NCA1LjM0IDIyLjgwNC0xLjA0MiAxMC42NTYtNi4xOTkgMTkuNDUxLTEyLjk0MyAyNy40OC02LjU1NCA3LjgwNi0xNC4zMjQgMTQuMzYyLTIxLjkxNiAyMS4xMDQtMy4yMzUgMi44NzEtNi40NjMgNS43NTYtOS4zODIgOC45NTEtMi4zODQgMi42MDUtNC41MzggNS4zNDktNS44NyA4LjY2OC0uNjM5IDEuNTk0LTEuNzY0IDEuODg4LTIuNzEzLjY0OS0yLjg2LTMuNzEzLTYuNzkzLTYuMDM5LTEwLjYzMy04LjQ4Mi02LjQ0LTQuMDcxLTEyLjk1NS04LjAxNS0xOC41NjMtMTMuMjQzQzMuMDEzIDY3LjUxMi0xLjE3IDU1LjE2Ni4yNzggNDAuNzY2Yy43OTUtNy45MDUgMy4zMjItMTUuMTEzIDguNjg3LTIxLjE1MiAzLjgwMS00LjI3OSA4LjQyMy03LjMwNSAxNC4wMzgtOC43MyA1LjQ5LTEuMzkgMTUuODQ2IDEuMzMyIDIwLjMyOCA5LjAzNHptMzkuMTE3IDE3LjAwNGMyLjQzMi03LjQzNiAyLjI4My0xNC44MTYtLjk4Ny0yMS45NDItMy4wMi02LjU4Ny04LjU4Ny05LjQwNi0xNS43MjctNy44OTUtNy45OTMgMS42OTQtMTMuNDUyIDYuOTY3LTE3Ljc4OCAxMy41NDdhMTYuOTQ4IDE2Ljk0OCAwIDAgMC0yLjg5MSA1Ljk4M2MtLjI2MS45NS0uNjk1IDEuOTYtMS44NjMgMi4wMDktMS4wOTUuMDQxLTEuNzM3LS43NzMtMi4yNDUtMS42NTNhNi42MjIgNi42MjIgMCAwIDEtLjU3Ny0xLjQzNmMtMS4wODQtMy45NTQtMy40OTktNi43NjYtNy4yOTctOC40MTJhMTIuNDg2IDEyLjQ4NiAwIDAgMC00LjY3My0xLjA3N2MtNS40MTgtLjExLTkuMzc1IDIuNjIzLTEyLjQxNiA2LjcyOS00Ljk0NSA2LjYxNS02LjI1NSAxNC4yODUtNi4xNDcgMjIuMzA4IDAgNS4wMTQuOTczIDkuNzk2IDMuNDIzIDE0LjIzLjUzOCAxLjcyNSAxLjU1NiAzLjE4OCAyLjUzNiA0LjY2MiA0LjU4IDYuOTAxIDEwLjc3MiAxMi4xODQgMTcuMjI1IDE3LjIzMiAzLjUyNCAzLjAyIDcuNDYgNS41OCAxMC4zIDkuNTM0IDEuMTY3LTMuMDA1IDMuMDY1LTUuMzMxIDQuNzYtNy43ODEgNi44MDQtNy43NDMgMTQuMjc1LTE0Ljg4MiAyMC44ODgtMjIuNzk4IDEuOTg0LTIuMzc0IDQuMDktNC42ODIgNS41MjUtNy40NjcgMy42NDUtNC43NjkgNi40MzUtOS45NTIgNy45NTQtMTUuNzczelxcXCIgZmlsbD1cXFwiI0RCMDAyQVxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcIm1pY3JvcGhvbmVcIixcbiAgXCJ1c2VcIjogXCJtaWNyb3Bob25lLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCA1MiA2NVwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MiA2NVxcXCIgaWQ9XFxcIm1pY3JvcGhvbmVcXFwiPjxwYXRoIGQ9XFxcIk00Ny41MzUgNC40MzRBMTUuMTk2IDE1LjE5NiAwIDAgMCAzNi43NTcgMGMtNC4wNzEgMC03LjkgMS41NzQtMTAuNzc4IDQuNDM0YTE0Ljk5IDE0Ljk5IDAgMCAwLTQuNDY1IDEwLjcwNWMwIDEuMTI4LjEyOCAyLjIzNi4zNjkgMy4zMUwxLjI1IDQzLjYwNGMtMS4yMzMgMS41MDMtMS4zMTYgMy43MS0uMzI2IDUuMzM0LTEuNTQ3IDIuMjE1LTEuMTQgNS4zMDggMS4xMiA3LjU1MiAyLjk5IDIuOTY5IDguMzg4IDMuNTk4IDEzLjcxNC0xLjY5MSAzLjA3OC0zLjA1OCA3LjU0Mi00LjgxNSAxMC4xMTctMi4yNTggMS44NTggMS44NDYgMS45MiA1Ljc1OS0yLjMzNiA5Ljk4NmExLjQ0MiAxLjQ0MiAwIDAgMCAwIDIuMDUgMS40NiAxLjQ2IDAgMCAwIDEuMDMyLjQyNCAxLjQ2IDEuNDYgMCAwIDAgMS4wMzEtLjQyNWM1LjY3NC01LjYzNSA1LjE4OC0xMS4yNTEgMi4zMzYtMTQuMDg0LTEuNTk4LTEuNTg3LTMuOTQ0LTIuMzEzLTYuNDM4LTEuOTktMi42NTMuMzQxLTUuMzUyIDEuODEtNy44MDYgNC4yNDctNC4xNjcgNC4xMzgtNy43NjggMy40OTgtOS41ODcgMS42OTItMS4xMzctMS4xMy0xLjM1OS0yLjM5NS0xLjAzLTMuMzM4Ljc1NS40NzEgMS42NC43MTIgMi41MjUuNzEyIDEuMDQgMCAyLjA4MS0uMzMgMi45MDktLjk5OWwyNS42NTQtMjAuNzU3Yy44NDguMTQzIDEuNzEzLjIyIDIuNTkxLjIyIDQuMDcyIDAgNy45LTEuNTc0IDEwLjc3OC00LjQzNEExNC45ODggMTQuOTg4IDAgMCAwIDUyIDE1LjE0YzAtNC4wNDMtMS41ODYtNy44NDYtNC40NjUtMTAuNzA1ek02LjY3IDQ4LjU2OWMtLjYzOC41MTYtMS43MS40NjItMi4yOTItLjExN2wtLjc0Ny0uNzQyYy0uNTgzLS41NzktLjYzNy0xLjY0Mi0uMTE3LTIuMjc2bDE5LjQ4OC0yMy43NmExNS4xNTMgMTUuMTUzIDAgMCAwIDIuOTc4IDQuMTcgMTUuMjI3IDE1LjIyNyAwIDAgMCA0Ljc5MSAzLjIyM0w2LjY2OSA0OC41N3ptMzguODAzLTI0Ljc3NGExMi4yODYgMTIuMjg2IDAgMCAxLTguNzE1IDMuNTg1IDEyLjI4NSAxMi4yODUgMCAwIDEtOC43MTUtMy41ODUgMTIuMTE5IDEyLjExOSAwIDAgMS0zLjYxLTguNjU2IDEyLjEyIDEyLjEyIDAgMCAxIDMuNjEtOC42NTYgMTIuMjg2IDEyLjI4NiAwIDAgMSA4LjcxNS0zLjU4NWMzLjI5MiAwIDYuMzg3IDEuMjczIDguNzE1IDMuNTg1YTEyLjEyIDEyLjEyIDAgMCAxIDMuNjEgOC42NTYgMTIuMTIgMTIuMTIgMCAwIDEtMy42MSA4LjY1NnpcXFwiIGZpbGw9XFxcIiNEQjAwMkFcXFwiIC8+PHBhdGggZD1cXFwiTTQzLjcwNyA5LjA1M2ExLjQ2NiAxLjQ2NiAwIDAgMC0yLjA2My0uMDE3IDEuNDQyIDEuNDQyIDAgMCAwLS4wMTcgMi4wNWMxLjEyMyAxLjEzMiAxLjc2NiAyLjc2MyAxLjc2NiA0LjQ3MiAwIDEuNzEtLjY0MyAzLjM0LTEuNzY2IDQuNDc0YTEuNDQyIDEuNDQyIDAgMCAwIC4wMTcgMi4wNDkgMS40NiAxLjQ2IDAgMCAwIDEuMDIzLjQxNmMuMzc4IDAgLjc1NS0uMTQ1IDEuMDQtLjQzMyAxLjY1NS0xLjY3MSAyLjYwNC00LjA0MiAyLjYwNC02LjUwNiAwLTIuNDYzLS45NDktNC44MzQtMi42MDQtNi41MDV6XFxcIiBmaWxsPVxcXCIjREIwMDJBXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibmVyZFwiLFxuICBcInVzZVwiOiBcIm5lcmQtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDYyIDMwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDYyIDMwXFxcIiBpZD1cXFwibmVyZFxcXCI+PHBhdGggZD1cXFwiTTUuMzg4IDkuNTQ5bC0uOTMyLS42NWMwIC40NjMuMjguNjUuOTMyLjY1em0xLjU5IDEuMjFjLjM0Ny43NzYuNTk5IDEuNTkuNzQ4IDIuNDI3LjA4Ljc0Ni4xMTUgMS40OTUuMTA1IDIuMjQ1YS4yNDcuMjQ3IDAgMCAwIC4yOC4yOCA1LjIxIDUuMjEgMCAwIDEgMS4yMTguMTg4IDEuMDA5IDEuMDA5IDAgMCAxIC43MzUgMS4wMjJ2LjA5MmEuOTMuOTMgMCAwIDEtLjkzOC42NSA4Ljg2NSA4Ljg2NSAwIDAgMS00LjM5LTEuMzAxIDkuNDA5IDkuNDA5IDAgMCAxLTQuNjc4LTcuNTZBNS42NzMgNS42NzMgMCAwIDEgMS4yNzcgNC40MWExMC4xNjggMTAuMTY4IDAgMCAxIDkuOTEtNC4yOTQgNC45MjkgNC45MjkgMCAwIDEgNC4yMDcgMy40NTVjLjI5MS44NzQuNDUgMS43ODYuNDcgMi43MDdhNy44MDUgNy44MDUgMCAwIDAgMS45NTQgNC42NzFjLjIxMy4yMzcuNDAzLjQ5NC41NjYuNzY4LjE3NS4xMS4zMDguMjc1LjM3OC40NjhhMS41NDYgMS41NDYgMCAwIDEtLjc0OSAxLjk1MiAxLjM5MyAxLjM5MyAwIDAgMC0uNjUxIDEuNGMuMDc4LjQ1Ny4xMDkuOTIxLjA5MiAxLjM4NXYuNTZhMi4wNSAyLjA1IDAgMCAxLTIuMzM4IDEuODY3Yy0uNTYgMC0xLjEyMS0uMTg5LTEuNjgxLS4xODktLjM4IDAtLjM4IDAtLjM4LjM3MWEuOTIzLjkyMyAwIDAgMS0uODQuOTM3aC0uNTZsLTQuMjA3LjE4OUg2LjQxN2EuOTA2LjkwNiAwIDAgMS0uNjUyLS44NC43MjIuNzIyIDAgMCAxIC42NTItLjc0OCAyLjIzIDIuMjMgMCAwIDEgLjc2Mi0uMDkyaDEuNDk4YTIzLjU0NCAyMy41NDQgMCAwIDAgMi41MjItLjE4My42NTMuNjUzIDAgMCAwIC41NC0uMzc4IDEuMjAzIDEuMjAzIDAgMCAxIDEuMTI3LS44NDZoMS4yMTljLjQ2OSAwIC45MzguMDkyIDEuNC4wOTIuNDYzIDAgLjU2LS4xODQuNTYtLjU2IDAtLjM3Ni0uMDkxLS45My0uMDkxLTEuMzk4YTIuNzQ0IDIuNzQ0IDAgMCAxIDEuMTItMi42ODhsLjI4LS4xODgtLjg0LTEuMTEzYTcuNTc2IDcuNTc2IDAgMCAxLTEuNzcyLTMuODMyIDIyLjczOSAyMi43MzkgMCAwIDEtLjI4Ni0yLjYwMiA0LjM5NyA0LjM5NyAwIDAgMC0xLjAyMy0yLjQ2IDQuMjM3IDQuMjM3IDAgMCAwLTMuMDg4LTEuMTE4QTkuNTk5IDkuNTk5IDAgMCAwIDMuOTg3IDMuNzZhNS4yMzkgNS4yMzkgMCAwIDAtMi4wNiA1Ljc4OSA4LjAxNCA4LjAxNCAwIDAgMCA0LjAyIDUuMzIyYy4yOTUuMTY2LjYxLjI5LjkzOS4zNzF2LS4xOGE5LjIwMiA5LjIwMiAwIDAgMC0uOTM4LTQuNDg0LjMyNC4zMjQgMCAwIDAtLjI4LS4wOTcgMi4xMDQgMi4xMDQgMCAwIDAtLjc1LS4wNjUgMS40OCAxLjQ4IDAgMCAxLTEuNDkyLTEuNDY0di0uMDMzYzAtLjc0OC40Ny0xLjIxIDEuMjEyLS45M2E0LjUgNC41IDAgMCAxIDEuMjM4LjcxNmMuMjA4LjIzMi4zOTYuNDgyLjU2Ljc0OGwuMzc4LS4xODRhMS41NjggMS41NjggMCAwIDEtLjQ3LTEuNjg0IDEuMDkyIDEuMDkyIDAgMCAxIC44MzQtLjgzOSAxLjAyNCAxLjAyNCAwIDAgMSAuOTMyLjU2Yy4yODMuNDQ0LjM4Ni45NzkuMjg4IDEuNDk2bC45MzEtLjA5Ny0uMTk1LS4xODRhMS40MTggMS40MTggMCAwIDEgMC0xLjY4NWMuMDk3LS4wOTIuMDk3LS4xODIuMTg5LS4yOGEuODAyLjgwMiAwIDAgMSAxLjEwMy4yNjFsLjAxMS4wMTljLjI2My4zNS4zOTcuNzguMzc4IDEuMjE3di40NjhsLjI4LS4zNzZjLjE5NS0uMzUuNDQ5LS42NjQuNzQ5LS45My4zNzEtLjM3OC44NC0uMTkgMS4wMjIuMzcgMCAuMDk4IDAgLjA5OC4wOTguMTlhMS40NSAxLjQ1IDAgMCAxLTEuMTIgMS42NzhjLS4xOSAwLS4yOC4xODgtLjM3OC4zNzctLjUzMiAyLjIzLS40IDQuNTY1LjM3OCA2LjcyMWEuNTQ2LjU0NiAwIDAgMS0uMTkuNjVoLS4wOTFjLS4xOS4wOTEtLjM3OCAwLS40Ny0uMjhhNC41OTEgNC41OTEgMCAwIDEtLjQ2OC0xLjIxNyAxNS4zMDcgMTUuMzA3IDAgMCAxLS4yOC01LjA0MmMuMDkxLS40NjkuMTg4LS44NC4yOC0xLjQtLjE5IDAtLjM3Mi0uMDk3LS40NyAwYTIuOTAyIDIuOTAyIDAgMCAxLTIuMTUuMzcyLjM0NC4zNDQgMCAwIDAtLjI4LjA5MmMtLjI2NC4yMS0uNTQ1LjM5Ni0uODQuNTZsLjA5Mi40NzN6bS45MzcgMTIuMTQyYy42LjA4MiAxLjE5Mi4yMDkgMS43NzIuMzc4YTcuOTI1IDcuOTI1IDAgMCAxIDMuNDY2IDEuMzk5LjY1MS42NTEgMCAwIDEgLjI4Ljc0OC42MTMuNjEzIDAgMCAxLS44NDYuMTg0Yy0uMTgyLS4wOTItLjQ2My0uMjgtLjY1MS0uMzcxQTMxLjMxOCAzMS4zMTggMCAwIDAgNy44MyAyMy43NGExNS4zMTEgMTUuMzExIDAgMCAxLTEuODctLjc0Mi40MTcuNDE3IDAgMCAxLS4zNy0uNTY2LjQ3NS40NzUgMCAwIDEgLjQ2OC0uMzcxYzEuNDAxLS4xODkgMi44MDItLjQ2OCA0LjIwOS0uNTYuODA3LS4wOSAxLjYyMy0uMDkgMi40MyAwaC4wOTJjLjI4LjA5Mi40Ny4yOC4zNzguNTZhLjUyNy41MjcgMCAwIDEtLjU2Ny40NjloLS4yOGExNS41MDIgMTUuNTAyIDAgMCAwLTQuNjcyLjM3aC4yNjZ6bS0uNjU4IDUuOThhOC45IDguOSAwIDAgMS0uNTYtLjkzOCAxLjIwMSAxLjIwMSAwIDAgMSAuMzc4LTEuMTE5Yy4yOC0uMjguNTYtLjA5MS44NCAwbDIuMzQuODRjLjMyNC4wODYuNjM4LjIxMy45MzEuMzc3aC4wOTJhLjQ0Mi40NDIgMCAwIDEgLjE5LjU2QTIuMjI2IDIuMjI2IDAgMCAxIDkuNDA3IDMwYTMuMDYgMy4wNiAwIDAgMS0yLjE1LTEuMTJ6bTQuNjc4LTEuNDA2bC00LjAyLTEuNTg3Yy0uNjUxLS4yOC0xLjMwMy0uNDYyLTEuOTU0LS43NDJoLS4wODVhLjU5My41OTMgMCAwIDEtLjI4LS44NDZjLjA5Mi0uMjguMTg5LS40NjIuNzUtLjI4LjU2LjE4MyAxLjAyOS4zNzggMS40OTEuNTY3bDQuNjc4IDEuODY3YS41Mi41MiAwIDAgMSAuMzc2LjYzMmwtLjAwNS4wMThjLS4wOTIuMjgtLjM3MS41Ni0uNjUyLjQ2OGEuNDQyLjQ0MiAwIDAgMS0uMjk5LS4wOTd6bTI1LjY0Mi0xLjY1MmExLjQ2NyAxLjQ2NyAwIDAgMS0xLjA4MS0uMzk4IDEuNTkyIDEuNTkyIDAgMCAxLS4zODUtMS4xNDV2LTMuNTg0aC0uNzE2YS4yNC4yNCAwIDAgMS0uMTctLjA1OS4yNjUuMjY1IDAgMCAxLS4wNTgtLjE4M3YtLjQ0MWwuOTY0LS4xMy4yNTQtMS43OTZhLjI2LjI2IDAgMCAxIC4wODUtLjE1LjI1Ni4yNTYgMCAwIDEgLjE3LS4wNTloLjU2NXYyLjAxMWgxLjY5NHYuODA3aC0xLjY5NHYzLjUwN2EuNzgxLjc4MSAwIDAgMCAuMTcuNTQuNjEyLjYxMiAwIDAgMCAuNDU1LjE3Ni44NzUuODc1IDAgMCAwIC4yNzQtLjA0Ljk2Ljk2IDAgMCAwIC4yMDItLjA5N2wuMTQzLS4wOTJhLjIwNS4yMDUgMCAwIDEgLjExLS4wNC4xODYuMTg2IDAgMCAxIC4wODUgMCAuMzQzLjM0MyAwIDAgMSAuMDY2LjA4NWwuMzI1LjUzNGMtLjE4OC4xNzQtLjQxLjMwOS0uNjUxLjM5OC0uMjU4LjA5OS0uNTMuMTUyLS44MDcuMTU2em0zLjQzNC02LjAzMnYzLjc4N2MtLjAyMy4zNi4wODMuNzE0LjMgMS4wMDJhMS4xMDggMS4xMDggMCAwIDAgLjkwNS4zNjRjLjI5MSAwIC41NzgtLjA3NC44MzQtLjIxNC4yNzMtLjE1Mi41Mi0uMzQ4LjczLS41OHYtNC4zNTloMS4xMTN2NS45NGgtLjY1MWEuMjc0LjI3NCAwIDAgMS0uMjkzLS4yMmwtLjA4NS0uNjUxYy0uMjUxLjI2LS41NDEuNDc5LS44Ni42NWEyLjI5NSAyLjI5NSAwIDAgMS0xLjA5NC4yNTRjLS4yODkuMDI1LS41OC0uMDEtLjg1NC0uMTA0YTEuNjEzIDEuNjEzIDAgMCAxLS42NTEtLjQ1NSAyLjAwNiAyLjAwNiAwIDAgMS0uMzc4LS43MSAyLjk1NCAyLjk1NCAwIDAgMS0uMTMtLjkxOHYtMy43ODZoMS4xMTR6bTkuODE4IDUuOTRhLjI3NC4yNzQgMCAwIDEtLjI5NC0uMjJsLS4wOTctLjY5N2EzLjQ2IDMuNDYgMCAwIDEtLjQxLjQxYy0uMTQzLjEyMy0uMjk4LjIzLS40NjMuMzJhMi4zMyAyLjMzIDAgMCAxLTEuMTEzLjI3MiAyLjAyNSAyLjAyNSAwIDAgMS0uOTItLjIwMSAxLjg0MiAxLjg0MiAwIDAgMS0uNzEtLjU4IDIuNjg0IDIuNjg0IDAgMCAxLS40NTYtLjk0OCA0LjkzMiA0LjkzMiAwIDAgMS0uMTU2LTEuMzAyIDQuMSA0LjEgMCAwIDEgLjE3Ni0xLjIyNGMuMTA2LS4zNTYuMjc5LS42OS41MDgtLjk4MmEyLjM1OCAyLjM1OCAwIDAgMSAxLjg4Mi0uODkxYy4zMTgtLjAwNi42MzQuMDU3LjkyNS4xODMuMjQ4LjEyMy40NjkuMjkyLjY1LjV2LTMuMjU0aDEuMTI4djguNjE1aC0uNjV6bS0yLjAxNC0uODEzYy4zMDcuMDA2LjYxLS4wNzIuODc0LS4yMjcuMjctLjE3LjUwNS0uMzkxLjY5LS42NXYtMi44MjVhMS41NiAxLjU2IDAgMCAwLS42MTMtLjUyIDEuNzE0IDEuNzE0IDAgMCAwLS43MzUtLjE1IDEuNDQ5IDEuNDQ5IDAgMCAwLTEuMjM5LjU3MiAyLjY5IDIuNjkgMCAwIDAtLjQ2MiAxLjY2Yy0uMDA1LjMyNy4wMjcuNjU1LjA5OC45NzUuMDU3LjIzMi4xNTQuNDUyLjI4Ni42NS4xMTcuMTY2LjI3Ni4yOTcuNDYyLjM3OS4xOTEuMDkuNC4xMzguNjEzLjEzN2guMDI2em01LjY1NS02Ljk3NGEuNzMyLjczMiAwIDAgMS0uMjI4LjU0Ljc0NC43NDQgMCAwIDEtLjI1NC4xNjIuNjkxLjY5MSAwIDAgMS0uMy4wNjUuNjUzLjY1MyAwIDAgMS0uMjkzLS4wNjUuNzQ3Ljc0NyAwIDAgMS0uMjQtLjE2My43NDcuNzQ3IDAgMCAxLS4yMjktLjU0Ljc3Mi43NzIgMCAwIDEgLjQ3LS43MTUuNjUuNjUgMCAwIDEgLjI5Mi0uMDY1LjY5LjY5IDAgMCAxIC4zLjA2NS44NC44NCAwIDAgMSAuMjU0LjE2My43NjMuNzYzIDAgMCAxIC4yMjguNTUzem0tLjIxNCAxLjg0N3Y1Ljk0SDUzLjE0di01Ljk0aDEuMTE1em00LjE5NS0uMDk3YTMuMTMgMy4xMyAwIDAgMSAxLjE4NS4yMTRjLjM0Mi4xMzUuNjQ5LjM0NC45LjYxMi4yNTQuMjc2LjQ0Ny42MDIuNTY2Ljk1Ny4yNy44MjQuMjcgMS43MTMgMCAyLjUzNy0uMTE5LjM2LS4zMTIuNjktLjU2Ni45Ny0uMjUxLjI2Ny0uNTU4LjQ3Ni0uOS42MTFhMy4zOCAzLjM4IDAgMCAxLTIuMzcgMCAyLjUwNiAyLjUwNiAwIDAgMS0uOTA2LS42MTIgMi43MDUgMi43MDUgMCAwIDEtLjU2Ny0uOTY5IDQuMDg2IDQuMDg2IDAgMCAxIDAtMi41MzdjLjExOC0uMzU4LjMxMS0uNjg2LjU2NS0uOTYzLjI1NC0uMjY4LjU2My0uNDc3LjkwNi0uNjEzYTMuMTMzIDMuMTMzIDAgMCAxIDEuMTg3LS4yMDd6bTAgNS4yNWExLjQ3NCAxLjQ3NCAwIDAgMCAxLjMwMy0uNTcyIDIuNjQ3IDIuNjQ3IDAgMCAwIC4zOTgtMS41OTQgMi42OTMgMi42OTMgMCAwIDAtLjQyMy0xLjYyIDEuNDc0IDEuNDc0IDAgMCAwLTEuMzAzLS41OCAxLjQ5NCAxLjQ5NCAwIDAgMC0xLjMwMy41OCAyLjY5MyAyLjY5MyAwIDAgMC0uMzg0IDEuNjJjLS4wMzcuNTcuMTEgMS4xMzYuNDIyIDEuNjE1YTEuNDg1IDEuNDg1IDAgMCAwIDEuMjkuNTV2LjAwMnpNMzkuNDM0IDYuNzczYy4zMzctLjAwNC42NzMuMDU2Ljk4OS4xNzYuMjk2LjExMy41NjQuMjg4Ljc4OC41MTMuMjI5LjI0LjQwNi41MjMuNTIuODMzLjEzMi4zNjMuMTk2Ljc0Ny4xOSAxLjEzM2EuNjg5LjY4OSAwIDAgMS0uMDYuMzQ1LjIzMy4yMzMgMCAwIDEtLjIwNy4wODRoLTMuOTA4YzAgLjMyLjA1MS42MzkuMTUuOTQ0LjA4Mi4yMzkuMjEuNDYuMzc4LjY1LjE1NS4xNzUuMzUuMzExLjU2Ni4zOTguMjM4LjA4OS40OS4xMzMuNzQzLjEzYTIuMjMgMi4yMyAwIDAgMCAxLjEyOC0uMjhsLjM0NS0uMTk0YS40Ny40NyAwIDAgMSAuMjQ3LS4wODUuMjIzLjIyMyAwIDAgMSAuMjAyLjEwNGwuMzEzLjQwNGEyLjIgMi4yIDAgMCAxLS40Ny40MTYgMi45OSAyLjk5IDAgMCAxLS41NzkuMjg2Yy0uMjExLjA3Ny0uNDMuMTM0LS42NTEuMTctLjIxNi4wMzMtLjQzNC4wNS0uNjUyLjA1MWEzLjExNyAzLjExNyAwIDAgMS0xLjE0LS4yMDggMi42MSAyLjYxIDAgMCAxLS45LS42MDUgMi43OSAyLjc5IDAgMCAxLS41NjYtLjk3IDMuOTY3IDMuOTY3IDAgMCAxLS4yMTQtMS4zNiAzLjI5MSAzLjI5MSAwIDAgMSAuMTk1LTEuMTUgMi43IDIuNyAwIDAgMSAuNTQ3LS45MzFjLjI0OS0uMjY4LjU1LS40ODEuODg3LS42MjUuMzY1LS4xNTguNzYtLjIzNiAxLjE1OS0uMjI5em0wIC44MDdhMS41NTggMS41NTggMCAwIDAtMS4xNTQuNDIzIDIuMDgyIDIuMDgyIDAgMCAwLS41MiAxLjE3aDMuMTQ2Yy4wMDMtLjIyLS4wMy0uNDQtLjA5OC0uNjVhMS41MiAxLjUyIDAgMCAwLS4yODYtLjUgMS40NTUgMS40NTUgMCAwIDAtMS4wNjgtLjQ0MmgtLjAyem0zLjczMyA1LjIwNVY2Ljg2M2guNjUxYS4zNi4zNiAwIDAgMSAuMjU0LjA2NWMuMDQ1LjA3LjA2OC4xNTEuMDY1LjIzNGwuMDcyLjg2Yy4xNjEtLjM1NS4zOTctLjY3LjY5LS45MjUuMjc3LS4yMjguNjI2LS4zNDguOTg0LS4zMzhhMS43IDEuNyAwIDAgMSAuMzY1LjA0Ljg4OC44ODggMCAwIDEgLjMuMTNsLS4wNzkuODI2YS4xNzUuMTc1IDAgMCAxLS4xODguMTU2IDEuMDY2IDEuMDY2IDAgMCAxLS4yNDEtLjAzMyAxLjQ3IDEuNDcgMCAwIDAtLjM1MiAwIDEuNDI1IDEuNDI1IDAgMCAwLS40ODkuMDc4IDEuMzA2IDEuMzA2IDAgMCAwLS4zODQuMjQgMS44NCAxLjg0IDAgMCAwLS4zLjM4NWMtLjA5NC4xNjctLjE3NS4zNC0uMjQuNTJ2My43MTVsLTEuMTA4LS4wMzJ6bTguMzE5IDBhLjI2Ny4yNjcgMCAwIDEtLjI4Ny0uMjIxbC0uMTA0LS42OTdhMi43NCAyLjc0IDAgMCAxLS40MDQuNDE3IDMuMTU5IDMuMTU5IDAgMCAxLS40NTYuMzEyYy0uMTY2LjA4Ny0uMzQuMTU1LS41MjEuMjAyYTIuNDY0IDIuNDY0IDAgMCAxLS41OTMuMDcyIDIuMTE0IDIuMTE0IDAgMCAxLS45Mi0uMTk2IDEuODg4IDEuODg4IDAgMCAxLS43MDUtLjU4NSAyLjY0OCAyLjY0OCAwIDAgMS0uNDU0LS45NDMgNC44NzggNC44NzggMCAwIDEtLjE1Ni0xLjMwMiA0LjEwNyA0LjEwNyAwIDAgMSAuMTc2LTEuMjI0Yy4xMDgtLjM1NC4yOC0uNjg1LjUwOC0uOTc2YTIuMyAyLjMgMCAwIDEgMS44NzYtLjg4NWMuMzE1LS4wMDguNjI5LjA1Mi45Mi4xNzYuMjQ4LjEyMy40NjkuMjk0LjY1LjUwM1Y0LjE4M2gxLjExNXY4LjZsLS42NDUuMDAxem0tMi0uODEzYy4zMDMuMDA4LjYwMy0uMDY5Ljg2Ni0uMjIxLjI3LS4xNy41MDUtLjM5MS42OS0uNjUxdi0yLjgxYTEuNTY2IDEuNTY2IDAgMCAwLS42MTItLjUyMSAxLjcyIDEuNzIgMCAwIDAtLjczNi0uMTUgMS40NDIgMS40NDIgMCAwIDAtMS4yMzEuNTczIDIuNzAzIDIuNzAzIDAgMCAwLS40MTcgMS42NTJjLS4wMDUuMzI2LjAyNy42NTIuMDk3Ljk3LjA1Ni4yMzIuMTUzLjQ1My4yODcuNjUuMTE1LjE2NS4yNzMuMjk2LjQ1Ni4zNzguMTkuMDg0LjM5My4xMjguNi4xM3ptLTE1LjIxMyA4LjgwM2EuMjMuMjMgMCAwIDEtLjIxNy4xMy40MS40MSAwIDAgMS0uMTk5LS4wNjUgNC43ODQgNC43ODQgMCAwIDAtLjI3My0uMTQ0IDIuNTU5IDIuNTU5IDAgMCAwLS4zODQtLjE0NiAxLjgzIDEuODMgMCAwIDAtLjUyNy0uMDY3Yy0uMTYxLS4wMDItLjMyMS4wMi0uNDc1LjA2N2ExLjE0IDEuMTQgMCAwIDAtLjM2MS4xODQuODIuODIgMCAwIDAtLjIyOS4yNzIuNzMuNzMgMCAwIDAtLjA3OS4zMzcuNTYuNTYgMCAwIDAgLjEzMi4zOGMuMDk4LjExLjIxNy4yLjM1LjI2NC4xNTcuMDguMzIyLjE0NS40OTIuMTk2LjE4NC4wNTcuMzcyLjExNy41NjUuMTgyLjE5NC4wNjQuMzgyLjEzNi41NjYuMjE0LjE3Ny4wNzQuMzQzLjE3My40OTMuMjkzLjE0NS4xMTcuMjY1LjI2NC4zNS40My4wODguMTcuMTMyLjM3NC4xMzIuNjEyLjAwMy4yNi0uMDQ3LjUxOC0uMTQ3Ljc1OWExLjY1OCAxLjY1OCAwIDAgMS0uNDMzLjYwMyAyLjA5MyAyLjA5MyAwIDAgMS0uNzA1LjQgMi44OTMgMi44OTMgMCAwIDEtLjk2Mi4xNDdjLS40MTQgMC0uNzktLjA2Ny0xLjEyNi0uMjAyYTIuODUzIDIuODUzIDAgMCAxLS44NTYtLjUxOGwuMjQ2LS4zOThhLjM2LjM2IDAgMCAxIC4xMTEtLjExNy4zMDIuMzAyIDAgMCAxIC4xNjQtLjA0MS4zOTQuMzk0IDAgMCAxIC4yMjMuMDgyYy4wNzguMDU1LjE3My4xMTUuMjg1LjE4MWExLjg2MyAxLjg2MyAwIDAgMCAxLjAwNS4yNjRjLjE4MS4wMDMuMzYxLS4wMjMuNTM0LS4wOC4xNC0uMDQ1LjI3LS4xMTguMzgtLjIxM2EuODQ0Ljg0NCAwIDAgMCAuMjI2LS4zMS45Ni45NiAwIDAgMCAuMDc0LS4zNzUuNjI0LjYyNCAwIDAgMC0uMTMyLS40MDcgMS4xMTMgMS4xMTMgMCAwIDAtLjM0OS0uMjc2IDIuODYgMi44NiAwIDAgMC0uNDk1LS4yIDQwLjY1IDQwLjY1IDAgMCAxLS41Ny0uMTc4IDYuMjExIDYuMjExIDAgMCAxLS41NjgtLjIxNCAyLjAwMSAyLjAwMSAwIDAgMS0uNDk1LS4zMDEgMS4zNjQgMS4zNjQgMCAwIDEtLjM1LS40NDggMS40NDUgMS40NDUgMCAwIDEtLjEzMS0uNjQ3IDEuNjAyIDEuNjAyIDAgMCAxIC41NTEtMS4yMDRjLjE5NS0uMTY3LjQyLS4yOTUuNjYyLS4zNzguMjYyLS4wOTMuNTYxLS4xNC44OTctLjE0LjM5MiAwIC43NDIuMDYgMS4wNTMuMTgzLjI5OS4xMTYuNTczLjI4OC44MDYuNTA3bC0uMjM0LjM4MnptLTMuODI3LTcuOTNWNi45MWguNjI3Yy4xNDkgMCAuMjQuMDczLjI3Ni4yMTdsLjA4Mi42NDNhMy4zMiAzLjMyIDAgMCAxIC44NjgtLjY5MWMuMzItLjE3Ni42OS0uMjY0IDEuMTA4LS4yNjQuMzI1IDAgLjYxMS4wNTQuODU4LjE2MS4yNDEuMTAzLjQ1NC4yNi42MjMuNDYuMTcyLjIxLjMuNDUxLjM3OC43MTEuMDg5LjI5OC4xMzIuNjA4LjEyOS45MTl2My43NzdoLTEuMDVWOS4wNjZjMC0uNDQ5LS4xMDItLjc5Ny0uMzA2LTEuMDQ1LS4yMDUtLjI0OC0uNTE2LS4zNzItLjkzNi0uMzcyYTEuNzY1IDEuNzY1IDAgMCAwLS44Ny4yMjMgMi43NjIgMi43NjIgMCAwIDAtLjczNi42MDN2NC4zNjloLTEuMDUxelxcXCIgZmlsbD1cXFwiI2ZmZlxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwidmFyIG1hcCA9IHtcblx0XCIuL2luZGV4LnB1Z1wiOiBcIi4vcHVnL2luZGV4LnB1Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRyZXR1cm4gbW9kdWxlO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcIicgKyByZXEgKyAnXCIuJyk7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9wdWcgc3luYyBcXFxcLnB1ZyRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==