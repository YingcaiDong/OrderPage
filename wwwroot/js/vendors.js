(self["webpackChunkcustomer_order"] = self["webpackChunkcustomer_order"] || []).push([["vendors"],{

/***/ "./node_modules/mobx/dist/mobx.esm.js":
/*!********************************************!*\
  !*** ./node_modules/mobx/dist/mobx.esm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$mobx": () => (/* binding */ $mobx),
/* harmony export */   "FlowCancellationError": () => (/* binding */ FlowCancellationError),
/* harmony export */   "ObservableMap": () => (/* binding */ ObservableMap),
/* harmony export */   "ObservableSet": () => (/* binding */ ObservableSet),
/* harmony export */   "Reaction": () => (/* binding */ Reaction),
/* harmony export */   "_allowStateChanges": () => (/* binding */ allowStateChanges),
/* harmony export */   "_allowStateChangesInsideComputed": () => (/* binding */ runInAction),
/* harmony export */   "_allowStateReadsEnd": () => (/* binding */ allowStateReadsEnd),
/* harmony export */   "_allowStateReadsStart": () => (/* binding */ allowStateReadsStart),
/* harmony export */   "_autoAction": () => (/* binding */ autoAction),
/* harmony export */   "_endAction": () => (/* binding */ _endAction),
/* harmony export */   "_getAdministration": () => (/* binding */ getAdministration),
/* harmony export */   "_getGlobalState": () => (/* binding */ getGlobalState),
/* harmony export */   "_interceptReads": () => (/* binding */ interceptReads),
/* harmony export */   "_isComputingDerivation": () => (/* binding */ isComputingDerivation),
/* harmony export */   "_resetGlobalState": () => (/* binding */ resetGlobalState),
/* harmony export */   "_startAction": () => (/* binding */ _startAction),
/* harmony export */   "action": () => (/* binding */ action),
/* harmony export */   "autorun": () => (/* binding */ autorun),
/* harmony export */   "comparer": () => (/* binding */ comparer),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "configure": () => (/* binding */ configure),
/* harmony export */   "createAtom": () => (/* binding */ createAtom),
/* harmony export */   "defineProperty": () => (/* binding */ apiDefineProperty),
/* harmony export */   "entries": () => (/* binding */ entries),
/* harmony export */   "extendObservable": () => (/* binding */ extendObservable),
/* harmony export */   "flow": () => (/* binding */ flow),
/* harmony export */   "flowResult": () => (/* binding */ flowResult),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getAtom": () => (/* binding */ getAtom),
/* harmony export */   "getDebugName": () => (/* binding */ getDebugName),
/* harmony export */   "getDependencyTree": () => (/* binding */ getDependencyTree),
/* harmony export */   "getObserverTree": () => (/* binding */ getObserverTree),
/* harmony export */   "has": () => (/* binding */ has),
/* harmony export */   "intercept": () => (/* binding */ intercept),
/* harmony export */   "isAction": () => (/* binding */ isAction),
/* harmony export */   "isBoxedObservable": () => (/* binding */ isObservableValue),
/* harmony export */   "isComputed": () => (/* binding */ isComputed),
/* harmony export */   "isComputedProp": () => (/* binding */ isComputedProp),
/* harmony export */   "isFlow": () => (/* binding */ isFlow),
/* harmony export */   "isFlowCancellationError": () => (/* binding */ isFlowCancellationError),
/* harmony export */   "isObservable": () => (/* binding */ isObservable),
/* harmony export */   "isObservableArray": () => (/* binding */ isObservableArray),
/* harmony export */   "isObservableMap": () => (/* binding */ isObservableMap),
/* harmony export */   "isObservableObject": () => (/* binding */ isObservableObject),
/* harmony export */   "isObservableProp": () => (/* binding */ isObservableProp),
/* harmony export */   "isObservableSet": () => (/* binding */ isObservableSet),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "makeAutoObservable": () => (/* binding */ makeAutoObservable),
/* harmony export */   "makeObservable": () => (/* binding */ makeObservable),
/* harmony export */   "observable": () => (/* binding */ observable),
/* harmony export */   "observe": () => (/* binding */ observe),
/* harmony export */   "onBecomeObserved": () => (/* binding */ onBecomeObserved),
/* harmony export */   "onBecomeUnobserved": () => (/* binding */ onBecomeUnobserved),
/* harmony export */   "onReactionError": () => (/* binding */ onReactionError),
/* harmony export */   "override": () => (/* binding */ override),
/* harmony export */   "ownKeys": () => (/* binding */ apiOwnKeys),
/* harmony export */   "reaction": () => (/* binding */ reaction),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "runInAction": () => (/* binding */ runInAction),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "spy": () => (/* binding */ spy),
/* harmony export */   "toJS": () => (/* binding */ toJS),
/* harmony export */   "trace": () => (/* binding */ trace),
/* harmony export */   "transaction": () => (/* binding */ transaction),
/* harmony export */   "untracked": () => (/* binding */ untracked),
/* harmony export */   "values": () => (/* binding */ values),
/* harmony export */   "when": () => (/* binding */ when)
/* harmony export */ });
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(annotationType, key) {
    return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
  },

  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
};
var errors =  true ? niceErrors : 0;
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function") e = e.apply(null, args);
    throw new Error("[MobX] " + e);
  }

  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}

var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }

  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof __webpack_require__.g !== "undefined") {
    return __webpack_require__.g;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die( true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : 0);
  }
}
function warnAboutProxyRequirement(msg) {
  if ( true && globalState.verifyProxies) {
    die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
  }
}
function getNextId() {
  return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */

function once(func) {
  var invoked = false;
  return function () {
    if (invoked) {
      return;
    }

    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop() {};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;

  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }

  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }

  var proto = Object.getPrototypeOf(value);

  if (proto == null) {
    return true;
  }

  var protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
} // https://stackoverflow.com/a/37865170

function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;

  if (!constructor) {
    return false;
  }

  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
    return true;
  }

  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own enumerable keys and symbols.
 */

function getPlainObjectKeys(object) {
  var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

  if (!hasGetOwnPropertySymbols) {
    return keys;
  }

  var symbols = Object.getOwnPropertySymbols(object);

  if (!symbols.length) {
    return keys;
  }

  return [].concat(keys, symbols.filter(function (s) {
    return objectPrototype.propertyIsEnumerable.call(object, s);
  }));
} // From Immer utils
// Returns all own keys, including non-enumerable and symbolic

var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string") {
    return key;
  }

  if (typeof key === "symbol") {
    return key.toString();
  }

  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
} // From Immer utils

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

  ownKeys(target).forEach(function (key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var storedAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-stored-annotations");
/**
 * Creates a function that acts as
 * - decorator
 * - annotation object
 */

function createDecoratorAnnotation(annotation) {
  function decorator(target, property) {
    storeAnnotation(target, property, annotation);
  }

  return Object.assign(decorator, annotation);
}
/**
 * Stores annotation to prototype,
 * so it can be inspected later by `makeObservable` called from constructor
 */

function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
  } // @override must override something


  if ( true && isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    die("'" + fieldName + "' is decorated with 'override', " + "but no such decorated member was found on prototype.");
  } // Cannot re-decorate


  assertNotDecorated(prototype, annotation, key); // Ignore override

  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}

function assertNotDecorated(prototype, annotation, key) {
  if ( true && !isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed." + "\nUse '@override' decorator for methods overriden by subclass.");
  }
}
/**
 * Collects annotations from prototypes and stores them on target (instance)
 */


function collectStoredAnnotations(target) {
  if (!hasProp(target, storedAnnotationsSymbol)) {
    if ( true && !target[storedAnnotationsSymbol]) {
      die("No annotations were passed to makeObservable, but no decorated members have been found either");
    } // We need a copy as we will remove annotation from the list once it's applied.


    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
  }

  return target[storedAnnotationsSymbol];
}

var $mobx = /*#__PURE__*/Symbol("mobx administration");
var Atom = /*#__PURE__*/function () {
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name_) {
    if (name_ === void 0) {
      name_ =  true ? "Atom@" + getNextId() : 0;
    }

    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  } // onBecomeObservedListeners


  var _proto = Atom.prototype;

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  ;

  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  ;

  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  _proto.toString = function toString() {
    return this.name_;
  };

  return Atom;
}();
var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  if (Object.is) {
    return Object.is(a, b);
  }

  return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) {
    return v;
  } // something that can be converted and mutated?


  if (Array.isArray(v)) {
    return observable.array(v, {
      name: name
    });
  }

  if (isPlainObject(v)) {
    return observable.object(v, undefined, {
      name: name
    });
  }

  if (isES6Map(v)) {
    return observable.map(v, {
      name: name
    });
  }

  if (isES6Set(v)) {
    return observable.set(v, {
      name: name
    });
  }

  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }

  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) {
    return v;
  }

  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) {
    return v;
  }

  if (Array.isArray(v)) {
    return observable.array(v, {
      name: name,
      deep: false
    });
  }

  if (isPlainObject(v)) {
    return observable.object(v, undefined, {
      name: name,
      deep: false
    });
  }

  if (isES6Map(v)) {
    return observable.map(v, {
      name: name,
      deep: false
    });
  }

  if (isES6Set(v)) {
    return observable.set(v, {
      name: name,
      deep: false
    });
  }

  if (true) {
    die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
  }
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if ( true && isObservable(v)) {
    die("observable.struct should not be used with observable values");
  }

  if (deepEqual(v, oldValue)) {
    return oldValue;
  }

  return v;
}

var OVERRIDE = "override";
var override = /*#__PURE__*/createDecoratorAnnotation({
  annotationType_: OVERRIDE,
  make_: make_,
  extend_: extend_
});
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}

function make_(adm, key) {
  // Must not be plain object
  if ( true && adm.isPlainObject_) {
    die("Cannot apply '" + this.annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + this.annotationType_ + "' cannot be used on plain objects."));
  } // Must override something


  if ( true && !hasProp(adm.appliedAnnotations_, key)) {
    die("'" + adm.name_ + "." + key.toString() + "' is annotated with '" + this.annotationType_ + "', " + "but no such annotated member was found on prototype.");
  }

  return 0
  /* Cancel */
  ;
}

function extend_(adm, key, descriptor, proxyTrap) {
  die("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
}

function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1
  };
}

function make_$1(adm, key, descriptor, source) {
  var _this$options_;

  // bound
  if ((_this$options_ = this.options_) != null && _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 1
    /* Break */
    ;
  } // own


  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype


  if (isAction(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}

function assertActionDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if ( true && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
  }
}

function createActionDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;

  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;

  if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
    var _adm$proxy_;

    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return {
    value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false, // https://github.com/mobxjs/mobx/discussions/3140
    (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : undefined),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2
  };
}

function make_$2(adm, key, descriptor, source) {
  var _this$options_;

  // own
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype
  // bound - must annotate protos to support super.flow()


  if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
    if (this.extend_(adm, key, descriptor, false) === null) {
      return 0
      /* Cancel */
      ;
    }
  }

  if (isFlow(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}

function assertFlowDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if ( true && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
  }
}

function createFlowDescriptor(adm, annotation, key, descriptor, bound, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value; // In case of flow.bound, the descriptor can be from already annotated prototype

  if (!isFlow(value)) {
    value = flow(value);
  }

  if (bound) {
    var _adm$proxy_;

    // We do not keep original function around, so we bind the existing flow
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_); // This is normally set by `flow`, but `bind` returns new function...

    value.isMobXFlow = true;
  }

  return {
    value: value,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3
  };
}

function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}

function assertComputedDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var get = _ref2.get;

  if ( true && !get) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
  }
}

function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4
  };
}

function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;

  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}

function assertObservableDescriptor(adm, _ref, key, descriptor) {
  var annotationType_ = _ref.annotationType_;

  if ( true && !("value" in descriptor)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
  }
}

var AUTO = "true";
var autoAnnotation = /*#__PURE__*/createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5
  };
}

function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;

  // getter -> computed
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.make_
    var set = createAction(key.toString(), descriptor.set); // own

    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set
      }) === null ? 0
      /* Cancel */
      : 2
      /* Continue */
      ;
    } // proto


    defineProperty(source, key, {
      configurable: true,
      set: set
    });
    return 2
    /* Continue */
    ;
  } // function on proto -> autoAction/flow


  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;

    if (isGenerator(descriptor.value)) {
      var _this$options_;

      var flowAnnotation = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
      return flowAnnotation.make_(adm, key, descriptor, source);
    }

    var actionAnnotation = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
    return actionAnnotation.make_(adm, key, descriptor, source);
  } // other -> observable
  // Copy props from proto as well, see test:
  // "decorate should work with Object.create"


  var observableAnnotation = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable; // if function respect autoBind option

  if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
    var _adm$proxy_;

    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return observableAnnotation.make_(adm, key, descriptor, source);
}

function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;

  // getter -> computed
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.extend_
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  } // other -> observable
  // if function respect autoBind option


  if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
    var _adm$proxy_2;

    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }

  var observableAnnotation = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
}

var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct"; // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases

var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_REF, {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /*#__PURE__*/createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;

  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;

  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (isStringish(arg2)) {
    storeAnnotation(v, arg2, observableAnnotation);
    return;
  } // already observable - ignore


  if (isObservable(v)) {
    return v;
  } // plain object


  if (isPlainObject(v)) {
    return observable.object(v, arg2, arg3);
  } // Array


  if (Array.isArray(v)) {
    return observable.array(v, arg2);
  } // Map


  if (isES6Map(v)) {
    return observable.map(v, arg2);
  } // Set


  if (isES6Set(v)) {
    return observable.set(v, arg2);
  } // other object - ignore


  if (typeof v === "object" && v !== null) {
    return v;
  } // anything else


  return observable.box(v, arg2);
}

Object.assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
  },
  ref: /*#__PURE__*/createDecoratorAnnotation(observableRefAnnotation),
  shallow: /*#__PURE__*/createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /*#__PURE__*/createDecoratorAnnotation(observableStructAnnotation)
}; // eslint-disable-next-line

var observable = /*#__PURE__*/assign(createObservable, observableFactories);

var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2) {
  if (isStringish(arg2)) {
    // @computed
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }

  if (isPlainObject(arg1)) {
    // @computed({ options })
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  } // computed(expr, options?)


  if (true) {
    if (!isFunction(arg1)) {
      die("First argument to `computed` should be an expression.");
    }

    if (isFunction(arg2)) {
      die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
    }
  }

  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  /* for generated name */

  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /*#__PURE__*/createDecoratorAnnotation(computedStructAnnotation);

var _getDescriptor$config, _getDescriptor;
// mobx versions

var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
  if (autoAction === void 0) {
    autoAction = false;
  }

  if (true) {
    if (!isFunction(fn)) {
      die("`action` can only be invoked on functions");
    }

    if (typeof actionName !== "string" || !actionName) {
      die("actions should have valid names, got: '" + actionName + "'");
    }
  }

  function res() {
    return executeAction(actionName, autoAction, fn, ref || this, arguments);
  }

  res.isMobxAction = true;

  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }

  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
  var notifySpy_ =  true && isSpyEnabled() && !!actionName;
  var startTime_ = 0;

  if ( true && notifySpy_) {
    startTime_ = Date.now();
    var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
    spyReportStart({
      type: ACTION,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }

  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }

  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_: prevDerivation_,
    prevAllowStateChanges_: prevAllowStateChanges_,
    prevAllowStateReads_: prevAllowStateReads_,
    notifySpy_: notifySpy_,
    startTime_: startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }

  currentActionId = runInfo.parentActionId_;

  if (runInfo.error_ !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();

  if (runInfo.runAsAction_) {
    untrackedEnd(runInfo.prevDerivation_);
  }

  if ( true && runInfo.notifySpy_) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime_
    });
  }

  globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);

  try {
    return func();
  } finally {
    allowStateChangesEnd(prev);
  }
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

var _Symbol$toPrimitive;
var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /*#__PURE__*/function (_Atom, _Symbol$toPrimitive2) {
  _inheritsLoose(ObservableValue, _Atom);

  function ObservableValue(value, enhancer, name_, notifySpy, equals) {
    var _this;

    if (name_ === void 0) {
      name_ =  true ? "ObservableValue@" + getNextId() : 0;
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer["default"];
    }

    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, undefined, name_);

    if ( true && notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: CREATE,
        object: _assertThisInitialized(_this),
        observableKind: "value",
        debugObjectName: _this.name_,
        newValue: "" + _this.value_
      });
    }

    return _this;
  }

  var _proto = ObservableValue.prototype;

  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.set = function set(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if ( true && notifySpy) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue_(newValue);

      if ( true && notifySpy) {
        spyReportEnd();
      }
    }
  };

  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue: newValue
      });

      if (!change) {
        return globalState.UNCHANGED;
      }

      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };

  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  _proto.get = function get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) {
      listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: undefined
      });
    }

    return registerListener(this, listener);
  };

  _proto.raw = function raw() {
    // used by MST ot get undehanced value
    return this.value_;
  };

  _proto.toJSON = function toJSON() {
    return this.get();
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.value_ + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive2] = function () {
    return this.valueOf();
  };

  return ObservableValue;
}(Atom, _Symbol$toPrimitive);
var isObservableValue = /*#__PURE__*/createInstanceofPredicate("ObservableValue", ObservableValue);

var _Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /*#__PURE__*/function (_Symbol$toPrimitive2) {
  // nodes we are looking at. Our value depends on these nodes
  // during tracking it's an array with new observed observers
  // to check for cycles
  // N.B: unminified as it is used by MST

  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;

    if (!options.get) {
      die(31);
    }

    this.derivation = options.get;
    this.name_ = options.name || ( true ? "ComputedValue@" + getNextId() : 0);

    if (options.set) {
      this.setter_ = createAction( true ? this.name_ + "-setter" : 0, options.set);
    }

    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }

  var _proto = ComputedValue.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ;

  _proto.get = function get() {
    if (this.isComputing_) {
      die(32, this.name_, this.derivation);
    }

    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch(); // See perf test 'computed memoization'

        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);

      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;

        if (this.keepAlive_ && !prevTrackingContext) {
          globalState.trackingContext = this;
        }

        if (this.trackAndCompute()) {
          propagateChangeConfirmed(this);
        }

        globalState.trackingContext = prevTrackingContext;
      }
    }

    var result = this.value_;

    if (isCaughtException(result)) {
      throw result.cause;
    }

    return result;
  };

  _proto.set = function set(value) {
    if (this.setter_) {
      if (this.isRunningSetter_) {
        die(33, this.name_);
      }

      this.isRunningSetter_ = true;

      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else {
      die(34, this.name_);
    }
  };

  _proto.trackAndCompute = function trackAndCompute() {
    // N.B: unminified as it is used by MST
    var oldValue = this.value_;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

    if (changed) {
      this.value_ = newValue;

      if ( true && isSpyEnabled()) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue: oldValue,
          newValue: newValue
        });
      }
    }

    return changed;
  };

  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true; // don't allow state changes during computation

    var prev = allowStateChangesStart(false);
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };

  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = undefined; // don't hold on to computed value!

      if ( true && this.isTracing_ !== TraceMode.NONE) {
        console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
      }
    }
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (false) {}

    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }

    if (typeof this.requiresReaction_ === "boolean" ? this.requiresReaction_ : globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive2] = function () {
    return this.valueOf();
  };

  return ComputedValue;
}(_Symbol$toPrimitive$1);
var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

var IDerivationState_;

(function (IDerivationState_) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function CaughtException(cause) {
  this.cause = void 0;
  this.cause = cause; // Empty
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */

function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;

    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;

    case IDerivationState_.POSSIBLY_STALE_:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing_,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  if (false) {}

  var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) {
    console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
  }
}
function checkIfStateReadsAreAllowed(observable) {
  if ( true && !globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable '" + observable.name_ + "' being read outside a reactive context.");
  }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */

function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (false) {}

  if (derivation.observing_.length !== 0) {
    return;
  }

  if (typeof derivation.requiresObservable_ === "boolean" ? derivation.requiresObservable_ : globalState.reactionRequiresObservable) {
    console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount_;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;

      if (i0 !== i) {
        observing[i0] = dep;
      }

      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }

  observing.length = i0;
  derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var _dep = prevObserving[l];

    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }

    _dep.diffValue_ = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var _dep2 = observing[i0];

    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
  var prev = untrackedStart();

  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */

function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
    return;
  }

  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}

/**
 * These values will persist if global state is reset
 */

var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED", "useProxies"];
var MobXGlobals = function MobXGlobals() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/function () {
  var global = /*#__PURE__*/getGlobal();

  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) {
    canMergeGlobalState = false;
  }

  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) {
    canMergeGlobalState = false;
  }

  if (!canMergeGlobalState) {
    // Because this is a IIFE we need to let isolateCalled a chance to change
    // so we run it after the event loop completed at least 1 iteration
    setTimeout(function () {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;

    if (!global.__mobxGlobals.UNCHANGED) {
      global.__mobxGlobals.UNCHANGED = {};
    } // make merge backward compatible


    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) {
    die(36);
  }

  isolateCalled = true;

  if (canMergeGlobalState) {
    var global = getGlobal();

    if (--global.__mobxInstanceCount === 0) {
      global.__mobxGlobals = undefined;
    }

    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */

function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) {
      globalState[key] = defaultGlobals[key];
    }
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
  return observable.observers_;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }

function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers_.add(node);

  if (observable.lowestObserverState_ > node.dependenciesState_) {
    observable.lowestObserverState_ = node.dependenciesState_;
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");

}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers_["delete"](node);

  if (observable.observers_.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation_ === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */

function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation_ = false;

      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved_) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved_ = false;
          observable.onBUO();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend_();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

      if (!observable.isBeingObserved_ && globalState.trackingContext) {
        observable.isBeingObserved_ = true;
        observable.onBO();
      }
    }

    return true;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes

function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }

  observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale_();
    }

    d.dependenciesState_ = IDerivationState_.STALE_;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed

function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }

  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;

      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) {
      observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.

function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
    return;
  }

  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + "\t".repeat(depth - 1) + tree.name);

  if (tree.dependencies) {
    tree.dependencies.forEach(function (child) {
      return printDepTree(child, lines, depth + 1);
    });
  }
}

var Reaction = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ =  true ? "Reaction@" + getNextId() : 0;
    }

    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }

  var _proto = Reaction.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };

  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  ;

  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;

      if (shouldCompute(this)) {
        this.isTrackPending_ = true;

        try {
          this.onInvalidate_();

          if ( true && this.isTrackPending_ && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }

      globalState.trackingContext = prev;
      endBatch();
    }
  };

  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }

    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if ( true && notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }

    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext; // reactions could create reactions...

    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, undefined);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;

    if (this.isDisposed_) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) {
      this.reportExceptionInDerivation_(result.cause);
    }

    if ( true && notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;

    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) {
      throw error;
    }

    var message =  true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : 0;

    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    } else if (true) {
      console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
    } // prettier-ignore


    if ( true && isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name_,
        message: message,
        error: "" + error
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;

      if (!this.isRunning_) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };

  _proto.toString = function toString() {
    return "Reaction[" + this.name_ + "]";
  };

  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);

    if (idx >= 0) {
      globalState.globalReactionErrorHandlers.splice(idx, 1);
    }
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */

var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) {
    return;
  }

  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error( true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : 0);
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
  if (false) {} // dead code elimination can do the rest


  if (!globalState.spyListeners.length) {
    return;
  }

  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (false) {}

  var change = _extends({}, event, {
    spyReportStart: true
  });

  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (false) {}

  if (change) {
    spyReport(_extends({}, change, {
      type: "report-end",
      spyReportEnd: true
    }));
  } else {
    spyReport(END_EVENT);
  }
}
function spy(listener) {
  if (false) {} else {
    globalState.spyListeners.push(listener);
    return once(function () {
      globalState.spyListeners = globalState.spyListeners.filter(function (l) {
        return l !== listener;
      });
    });
  }
}

var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /*#__PURE__*/createActionAnnotation(ACTION);
var actionBoundAnnotation = /*#__PURE__*/createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});

function createActionFactory(autoAction) {
  var res = function action(arg1, arg2) {
    // action(fn() {})
    if (isFunction(arg1)) {
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction);
    } // action("name", fn() {})


    if (isFunction(arg2)) {
      return createAction(arg1, arg2, autoAction);
    } // @action


    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
    } // action("name") & @action("name")


    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction
      }));
    }

    if (true) {
      die("Invalid arguments for `action`");
    }
  };

  return res;
}

var action = /*#__PURE__*/createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /*#__PURE__*/createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /*#__PURE__*/createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /*#__PURE__*/createDecoratorAnnotation(autoActionBoundAnnotation);
function runInAction(fn) {
  return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, undefined);
}
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */

function autorun(view, opts) {
  var _opts$name, _opts;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    if (!isFunction(view)) {
      die("Autorun expects a function as first argument");
    }

    if (isAction(view)) {
      die("Autorun does not accept actions since actions are untrackable");
    }
  }

  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name :  true ? view.name || "Autorun@" + getNextId() : 0;
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function () {
          isScheduled = false;

          if (!reaction.isDisposed_) {
            reaction.track(reactionRunner);
          }
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule_();
  return reaction.getDisposer_();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  var _opts$name2;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    if (!isFunction(expression) || !isFunction(effect)) {
      die("First and second argument to reaction should be functions");
    }

    if (!isPlainObject(opts)) {
      die("Third argument of reactions should be an object");
    }
  }

  var name = (_opts$name2 = opts.name) != null ? _opts$name2 :  true ? "Reaction@" + getNextId() : 0;
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var oldValue;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false;

    if (r.isDisposed_) {
      return;
    }

    var changed = false;
    r.track(function () {
      var nextValue = allowStateChanges(false, function () {
        return expression(r);
      });
      changed = firstTime || !equals(value, nextValue);
      oldValue = value;
      value = nextValue;
    });

    if (firstTime && opts.fireImmediately) {
      effectAction(value, oldValue, r);
    } else if (!firstTime && changed) {
      effectAction(value, oldValue, r);
    }

    firstTime = false;
  }

  r.schedule_();
  return r.getDisposer_();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners["delete"](cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed"; // const IF_AVAILABLE = "ifavailable"

function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  var useProxies = options.useProxies,
      enforceActions = options.enforceActions;

  if (useProxies !== undefined) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }

  if (useProxies === "ifavailable") {
    globalState.verifyProxies = true;
  }

  if (enforceActions !== undefined) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function (key) {
    if (key in options) {
      globalState[key] = !!options[key];
    }
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;

  if ( true && globalState.disableErrorBoundaries === true) {
    console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
  }

  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}

function extendObservable(target, properties, annotations, options) {
  if (true) {
    if (arguments.length > 4) {
      die("'extendObservable' expected 2-4 arguments");
    }

    if (typeof target !== "object") {
      die("'extendObservable' expects an object as first argument");
    }

    if (isObservableMap(target)) {
      die("'extendObservable' should not be used on maps, use map.merge instead");
    }

    if (!isPlainObject(properties)) {
      die("'extendObservable' only accepts plain objects as second argument");
    }

    if (isObservable(properties) || isObservable(annotations)) {
      die("Extending an object with another observable (object) is not supported");
    }
  } // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)


  var descriptors = getOwnPropertyDescriptors(properties);
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    ownKeys(descriptors).forEach(function (key) {
      adm.extend_(key, descriptors[key], // must pass "undefined" for { key: undefined }
      !annotations ? true : key in annotations ? annotations[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };

  if (node.observing_ && node.observing_.length > 0) {
    result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  }

  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name_
  };

  if (hasObservers(node)) {
    result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  }

  return result;
}

function unique(list) {
  return Array.from(new Set(list));
}

var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}
var flowAnnotation = /*#__PURE__*/createFlowAnnotation("flow");
var flowBoundAnnotation = /*#__PURE__*/createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
  // @flow
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  } // flow(fn)


  if ( true && arguments.length !== 1) {
    die("Flow expects single argument with generator function");
  }

  var generator = arg1;
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  var res = function res() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) {
          return resolve(ret.value);
        }

        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) {
          cancelPromise(pendingPromise);
        } // Finally block can return (or yield) stuff..


        var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };

  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /*#__PURE__*/createDecoratorAnnotation(flowBoundAnnotation);

function cancelPromise(promise) {
  if (isFunction(promise.cancel)) {
    promise.cancel();
  }
}

function flowResult(result) {
  return result; // just tricking TypeScript :)
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if ( true && !isStringish(propOrHandler)) {
      return die("InterceptReads can only be used with a specific property, not with an object in general");
    }

    target = getAdministration(thing, propOrHandler);
  } else if (true) {
    return die("Expected observable map, object or array as first array");
  }

  if ( true && target.dehancer !== undefined) {
    return die("An intercept reader was already established");
  }

  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) {
    return interceptProperty(thing, propOrHandler, handler);
  } else {
    return interceptInterceptable(thing, propOrHandler);
  }
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept_(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept_(handler);
}

function _isComputed(value, property) {
  if (property === undefined) {
    return isComputedValue(value);
  }

  if (isObservableObject(value) === false) {
    return false;
  }

  if (!value[$mobx].values_.has(property)) {
    return false;
  }

  var atom = getAtom(value, property);
  return isComputedValue(atom);
}
function isComputed(value) {
  if ( true && arguments.length > 1) {
    return die("isComputed expects only 1 argument. Use isComputedProp to inspect the observability of a property");
  }

  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if ( true && !isStringish(propName)) {
    return die("isComputed expected a property name as second argument");
  }

  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (!value) {
    return false;
  }

  if (property !== undefined) {
    if ( true && (isObservableMap(value) || isObservableArray(value))) {
      return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
    }

    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if ( true && arguments.length !== 1) {
    die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  }

  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if ( true && !isStringish(propName)) {
    return die("expected a property name as second argument");
  }

  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].keys_();
  }

  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  die(5);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  die(6);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  die(7);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var _values = key;

    try {
      for (var _key in _values) {
        set(obj, _key, _values[_key]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    obj[$mobx].set_(key, value);
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") {
      key = parseInt(key, 10);
    }

    if (key < 0) {
      die("Invalid index: '" + key + "'");
    }

    startBatch();

    if (key >= obj.length) {
      obj.length = key + 1;
    }

    obj[key] = value;
    endBatch();
  } else {
    die(8);
  }
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].delete_(key);
  } else if (isObservableMap(obj)) {
    obj["delete"](key);
  } else if (isObservableSet(obj)) {
    obj["delete"](key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") {
      key = parseInt(key, 10);
    }

    obj.splice(key, 1);
  } else {
    die(9);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    return obj[$mobx].has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }

  die(10);
}
function get(obj, key) {
  if (!has(obj, key)) {
    return undefined;
  }

  if (isObservableObject(obj)) {
    return obj[$mobx].get_(key);
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }

  die(11);
}
function apiDefineProperty(obj, key, descriptor) {
  if (isObservableObject(obj)) {
    return obj[$mobx].defineProperty_(key, descriptor);
  }

  die(39);
}
function apiOwnKeys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].ownKeys_();
  }

  die(38);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) {
    return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
  } else {
    return observeObservable(thing, propOrCb, cbOrFire);
  }
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe_(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe_(listener, fireImmediately);
}

function cache(map, key, value) {
  map.set(key, value);
  return value;
}

function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) {
    return source;
  }

  if (isObservableValue(source) || isComputedValue(source)) {
    return toJSHelper(source.get(), __alreadySeen);
  }

  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function (value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }

  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, new Set());

    source.forEach(function (value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }

  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, new Map());

    source.forEach(function (value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    // must be observable object
    var _res3 = cache(__alreadySeen, source, {});

    apiOwnKeys(source).forEach(function (key) {
      if (objectPrototype.propertyIsEnumerable.call(source, key)) {
        _res3[key] = toJSHelper(source[key], __alreadySeen);
      }
    });
    return _res3;
  }
}
/**
 * Recursively converts an observable to it's non-observable native counterpart.
 * It does NOT recurse into non-observables, these are left as they are, even if they contain observables.
 * Computed and other non-enumerable properties are completely ignored.
 * Complex scenarios require custom solution, eg implementing `toJSON` or using `serializr` lib.
 */


function toJS(source, options) {
  if ( true && options) {
    die("toJS no longer supports options");
  }

  return toJSHelper(source, new Map());
}

function trace() {
  if (false) {}

  var enterBreakPoint = false;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[args.length - 1] === "boolean") {
    enterBreakPoint = args.pop();
  }

  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }

  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */

function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") {
    return whenPromise(predicate, arg1);
  }

  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    var error = new Error("WHEN_TIMEOUT");
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed_) {
        disposer();

        if (opts.onError) {
          opts.onError(error);
        } else {
          throw error;
        }
      }
    }, opts.timeout);
  }

  opts.name =  true ? opts.name || "When@" + getNextId() : 0;
  var effectAction = createAction( true ? opts.name + "-effect" : 0, effect); // eslint-disable-next-line

  var disposer = autorun(function (r) {
    // predicate should not change state
    var cond = allowStateChanges(false, predicate);

    if (cond) {
      r.dispose();

      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }

      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if ( true && opts && opts.onError) {
    return die("the options 'onError' and 'promise' cannot be combined");
  }

  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _extends({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject(new Error("WHEN_CANCELLED"));
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function has(target, name) {
    if ( true && globalState.trackingDerivation) {
      warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
    }

    return getAdm(target).has_(name);
  },
  get: function get(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set(target, name, value) {
    var _getAdm$set_;

    if (!isStringish(name)) {
      return false;
    }

    if ( true && !getAdm(target).values_.has(name)) {
      warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
    } // null (intercepted) -> true (success)


    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;

    if (true) {
      warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
    }

    if (!isStringish(name)) {
      return false;
    } // null (intercepted) -> true (success)


    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty(target, name, descriptor) {
    var _getAdm$definePropert;

    if (true) {
      warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
    } // null (intercepted) -> true (success)


    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys(target) {
    if ( true && globalState.trackingDerivation) {
      warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
    }

    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;

  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);

    if (idx !== -1) {
      interceptors.splice(idx, 1);
    }
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = [].concat(interceptable.interceptors_ || []);

    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);

      if (change && !change.type) {
        die(14);
      }

      if (!change) {
        break;
      }
    }

    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);

    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;

  if (!listeners) {
    return;
  }

  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

function makeObservable(target, annotations, options) {
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    var _annotations;

    if ( true && annotations && target[storedAnnotationsSymbol]) {
      die("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported.");
    } // Default to decorators


    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target); // Annotate

    ownKeys(annotations).forEach(function (key) {
      return adm.make_(key, annotations[key]);
    });
  } finally {
    endBatch();
  }

  return target;
} // proto[keysSymbol] = new Set<PropertyKey>()

var keysSymbol = /*#__PURE__*/Symbol("mobx-keys");
function makeAutoObservable(target, overrides, options) {
  if (true) {
    if (!isPlainObject(target) && !isPlainObject(Object.getPrototypeOf(target))) {
      die("'makeAutoObservable' can only be used for classes that don't have a superclass");
    }

    if (isObservableObject(target)) {
      die("makeAutoObservable can only be used on objects not already made observable");
    }
  } // Optimization: avoid visiting protos
  // Assumes that annotation.make_/.extend_ works the same for plain objects


  if (isPlainObject(target)) {
    return extendObservable(target, target, overrides, options);
  }

  var adm = asObservableObject(target, options)[$mobx]; // Optimization: cache keys on proto
  // Assumes makeAutoObservable can be called only once per object and can't be used in subclass

  if (!target[keysSymbol]) {
    var proto = Object.getPrototypeOf(target);
    var keys = new Set([].concat(ownKeys(target), ownKeys(proto)));
    keys["delete"]("constructor");
    keys["delete"]($mobx);
    addHiddenProp(proto, keysSymbol, keys);
  }

  startBatch();

  try {
    target[keysSymbol].forEach(function (key) {
      return adm.make_(key, // must pass "undefined" for { key: undefined }
      !overrides ? true : key in overrides ? overrides[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function get(target, name) {
    var adm = target[$mobx];

    if (name === $mobx) {
      return adm;
    }

    if (name === "length") {
      return adm.getArrayLength_();
    }

    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }

    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function set(target, name, value) {
    var adm = target[$mobx];

    if (name === "length") {
      adm.setArrayLength_(value);
    }

    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      adm.set_(parseInt(name), value);
    }

    return true;
  },
  preventExtensions: function preventExtensions() {
    die(15);
  }
};
var ObservableArrayAdministration = /*#__PURE__*/function () {
  // this is the prop that gets proxied, so can't replace it!
  function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name =  true ? "ObservableArray@" + getNextId() : 0;
    }

    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV,  true ? name + "[..]" : 0);
    };
  }

  var _proto = ObservableArrayAdministration.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== undefined && values.length > 0) {
      return values.map(this.dehancer);
    }

    return values;
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };

  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
      die("Out of range: " + newLength);
    }

    var currentLength = this.values_.length;

    if (newLength === currentLength) {
      return;
    } else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray_(currentLength, 0, newItems);
    } else {
      this.spliceWithArray_(newLength, currentLength - newLength);
    }
  };

  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) {
      die(16);
    }

    this.lastKnownLength_ += delta;

    if (this.legacyMode_ && delta > 0) {
      reserveArrayBuffer(oldLength + delta + 1);
    }
  };

  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;

    if (index === undefined) {
      index = 0;
    } else if (index > length) {
      index = length;
    } else if (index < 0) {
      index = Math.max(0, length + index);
    }

    if (arguments.length === 1) {
      deleteCount = length - index;
    } else if (deleteCount === undefined || deleteCount === null) {
      deleteCount = 0;
    } else {
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    }

    if (newItems === undefined) {
      newItems = EMPTY_ARRAY;
    }

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index: index,
        removedCount: deleteCount,
        added: newItems
      });

      if (!change) {
        return EMPTY_ARRAY;
      }

      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer_(v, undefined);
    });

    if (this.legacyMode_ || "development" !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);

    if (deleteCount !== 0 || newItems.length !== 0) {
      this.notifyArraySplice_(index, newItems, res);
    }

    return this.dehanceValues_(res);
  };

  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;

      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      // The items removed by the splice
      var res = this.values_.slice(index, index + deleteCount); // The items that that should remain at the end of the array

      var oldItems = this.values_.slice(index + deleteCount); // New length is the previous length + addition count - deletion count

      this.values_.length += newItems.length - deleteCount;

      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }

      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }

      return res;
    }
  };

  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if ( true && notifySpy) {
      spyReportStart(change);
    }

    this.atom_.reportChanged();

    if (notify) {
      notifyListeners(this, change);
    }

    if ( true && notifySpy) {
      spyReportEnd();
    }
  };

  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;

    if ( true && notifySpy) {
      spyReportStart(change);
    }

    this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) {
      notifyListeners(this, change);
    }

    if ( true && notifySpy) {
      spyReportEnd();
    }
  };

  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }

    console.warn( true ? "[mobx] Out of bounds read: " + index : 0);
  };

  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index: index,
          newValue: newValue
        });

        if (!change) {
          return;
        }

        newValue = change.newValue;
      }

      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      // out of bounds
      die(17, index, values.length);
    }
  };

  return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name =  true ? "ObservableArray@" + getNextId() : 0;
  }

  if (owned === void 0) {
    owned = false;
  }

  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }

  return proxy;
} // eslint-disable-next-line

var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }

    var adm = this[$mobx];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray_(index);

      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }

    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];

    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];

    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }

    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }

    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }

    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */

addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc); // map

addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc); // reduce

addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);

function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
} // Report and delegate to dehanced array


function simpleFunc(funcName) {
  return function () {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
} // Make sure callbacks recieve correct array arg #2326


function mapLikeFunc(funcName) {
  return function (callback, thisArg) {
    var _this2 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
} // Make sure callbacks recieve correct array arg #2326


function reduceLikeFunc(funcName) {
  return function () {
    var _this3 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };

    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}

var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _Symbol$iterator, _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /*#__PURE__*/function (_Symbol$iterator2, _Symbol$toStringTag2) {
  // hasMap, not hashMap >-).
  function ObservableMap(initialData, enhancer_, name_) {
    var _this = this;

    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ =  true ? "ObservableMap@" + getNextId() : 0;
    }

    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;

    if (!isFunction(Map)) {
      die(18);
    }

    this.keysAtom_ = createAtom( true ? this.name_ + ".keys()" : 0);
    this.data_ = new Map();
    this.hasMap_ = new Map();
    allowStateChanges(true, function () {
      _this.merge(initialData);
    });
  }

  var _proto = ObservableMap.prototype;

  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };

  _proto.has = function has(key) {
    var _this2 = this;

    if (!globalState.trackingDerivation) {
      return this.has_(key);
    }

    var entry = this.hasMap_.get(key);

    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : 0, false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this2.hasMap_["delete"](key);
      });
    }

    return entry.get();
  };

  _proto.set = function set(key, value) {
    var hasKey = this.has_(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });

      if (!change) {
        return this;
      }

      value = change.newValue;
    }

    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }

    return this;
  };

  _proto["delete"] = function _delete(key) {
    var _this3 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });

      if (!change) {
        return false;
      }
    }

    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;

      if ( true && notifySpy) {
        spyReportStart(_change);
      } // TODO fix type


      transaction(function () {
        var _this3$hasMap_$get;

        _this3.keysAtom_.reportChanged();

        (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(false);

        var observable = _this3.data_.get(key);

        observable.setNewValue_(undefined);

        _this3.data_["delete"](key);
      });

      if (notify) {
        notifyListeners(this, _change);
      }

      if ( true && notifySpy) {
        spyReportEnd();
      }

      return true;
    }

    return false;
  };

  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if ( true && notifySpy) {
        spyReportStart(change);
      } // TODO fix type


      observable.setNewValue_(newValue);

      if (notify) {
        notifyListeners(this, change);
      }

      if ( true && notifySpy) {
        spyReportEnd();
      }
    }
  };

  _proto.addValue_ = function addValue_(key, newValue) {
    var _this4 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function () {
      var _this4$hasMap_$get;

      var observable = new ObservableValue(newValue, _this4.enhancer_,  true ? _this4.name_ + "." + stringifyKey(key) : 0, false);

      _this4.data_.set(key, observable);

      newValue = observable.value_; // value might have been changed

      (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null ? void 0 : _this4$hasMap_$get.setNewValue_(true);

      _this4.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue: newValue
    } : null;

    if ( true && notifySpy) {
      spyReportStart(change);
    } // TODO fix type


    if (notify) {
      notifyListeners(this, change);
    }

    if ( true && notifySpy) {
      spyReportEnd();
    }
  };

  _proto.get = function get(key) {
    if (this.has(key)) {
      return this.dehanceValue_(this.data_.get(key).get());
    }

    return this.dehanceValue_(undefined);
  };

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };

  _proto.values = function values() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(),
            done = _keys$next.done,
            value = _keys$next.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  _proto.entries = function entries() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(),
            done = _keys$next2.done,
            value = _keys$next2.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  _proto[_Symbol$iterator2] = function () {
    return this.entries();
  };

  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */
  ;

  _proto.merge = function merge(other) {
    var _this5 = this;

    if (isObservableMap(other)) {
      other = new Map(other);
    }

    transaction(function () {
      if (isPlainObject(other)) {
        getPlainObjectKeys(other).forEach(function (key) {
          return _this5.set(key, other[key]);
        });
      } else if (Array.isArray(other)) {
        other.forEach(function (_ref) {
          var key = _ref[0],
              value = _ref[1];
          return _this5.set(key, value);
        });
      } else if (isES6Map(other)) {
        if (other.constructor !== Map) {
          die(19, other);
        }

        other.forEach(function (value, key) {
          return _this5.set(key, value);
        });
      } else if (other !== null && other !== undefined) {
        die(20, other);
      }
    });
    return this;
  };

  _proto.clear = function clear() {
    var _this6 = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this6.keys()), _step2; !(_step2 = _iterator2()).done;) {
          var key = _step2.value;

          _this6["delete"](key);
        }
      });
    });
  };

  _proto.replace = function replace(values) {
    var _this7 = this;

    // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors
    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      for (var _iterator3 = _createForOfIteratorHelperLoose(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
        var key = _step3.value;

        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this7["delete"](key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this7.data_.get(key);

            orderedData.set(key, value);
          }
        }
      } // Merge entries


      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
        var _step4$value = _step4.value,
            _key = _step4$value[0],
            _value = _step4$value[1];

        // We will want to know whether a new key is added
        var keyExisted = _this7.data_.has(_key); // Add or update value


        _this7.set(_key, _value); // The addition could have been prevent by interceptor


        if (_this7.data_.has(_key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var _value2 = _this7.data_.get(_key);

          orderedData.set(_key, _value2); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      } // Check for possible key order change


      if (!keysReportChangedCalled) {
        if (_this7.data_.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this7.keysAtom_.reportChanged();
        } else {
          var iter1 = _this7.data_.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this7.keysAtom_.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this7.data_ = orderedData;
    });
    return this;
  };

  _proto.toString = function toString() {
    return "[object ObservableMap]";
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if ( true && fireImmediately === true) {
      die("`observe` doesn't support fireImmediately=true in combination with maps.");
    }

    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _createClass(ObservableMap, [{
    key: "size",
    get: function get() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag2,
    get: function get() {
      return "Map";
    }
  }]);

  return ObservableMap;
}(_Symbol$iterator, _Symbol$toStringTag); // eslint-disable-next-line

var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return die(21, dataStructure);
  }
}

var _Symbol$iterator$1, _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /*#__PURE__*/function (_Symbol$iterator2, _Symbol$toStringTag2) {
  function ObservableSet(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ =  true ? "ObservableSet@" + getNextId() : 0;
    }

    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;

    if (!isFunction(Set)) {
      die(22);
    }

    this.atom_ = createAtom(this.name_);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name_);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  var _proto = ObservableSet.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.clear = function clear() {
    var _this = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
          var value = _step.value;

          _this["delete"](value);
        }
      });
    });
  };

  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };

  _proto.add = function add(value) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.atom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });

      if (!change) {
        return this;
      } // ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.

    }

    if (!this.has(value)) {
      transaction(function () {
        _this2.data_.add(_this2.enhancer_(value, undefined));

        _this2.atom_.reportChanged();
      });
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;

      if (notifySpy && "development" !== "production") {
        spyReportStart(_change);
      }

      if (notify) {
        notifyListeners(this, _change);
      }

      if (notifySpy && "development" !== "production") {
        spyReportEnd();
      }
    }

    return this;
  };

  _proto["delete"] = function _delete(value) {
    var _this3 = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });

      if (!change) {
        return false;
      }
    }

    if (this.has(value)) {
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);

      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;

      if (notifySpy && "development" !== "production") {
        spyReportStart(_change2);
      }

      transaction(function () {
        _this3.atom_.reportChanged();

        _this3.data_["delete"](value);
      });

      if (notify) {
        notifyListeners(this, _change2);
      }

      if (notifySpy && "development" !== "production") {
        spyReportEnd();
      }

      return true;
    }

    return false;
  };

  _proto.has = function has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };

  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.keys = function keys() {
    return this.values();
  };

  _proto.values = function values() {
    this.atom_.reportObserved();
    var self = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.replace = function replace(other) {
    var _this4 = this;

    if (isObservableSet(other)) {
      other = new Set(other);
    }

    transaction(function () {
      if (Array.isArray(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== undefined) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    // ... 'fireImmediately' could also be true?
    if ( true && fireImmediately === true) {
      die("`observe` doesn't support fireImmediately=true in combination with sets.");
    }

    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  _proto.toString = function toString() {
    return "[object ObservableSet]";
  };

  _proto[_Symbol$iterator2] = function () {
    return this.values();
  };

  _createClass(ObservableSet, [{
    key: "size",
    get: function get() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag2,
    get: function get() {
      return "Set";
    }
  }]);

  return ObservableSet;
}(_Symbol$iterator$1, _Symbol$toStringTag$1); // eslint-disable-next-line

var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);

var descriptorCache = /*#__PURE__*/Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/function () {
  function ObservableObjectAdministration(target_, values_, name_, // Used anytime annotation is not explicitely provided
  defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = new Map();
    }

    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }

    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom( true ? this.name_ + ".keys" : 0); // Optimization: we use this frequently

    this.isPlainObject_ = isPlainObject(this.target_);

    if ( true && !isAnnotation(this.defaultAnnotation_)) {
      die("defaultAnnotation must be valid annotation");
    }

    if (true) {
      // Prepare structure for tracking which fields were already annotated
      this.appliedAnnotations_ = {};
    }
  }

  var _proto = ObservableObjectAdministration.prototype;

  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };

  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable = this.values_.get(key);

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return true;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: newValue
      });

      if (!change) {
        return null;
      }

      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue_(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();

      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if ( true && notifySpy) {
        spyReportStart(_change);
      }
      observable.setNewValue_(newValue);

      if (notify) {
        notifyListeners(this, _change);
      }

      if ( true && notifySpy) {
        spyReportEnd();
      }
    }

    return true;
  };

  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      // Key doesn't exist yet, subscribe for it in case it's added later
      this.has_(key);
    }

    return this.target_[key];
  }
  /**
   * @param {PropertyKey} key
   * @param {any} value
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    // Don't use .has(key) - we care about own
    if (hasProp(this.target_, key)) {
      // Existing prop
      if (this.values_.has(key)) {
        // Observable (can be intercepted)
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        // Non-observable - proxy
        return Reflect.set(this.target_, key, value);
      } else {
        // Non-observable
        this.target_[key] = value;
        return true;
      }
    } else {
      // New prop
      return this.extend_(key, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  } // Trap for "in"
  ;

  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      // Skip key subscription outside derivation
      return key in this.target_;
    }

    this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = this.pendingKeys_.get(key);

    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : 0, false);
      this.pendingKeys_.set(key, entry);
    }

    return entry.get();
  }
  /**
   * @param {PropertyKey} key
   * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
   */
  ;

  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return;
    }

    assertAnnotable(this, annotation, key);

    if (!(key in this.target_)) {
      var _this$target_$storedA;

      // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) {
        return; // will be annotated by subclass constructor
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }

    var source = this.target_;

    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);

      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);

        if (outcome === 0
        /* Cancel */
        ) {
          return;
        }

        if (outcome === 1
        /* Break */
        ) {
          break;
        }
      }

      source = Object.getPrototypeOf(source);
    }

    recordAnnotationApplied(this, annotation, key);
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }

    assertAnnotable(this, annotation, key);
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);

    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }

    return outcome;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });

        if (!change) {
          return null;
        }

        var newValue = change.newValue;

        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      } // Define


      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      } // Notify


      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });

        if (!change) {
          return null;
        }

        value = change.newValue;
      }

      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      var observable = new ObservableValue(value, enhancer,  true ? this.name_ + "." + key.toString() : 0, false);
      this.values_.set(key, observable); // Notify (value possibly changed by ObservableValue)

      this.notifyPropertyAddition_(key, observable.value_);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: undefined
        });

        if (!change) {
          return null;
        }
      }

      options.name || (options.name =  true ? this.name_ + "." + key.toString() : 0);
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      this.values_.set(key, new ComputedValue(options)); // Notify

      this.notifyPropertyAddition_(key, undefined);
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    // No such prop
    if (!hasProp(this.target_, key)) {
      return true;
    } // Intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      }); // Cancelled

      if (!change) {
        return null;
      }
    } // Delete


    try {
      var _this$pendingKeys_, _this$pendingKeys_$ge;

      startBatch();
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();
      var observable = this.values_.get(key); // Value needed for spies/listeners

      var value = undefined; // Optimization: don't pull the value unless we will need it

      if (!observable && (notify || notifySpy)) {
        var _getDescriptor;

        value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
      } // delete prop (do first, may fail)


      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      } // Allow re-annotating this field


      if (true) {
        delete this.appliedAnnotations_[key];
      } // Clear observable


      if (observable) {
        this.values_["delete"](key); // for computed, value is undefined

        if (observable instanceof ObservableValue) {
          value = observable.value_;
        } // Notify: autorun(() => obj[key]), see #1796


        propagateChanged(observable);
      } // Notify "keys/entries/values" observers


      this.keysAtom_.reportChanged(); // Notify "has" observers
      // "in" as it may still exist in proto

      (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_); // Notify spies/listeners

      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };

        if ( true && notifySpy) {
          spyReportStart(_change2);
        }

        if (notify) {
          notifyListeners(this, _change2);
        }

        if ( true && notifySpy) {
          spyReportEnd();
        }
      }
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ;

  _proto.observe_ = function observe_(callback, fireImmediately) {
    if ( true && fireImmediately === true) {
      die("`observe` doesn't support the fire immediately property for observable objects.");
    }

    return registerListener(this, callback);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2, _this$pendingKeys_2$g;

    var notify = hasListeners(this);
    var notifySpy =  true && isSpyEnabled();

    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;

      if ( true && notifySpy) {
        spyReportStart(change);
      }

      if (notify) {
        notifyListeners(this, change);
      }

      if ( true && notifySpy) {
        spyReportEnd();
      }
    }

    (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true); // Notify "keys/entries/values" observers

    this.keysAtom_.reportChanged();
  };

  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };

  _proto.keys_ = function keys_() {
    // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
    // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
    // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
    // We choose to over-report in Object.keys(object), because:
    // - typically it's used with simple data objects
    // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };

  return ObservableObjectAdministration;
}();
function asObservableObject(target, options) {
  var _options$name;

  if ( true && options && isObservableObject(target)) {
    die("Options can't be provided for already observable objects.");
  }

  if (hasProp(target, $mobx)) {
    if ( true && !(getAdministration(target) instanceof ObservableObjectAdministration)) {
      die("Cannot convert '" + getDebugName(target) + "' into observable object:" + "\nThe target is already observable of different type." + "\nExtending builtins is not supported.");
    }

    return target;
  }

  if ( true && !Object.isExtensible(target)) {
    die("Cannot make the designated object observable; it is not extensible");
  }

  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name :  true ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : 0;
  var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}

function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }

  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;

  if (true) {
    adm.appliedAnnotations_[key] = annotation;
  } // Remove applied decorator annotation so we don't try to apply it again in subclass constructor


  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
}

function assertAnnotable(adm, annotation, key) {
  // Valid annotation
  if ( true && !isAnnotation(annotation)) {
    die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
  }
  /*
  // Configurable, not sealed, not frozen
  // Possibly not needed, just a little better error then the one thrown by engine.
  // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
  if (__DEV__) {
      const configurable = getDescriptor(adm.target_, key)?.configurable
      const frozen = Object.isFrozen(adm.target_)
      const sealed = Object.isSealed(adm.target_)
      if (!configurable || frozen || sealed) {
          const fieldName = `${adm.name_}.${key.toString()}`
          const requestedAnnotationType = annotation.annotationType_
          let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
          if (frozen) {
              error += `\nObject is frozen.`
          }
          if (sealed) {
              error += `\nObject is sealed.`
          }
          if (!configurable) {
              error += `\nproperty is not configurable.`
              // Mention only if caused by us to avoid confusion
              if (hasProp(adm.appliedAnnotations!, key)) {
                  error += `\nTo prevent accidental re-definition of a field by a subclass, `
                  error += `all annotated fields of non-plain objects (classes) are not configurable.`
              }
          }
          die(error)
      }
  }
  */
  // Not annotated


  if ( true && !isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
    var fieldName = adm.name_ + "." + key.toString();
    var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed." + "\nUse 'override' annotation for methods overriden by subclass.");
  }
}

/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */

var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function StubArray() {};

function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== undefined) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6

var LegacyObservableArray = /*#__PURE__*/function (_StubArray, _Symbol$toStringTag, _Symbol$iterator) {
  _inheritsLoose(LegacyObservableArray, _StubArray);

  function LegacyObservableArray(initialValues, enhancer, name, owned) {
    var _this;

    if (name === void 0) {
      name =  true ? "ObservableArray@" + getNextId() : 0;
    }

    if (owned === void 0) {
      owned = false;
    }

    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true); // @ts-ignore

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    return _this;
  }

  var _proto = LegacyObservableArray.prototype;

  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();

    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }

    return Array.prototype.concat.apply(this.slice(), //@ts-ignore
    arrays.map(function (a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };

  _proto[_Symbol$iterator] = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self.length ? {
          value: self[nextIndex++],
          done: false
        } : {
          done: true,
          value: undefined
        };
      }
    });
  };

  _createClass(LegacyObservableArray, [{
    key: "length",
    get: function get() {
      return this[$mobx].getArrayLength_();
    },
    set: function set(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "Array";
    }
  }]);

  return LegacyObservableArray;
}(StubArray, Symbol.toStringTag, Symbol.iterator);

Object.entries(arrayExtensions).forEach(function (_ref) {
  var prop = _ref[0],
      fn = _ref[1];

  if (prop !== "concat") {
    addHiddenProp(LegacyObservableArray.prototype, prop, fn);
  }
});

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get() {
      return this[$mobx].get_(index);
    },
    set: function set(value) {
      this[$mobx].set_(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }

    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) {
        die(23);
      }

      return thing[$mobx].atom_;
    }

    if (isObservableSet(thing)) {
      return thing[$mobx];
    }

    if (isObservableMap(thing)) {
      if (property === undefined) {
        return thing.keysAtom_;
      }

      var observable = thing.data_.get(property) || thing.hasMap_.get(property);

      if (!observable) {
        die(25, property, getDebugName(thing));
      }

      return observable;
    }


    if (isObservableObject(thing)) {
      if (!property) {
        return die(26);
      }

      var _observable = thing[$mobx].values_.get(property);

      if (!_observable) {
        die(27, property, getDebugName(thing));
      }

      return _observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }

  die(28);
}
function getAdministration(thing, property) {
  if (!thing) {
    die(29);
  }

  if (property !== undefined) {
    return getAdministration(getAtom(thing, property));
  }

  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
    return thing;
  }

  if (isObservableMap(thing) || isObservableSet(thing)) {
    return thing;
  }

  if (thing[$mobx]) {
    return thing[$mobx];
  }

  die(24, thing);
}
function getDebugName(thing, property) {
  var named;

  if (property !== undefined) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    // valid for arrays as well
    named = getAtom(thing);
  }

  return named.name_;
}

var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.

function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } // `null` or `undefined` only equal to itself (strict comparison).


  if (a == null || b == null) {
    return false;
  } // `NaN`s are equivalent, but non-reflexive.


  if (a !== a) {
    return b !== b;
  } // Exhaust primitive checks


  var type = typeof a;

  if (type !== "function" && type !== "object" && typeof b != "object") {
    return false;
  } // Compare `[[Class]]` names.


  var className = toString.call(a);

  if (className !== toString.call(b)) {
    return false;
  }

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) {
        return +b !== +b;
      } // An `egal` comparison is performed for other numeric values.


      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }

      break;
  } // Unwrap any wrapped objects.


  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") {
      return false;
    } // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.


    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;

    if (length !== b.length) {
      return false;
    } // Deep compare the contents, ignoring non-numeric properties.


    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) {
        return false;
      }
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) {
      return false;
    }

    while (length--) {
      // Deep compare each member
      key = keys[length];

      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) {
        return false;
      }
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) {
    return a.slice();
  }

  if (isES6Map(a) || isObservableMap(a)) {
    return Array.from(a.entries());
  }

  if (isES6Set(a) || isObservableSet(a)) {
    return Array.from(a.entries());
  }

  return a;
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}

function getSelf() {
  return this;
}

function isAnnotation(thing) {
  return (// Can be function
    thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
  );
}

/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
["Symbol", "Map", "Set"].forEach(function (m) {
  var g = getGlobal();

  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});

if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}


//# sourceMappingURL=mobx.esm.js.map


/***/ }),

/***/ "./node_modules/uid/dist/index.js":
/*!****************************************!*\
  !*** ./node_modules/uid/dist/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

var IDX=256, HEX=[], SIZE=256, BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

function uid(len) {
	var i=0, tmp=(len || 11);
	if (!BUFFER || ((IDX + tmp) > SIZE*2)) {
		for (BUFFER='',IDX=0; i < SIZE; i++) {
			BUFFER += HEX[Math.random() * 256 | 0];
		}
	}

	return BUFFER.substring(IDX, IDX++ + tmp);
}

exports.uid = uid;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9ycy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RCxHQUFHO0FBQ0g7QUFDQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pELEdBQUc7QUFDSDtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUhBQXFILDBCQUEwQjtBQUMvSTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFxQyxnQkFBZ0IsQ0FBRTtBQUNwRTtBQUNBLHlGQUF5RixhQUFhO0FBQ3RHO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEscUJBQU07QUFDbkIsV0FBVyxxQkFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDLGlJQUFpSSxDQUFxQjtBQUNuTTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFLElBQUk7OztBQUdKLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBLElBQUk7OztBQUdKLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQSxNQUFNOzs7QUFHTiw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFxQywyQkFBMkIsQ0FBTTtBQUNwRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBLElBQUk7OztBQUdKLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixLQUFxQztBQUN4RDs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxLQUFxQyxzQ0FBc0MsQ0FBaUI7QUFDMUc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUcsR0FBRztBQUNOLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHO0FBQ04sRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRztBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0QsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsS0FBcUMsK0JBQStCLENBQVU7QUFDNUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLEtBQXFDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsS0FBcUMsd0hBQXdILENBQXlDOztBQUV4TjtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVMsSUFBcUM7QUFDcEQ7QUFDQSxNQUFNOzs7QUFHTixRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixLQUFxQyxtTEFBbUwsQ0FBOEM7QUFDMVIsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBLG1EQUFtRCxPQUFPO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLFNBQVMsS0FBcUM7QUFDOUM7QUFDQTtBQUNBLE1BQU0sS0FBd0MsRUFBRSxFQUU3QyxDQUFDOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUgsMEJBQTBCO0FBQzFCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBd0MsRUFBRSxFQUU3Qzs7QUFFSDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBd0MsRUFBRSxFQUc3QyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsTUFBTSx5QkFBeUI7OztBQUcvQjtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnR0FBZ0csS0FBcUMsMkNBQTJDLENBQVM7QUFDekw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0QsS0FBcUMsK0JBQStCLENBQVU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSixNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7OztBQUdWLDZDQUE2Qzs7O0FBRzdDO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQSxRQUFRO0FBQ1IscUJBQXFCO0FBQ3JCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSixRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLFNBQVMsSUFBcUM7QUFDbEQ7QUFDQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUg7O0FBRUEsc0VBQXNFLGFBQWE7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxjQUFjLEtBQXFDLHdDQUF3QyxDQUFNO0FBQ2pHLGtDQUFrQyxLQUFxQywyQkFBMkIsQ0FBYSxXQUFXOztBQUUxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxLQUFxQztBQUM3QztBQUNBLE1BQU07OztBQUdOO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsUUFBUSxJQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQSxNQUFNOzs7QUFHTjtBQUNBLEdBQUc7QUFDSDtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkMsT0FBTztBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSxLQUFxQztBQUM3QztBQUNB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QTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVIsVUFBVSxLQUFxQztBQUMvQztBQUNBLFFBQVE7OztBQUdSO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUixVQUFVLEtBQXFDO0FBQy9DO0FBQ0EsUUFBUTs7O0FBR1I7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUVBQXVFLEtBQXFDLDRDQUE0QyxDQUFtQjs7QUFFM0s7O0FBRUEsb0NBQW9DOztBQUVwQzs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLFFBQVEsS0FBcUM7QUFDN0M7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVIsdUJBQXVCLGFBQW9CO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixhQUFvQjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLEtBQXFDO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVIsdUJBQXVCLGFBQW9CO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixhQUFvQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyw2Q0FBNkM7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFxQywwQkFBMEIsQ0FBdUIsR0FBRzs7QUFFdkg7O0FBRUEsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUM7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsS0FBSztBQUNsQixhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLFNBQVM7QUFDdEIsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSxLQUFxQyxnREFBZ0QsQ0FBdUI7QUFDdEw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSxTQUFTO0FBQ3RCLGVBQWUsY0FBYztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsU0FBUztBQUN0QixlQUFlLGNBQWM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxXQUFXO0FBQ1g7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7OztBQUdSO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7O0FBRXBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBLDREQUE0RCxLQUFxQyx1Q0FBdUMsQ0FBc0I7QUFDOUoseUNBQXlDOztBQUV6QztBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9COztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxLQUFxQyx1Q0FBdUMsQ0FBc0I7QUFDeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUEseURBQXlEOztBQUV6RDtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLFNBQVM7QUFDdEIsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sR0FBRzs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUM7QUFDM0QsOENBQThDOztBQUU5Qyw2QkFBNkI7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7OztBQUdSLFVBQVUsSUFBcUM7QUFDL0M7QUFDQSxRQUFROzs7QUFHUjtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLFVBQVU7OztBQUdWO0FBQ0EsUUFBUTs7O0FBR1Isc0NBQXNDO0FBQ3RDOztBQUVBLDJMQUEyTDs7QUFFM0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksS0FBcUM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxLQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsS0FBcUM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7O0FBRUEsNEtBQTRLOztBQUU1SztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUEsTUFBTSxLQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTSxLQUFxQztBQUMzQyx1REFBdUQ7QUFDdkQ7O0FBRUEsaUdBQWlHLEtBQXFDLGdHQUFnRyxDQUFrQjtBQUN4UDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVUsR0FBRyxlQUFlO0FBQzNEO0FBQ0EsdUNBQXVDLHdCQUF3QixRQUFRLFVBQVU7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsS0FBcUMsc0NBQXNDLENBQWlCO0FBQ3pHOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQzs7QUFFL0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMEVBQTBFLGFBQWE7QUFDdkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxtQkFBbUI7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRXlxQztBQUN6cUM7Ozs7Ozs7Ozs7O0FDeDFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXN0b21lcl9vcmRlci8uL25vZGVfbW9kdWxlcy9tb2J4L2Rpc3QvbW9ieC5lc20uanMiLCJ3ZWJwYWNrOi8vY3VzdG9tZXJfb3JkZXIvLi9ub2RlX21vZHVsZXMvdWlkL2Rpc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG5pY2VFcnJvcnMgPSB7XG4gIDA6IFwiSW52YWxpZCB2YWx1ZSBmb3IgY29uZmlndXJhdGlvbiAnZW5mb3JjZUFjdGlvbnMnLCBleHBlY3RlZCAnbmV2ZXInLCAnYWx3YXlzJyBvciAnb2JzZXJ2ZWQnXCIsXG4gIDE6IGZ1bmN0aW9uIF8oYW5ub3RhdGlvblR5cGUsIGtleSkge1xuICAgIHJldHVybiBcIkNhbm5vdCBhcHBseSAnXCIgKyBhbm5vdGF0aW9uVHlwZSArIFwiJyB0byAnXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJzogRmllbGQgbm90IGZvdW5kLlwiO1xuICB9LFxuXG4gIC8qXHJcbiAgMihwcm9wKSB7XHJcbiAgICAgIHJldHVybiBgaW52YWxpZCBkZWNvcmF0b3IgZm9yICcke3Byb3AudG9TdHJpbmcoKX0nYFxyXG4gIH0sXHJcbiAgMyhwcm9wKSB7XHJcbiAgICAgIHJldHVybiBgQ2Fubm90IGRlY29yYXRlICcke3Byb3AudG9TdHJpbmcoKX0nOiBhY3Rpb24gY2FuIG9ubHkgYmUgdXNlZCBvbiBwcm9wZXJ0aWVzIHdpdGggYSBmdW5jdGlvbiB2YWx1ZS5gXHJcbiAgfSxcclxuICA0KHByb3ApIHtcclxuICAgICAgcmV0dXJuIGBDYW5ub3QgZGVjb3JhdGUgJyR7cHJvcC50b1N0cmluZygpfSc6IGNvbXB1dGVkIGNhbiBvbmx5IGJlIHVzZWQgb24gZ2V0dGVyIHByb3BlcnRpZXMuYFxyXG4gIH0sXHJcbiAgKi9cbiAgNTogXCIna2V5cygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzLCBzZXRzIGFuZCBtYXBzXCIsXG4gIDY6IFwiJ3ZhbHVlcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzLCBzZXRzIGFuZCBtYXBzXCIsXG4gIDc6IFwiJ2VudHJpZXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiLFxuICA4OiBcIidzZXQoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiLFxuICA5OiBcIidyZW1vdmUoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiLFxuICAxMDogXCInaGFzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIixcbiAgMTE6IFwiJ2dldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIsXG4gIDEyOiBcIkludmFsaWQgYW5ub3RhdGlvblwiLFxuICAxMzogXCJEeW5hbWljIG9ic2VydmFibGUgb2JqZWN0cyBjYW5ub3QgYmUgZnJvemVuLiBJZiB5b3UncmUgcGFzc2luZyBvYnNlcnZhYmxlcyB0byAzcmQgcGFydHkgY29tcG9uZW50L2Z1bmN0aW9uIHRoYXQgY2FsbHMgT2JqZWN0LmZyZWV6ZSwgcGFzcyBjb3B5IGluc3RlYWQ6IHRvSlMob2JzZXJ2YWJsZSlcIixcbiAgMTQ6IFwiSW50ZXJjZXB0IGhhbmRsZXJzIHNob3VsZCByZXR1cm4gbm90aGluZyBvciBhIGNoYW5nZSBvYmplY3RcIixcbiAgMTU6IFwiT2JzZXJ2YWJsZSBhcnJheXMgY2Fubm90IGJlIGZyb3plbi4gSWYgeW91J3JlIHBhc3Npbmcgb2JzZXJ2YWJsZXMgdG8gM3JkIHBhcnR5IGNvbXBvbmVudC9mdW5jdGlvbiB0aGF0IGNhbGxzIE9iamVjdC5mcmVlemUsIHBhc3MgY29weSBpbnN0ZWFkOiB0b0pTKG9ic2VydmFibGUpXCIsXG4gIDE2OiBcIk1vZGlmaWNhdGlvbiBleGNlcHRpb246IHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgb2YgYW4gb2JzZXJ2YWJsZSBhcnJheSB3YXMgY2hhbmdlZC5cIixcbiAgMTc6IGZ1bmN0aW9uIF8oaW5kZXgsIGxlbmd0aCkge1xuICAgIHJldHVybiBcIlttb2J4LmFycmF5XSBJbmRleCBvdXQgb2YgYm91bmRzLCBcIiArIGluZGV4ICsgXCIgaXMgbGFyZ2VyIHRoYW4gXCIgKyBsZW5ndGg7XG4gIH0sXG4gIDE4OiBcIm1vYngubWFwIHJlcXVpcmVzIE1hcCBwb2x5ZmlsbCBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci4gQ2hlY2sgYmFiZWwtcG9seWZpbGwgb3IgY29yZS1qcy9lczYvbWFwLmpzXCIsXG4gIDE5OiBmdW5jdGlvbiBfKG90aGVyKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGluaXRpYWxpemUgZnJvbSBjbGFzc2VzIHRoYXQgaW5oZXJpdCBmcm9tIE1hcDogXCIgKyBvdGhlci5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9LFxuICAyMDogZnVuY3Rpb24gXyhvdGhlcikge1xuICAgIHJldHVybiBcIkNhbm5vdCBpbml0aWFsaXplIG1hcCBmcm9tIFwiICsgb3RoZXI7XG4gIH0sXG4gIDIxOiBmdW5jdGlvbiBfKGRhdGFTdHJ1Y3R1cmUpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgY29udmVydCB0byBtYXAgZnJvbSAnXCIgKyBkYXRhU3RydWN0dXJlICsgXCInXCI7XG4gIH0sXG4gIDIyOiBcIm1vYnguc2V0IHJlcXVpcmVzIFNldCBwb2x5ZmlsbCBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci4gQ2hlY2sgYmFiZWwtcG9seWZpbGwgb3IgY29yZS1qcy9lczYvc2V0LmpzXCIsXG4gIDIzOiBcIkl0IGlzIG5vdCBwb3NzaWJsZSB0byBnZXQgaW5kZXggYXRvbXMgZnJvbSBhcnJheXNcIixcbiAgMjQ6IGZ1bmN0aW9uIF8odGhpbmcpIHtcbiAgICByZXR1cm4gXCJDYW5ub3Qgb2J0YWluIGFkbWluaXN0cmF0aW9uIGZyb20gXCIgKyB0aGluZztcbiAgfSxcbiAgMjU6IGZ1bmN0aW9uIF8ocHJvcGVydHksIG5hbWUpIHtcbiAgICByZXR1cm4gXCJ0aGUgZW50cnkgJ1wiICsgcHJvcGVydHkgKyBcIicgZG9lcyBub3QgZXhpc3QgaW4gdGhlIG9ic2VydmFibGUgbWFwICdcIiArIG5hbWUgKyBcIidcIjtcbiAgfSxcbiAgMjY6IFwicGxlYXNlIHNwZWNpZnkgYSBwcm9wZXJ0eVwiLFxuICAyNzogZnVuY3Rpb24gXyhwcm9wZXJ0eSwgbmFtZSkge1xuICAgIHJldHVybiBcIm5vIG9ic2VydmFibGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkudG9TdHJpbmcoKSArIFwiJyBmb3VuZCBvbiB0aGUgb2JzZXJ2YWJsZSBvYmplY3QgJ1wiICsgbmFtZSArIFwiJ1wiO1xuICB9LFxuICAyODogZnVuY3Rpb24gXyh0aGluZykge1xuICAgIHJldHVybiBcIkNhbm5vdCBvYnRhaW4gYXRvbSBmcm9tIFwiICsgdGhpbmc7XG4gIH0sXG4gIDI5OiBcIkV4cGVjdGluZyBzb21lIG9iamVjdFwiLFxuICAzMDogXCJpbnZhbGlkIGFjdGlvbiBzdGFjay4gZGlkIHlvdSBmb3JnZXQgdG8gZmluaXNoIGFuIGFjdGlvbj9cIixcbiAgMzE6IFwibWlzc2luZyBvcHRpb24gZm9yIGNvbXB1dGVkOiBnZXRcIixcbiAgMzI6IGZ1bmN0aW9uIF8obmFtZSwgZGVyaXZhdGlvbikge1xuICAgIHJldHVybiBcIkN5Y2xlIGRldGVjdGVkIGluIGNvbXB1dGF0aW9uIFwiICsgbmFtZSArIFwiOiBcIiArIGRlcml2YXRpb247XG4gIH0sXG4gIDMzOiBmdW5jdGlvbiBfKG5hbWUpIHtcbiAgICByZXR1cm4gXCJUaGUgc2V0dGVyIG9mIGNvbXB1dGVkIHZhbHVlICdcIiArIG5hbWUgKyBcIicgaXMgdHJ5aW5nIHRvIHVwZGF0ZSBpdHNlbGYuIERpZCB5b3UgaW50ZW5kIHRvIHVwZGF0ZSBhbiBfb2JzZXJ2YWJsZV8gdmFsdWUsIGluc3RlYWQgb2YgdGhlIGNvbXB1dGVkIHByb3BlcnR5P1wiO1xuICB9LFxuICAzNDogZnVuY3Rpb24gXyhuYW1lKSB7XG4gICAgcmV0dXJuIFwiW0NvbXB1dGVkVmFsdWUgJ1wiICsgbmFtZSArIFwiJ10gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGFzc2lnbiBhIG5ldyB2YWx1ZSB0byBhIGNvbXB1dGVkIHZhbHVlLlwiO1xuICB9LFxuICAzNTogXCJUaGVyZSBhcmUgbXVsdGlwbGUsIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBNb2JYIGFjdGl2ZS4gTWFrZSBzdXJlIE1vYlggaXMgbG9hZGVkIG9ubHkgb25jZSBvciB1c2UgYGNvbmZpZ3VyZSh7IGlzb2xhdGVHbG9iYWxTdGF0ZTogdHJ1ZSB9KWBcIixcbiAgMzY6IFwiaXNvbGF0ZUdsb2JhbFN0YXRlIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIE1vYlggaXMgcnVubmluZyBhbnkgcmVhY3Rpb25zXCIsXG4gIDM3OiBmdW5jdGlvbiBfKG1ldGhvZCkge1xuICAgIHJldHVybiBcIlttb2J4XSBgb2JzZXJ2YWJsZUFycmF5LlwiICsgbWV0aG9kICsgXCIoKWAgbXV0YXRlcyB0aGUgYXJyYXkgaW4tcGxhY2UsIHdoaWNoIGlzIG5vdCBhbGxvd2VkIGluc2lkZSBhIGRlcml2YXRpb24uIFVzZSBgYXJyYXkuc2xpY2UoKS5cIiArIG1ldGhvZCArIFwiKClgIGluc3RlYWRcIjtcbiAgfSxcbiAgMzg6IFwiJ293bktleXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHNcIixcbiAgMzk6IFwiJ2RlZmluZVByb3BlcnR5KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzXCJcbn07XG52YXIgZXJyb3JzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gbmljZUVycm9ycyA6IHt9O1xuZnVuY3Rpb24gZGllKGVycm9yKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgZSA9IHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIiA/IGVycm9yIDogZXJyb3JzW2Vycm9yXTtcbiAgICBpZiAodHlwZW9mIGUgPT09IFwiZnVuY3Rpb25cIikgZSA9IGUuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW01vYlhdIFwiICsgZSk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IodHlwZW9mIGVycm9yID09PSBcIm51bWJlclwiID8gXCJbTW9iWF0gbWluaWZpZWQgZXJyb3IgbnI6IFwiICsgZXJyb3IgKyAoYXJncy5sZW5ndGggPyBcIiBcIiArIGFyZ3MubWFwKFN0cmluZykuam9pbihcIixcIikgOiBcIlwiKSArIFwiLiBGaW5kIHRoZSBmdWxsIGVycm9yIGF0OiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvYmxvYi9tYWluL3BhY2thZ2VzL21vYngvc3JjL2Vycm9ycy50c1wiIDogXCJbTW9iWF0gXCIgKyBlcnJvcik7XG59XG5cbnZhciBtb2NrR2xvYmFsID0ge307XG5mdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZ2xvYmFsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICByZXR1cm4gbW9ja0dsb2JhbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG52YXIgZ2V0RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xuT2JqZWN0LmZyZWV6ZShFTVBUWV9BUlJBWSk7XG52YXIgRU1QVFlfT0JKRUNUID0ge307XG5PYmplY3QuZnJlZXplKEVNUFRZX09CSkVDVCk7XG52YXIgaGFzUHJveHkgPSB0eXBlb2YgUHJveHkgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgcGxhaW5PYmplY3RTdHJpbmcgPSAvKiNfX1BVUkVfXyovT2JqZWN0LnRvU3RyaW5nKCk7XG5mdW5jdGlvbiBhc3NlcnRQcm94aWVzKCkge1xuICBpZiAoIWhhc1Byb3h5KSB7XG4gICAgZGllKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiYFByb3h5YCBvYmplY3RzIGFyZSBub3QgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LiBQbGVhc2UgY29uZmlndXJlIE1vYlggdG8gZW5hYmxlIGEgZmFsbGJhY2sgaW1wbGVtZW50YXRpb24uYFwiIDogXCJQcm94eSBub3QgYXZhaWxhYmxlXCIpO1xuICB9XG59XG5mdW5jdGlvbiB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KG1zZykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGdsb2JhbFN0YXRlLnZlcmlmeVByb3hpZXMpIHtcbiAgICBkaWUoXCJNb2JYIGlzIGN1cnJlbnRseSBjb25maWd1cmVkIHRvIGJlIGFibGUgdG8gcnVuIGluIEVTNSBtb2RlLCBidXQgaW4gRVM1IE1vYlggd29uJ3QgYmUgYWJsZSB0byBcIiArIG1zZyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldE5leHRJZCgpIHtcbiAgcmV0dXJuICsrZ2xvYmFsU3RhdGUubW9ieEd1aWQ7XG59XG4vKipcclxuICogTWFrZXMgc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbiBpcyBpbnZva2VkIGF0IG1vc3Qgb25jZS5cclxuICovXG5cbmZ1bmN0aW9uIG9uY2UoZnVuYykge1xuICB2YXIgaW52b2tlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnZva2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlZCA9IHRydWU7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuZnVuY3Rpb24gaXNGdW5jdGlvbihmbikge1xuICByZXR1cm4gdHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc1N0cmluZ2lzaCh2YWx1ZSkge1xuICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcblxuICBzd2l0Y2ggKHQpIHtcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgY2FzZSBcInN5bWJvbFwiOlxuICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn1cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuXG4gIGlmIChwcm90byA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgcHJvdG9Db25zdHJ1Y3RvciA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIHByb3RvQ29uc3RydWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBwcm90b0NvbnN0cnVjdG9yLnRvU3RyaW5nKCkgPT09IHBsYWluT2JqZWN0U3RyaW5nO1xufSAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzc4NjUxNzBcblxuZnVuY3Rpb24gaXNHZW5lcmF0b3Iob2JqKSB7XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqLmNvbnN0cnVjdG9yO1xuXG4gIGlmICghY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSBjb25zdHJ1Y3Rvci5uYW1lIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gY29uc3RydWN0b3IuZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFkZEhpZGRlblByb3Aob2JqZWN0LCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRIaWRkZW5GaW5hbFByb3Aob2JqZWN0LCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShuYW1lLCB0aGVDbGFzcykge1xuICB2YXIgcHJvcE5hbWUgPSBcImlzTW9iWFwiICsgbmFtZTtcbiAgdGhlQ2xhc3MucHJvdG90eXBlW3Byb3BOYW1lXSA9IHRydWU7XG4gIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBpc09iamVjdCh4KSAmJiB4W3Byb3BOYW1lXSA9PT0gdHJ1ZTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzRVM2TWFwKHRoaW5nKSB7XG4gIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIE1hcDtcbn1cbmZ1bmN0aW9uIGlzRVM2U2V0KHRoaW5nKSB7XG4gIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIFNldDtcbn1cbnZhciBoYXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gXCJ1bmRlZmluZWRcIjtcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmb2xsb3dpbmc6IG93biBlbnVtZXJhYmxlIGtleXMgYW5kIHN5bWJvbHMuXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRQbGFpbk9iamVjdEtleXMob2JqZWN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgLy8gTm90IHN1cHBvcnRlZCBpbiBJRSwgc28gdGhlcmUgYXJlIG5vdCBnb2luZyB0byBiZSBzeW1ib2wgcHJvcHMgYW55d2F5Li4uXG5cbiAgaWYgKCFoYXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxuXG4gIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuXG4gIGlmICghc3ltYm9scy5sZW5ndGgpIHtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQoa2V5cywgc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gb2JqZWN0UHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzKTtcbiAgfSkpO1xufSAvLyBGcm9tIEltbWVyIHV0aWxzXG4vLyBSZXR1cm5zIGFsbCBvd24ga2V5cywgaW5jbHVkaW5nIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xpY1xuXG52YXIgb3duS2V5cyA9IHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Qub3duS2V5cyA/IFJlZmxlY3Qub3duS2V5cyA6IGhhc0dldE93blByb3BlcnR5U3ltYm9scyA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSk7XG59IDpcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbmZ1bmN0aW9uIHN0cmluZ2lmeUtleShrZXkpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIpIHtcbiAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gbmV3IFN0cmluZyhrZXkpLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyBudWxsIDogdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gXCJcIiArIHZhbHVlIDogdmFsdWU7XG59XG5mdW5jdGlvbiBoYXNQcm9wKHRhcmdldCwgcHJvcCkge1xuICByZXR1cm4gb2JqZWN0UHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcm9wKTtcbn0gLy8gRnJvbSBJbW1lciB1dGlsc1xuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0KSB7XG4gIC8vIFBvbHlmaWxsIG5lZWRlZCBmb3IgSGVybWVzIGFuZCBJRSwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9oZXJtZXMvaXNzdWVzLzI3NFxuICB2YXIgcmVzID0ge307IC8vIE5vdGU6IHdpdGhvdXQgcG9seWZpbGwgZm9yIG93bktleXMsIHN5bWJvbHMgd29uJ3QgYmUgcGlja2VkIHVwXG5cbiAgb3duS2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHJlc1trZXldID0gZ2V0RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcblxuICBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHtcbiAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgIGlmIChpdCkgbyA9IGl0O1xuICAgIHZhciBpID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgIGRvbmU6IHRydWVcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IG9baSsrXVxuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wgPSAvKiNfX1BVUkVfXyovU3ltYm9sKFwibW9ieC1zdG9yZWQtYW5ub3RhdGlvbnNcIik7XG4vKipcclxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgYWN0cyBhc1xyXG4gKiAtIGRlY29yYXRvclxyXG4gKiAtIGFubm90YXRpb24gb2JqZWN0XHJcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGFubm90YXRpb24pIHtcbiAgZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICBzdG9yZUFubm90YXRpb24odGFyZ2V0LCBwcm9wZXJ0eSwgYW5ub3RhdGlvbik7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihkZWNvcmF0b3IsIGFubm90YXRpb24pO1xufVxuLyoqXHJcbiAqIFN0b3JlcyBhbm5vdGF0aW9uIHRvIHByb3RvdHlwZSxcclxuICogc28gaXQgY2FuIGJlIGluc3BlY3RlZCBsYXRlciBieSBgbWFrZU9ic2VydmFibGVgIGNhbGxlZCBmcm9tIGNvbnN0cnVjdG9yXHJcbiAqL1xuXG5mdW5jdGlvbiBzdG9yZUFubm90YXRpb24ocHJvdG90eXBlLCBrZXksIGFubm90YXRpb24pIHtcbiAgaWYgKCFoYXNQcm9wKHByb3RvdHlwZSwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wpKSB7XG4gICAgYWRkSGlkZGVuUHJvcChwcm90b3R5cGUsIHN0b3JlZEFubm90YXRpb25zU3ltYm9sLCBfZXh0ZW5kcyh7fSwgcHJvdG90eXBlW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkpO1xuICB9IC8vIEBvdmVycmlkZSBtdXN0IG92ZXJyaWRlIHNvbWV0aGluZ1xuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc092ZXJyaWRlKGFubm90YXRpb24pICYmICFoYXNQcm9wKHByb3RvdHlwZVtzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbF0sIGtleSkpIHtcbiAgICB2YXIgZmllbGROYW1lID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUgKyBcIi5wcm90b3R5cGUuXCIgKyBrZXkudG9TdHJpbmcoKTtcbiAgICBkaWUoXCInXCIgKyBmaWVsZE5hbWUgKyBcIicgaXMgZGVjb3JhdGVkIHdpdGggJ292ZXJyaWRlJywgXCIgKyBcImJ1dCBubyBzdWNoIGRlY29yYXRlZCBtZW1iZXIgd2FzIGZvdW5kIG9uIHByb3RvdHlwZS5cIik7XG4gIH0gLy8gQ2Fubm90IHJlLWRlY29yYXRlXG5cblxuICBhc3NlcnROb3REZWNvcmF0ZWQocHJvdG90eXBlLCBhbm5vdGF0aW9uLCBrZXkpOyAvLyBJZ25vcmUgb3ZlcnJpZGVcblxuICBpZiAoIWlzT3ZlcnJpZGUoYW5ub3RhdGlvbikpIHtcbiAgICBwcm90b3R5cGVbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdW2tleV0gPSBhbm5vdGF0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE5vdERlY29yYXRlZChwcm90b3R5cGUsIGFubm90YXRpb24sIGtleSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc092ZXJyaWRlKGFubm90YXRpb24pICYmIGhhc1Byb3AocHJvdG90eXBlW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSwga2V5KSkge1xuICAgIHZhciBmaWVsZE5hbWUgPSBwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSArIFwiLnByb3RvdHlwZS5cIiArIGtleS50b1N0cmluZygpO1xuICAgIHZhciBjdXJyZW50QW5ub3RhdGlvblR5cGUgPSBwcm90b3R5cGVbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdW2tleV0uYW5ub3RhdGlvblR5cGVfO1xuICAgIHZhciByZXF1ZXN0ZWRBbm5vdGF0aW9uVHlwZSA9IGFubm90YXRpb24uYW5ub3RhdGlvblR5cGVfO1xuICAgIGRpZShcIkNhbm5vdCBhcHBseSAnQFwiICsgcmVxdWVzdGVkQW5ub3RhdGlvblR5cGUgKyBcIicgdG8gJ1wiICsgZmllbGROYW1lICsgXCInOlwiICsgKFwiXFxuVGhlIGZpZWxkIGlzIGFscmVhZHkgZGVjb3JhdGVkIHdpdGggJ0BcIiArIGN1cnJlbnRBbm5vdGF0aW9uVHlwZSArIFwiJy5cIikgKyBcIlxcblJlLWRlY29yYXRpbmcgZmllbGRzIGlzIG5vdCBhbGxvd2VkLlwiICsgXCJcXG5Vc2UgJ0BvdmVycmlkZScgZGVjb3JhdG9yIGZvciBtZXRob2RzIG92ZXJyaWRlbiBieSBzdWJjbGFzcy5cIik7XG4gIH1cbn1cbi8qKlxyXG4gKiBDb2xsZWN0cyBhbm5vdGF0aW9ucyBmcm9tIHByb3RvdHlwZXMgYW5kIHN0b3JlcyB0aGVtIG9uIHRhcmdldCAoaW5zdGFuY2UpXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbGxlY3RTdG9yZWRBbm5vdGF0aW9ucyh0YXJnZXQpIHtcbiAgaWYgKCFoYXNQcm9wKHRhcmdldCwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhdGFyZ2V0W3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkge1xuICAgICAgZGllKFwiTm8gYW5ub3RhdGlvbnMgd2VyZSBwYXNzZWQgdG8gbWFrZU9ic2VydmFibGUsIGJ1dCBubyBkZWNvcmF0ZWQgbWVtYmVycyBoYXZlIGJlZW4gZm91bmQgZWl0aGVyXCIpO1xuICAgIH0gLy8gV2UgbmVlZCBhIGNvcHkgYXMgd2Ugd2lsbCByZW1vdmUgYW5ub3RhdGlvbiBmcm9tIHRoZSBsaXN0IG9uY2UgaXQncyBhcHBsaWVkLlxuXG5cbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wsIF9leHRlbmRzKHt9LCB0YXJnZXRbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdKSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0W3N0b3JlZEFubm90YXRpb25zU3ltYm9sXTtcbn1cblxudmFyICRtb2J4ID0gLyojX19QVVJFX18qL1N5bWJvbChcIm1vYnggYWRtaW5pc3RyYXRpb25cIik7XG52YXIgQXRvbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIGZvciBlZmZlY3RpdmUgdW5vYnNlcnZpbmcuIEJhc2VBdG9tIGhhcyB0cnVlLCBmb3IgZXh0cmEgb3B0aW1pemF0aW9uLCBzbyBpdHMgb25CZWNvbWVVbm9ic2VydmVkIG5ldmVyIGdldHMgY2FsbGVkLCBiZWNhdXNlIGl0J3Mgbm90IG5lZWRlZFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBhdG9tLiBGb3IgZGVidWdnaW5nIHB1cnBvc2VzIGl0IGlzIHJlY29tbWVuZGVkIHRvIGdpdmUgaXQgYSBuYW1lLlxyXG4gICAqIFRoZSBvbkJlY29tZU9ic2VydmVkIGFuZCBvbkJlY29tZVVub2JzZXJ2ZWQgY2FsbGJhY2tzIGNhbiBiZSB1c2VkIGZvciByZXNvdXJjZSBtYW5hZ2VtZW50LlxyXG4gICAqL1xuICBmdW5jdGlvbiBBdG9tKG5hbWVfKSB7XG4gICAgaWYgKG5hbWVfID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWVfID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJBdG9tQFwiICsgZ2V0TmV4dElkKCkgOiBcIkF0b21cIjtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbl8gPSBmYWxzZTtcbiAgICB0aGlzLmlzQmVpbmdPYnNlcnZlZF8gPSBmYWxzZTtcbiAgICB0aGlzLm9ic2VydmVyc18gPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5kaWZmVmFsdWVfID0gMDtcbiAgICB0aGlzLmxhc3RBY2Nlc3NlZEJ5XyA9IDA7XG4gICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLk5PVF9UUkFDS0lOR187XG4gICAgdGhpcy5vbkJPTCA9IHZvaWQgMDtcbiAgICB0aGlzLm9uQlVPTCA9IHZvaWQgMDtcbiAgICB0aGlzLm5hbWVfID0gbmFtZV87XG4gIH0gLy8gb25CZWNvbWVPYnNlcnZlZExpc3RlbmVyc1xuXG5cbiAgdmFyIF9wcm90byA9IEF0b20ucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkJPID0gZnVuY3Rpb24gb25CTygpIHtcbiAgICBpZiAodGhpcy5vbkJPTCkge1xuICAgICAgdGhpcy5vbkJPTC5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25CVU8gPSBmdW5jdGlvbiBvbkJVTygpIHtcbiAgICBpZiAodGhpcy5vbkJVT0wpIHtcbiAgICAgIHRoaXMub25CVU9MLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBub3RpZnkgbW9ieCB0aGF0IHlvdXIgYXRvbSBoYXMgYmVlbiB1c2VkIHNvbWVob3cuXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGN1cnJlbnRseSBhIHJlYWN0aXZlIGNvbnRleHQuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVwb3J0T2JzZXJ2ZWQgPSBmdW5jdGlvbiByZXBvcnRPYnNlcnZlZCQxKCkge1xuICAgIHJldHVybiByZXBvcnRPYnNlcnZlZCh0aGlzKTtcbiAgfVxuICAvKipcclxuICAgKiBJbnZva2UgdGhpcyBtZXRob2QgX2FmdGVyXyB0aGlzIG1ldGhvZCBoYXMgY2hhbmdlZCB0byBzaWduYWwgbW9ieCB0aGF0IGFsbCBpdHMgb2JzZXJ2ZXJzIHNob3VsZCBpbnZhbGlkYXRlLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlcG9ydENoYW5nZWQgPSBmdW5jdGlvbiByZXBvcnRDaGFuZ2VkKCkge1xuICAgIHN0YXJ0QmF0Y2goKTtcbiAgICBwcm9wYWdhdGVDaGFuZ2VkKHRoaXMpO1xuICAgIGVuZEJhdGNoKCk7XG4gIH07XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZV87XG4gIH07XG5cbiAgcmV0dXJuIEF0b207XG59KCk7XG52YXIgaXNBdG9tID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJBdG9tXCIsIEF0b20pO1xuZnVuY3Rpb24gY3JlYXRlQXRvbShuYW1lLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlciwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcikge1xuICBpZiAob25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgPT09IHZvaWQgMCkge1xuICAgIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyID0gbm9vcDtcbiAgfVxuXG4gIGlmIChvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID09PSB2b2lkIDApIHtcbiAgICBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID0gbm9vcDtcbiAgfVxuXG4gIHZhciBhdG9tID0gbmV3IEF0b20obmFtZSk7IC8vIGRlZmF1bHQgYG5vb3BgIGxpc3RlbmVyIHdpbGwgbm90IGluaXRpYWxpemUgdGhlIGhvb2sgU2V0XG5cbiAgaWYgKG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyICE9PSBub29wKSB7XG4gICAgb25CZWNvbWVPYnNlcnZlZChhdG9tLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlcik7XG4gIH1cblxuICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciAhPT0gbm9vcCkge1xuICAgIG9uQmVjb21lVW5vYnNlcnZlZChhdG9tLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKTtcbiAgfVxuXG4gIHJldHVybiBhdG9tO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eUNvbXBhcmVyKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG5cbmZ1bmN0aW9uIHN0cnVjdHVyYWxDb21wYXJlcihhLCBiKSB7XG4gIHJldHVybiBkZWVwRXF1YWwoYSwgYik7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dDb21wYXJlcihhLCBiKSB7XG4gIHJldHVybiBkZWVwRXF1YWwoYSwgYiwgMSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XG4gIGlmIChPYmplY3QuaXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmlzKGEsIGIpO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGIgPyBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYiA6IGEgIT09IGEgJiYgYiAhPT0gYjtcbn1cblxudmFyIGNvbXBhcmVyID0ge1xuICBpZGVudGl0eTogaWRlbnRpdHlDb21wYXJlcixcbiAgc3RydWN0dXJhbDogc3RydWN0dXJhbENvbXBhcmVyLFxuICBcImRlZmF1bHRcIjogZGVmYXVsdENvbXBhcmVyLFxuICBzaGFsbG93OiBzaGFsbG93Q29tcGFyZXJcbn07XG5cbmZ1bmN0aW9uIGRlZXBFbmhhbmNlcih2LCBfLCBuYW1lKSB7XG4gIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICBpZiAoaXNPYnNlcnZhYmxlKHYpKSB7XG4gICAgcmV0dXJuIHY7XG4gIH0gLy8gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCBhbmQgbXV0YXRlZD9cblxuXG4gIGlmIChBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwge1xuICAgICAgbmFtZTogbmFtZVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzUGxhaW5PYmplY3QodikpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7XG4gICAgICBuYW1lOiBuYW1lXG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNFUzZNYXAodikpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwge1xuICAgICAgbmFtZTogbmFtZVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzRVM2U2V0KHYpKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIHtcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdiA9PT0gXCJmdW5jdGlvblwiICYmICFpc0FjdGlvbih2KSAmJiAhaXNGbG93KHYpKSB7XG4gICAgaWYgKGlzR2VuZXJhdG9yKHYpKSB7XG4gICAgICByZXR1cm4gZmxvdyh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGF1dG9BY3Rpb24obmFtZSwgdik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHY7XG59XG5mdW5jdGlvbiBzaGFsbG93RW5oYW5jZXIodiwgXywgbmFtZSkge1xuICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdjtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVPYmplY3QodikgfHwgaXNPYnNlcnZhYmxlQXJyYXkodikgfHwgaXNPYnNlcnZhYmxlTWFwKHYpIHx8IGlzT2JzZXJ2YWJsZVNldCh2KSkge1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodikpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5hcnJheSh2LCB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGVlcDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpc1BsYWluT2JqZWN0KHYpKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIHVuZGVmaW5lZCwge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNFUzZNYXAodikpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNFUzZTZXQodikpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5zZXQodiwge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZGllKFwiVGhlIHNoYWxsb3cgbW9kaWZpZXIgLyBkZWNvcmF0b3IgY2FuIG9ubHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGFycmF5cywgb2JqZWN0cywgbWFwcyBhbmQgc2V0c1wiKTtcbiAgfVxufVxuZnVuY3Rpb24gcmVmZXJlbmNlRW5oYW5jZXIobmV3VmFsdWUpIHtcbiAgLy8gbmV2ZXIgdHVybiBpbnRvIGFuIG9ic2VydmFibGVcbiAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuZnVuY3Rpb24gcmVmU3RydWN0RW5oYW5jZXIodiwgb2xkVmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc09ic2VydmFibGUodikpIHtcbiAgICBkaWUoXCJvYnNlcnZhYmxlLnN0cnVjdCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBvYnNlcnZhYmxlIHZhbHVlc1wiKTtcbiAgfVxuXG4gIGlmIChkZWVwRXF1YWwodiwgb2xkVmFsdWUpKSB7XG4gICAgcmV0dXJuIG9sZFZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHY7XG59XG5cbnZhciBPVkVSUklERSA9IFwib3ZlcnJpZGVcIjtcbnZhciBvdmVycmlkZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKHtcbiAgYW5ub3RhdGlvblR5cGVfOiBPVkVSUklERSxcbiAgbWFrZV86IG1ha2VfLFxuICBleHRlbmRfOiBleHRlbmRfXG59KTtcbmZ1bmN0aW9uIGlzT3ZlcnJpZGUoYW5ub3RhdGlvbikge1xuICByZXR1cm4gYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZV8gPT09IE9WRVJSSURFO1xufVxuXG5mdW5jdGlvbiBtYWtlXyhhZG0sIGtleSkge1xuICAvLyBNdXN0IG5vdCBiZSBwbGFpbiBvYmplY3RcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBhZG0uaXNQbGFpbk9iamVjdF8pIHtcbiAgICBkaWUoXCJDYW5ub3QgYXBwbHkgJ1wiICsgdGhpcy5hbm5vdGF0aW9uVHlwZV8gKyBcIicgdG8gJ1wiICsgYWRtLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJzpcIiArIChcIlxcbidcIiArIHRoaXMuYW5ub3RhdGlvblR5cGVfICsgXCInIGNhbm5vdCBiZSB1c2VkIG9uIHBsYWluIG9iamVjdHMuXCIpKTtcbiAgfSAvLyBNdXN0IG92ZXJyaWRlIHNvbWV0aGluZ1xuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaGFzUHJvcChhZG0uYXBwbGllZEFubm90YXRpb25zXywga2V5KSkge1xuICAgIGRpZShcIidcIiArIGFkbS5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgKyBcIicgaXMgYW5ub3RhdGVkIHdpdGggJ1wiICsgdGhpcy5hbm5vdGF0aW9uVHlwZV8gKyBcIicsIFwiICsgXCJidXQgbm8gc3VjaCBhbm5vdGF0ZWQgbWVtYmVyIHdhcyBmb3VuZCBvbiBwcm90b3R5cGUuXCIpO1xuICB9XG5cbiAgcmV0dXJuIDBcbiAgLyogQ2FuY2VsICovXG4gIDtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gIGRpZShcIidcIiArIHRoaXMuYW5ub3RhdGlvblR5cGVfICsgXCInIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCAnbWFrZU9ic2VydmFibGUnXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25Bbm5vdGF0aW9uKG5hbWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBhbm5vdGF0aW9uVHlwZV86IG5hbWUsXG4gICAgb3B0aW9uc186IG9wdGlvbnMsXG4gICAgbWFrZV86IG1ha2VfJDEsXG4gICAgZXh0ZW5kXzogZXh0ZW5kXyQxXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VfJDEoYWRtLCBrZXksIGRlc2NyaXB0b3IsIHNvdXJjZSkge1xuICB2YXIgX3RoaXMkb3B0aW9uc187XG5cbiAgLy8gYm91bmRcbiAgaWYgKChfdGhpcyRvcHRpb25zXyA9IHRoaXMub3B0aW9uc18pICE9IG51bGwgJiYgX3RoaXMkb3B0aW9uc18uYm91bmQpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGwgPyAwXG4gICAgLyogQ2FuY2VsICovXG4gICAgOiAxXG4gICAgLyogQnJlYWsgKi9cbiAgICA7XG4gIH0gLy8gb3duXG5cblxuICBpZiAoc291cmNlID09PSBhZG0udGFyZ2V0Xykge1xuICAgIHJldHVybiB0aGlzLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIGZhbHNlKSA9PT0gbnVsbCA/IDBcbiAgICAvKiBDYW5jZWwgKi9cbiAgICA6IDJcbiAgICAvKiBDb250aW51ZSAqL1xuICAgIDtcbiAgfSAvLyBwcm90b3R5cGVcblxuXG4gIGlmIChpc0FjdGlvbihkZXNjcmlwdG9yLnZhbHVlKSkge1xuICAgIC8vIEEgcHJvdG90eXBlIGNvdWxkIGhhdmUgYmVlbiBhbm5vdGF0ZWQgYWxyZWFkeSBieSBvdGhlciBjb25zdHJ1Y3RvcixcbiAgICAvLyByZXN0IG9mIHRoZSBwcm90byBjaGFpbiBtdXN0IGJlIGFubm90YXRlZCBhbHJlYWR5XG4gICAgcmV0dXJuIDFcbiAgICAvKiBCcmVhayAqL1xuICAgIDtcbiAgfVxuXG4gIHZhciBhY3Rpb25EZXNjcmlwdG9yID0gY3JlYXRlQWN0aW9uRGVzY3JpcHRvcihhZG0sIHRoaXMsIGtleSwgZGVzY3JpcHRvciwgZmFsc2UpO1xuICBkZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGtleSwgYWN0aW9uRGVzY3JpcHRvcik7XG4gIHJldHVybiAyXG4gIC8qIENvbnRpbnVlICovXG4gIDtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kXyQxKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApIHtcbiAgdmFyIGFjdGlvbkRlc2NyaXB0b3IgPSBjcmVhdGVBY3Rpb25EZXNjcmlwdG9yKGFkbSwgdGhpcywga2V5LCBkZXNjcmlwdG9yKTtcbiAgcmV0dXJuIGFkbS5kZWZpbmVQcm9wZXJ0eV8oa2V5LCBhY3Rpb25EZXNjcmlwdG9yLCBwcm94eVRyYXApO1xufVxuXG5mdW5jdGlvbiBhc3NlcnRBY3Rpb25EZXNjcmlwdG9yKGFkbSwgX3JlZiwga2V5LCBfcmVmMikge1xuICB2YXIgYW5ub3RhdGlvblR5cGVfID0gX3JlZi5hbm5vdGF0aW9uVHlwZV87XG4gIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgZGllKFwiQ2Fubm90IGFwcGx5ICdcIiArIGFubm90YXRpb25UeXBlXyArIFwiJyB0byAnXCIgKyBhZG0ubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpICsgXCInOlwiICsgKFwiXFxuJ1wiICsgYW5ub3RhdGlvblR5cGVfICsgXCInIGNhbiBvbmx5IGJlIHVzZWQgb24gcHJvcGVydGllcyB3aXRoIGEgZnVuY3Rpb24gdmFsdWUuXCIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25EZXNjcmlwdG9yKGFkbSwgYW5ub3RhdGlvbiwga2V5LCBkZXNjcmlwdG9yLCAvLyBwcm92aWRlcyBhYmlsaXR5IHRvIGRpc2FibGUgc2FmZURlc2NyaXB0b3JzIGZvciBwcm90b3R5cGVzXG5zYWZlRGVzY3JpcHRvcnMpIHtcbiAgdmFyIF9hbm5vdGF0aW9uJG9wdGlvbnNfLCBfYW5ub3RhdGlvbiRvcHRpb25zXyQsIF9hbm5vdGF0aW9uJG9wdGlvbnNfMiwgX2Fubm90YXRpb24kb3B0aW9uc18kMiwgX2Fubm90YXRpb24kb3B0aW9uc18zLCBfYW5ub3RhdGlvbiRvcHRpb25zXzQsIF9hZG0kcHJveHlfMjtcblxuICBpZiAoc2FmZURlc2NyaXB0b3JzID09PSB2b2lkIDApIHtcbiAgICBzYWZlRGVzY3JpcHRvcnMgPSBnbG9iYWxTdGF0ZS5zYWZlRGVzY3JpcHRvcnM7XG4gIH1cblxuICBhc3NlcnRBY3Rpb25EZXNjcmlwdG9yKGFkbSwgYW5ub3RhdGlvbiwga2V5LCBkZXNjcmlwdG9yKTtcbiAgdmFyIHZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAoKF9hbm5vdGF0aW9uJG9wdGlvbnNfID0gYW5ub3RhdGlvbi5vcHRpb25zXykgIT0gbnVsbCAmJiBfYW5ub3RhdGlvbiRvcHRpb25zXy5ib3VuZCkge1xuICAgIHZhciBfYWRtJHByb3h5XztcblxuICAgIHZhbHVlID0gdmFsdWUuYmluZCgoX2FkbSRwcm94eV8gPSBhZG0ucHJveHlfKSAhPSBudWxsID8gX2FkbSRwcm94eV8gOiBhZG0udGFyZ2V0Xyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBjcmVhdGVBY3Rpb24oKF9hbm5vdGF0aW9uJG9wdGlvbnNfJCA9IChfYW5ub3RhdGlvbiRvcHRpb25zXzIgPSBhbm5vdGF0aW9uLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX2Fubm90YXRpb24kb3B0aW9uc18yLm5hbWUpICE9IG51bGwgPyBfYW5ub3RhdGlvbiRvcHRpb25zXyQgOiBrZXkudG9TdHJpbmcoKSwgdmFsdWUsIChfYW5ub3RhdGlvbiRvcHRpb25zXyQyID0gKF9hbm5vdGF0aW9uJG9wdGlvbnNfMyA9IGFubm90YXRpb24ub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfYW5ub3RhdGlvbiRvcHRpb25zXzMuYXV0b0FjdGlvbikgIT0gbnVsbCA/IF9hbm5vdGF0aW9uJG9wdGlvbnNfJDIgOiBmYWxzZSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2Rpc2N1c3Npb25zLzMxNDBcbiAgICAoX2Fubm90YXRpb24kb3B0aW9uc180ID0gYW5ub3RhdGlvbi5vcHRpb25zXykgIT0gbnVsbCAmJiBfYW5ub3RhdGlvbiRvcHRpb25zXzQuYm91bmQgPyAoX2FkbSRwcm94eV8yID0gYWRtLnByb3h5XykgIT0gbnVsbCA/IF9hZG0kcHJveHlfMiA6IGFkbS50YXJnZXRfIDogdW5kZWZpbmVkKSxcbiAgICAvLyBOb24tY29uZmlndXJhYmxlIGZvciBjbGFzc2VzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbCBmaWVsZCByZWRlZmluaXRpb24gaW4gc3ViY2xhc3NcbiAgICBjb25maWd1cmFibGU6IHNhZmVEZXNjcmlwdG9ycyA/IGFkbS5pc1BsYWluT2JqZWN0XyA6IHRydWUsXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L3B1bGwvMjY0MSNpc3N1ZWNvbW1lbnQtNzM3MjkyMDU4XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgLy8gTm9uLW9ic2V2YWJsZSwgdGhlcmVmb3JlIG5vbi13cml0YWJsZVxuICAgIC8vIEFsc28gcHJldmVudHMgcmV3cml0aW5nIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yXG4gICAgd3JpdGFibGU6IHNhZmVEZXNjcmlwdG9ycyA/IGZhbHNlIDogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGbG93QW5ub3RhdGlvbihuYW1lLCBvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgYW5ub3RhdGlvblR5cGVfOiBuYW1lLFxuICAgIG9wdGlvbnNfOiBvcHRpb25zLFxuICAgIG1ha2VfOiBtYWtlXyQyLFxuICAgIGV4dGVuZF86IGV4dGVuZF8kMlxuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlXyQyKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpIHtcbiAgdmFyIF90aGlzJG9wdGlvbnNfO1xuXG4gIC8vIG93blxuICBpZiAoc291cmNlID09PSBhZG0udGFyZ2V0Xykge1xuICAgIHJldHVybiB0aGlzLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIGZhbHNlKSA9PT0gbnVsbCA/IDBcbiAgICAvKiBDYW5jZWwgKi9cbiAgICA6IDJcbiAgICAvKiBDb250aW51ZSAqL1xuICAgIDtcbiAgfSAvLyBwcm90b3R5cGVcbiAgLy8gYm91bmQgLSBtdXN0IGFubm90YXRlIHByb3RvcyB0byBzdXBwb3J0IHN1cGVyLmZsb3coKVxuXG5cbiAgaWYgKChfdGhpcyRvcHRpb25zXyA9IHRoaXMub3B0aW9uc18pICE9IG51bGwgJiYgX3RoaXMkb3B0aW9uc18uYm91bmQgJiYgKCFoYXNQcm9wKGFkbS50YXJnZXRfLCBrZXkpIHx8ICFpc0Zsb3coYWRtLnRhcmdldF9ba2V5XSkpKSB7XG4gICAgaWYgKHRoaXMuZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgZmFsc2UpID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gMFxuICAgICAgLyogQ2FuY2VsICovXG4gICAgICA7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzRmxvdyhkZXNjcmlwdG9yLnZhbHVlKSkge1xuICAgIC8vIEEgcHJvdG90eXBlIGNvdWxkIGhhdmUgYmVlbiBhbm5vdGF0ZWQgYWxyZWFkeSBieSBvdGhlciBjb25zdHJ1Y3RvcixcbiAgICAvLyByZXN0IG9mIHRoZSBwcm90byBjaGFpbiBtdXN0IGJlIGFubm90YXRlZCBhbHJlYWR5XG4gICAgcmV0dXJuIDFcbiAgICAvKiBCcmVhayAqL1xuICAgIDtcbiAgfVxuXG4gIHZhciBmbG93RGVzY3JpcHRvciA9IGNyZWF0ZUZsb3dEZXNjcmlwdG9yKGFkbSwgdGhpcywga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSwgZmFsc2UpO1xuICBkZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGtleSwgZmxvd0Rlc2NyaXB0b3IpO1xuICByZXR1cm4gMlxuICAvKiBDb250aW51ZSAqL1xuICA7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZF8kMihhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gIHZhciBfdGhpcyRvcHRpb25zXzI7XG5cbiAgdmFyIGZsb3dEZXNjcmlwdG9yID0gY3JlYXRlRmxvd0Rlc2NyaXB0b3IoYWRtLCB0aGlzLCBrZXksIGRlc2NyaXB0b3IsIChfdGhpcyRvcHRpb25zXzIgPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc18yLmJvdW5kKTtcbiAgcmV0dXJuIGFkbS5kZWZpbmVQcm9wZXJ0eV8oa2V5LCBmbG93RGVzY3JpcHRvciwgcHJveHlUcmFwKTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0Rmxvd0Rlc2NyaXB0b3IoYWRtLCBfcmVmLCBrZXksIF9yZWYyKSB7XG4gIHZhciBhbm5vdGF0aW9uVHlwZV8gPSBfcmVmLmFubm90YXRpb25UeXBlXztcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBkaWUoXCJDYW5ub3QgYXBwbHkgJ1wiICsgYW5ub3RhdGlvblR5cGVfICsgXCInIHRvICdcIiArIGFkbS5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgKyBcIic6XCIgKyAoXCJcXG4nXCIgKyBhbm5vdGF0aW9uVHlwZV8gKyBcIicgY2FuIG9ubHkgYmUgdXNlZCBvbiBwcm9wZXJ0aWVzIHdpdGggYSBnZW5lcmF0b3IgZnVuY3Rpb24gdmFsdWUuXCIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGbG93RGVzY3JpcHRvcihhZG0sIGFubm90YXRpb24sIGtleSwgZGVzY3JpcHRvciwgYm91bmQsIC8vIHByb3ZpZGVzIGFiaWxpdHkgdG8gZGlzYWJsZSBzYWZlRGVzY3JpcHRvcnMgZm9yIHByb3RvdHlwZXNcbnNhZmVEZXNjcmlwdG9ycykge1xuICBpZiAoc2FmZURlc2NyaXB0b3JzID09PSB2b2lkIDApIHtcbiAgICBzYWZlRGVzY3JpcHRvcnMgPSBnbG9iYWxTdGF0ZS5zYWZlRGVzY3JpcHRvcnM7XG4gIH1cblxuICBhc3NlcnRGbG93RGVzY3JpcHRvcihhZG0sIGFubm90YXRpb24sIGtleSwgZGVzY3JpcHRvcik7XG4gIHZhciB2YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7IC8vIEluIGNhc2Ugb2YgZmxvdy5ib3VuZCwgdGhlIGRlc2NyaXB0b3IgY2FuIGJlIGZyb20gYWxyZWFkeSBhbm5vdGF0ZWQgcHJvdG90eXBlXG5cbiAgaWYgKCFpc0Zsb3codmFsdWUpKSB7XG4gICAgdmFsdWUgPSBmbG93KHZhbHVlKTtcbiAgfVxuXG4gIGlmIChib3VuZCkge1xuICAgIHZhciBfYWRtJHByb3h5XztcblxuICAgIC8vIFdlIGRvIG5vdCBrZWVwIG9yaWdpbmFsIGZ1bmN0aW9uIGFyb3VuZCwgc28gd2UgYmluZCB0aGUgZXhpc3RpbmcgZmxvd1xuICAgIHZhbHVlID0gdmFsdWUuYmluZCgoX2FkbSRwcm94eV8gPSBhZG0ucHJveHlfKSAhPSBudWxsID8gX2FkbSRwcm94eV8gOiBhZG0udGFyZ2V0Xyk7IC8vIFRoaXMgaXMgbm9ybWFsbHkgc2V0IGJ5IGBmbG93YCwgYnV0IGBiaW5kYCByZXR1cm5zIG5ldyBmdW5jdGlvbi4uLlxuXG4gICAgdmFsdWUuaXNNb2JYRmxvdyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAvLyBOb24tY29uZmlndXJhYmxlIGZvciBjbGFzc2VzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbCBmaWVsZCByZWRlZmluaXRpb24gaW4gc3ViY2xhc3NcbiAgICBjb25maWd1cmFibGU6IHNhZmVEZXNjcmlwdG9ycyA/IGFkbS5pc1BsYWluT2JqZWN0XyA6IHRydWUsXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L3B1bGwvMjY0MSNpc3N1ZWNvbW1lbnQtNzM3MjkyMDU4XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgLy8gTm9uLW9ic2V2YWJsZSwgdGhlcmVmb3JlIG5vbi13cml0YWJsZVxuICAgIC8vIEFsc28gcHJldmVudHMgcmV3cml0aW5nIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yXG4gICAgd3JpdGFibGU6IHNhZmVEZXNjcmlwdG9ycyA/IGZhbHNlIDogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlZEFubm90YXRpb24obmFtZSwgb3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIGFubm90YXRpb25UeXBlXzogbmFtZSxcbiAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICBtYWtlXzogbWFrZV8kMyxcbiAgICBleHRlbmRfOiBleHRlbmRfJDNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZV8kMyhhZG0sIGtleSwgZGVzY3JpcHRvcikge1xuICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGwgPyAwXG4gIC8qIENhbmNlbCAqL1xuICA6IDFcbiAgLyogQnJlYWsgKi9cbiAgO1xufVxuXG5mdW5jdGlvbiBleHRlbmRfJDMoYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCkge1xuICBhc3NlcnRDb21wdXRlZERlc2NyaXB0b3IoYWRtLCB0aGlzLCBrZXksIGRlc2NyaXB0b3IpO1xuICByZXR1cm4gYWRtLmRlZmluZUNvbXB1dGVkUHJvcGVydHlfKGtleSwgX2V4dGVuZHMoe30sIHRoaXMub3B0aW9uc18sIHtcbiAgICBnZXQ6IGRlc2NyaXB0b3IuZ2V0LFxuICAgIHNldDogZGVzY3JpcHRvci5zZXRcbiAgfSksIHByb3h5VHJhcCk7XG59XG5cbmZ1bmN0aW9uIGFzc2VydENvbXB1dGVkRGVzY3JpcHRvcihhZG0sIF9yZWYsIGtleSwgX3JlZjIpIHtcbiAgdmFyIGFubm90YXRpb25UeXBlXyA9IF9yZWYuYW5ub3RhdGlvblR5cGVfO1xuICB2YXIgZ2V0ID0gX3JlZjIuZ2V0O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWdldCkge1xuICAgIGRpZShcIkNhbm5vdCBhcHBseSAnXCIgKyBhbm5vdGF0aW9uVHlwZV8gKyBcIicgdG8gJ1wiICsgYWRtLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJzpcIiArIChcIlxcbidcIiArIGFubm90YXRpb25UeXBlXyArIFwiJyBjYW4gb25seSBiZSB1c2VkIG9uIGdldHRlcigrc2V0dGVyKSBwcm9wZXJ0aWVzLlwiKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24obmFtZSwgb3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIGFubm90YXRpb25UeXBlXzogbmFtZSxcbiAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICBtYWtlXzogbWFrZV8kNCxcbiAgICBleHRlbmRfOiBleHRlbmRfJDRcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZV8kNChhZG0sIGtleSwgZGVzY3JpcHRvcikge1xuICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGwgPyAwXG4gIC8qIENhbmNlbCAqL1xuICA6IDFcbiAgLyogQnJlYWsgKi9cbiAgO1xufVxuXG5mdW5jdGlvbiBleHRlbmRfJDQoYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCkge1xuICB2YXIgX3RoaXMkb3B0aW9uc18kZW5oYW5jLCBfdGhpcyRvcHRpb25zXztcblxuICBhc3NlcnRPYnNlcnZhYmxlRGVzY3JpcHRvcihhZG0sIHRoaXMsIGtleSwgZGVzY3JpcHRvcik7XG4gIHJldHVybiBhZG0uZGVmaW5lT2JzZXJ2YWJsZVByb3BlcnR5XyhrZXksIGRlc2NyaXB0b3IudmFsdWUsIChfdGhpcyRvcHRpb25zXyRlbmhhbmMgPSAoX3RoaXMkb3B0aW9uc18gPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc18uZW5oYW5jZXIpICE9IG51bGwgPyBfdGhpcyRvcHRpb25zXyRlbmhhbmMgOiBkZWVwRW5oYW5jZXIsIHByb3h5VHJhcCk7XG59XG5cbmZ1bmN0aW9uIGFzc2VydE9ic2VydmFibGVEZXNjcmlwdG9yKGFkbSwgX3JlZiwga2V5LCBkZXNjcmlwdG9yKSB7XG4gIHZhciBhbm5vdGF0aW9uVHlwZV8gPSBfcmVmLmFubm90YXRpb25UeXBlXztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICEoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpKSB7XG4gICAgZGllKFwiQ2Fubm90IGFwcGx5ICdcIiArIGFubm90YXRpb25UeXBlXyArIFwiJyB0byAnXCIgKyBhZG0ubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpICsgXCInOlwiICsgKFwiXFxuJ1wiICsgYW5ub3RhdGlvblR5cGVfICsgXCInIGNhbm5vdCBiZSB1c2VkIG9uIGdldHRlci9zZXR0ZXIgcHJvcGVydGllc1wiKSk7XG4gIH1cbn1cblxudmFyIEFVVE8gPSBcInRydWVcIjtcbnZhciBhdXRvQW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVBdXRvQW5ub3RhdGlvbigpO1xuZnVuY3Rpb24gY3JlYXRlQXV0b0Fubm90YXRpb24ob3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIGFubm90YXRpb25UeXBlXzogQVVUTyxcbiAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICBtYWtlXzogbWFrZV8kNSxcbiAgICBleHRlbmRfOiBleHRlbmRfJDVcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZV8kNShhZG0sIGtleSwgZGVzY3JpcHRvciwgc291cmNlKSB7XG4gIHZhciBfdGhpcyRvcHRpb25zXzMsIF90aGlzJG9wdGlvbnNfNDtcblxuICAvLyBnZXR0ZXIgLT4gY29tcHV0ZWRcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGNvbXB1dGVkLm1ha2VfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpO1xuICB9IC8vIGxvbmUgc2V0dGVyIC0+IGFjdGlvbiBzZXR0ZXJcblxuXG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIC8vIFRPRE8gbWFrZSBhY3Rpb24gYXBwbGljYWJsZSB0byBzZXR0ZXIgYW5kIGRlbGVnYXRlIHRvIGFjdGlvbi5tYWtlX1xuICAgIHZhciBzZXQgPSBjcmVhdGVBY3Rpb24oa2V5LnRvU3RyaW5nKCksIGRlc2NyaXB0b3Iuc2V0KTsgLy8gb3duXG5cbiAgICBpZiAoc291cmNlID09PSBhZG0udGFyZ2V0Xykge1xuICAgICAgcmV0dXJuIGFkbS5kZWZpbmVQcm9wZXJ0eV8oa2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzID8gYWRtLmlzUGxhaW5PYmplY3RfIDogdHJ1ZSxcbiAgICAgICAgc2V0OiBzZXRcbiAgICAgIH0pID09PSBudWxsID8gMFxuICAgICAgLyogQ2FuY2VsICovXG4gICAgICA6IDJcbiAgICAgIC8qIENvbnRpbnVlICovXG4gICAgICA7XG4gICAgfSAvLyBwcm90b1xuXG5cbiAgICBkZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgc2V0OiBzZXRcbiAgICB9KTtcbiAgICByZXR1cm4gMlxuICAgIC8qIENvbnRpbnVlICovXG4gICAgO1xuICB9IC8vIGZ1bmN0aW9uIG9uIHByb3RvIC0+IGF1dG9BY3Rpb24vZmxvd1xuXG5cbiAgaWYgKHNvdXJjZSAhPT0gYWRtLnRhcmdldF8gJiYgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBfdGhpcyRvcHRpb25zXzI7XG5cbiAgICBpZiAoaXNHZW5lcmF0b3IoZGVzY3JpcHRvci52YWx1ZSkpIHtcbiAgICAgIHZhciBfdGhpcyRvcHRpb25zXztcblxuICAgICAgdmFyIGZsb3dBbm5vdGF0aW9uID0gKF90aGlzJG9wdGlvbnNfID0gdGhpcy5vcHRpb25zXykgIT0gbnVsbCAmJiBfdGhpcyRvcHRpb25zXy5hdXRvQmluZCA/IGZsb3cuYm91bmQgOiBmbG93O1xuICAgICAgcmV0dXJuIGZsb3dBbm5vdGF0aW9uLm1ha2VfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBhY3Rpb25Bbm5vdGF0aW9uID0gKF90aGlzJG9wdGlvbnNfMiA9IHRoaXMub3B0aW9uc18pICE9IG51bGwgJiYgX3RoaXMkb3B0aW9uc18yLmF1dG9CaW5kID8gYXV0b0FjdGlvbi5ib3VuZCA6IGF1dG9BY3Rpb247XG4gICAgcmV0dXJuIGFjdGlvbkFubm90YXRpb24ubWFrZV8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIHNvdXJjZSk7XG4gIH0gLy8gb3RoZXIgLT4gb2JzZXJ2YWJsZVxuICAvLyBDb3B5IHByb3BzIGZyb20gcHJvdG8gYXMgd2VsbCwgc2VlIHRlc3Q6XG4gIC8vIFwiZGVjb3JhdGUgc2hvdWxkIHdvcmsgd2l0aCBPYmplY3QuY3JlYXRlXCJcblxuXG4gIHZhciBvYnNlcnZhYmxlQW5ub3RhdGlvbiA9ICgoX3RoaXMkb3B0aW9uc18zID0gdGhpcy5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnNfMy5kZWVwKSA9PT0gZmFsc2UgPyBvYnNlcnZhYmxlLnJlZiA6IG9ic2VydmFibGU7IC8vIGlmIGZ1bmN0aW9uIHJlc3BlY3QgYXV0b0JpbmQgb3B0aW9uXG5cbiAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSBcImZ1bmN0aW9uXCIgJiYgKF90aGlzJG9wdGlvbnNfNCA9IHRoaXMub3B0aW9uc18pICE9IG51bGwgJiYgX3RoaXMkb3B0aW9uc180LmF1dG9CaW5kKSB7XG4gICAgdmFyIF9hZG0kcHJveHlfO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWUuYmluZCgoX2FkbSRwcm94eV8gPSBhZG0ucHJveHlfKSAhPSBudWxsID8gX2FkbSRwcm94eV8gOiBhZG0udGFyZ2V0Xyk7XG4gIH1cblxuICByZXR1cm4gb2JzZXJ2YWJsZUFubm90YXRpb24ubWFrZV8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIHNvdXJjZSk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZF8kNShhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gIHZhciBfdGhpcyRvcHRpb25zXzUsIF90aGlzJG9wdGlvbnNfNjtcblxuICAvLyBnZXR0ZXIgLT4gY29tcHV0ZWRcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGNvbXB1dGVkLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCk7XG4gIH0gLy8gbG9uZSBzZXR0ZXIgLT4gYWN0aW9uIHNldHRlclxuXG5cbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgLy8gVE9ETyBtYWtlIGFjdGlvbiBhcHBsaWNhYmxlIHRvIHNldHRlciBhbmQgZGVsZWdhdGUgdG8gYWN0aW9uLmV4dGVuZF9cbiAgICByZXR1cm4gYWRtLmRlZmluZVByb3BlcnR5XyhrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzID8gYWRtLmlzUGxhaW5PYmplY3RfIDogdHJ1ZSxcbiAgICAgIHNldDogY3JlYXRlQWN0aW9uKGtleS50b1N0cmluZygpLCBkZXNjcmlwdG9yLnNldClcbiAgICB9LCBwcm94eVRyYXApO1xuICB9IC8vIG90aGVyIC0+IG9ic2VydmFibGVcbiAgLy8gaWYgZnVuY3Rpb24gcmVzcGVjdCBhdXRvQmluZCBvcHRpb25cblxuXG4gIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmIChfdGhpcyRvcHRpb25zXzUgPSB0aGlzLm9wdGlvbnNfKSAhPSBudWxsICYmIF90aGlzJG9wdGlvbnNfNS5hdXRvQmluZCkge1xuICAgIHZhciBfYWRtJHByb3h5XzI7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5iaW5kKChfYWRtJHByb3h5XzIgPSBhZG0ucHJveHlfKSAhPSBudWxsID8gX2FkbSRwcm94eV8yIDogYWRtLnRhcmdldF8pO1xuICB9XG5cbiAgdmFyIG9ic2VydmFibGVBbm5vdGF0aW9uID0gKChfdGhpcyRvcHRpb25zXzYgPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc182LmRlZXApID09PSBmYWxzZSA/IG9ic2VydmFibGUucmVmIDogb2JzZXJ2YWJsZTtcbiAgcmV0dXJuIG9ic2VydmFibGVBbm5vdGF0aW9uLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCk7XG59XG5cbnZhciBPQlNFUlZBQkxFID0gXCJvYnNlcnZhYmxlXCI7XG52YXIgT0JTRVJWQUJMRV9SRUYgPSBcIm9ic2VydmFibGUucmVmXCI7XG52YXIgT0JTRVJWQUJMRV9TSEFMTE9XID0gXCJvYnNlcnZhYmxlLnNoYWxsb3dcIjtcbnZhciBPQlNFUlZBQkxFX1NUUlVDVCA9IFwib2JzZXJ2YWJsZS5zdHJ1Y3RcIjsgLy8gUHJlZGVmaW5lZCBiYWdzIG9mIGNyZWF0ZSBvYnNlcnZhYmxlIG9wdGlvbnMsIHRvIGF2b2lkIGFsbG9jYXRpbmcgdGVtcG9yYXJpbHkgb3B0aW9uIG9iamVjdHNcbi8vIGluIHRoZSBtYWpvcml0eSBvZiBjYXNlc1xuXG52YXIgZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zID0ge1xuICBkZWVwOiB0cnVlLFxuICBuYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHREZWNvcmF0b3I6IHVuZGVmaW5lZCxcbiAgcHJveHk6IHRydWVcbn07XG5PYmplY3QuZnJlZXplKGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyk7XG5mdW5jdGlvbiBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKHRoaW5nKSB7XG4gIHJldHVybiB0aGluZyB8fCBkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnM7XG59XG52YXIgb2JzZXJ2YWJsZUFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24oT0JTRVJWQUJMRSk7XG52YXIgb2JzZXJ2YWJsZVJlZkFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24oT0JTRVJWQUJMRV9SRUYsIHtcbiAgZW5oYW5jZXI6IHJlZmVyZW5jZUVuaGFuY2VyXG59KTtcbnZhciBvYnNlcnZhYmxlU2hhbGxvd0Fubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24oT0JTRVJWQUJMRV9TSEFMTE9XLCB7XG4gIGVuaGFuY2VyOiBzaGFsbG93RW5oYW5jZXJcbn0pO1xudmFyIG9ic2VydmFibGVTdHJ1Y3RBbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZU9ic2VydmFibGVBbm5vdGF0aW9uKE9CU0VSVkFCTEVfU1RSVUNULCB7XG4gIGVuaGFuY2VyOiByZWZTdHJ1Y3RFbmhhbmNlclxufSk7XG52YXIgb2JzZXJ2YWJsZURlY29yYXRvckFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihvYnNlcnZhYmxlQW5ub3RhdGlvbik7XG5mdW5jdGlvbiBnZXRFbmhhbmNlckZyb21PcHRpb25zKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZGVlcCA9PT0gdHJ1ZSA/IGRlZXBFbmhhbmNlciA6IG9wdGlvbnMuZGVlcCA9PT0gZmFsc2UgPyByZWZlcmVuY2VFbmhhbmNlciA6IGdldEVuaGFuY2VyRnJvbUFubm90YXRpb24ob3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yKTtcbn1cbmZ1bmN0aW9uIGdldEFubm90YXRpb25Gcm9tT3B0aW9ucyhvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRkZWZhdWx0RGVjb3I7XG5cbiAgcmV0dXJuIG9wdGlvbnMgPyAoX29wdGlvbnMkZGVmYXVsdERlY29yID0gb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yKSAhPSBudWxsID8gX29wdGlvbnMkZGVmYXVsdERlY29yIDogY3JlYXRlQXV0b0Fubm90YXRpb24ob3B0aW9ucykgOiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBnZXRFbmhhbmNlckZyb21Bbm5vdGF0aW9uKGFubm90YXRpb24pIHtcbiAgdmFyIF9hbm5vdGF0aW9uJG9wdGlvbnNfJCwgX2Fubm90YXRpb24kb3B0aW9uc187XG5cbiAgcmV0dXJuICFhbm5vdGF0aW9uID8gZGVlcEVuaGFuY2VyIDogKF9hbm5vdGF0aW9uJG9wdGlvbnNfJCA9IChfYW5ub3RhdGlvbiRvcHRpb25zXyA9IGFubm90YXRpb24ub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfYW5ub3RhdGlvbiRvcHRpb25zXy5lbmhhbmNlcikgIT0gbnVsbCA/IF9hbm5vdGF0aW9uJG9wdGlvbnNfJCA6IGRlZXBFbmhhbmNlcjtcbn1cbi8qKlxyXG4gKiBUdXJucyBhbiBvYmplY3QsIGFycmF5IG9yIGZ1bmN0aW9uIGludG8gYSByZWFjdGl2ZSBzdHJ1Y3R1cmUuXHJcbiAqIEBwYXJhbSB2IHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmVjb21lIG9ic2VydmFibGUuXHJcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlKHYsIGFyZzIsIGFyZzMpIHtcbiAgLy8gQG9ic2VydmFibGUgc29tZVByb3A7XG4gIGlmIChpc1N0cmluZ2lzaChhcmcyKSkge1xuICAgIHN0b3JlQW5ub3RhdGlvbih2LCBhcmcyLCBvYnNlcnZhYmxlQW5ub3RhdGlvbik7XG4gICAgcmV0dXJuO1xuICB9IC8vIGFscmVhZHkgb2JzZXJ2YWJsZSAtIGlnbm9yZVxuXG5cbiAgaWYgKGlzT2JzZXJ2YWJsZSh2KSkge1xuICAgIHJldHVybiB2O1xuICB9IC8vIHBsYWluIG9iamVjdFxuXG5cbiAgaWYgKGlzUGxhaW5PYmplY3QodikpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgYXJnMiwgYXJnMyk7XG4gIH0gLy8gQXJyYXlcblxuXG4gIGlmIChBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwgYXJnMik7XG4gIH0gLy8gTWFwXG5cblxuICBpZiAoaXNFUzZNYXAodikpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwgYXJnMik7XG4gIH0gLy8gU2V0XG5cblxuICBpZiAoaXNFUzZTZXQodikpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5zZXQodiwgYXJnMik7XG4gIH0gLy8gb3RoZXIgb2JqZWN0IC0gaWdub3JlXG5cblxuICBpZiAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdiAhPT0gbnVsbCkge1xuICAgIHJldHVybiB2O1xuICB9IC8vIGFueXRoaW5nIGVsc2VcblxuXG4gIHJldHVybiBvYnNlcnZhYmxlLmJveCh2LCBhcmcyKTtcbn1cblxuT2JqZWN0LmFzc2lnbihjcmVhdGVPYnNlcnZhYmxlLCBvYnNlcnZhYmxlRGVjb3JhdG9yQW5ub3RhdGlvbik7XG52YXIgb2JzZXJ2YWJsZUZhY3RvcmllcyA9IHtcbiAgYm94OiBmdW5jdGlvbiBib3godmFsdWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlVmFsdWUodmFsdWUsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSwgdHJ1ZSwgby5lcXVhbHMpO1xuICB9LFxuICBhcnJheTogZnVuY3Rpb24gYXJyYXkoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xuICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcbiAgICByZXR1cm4gKGdsb2JhbFN0YXRlLnVzZVByb3hpZXMgPT09IGZhbHNlIHx8IG8ucHJveHkgPT09IGZhbHNlID8gY3JlYXRlTGVnYWN5QXJyYXkgOiBjcmVhdGVPYnNlcnZhYmxlQXJyYXkpKGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSk7XG4gIH0sXG4gIG1hcDogZnVuY3Rpb24gbWFwKGluaXRpYWxWYWx1ZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlTWFwKGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KGluaXRpYWxWYWx1ZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlU2V0KGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSk7XG4gIH0sXG4gIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KHByb3BzLCBkZWNvcmF0b3JzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGV4dGVuZE9ic2VydmFibGUoZ2xvYmFsU3RhdGUudXNlUHJveGllcyA9PT0gZmFsc2UgfHwgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucHJveHkpID09PSBmYWxzZSA/IGFzT2JzZXJ2YWJsZU9iamVjdCh7fSwgb3B0aW9ucykgOiBhc0R5bmFtaWNPYnNlcnZhYmxlT2JqZWN0KHt9LCBvcHRpb25zKSwgcHJvcHMsIGRlY29yYXRvcnMpO1xuICB9LFxuICByZWY6IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKG9ic2VydmFibGVSZWZBbm5vdGF0aW9uKSxcbiAgc2hhbGxvdzogLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24ob2JzZXJ2YWJsZVNoYWxsb3dBbm5vdGF0aW9uKSxcbiAgZGVlcDogb2JzZXJ2YWJsZURlY29yYXRvckFubm90YXRpb24sXG4gIHN0cnVjdDogLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24ob2JzZXJ2YWJsZVN0cnVjdEFubm90YXRpb24pXG59OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxudmFyIG9ic2VydmFibGUgPSAvKiNfX1BVUkVfXyovYXNzaWduKGNyZWF0ZU9ic2VydmFibGUsIG9ic2VydmFibGVGYWN0b3JpZXMpO1xuXG52YXIgQ09NUFVURUQgPSBcImNvbXB1dGVkXCI7XG52YXIgQ09NUFVURURfU1RSVUNUID0gXCJjb21wdXRlZC5zdHJ1Y3RcIjtcbnZhciBjb21wdXRlZEFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29tcHV0ZWRBbm5vdGF0aW9uKENPTVBVVEVEKTtcbnZhciBjb21wdXRlZFN0cnVjdEFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29tcHV0ZWRBbm5vdGF0aW9uKENPTVBVVEVEX1NUUlVDVCwge1xuICBlcXVhbHM6IGNvbXBhcmVyLnN0cnVjdHVyYWxcbn0pO1xuLyoqXHJcbiAqIERlY29yYXRvciBmb3IgY2xhc3MgcHJvcGVydGllczogQGNvbXB1dGVkIGdldCB2YWx1ZSgpIHsgcmV0dXJuIGV4cHI7IH0uXHJcbiAqIEZvciBsZWdhY3kgcHVycG9zZXMgYWxzbyBpbnZva2FibGUgYXMgRVM1IG9ic2VydmFibGUgY3JlYXRlZDogYGNvbXB1dGVkKCgpID0+IGV4cHIpYDtcclxuICovXG5cbnZhciBjb21wdXRlZCA9IGZ1bmN0aW9uIGNvbXB1dGVkKGFyZzEsIGFyZzIpIHtcbiAgaWYgKGlzU3RyaW5naXNoKGFyZzIpKSB7XG4gICAgLy8gQGNvbXB1dGVkXG4gICAgcmV0dXJuIHN0b3JlQW5ub3RhdGlvbihhcmcxLCBhcmcyLCBjb21wdXRlZEFubm90YXRpb24pO1xuICB9XG5cbiAgaWYgKGlzUGxhaW5PYmplY3QoYXJnMSkpIHtcbiAgICAvLyBAY29tcHV0ZWQoeyBvcHRpb25zIH0pXG4gICAgcmV0dXJuIGNyZWF0ZURlY29yYXRvckFubm90YXRpb24oY3JlYXRlQ29tcHV0ZWRBbm5vdGF0aW9uKENPTVBVVEVELCBhcmcxKSk7XG4gIH0gLy8gY29tcHV0ZWQoZXhwciwgb3B0aW9ucz8pXG5cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGFyZzEpKSB7XG4gICAgICBkaWUoXCJGaXJzdCBhcmd1bWVudCB0byBgY29tcHV0ZWRgIHNob3VsZCBiZSBhbiBleHByZXNzaW9uLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihhcmcyKSkge1xuICAgICAgZGllKFwiQSBzZXR0ZXIgYXMgc2Vjb25kIGFyZ3VtZW50IGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQsIHVzZSBgeyBzZXQ6IGZuIH1gIG9wdGlvbiBpbnN0ZWFkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvcHRzID0gaXNQbGFpbk9iamVjdChhcmcyKSA/IGFyZzIgOiB7fTtcbiAgb3B0cy5nZXQgPSBhcmcxO1xuICBvcHRzLm5hbWUgfHwgKG9wdHMubmFtZSA9IGFyZzEubmFtZSB8fCBcIlwiKTtcbiAgLyogZm9yIGdlbmVyYXRlZCBuYW1lICovXG5cbiAgcmV0dXJuIG5ldyBDb21wdXRlZFZhbHVlKG9wdHMpO1xufTtcbk9iamVjdC5hc3NpZ24oY29tcHV0ZWQsIGNvbXB1dGVkQW5ub3RhdGlvbik7XG5jb21wdXRlZC5zdHJ1Y3QgPSAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihjb21wdXRlZFN0cnVjdEFubm90YXRpb24pO1xuXG52YXIgX2dldERlc2NyaXB0b3IkY29uZmlnLCBfZ2V0RGVzY3JpcHRvcjtcbi8vIG1vYnggdmVyc2lvbnNcblxudmFyIGN1cnJlbnRBY3Rpb25JZCA9IDA7XG52YXIgbmV4dEFjdGlvbklkID0gMTtcbnZhciBpc0Z1bmN0aW9uTmFtZUNvbmZpZ3VyYWJsZSA9IChfZ2V0RGVzY3JpcHRvciRjb25maWcgPSAoX2dldERlc2NyaXB0b3IgPSAvKiNfX1BVUkVfXyovZ2V0RGVzY3JpcHRvcihmdW5jdGlvbiAoKSB7fSwgXCJuYW1lXCIpKSA9PSBudWxsID8gdm9pZCAwIDogX2dldERlc2NyaXB0b3IuY29uZmlndXJhYmxlKSAhPSBudWxsID8gX2dldERlc2NyaXB0b3IkY29uZmlnIDogZmFsc2U7IC8vIHdlIGNhbiBzYWZlbHkgcmVjeWNsZSB0aGlzIG9iamVjdFxuXG52YXIgdG1wTmFtZURlc2NyaXB0b3IgPSB7XG4gIHZhbHVlOiBcImFjdGlvblwiLFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgZW51bWVyYWJsZTogZmFsc2Vcbn07XG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIGF1dG9BY3Rpb24sIHJlZikge1xuICBpZiAoYXV0b0FjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgYXV0b0FjdGlvbiA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIGRpZShcImBhY3Rpb25gIGNhbiBvbmx5IGJlIGludm9rZWQgb24gZnVuY3Rpb25zXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSkge1xuICAgICAgZGllKFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcygpIHtcbiAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbihhY3Rpb25OYW1lLCBhdXRvQWN0aW9uLCBmbiwgcmVmIHx8IHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZTtcblxuICBpZiAoaXNGdW5jdGlvbk5hbWVDb25maWd1cmFibGUpIHtcbiAgICB0bXBOYW1lRGVzY3JpcHRvci52YWx1ZSA9IGFjdGlvbk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcywgXCJuYW1lXCIsIHRtcE5hbWVEZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGNhblJ1bkFzRGVyaXZhdGlvbiwgZm4sIHNjb3BlLCBhcmdzKSB7XG4gIHZhciBydW5JbmZvID0gX3N0YXJ0QWN0aW9uKGFjdGlvbk5hbWUsIGNhblJ1bkFzRGVyaXZhdGlvbiwgc2NvcGUsIGFyZ3MpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlLCBhcmdzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcnVuSW5mby5lcnJvcl8gPSBlcnI7XG4gICAgdGhyb3cgZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIF9lbmRBY3Rpb24ocnVuSW5mbyk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9zdGFydEFjdGlvbihhY3Rpb25OYW1lLCBjYW5SdW5Bc0Rlcml2YXRpb24sIC8vIHRydWUgZm9yIGF1dG9BY3Rpb25cbnNjb3BlLCBhcmdzKSB7XG4gIHZhciBub3RpZnlTcHlfID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpICYmICEhYWN0aW9uTmFtZTtcbiAgdmFyIHN0YXJ0VGltZV8gPSAwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5Xykge1xuICAgIHN0YXJ0VGltZV8gPSBEYXRlLm5vdygpO1xuICAgIHZhciBmbGF0dGVuZWRBcmdzID0gYXJncyA/IEFycmF5LmZyb20oYXJncykgOiBFTVBUWV9BUlJBWTtcbiAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICB0eXBlOiBBQ1RJT04sXG4gICAgICBuYW1lOiBhY3Rpb25OYW1lLFxuICAgICAgb2JqZWN0OiBzY29wZSxcbiAgICAgIGFyZ3VtZW50czogZmxhdHRlbmVkQXJnc1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHByZXZEZXJpdmF0aW9uXyA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgdmFyIHJ1bkFzQWN0aW9uID0gIWNhblJ1bkFzRGVyaXZhdGlvbiB8fCAhcHJldkRlcml2YXRpb25fO1xuICBzdGFydEJhdGNoKCk7XG4gIHZhciBwcmV2QWxsb3dTdGF0ZUNoYW5nZXNfID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXM7IC8vIGJ5IGRlZmF1bHQgcHJlc2VydmUgcHJldmlvdXMgYWxsb3dcblxuICBpZiAocnVuQXNBY3Rpb24pIHtcbiAgICB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHByZXZBbGxvd1N0YXRlQ2hhbmdlc18gPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xuICB9XG5cbiAgdmFyIHByZXZBbGxvd1N0YXRlUmVhZHNfID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XG4gIHZhciBydW5JbmZvID0ge1xuICAgIHJ1bkFzQWN0aW9uXzogcnVuQXNBY3Rpb24sXG4gICAgcHJldkRlcml2YXRpb25fOiBwcmV2RGVyaXZhdGlvbl8sXG4gICAgcHJldkFsbG93U3RhdGVDaGFuZ2VzXzogcHJldkFsbG93U3RhdGVDaGFuZ2VzXyxcbiAgICBwcmV2QWxsb3dTdGF0ZVJlYWRzXzogcHJldkFsbG93U3RhdGVSZWFkc18sXG4gICAgbm90aWZ5U3B5Xzogbm90aWZ5U3B5XyxcbiAgICBzdGFydFRpbWVfOiBzdGFydFRpbWVfLFxuICAgIGFjdGlvbklkXzogbmV4dEFjdGlvbklkKyssXG4gICAgcGFyZW50QWN0aW9uSWRfOiBjdXJyZW50QWN0aW9uSWRcbiAgfTtcbiAgY3VycmVudEFjdGlvbklkID0gcnVuSW5mby5hY3Rpb25JZF87XG4gIHJldHVybiBydW5JbmZvO1xufVxuZnVuY3Rpb24gX2VuZEFjdGlvbihydW5JbmZvKSB7XG4gIGlmIChjdXJyZW50QWN0aW9uSWQgIT09IHJ1bkluZm8uYWN0aW9uSWRfKSB7XG4gICAgZGllKDMwKTtcbiAgfVxuXG4gIGN1cnJlbnRBY3Rpb25JZCA9IHJ1bkluZm8ucGFyZW50QWN0aW9uSWRfO1xuXG4gIGlmIChydW5JbmZvLmVycm9yXyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IHRydWU7XG4gIH1cblxuICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChydW5JbmZvLnByZXZBbGxvd1N0YXRlQ2hhbmdlc18pO1xuICBhbGxvd1N0YXRlUmVhZHNFbmQocnVuSW5mby5wcmV2QWxsb3dTdGF0ZVJlYWRzXyk7XG4gIGVuZEJhdGNoKCk7XG5cbiAgaWYgKHJ1bkluZm8ucnVuQXNBY3Rpb25fKSB7XG4gICAgdW50cmFja2VkRW5kKHJ1bkluZm8ucHJldkRlcml2YXRpb25fKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcnVuSW5mby5ub3RpZnlTcHlfKSB7XG4gICAgc3B5UmVwb3J0RW5kKHtcbiAgICAgIHRpbWU6IERhdGUubm93KCkgLSBydW5JbmZvLnN0YXJ0VGltZV9cbiAgICB9KTtcbiAgfVxuXG4gIGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzKGFsbG93U3RhdGVDaGFuZ2VzLCBmdW5jKSB7XG4gIHZhciBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydChhbGxvd1N0YXRlQ2hhbmdlcyk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZnVuYygpO1xuICB9IGZpbmFsbHkge1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xuICB9XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKSB7XG4gIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXM7XG4gIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gYWxsb3dTdGF0ZUNoYW5nZXM7XG4gIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldikge1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IHByZXY7XG59XG5cbnZhciBfU3ltYm9sJHRvUHJpbWl0aXZlO1xudmFyIENSRUFURSA9IFwiY3JlYXRlXCI7XG5fU3ltYm9sJHRvUHJpbWl0aXZlID0gU3ltYm9sLnRvUHJpbWl0aXZlO1xudmFyIE9ic2VydmFibGVWYWx1ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0F0b20sIF9TeW1ib2wkdG9QcmltaXRpdmUyKSB7XG4gIF9pbmhlcml0c0xvb3NlKE9ic2VydmFibGVWYWx1ZSwgX0F0b20pO1xuXG4gIGZ1bmN0aW9uIE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgZW5oYW5jZXIsIG5hbWVfLCBub3RpZnlTcHksIGVxdWFscykge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChuYW1lXyA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVWYWx1ZVwiO1xuICAgIH1cblxuICAgIGlmIChub3RpZnlTcHkgPT09IHZvaWQgMCkge1xuICAgICAgbm90aWZ5U3B5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZXF1YWxzID09PSB2b2lkIDApIHtcbiAgICAgIGVxdWFscyA9IGNvbXBhcmVyW1wiZGVmYXVsdFwiXTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9BdG9tLmNhbGwodGhpcywgbmFtZV8pIHx8IHRoaXM7XG4gICAgX3RoaXMuZW5oYW5jZXIgPSB2b2lkIDA7XG4gICAgX3RoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgX3RoaXMuZXF1YWxzID0gdm9pZCAwO1xuICAgIF90aGlzLmhhc1VucmVwb3J0ZWRDaGFuZ2VfID0gZmFsc2U7XG4gICAgX3RoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICBfdGhpcy5jaGFuZ2VMaXN0ZW5lcnNfID0gdm9pZCAwO1xuICAgIF90aGlzLnZhbHVlXyA9IHZvaWQgMDtcbiAgICBfdGhpcy5kZWhhbmNlciA9IHZvaWQgMDtcbiAgICBfdGhpcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xuICAgIF90aGlzLm5hbWVfID0gbmFtZV87XG4gICAgX3RoaXMuZXF1YWxzID0gZXF1YWxzO1xuICAgIF90aGlzLnZhbHVlXyA9IGVuaGFuY2VyKHZhbHVlLCB1bmRlZmluZWQsIG5hbWVfKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5ICYmIGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICAvLyBvbmx5IG5vdGlmeSBzcHkgaWYgdGhpcyBpcyBhIHN0YW5kLWFsb25lIG9ic2VydmFibGVcbiAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgIHR5cGU6IENSRUFURSxcbiAgICAgICAgb2JqZWN0OiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwidmFsdWVcIixcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiBfdGhpcy5uYW1lXyxcbiAgICAgICAgbmV3VmFsdWU6IFwiXCIgKyBfdGhpcy52YWx1ZV9cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiBkZWhhbmNlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQobmV3VmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXztcbiAgICBuZXdWYWx1ZSA9IHRoaXMucHJlcGFyZU5ld1ZhbHVlXyhuZXdWYWx1ZSk7XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IGdsb2JhbFN0YXRlLlVOQ0hBTkdFRCkge1xuICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkge1xuICAgICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJ2YWx1ZVwiLFxuICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldE5ld1ZhbHVlXyhuZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucHJlcGFyZU5ld1ZhbHVlXyA9IGZ1bmN0aW9uIHByZXBhcmVOZXdWYWx1ZV8obmV3VmFsdWUpIHtcbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzKTtcblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbFN0YXRlLlVOQ0hBTkdFRDtcbiAgICAgIH1cblxuICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgfSAvLyBhcHBseSBtb2RpZmllclxuXG5cbiAgICBuZXdWYWx1ZSA9IHRoaXMuZW5oYW5jZXIobmV3VmFsdWUsIHRoaXMudmFsdWVfLCB0aGlzLm5hbWVfKTtcbiAgICByZXR1cm4gdGhpcy5lcXVhbHModGhpcy52YWx1ZV8sIG5ld1ZhbHVlKSA/IGdsb2JhbFN0YXRlLlVOQ0hBTkdFRCA6IG5ld1ZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5zZXROZXdWYWx1ZV8gPSBmdW5jdGlvbiBzZXROZXdWYWx1ZV8obmV3VmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXztcbiAgICB0aGlzLnZhbHVlXyA9IG5ld1ZhbHVlO1xuICAgIHRoaXMucmVwb3J0Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGhhc0xpc3RlbmVycyh0aGlzKSkge1xuICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIHtcbiAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICB0aGlzLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHRoaXMudmFsdWVfKTtcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcInZhbHVlXCIsXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG5ld1ZhbHVlOiB0aGlzLnZhbHVlXyxcbiAgICAgICAgb2xkVmFsdWU6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5yYXcgPSBmdW5jdGlvbiByYXcoKSB7XG4gICAgLy8gdXNlZCBieSBNU1Qgb3QgZ2V0IHVuZGVoYW5jZWQgdmFsdWVcbiAgICByZXR1cm4gdGhpcy52YWx1ZV87XG4gIH07XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXyArIFwiW1wiICsgdGhpcy52YWx1ZV8gKyBcIl1cIjtcbiAgfTtcblxuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xuICB9O1xuXG4gIF9wcm90b1tfU3ltYm9sJHRvUHJpbWl0aXZlMl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICB9O1xuXG4gIHJldHVybiBPYnNlcnZhYmxlVmFsdWU7XG59KEF0b20sIF9TeW1ib2wkdG9QcmltaXRpdmUpO1xudmFyIGlzT2JzZXJ2YWJsZVZhbHVlID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlVmFsdWVcIiwgT2JzZXJ2YWJsZVZhbHVlKTtcblxudmFyIF9TeW1ib2wkdG9QcmltaXRpdmUkMTtcbi8qKlxyXG4gKiBBIG5vZGUgaW4gdGhlIHN0YXRlIGRlcGVuZGVuY3kgcm9vdCB0aGF0IG9ic2VydmVzIG90aGVyIG5vZGVzLCBhbmQgY2FuIGJlIG9ic2VydmVkIGl0c2VsZi5cclxuICpcclxuICogQ29tcHV0ZWRWYWx1ZSB3aWxsIHJlbWVtYmVyIHRoZSByZXN1bHQgb2YgdGhlIGNvbXB1dGF0aW9uIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGJhdGNoLCBvclxyXG4gKiB3aGlsZSBiZWluZyBvYnNlcnZlZC5cclxuICpcclxuICogRHVyaW5nIHRoaXMgdGltZSBpdCB3aWxsIHJlY29tcHV0ZSBvbmx5IHdoZW4gb25lIG9mIGl0cyBkaXJlY3QgZGVwZW5kZW5jaWVzIGNoYW5nZWQsXHJcbiAqIGJ1dCBvbmx5IHdoZW4gaXQgaXMgYmVpbmcgYWNjZXNzZWQgd2l0aCBgQ29tcHV0ZWRWYWx1ZS5nZXQoKWAuXHJcbiAqXHJcbiAqIEltcGxlbWVudGF0aW9uIGRlc2NyaXB0aW9uOlxyXG4gKiAxLiBGaXJzdCB0aW1lIGl0J3MgYmVpbmcgYWNjZXNzZWQgaXQgd2lsbCBjb21wdXRlIGFuZCByZW1lbWJlciByZXN1bHRcclxuICogICAgZ2l2ZSBiYWNrIHJlbWVtYmVyZWQgcmVzdWx0IHVudGlsIDIuIGhhcHBlbnNcclxuICogMi4gRmlyc3QgdGltZSBhbnkgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZSwgcHJvcGFnYXRlIFBPU1NJQkxZX1NUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHdhaXQgZm9yIDMuXHJcbiAqIDMuIFdoZW4gaXQncyBiZWluZyBhY2Nlc3NlZCwgcmVjb21wdXRlIGlmIGFueSBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZC5cclxuICogICAgaWYgcmVzdWx0IGNoYW5nZWQ6IHByb3BhZ2F0ZSBTVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB0aGF0IHdlcmUgUE9TU0lCTFlfU1RBTEUgZnJvbSB0aGUgbGFzdCBzdGVwLlxyXG4gKiAgICBnbyB0byBzdGVwIDIuIGVpdGhlciB3YXlcclxuICpcclxuICogSWYgYXQgYW55IHBvaW50IGl0J3Mgb3V0c2lkZSBiYXRjaCBhbmQgaXQgaXNuJ3Qgb2JzZXJ2ZWQ6IHJlc2V0IGV2ZXJ5dGhpbmcgYW5kIGdvIHRvIDEuXHJcbiAqL1xuXG5fU3ltYm9sJHRvUHJpbWl0aXZlJDEgPSBTeW1ib2wudG9QcmltaXRpdmU7XG52YXIgQ29tcHV0ZWRWYWx1ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N5bWJvbCR0b1ByaW1pdGl2ZTIpIHtcbiAgLy8gbm9kZXMgd2UgYXJlIGxvb2tpbmcgYXQuIE91ciB2YWx1ZSBkZXBlbmRzIG9uIHRoZXNlIG5vZGVzXG4gIC8vIGR1cmluZyB0cmFja2luZyBpdCdzIGFuIGFycmF5IHdpdGggbmV3IG9ic2VydmVkIG9ic2VydmVyc1xuICAvLyB0byBjaGVjayBmb3IgY3ljbGVzXG4gIC8vIE4uQjogdW5taW5pZmllZCBhcyBpdCBpcyB1c2VkIGJ5IE1TVFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCB2YWx1ZSBiYXNlZCBvbiBhIGZ1bmN0aW9uIGV4cHJlc3Npb24uXHJcbiAgICpcclxuICAgKiBUaGUgYG5hbWVgIHByb3BlcnR5IGlzIGZvciBkZWJ1ZyBwdXJwb3NlcyBvbmx5LlxyXG4gICAqXHJcbiAgICogVGhlIGBlcXVhbHNgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgY29tcGFyZXIgZnVuY3Rpb24gdG8gdXNlIHRvIGRldGVybWluZSBpZiBhIG5ld2x5IHByb2R1Y2VkXHJcbiAgICogdmFsdWUgZGlmZmVycyBmcm9tIHRoZSBwcmV2aW91cyB2YWx1ZS4gVHdvIGNvbXBhcmVycyBhcmUgcHJvdmlkZWQgaW4gdGhlIGxpYnJhcnk7IGBkZWZhdWx0Q29tcGFyZXJgXHJcbiAgICogY29tcGFyZXMgYmFzZWQgb24gaWRlbnRpdHkgY29tcGFyaXNvbiAoPT09KSwgYW5kIGBzdHJ1Y3R1cmFsQ29tcGFyZXJgIGRlZXBseSBjb21wYXJlcyB0aGUgc3RydWN0dXJlLlxyXG4gICAqIFN0cnVjdHVyYWwgY29tcGFyaXNvbiBjYW4gYmUgY29udmVuaWVudCBpZiB5b3UgYWx3YXlzIHByb2R1Y2UgYSBuZXcgYWdncmVnYXRlZCBvYmplY3QgYW5kXHJcbiAgICogZG9uJ3Qgd2FudCB0byBub3RpZnkgb2JzZXJ2ZXJzIGlmIGl0IGlzIHN0cnVjdHVyYWxseSB0aGUgc2FtZS5cclxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3Igd29ya2luZyB3aXRoIHZlY3RvcnMsIG1vdXNlIGNvb3JkaW5hdGVzIGV0Yy5cclxuICAgKi9cbiAgZnVuY3Rpb24gQ29tcHV0ZWRWYWx1ZShvcHRpb25zKSB7XG4gICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5OT1RfVFJBQ0tJTkdfO1xuICAgIHRoaXMub2JzZXJ2aW5nXyA9IFtdO1xuICAgIHRoaXMubmV3T2JzZXJ2aW5nXyA9IG51bGw7XG4gICAgdGhpcy5pc0JlaW5nT2JzZXJ2ZWRfID0gZmFsc2U7XG4gICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IGZhbHNlO1xuICAgIHRoaXMub2JzZXJ2ZXJzXyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmRpZmZWYWx1ZV8gPSAwO1xuICAgIHRoaXMucnVuSWRfID0gMDtcbiAgICB0aGlzLmxhc3RBY2Nlc3NlZEJ5XyA9IDA7XG4gICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfO1xuICAgIHRoaXMudW5ib3VuZERlcHNDb3VudF8gPSAwO1xuICAgIHRoaXMudmFsdWVfID0gbmV3IENhdWdodEV4Y2VwdGlvbihudWxsKTtcbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMudHJpZ2dlcmVkQnlfID0gdm9pZCAwO1xuICAgIHRoaXMuaXNDb21wdXRpbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXJfID0gZmFsc2U7XG4gICAgdGhpcy5kZXJpdmF0aW9uID0gdm9pZCAwO1xuICAgIHRoaXMuc2V0dGVyXyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzVHJhY2luZ18gPSBUcmFjZU1vZGUuTk9ORTtcbiAgICB0aGlzLnNjb3BlXyA9IHZvaWQgMDtcbiAgICB0aGlzLmVxdWFsc18gPSB2b2lkIDA7XG4gICAgdGhpcy5yZXF1aXJlc1JlYWN0aW9uXyA9IHZvaWQgMDtcbiAgICB0aGlzLmtlZXBBbGl2ZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5vbkJPTCA9IHZvaWQgMDtcbiAgICB0aGlzLm9uQlVPTCA9IHZvaWQgMDtcblxuICAgIGlmICghb3B0aW9ucy5nZXQpIHtcbiAgICAgIGRpZSgzMSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJpdmF0aW9uID0gb3B0aW9ucy5nZXQ7XG4gICAgdGhpcy5uYW1lXyA9IG9wdGlvbnMubmFtZSB8fCAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJDb21wdXRlZFZhbHVlQFwiICsgZ2V0TmV4dElkKCkgOiBcIkNvbXB1dGVkVmFsdWVcIik7XG5cbiAgICBpZiAob3B0aW9ucy5zZXQpIHtcbiAgICAgIHRoaXMuc2V0dGVyXyA9IGNyZWF0ZUFjdGlvbihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB0aGlzLm5hbWVfICsgXCItc2V0dGVyXCIgOiBcIkNvbXB1dGVkVmFsdWUtc2V0dGVyXCIsIG9wdGlvbnMuc2V0KTtcbiAgICB9XG5cbiAgICB0aGlzLmVxdWFsc18gPSBvcHRpb25zLmVxdWFscyB8fCAob3B0aW9ucy5jb21wYXJlU3RydWN0dXJhbCB8fCBvcHRpb25zLnN0cnVjdCA/IGNvbXBhcmVyLnN0cnVjdHVyYWwgOiBjb21wYXJlcltcImRlZmF1bHRcIl0pO1xuICAgIHRoaXMuc2NvcGVfID0gb3B0aW9ucy5jb250ZXh0O1xuICAgIHRoaXMucmVxdWlyZXNSZWFjdGlvbl8gPSBvcHRpb25zLnJlcXVpcmVzUmVhY3Rpb247XG4gICAgdGhpcy5rZWVwQWxpdmVfID0gISFvcHRpb25zLmtlZXBBbGl2ZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb21wdXRlZFZhbHVlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25CZWNvbWVTdGFsZV8gPSBmdW5jdGlvbiBvbkJlY29tZVN0YWxlXygpIHtcbiAgICBwcm9wYWdhdGVNYXliZUNoYW5nZWQodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uQk8gPSBmdW5jdGlvbiBvbkJPKCkge1xuICAgIGlmICh0aGlzLm9uQk9MKSB7XG4gICAgICB0aGlzLm9uQk9MLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkJVTyA9IGZ1bmN0aW9uIG9uQlVPKCkge1xuICAgIGlmICh0aGlzLm9uQlVPTCkge1xuICAgICAgdGhpcy5vbkJVT0wuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzIGNvbXB1dGVkIHZhbHVlLlxyXG4gICAqIFdpbGwgZXZhbHVhdGUgaXRzIGNvbXB1dGF0aW9uIGZpcnN0IGlmIG5lZWRlZC5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgaWYgKHRoaXMuaXNDb21wdXRpbmdfKSB7XG4gICAgICBkaWUoMzIsIHRoaXMubmFtZV8sIHRoaXMuZGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmluQmF0Y2ggPT09IDAgJiYgLy8gIWdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdHBpb24gJiZcbiAgICB0aGlzLm9ic2VydmVyc18uc2l6ZSA9PT0gMCAmJiAhdGhpcy5rZWVwQWxpdmVfKSB7XG4gICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xuICAgICAgICB0aGlzLndhcm5BYm91dFVudHJhY2tlZFJlYWRfKCk7XG4gICAgICAgIHN0YXJ0QmF0Y2goKTsgLy8gU2VlIHBlcmYgdGVzdCAnY29tcHV0ZWQgbWVtb2l6YXRpb24nXG5cbiAgICAgICAgdGhpcy52YWx1ZV8gPSB0aGlzLmNvbXB1dGVWYWx1ZV8oZmFsc2UpO1xuICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXBvcnRPYnNlcnZlZCh0aGlzKTtcblxuICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcbiAgICAgICAgdmFyIHByZXZUcmFja2luZ0NvbnRleHQgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQ7XG5cbiAgICAgICAgaWYgKHRoaXMua2VlcEFsaXZlXyAmJiAhcHJldlRyYWNraW5nQ29udGV4dCkge1xuICAgICAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50cmFja0FuZENvbXB1dGUoKSkge1xuICAgICAgICAgIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHByZXZUcmFja2luZ0NvbnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMudmFsdWVfO1xuXG4gICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpIHtcbiAgICAgIHRocm93IHJlc3VsdC5jYXVzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zZXR0ZXJfKSB7XG4gICAgICBpZiAodGhpcy5pc1J1bm5pbmdTZXR0ZXJfKSB7XG4gICAgICAgIGRpZSgzMywgdGhpcy5uYW1lXyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyXyA9IHRydWU7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2V0dGVyXy5jYWxsKHRoaXMuc2NvcGVfLCB2YWx1ZSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlcl8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGllKDM0LCB0aGlzLm5hbWVfKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRyYWNrQW5kQ29tcHV0ZSA9IGZ1bmN0aW9uIHRyYWNrQW5kQ29tcHV0ZSgpIHtcbiAgICAvLyBOLkI6IHVubWluaWZpZWQgYXMgaXQgaXMgdXNlZCBieSBNU1RcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXztcbiAgICB2YXIgd2FzU3VzcGVuZGVkID1cbiAgICAvKiBzZWUgIzEyMDggKi9cbiAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXztcbiAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNvbXB1dGVWYWx1ZV8odHJ1ZSk7XG4gICAgdmFyIGNoYW5nZWQgPSB3YXNTdXNwZW5kZWQgfHwgaXNDYXVnaHRFeGNlcHRpb24ob2xkVmFsdWUpIHx8IGlzQ2F1Z2h0RXhjZXB0aW9uKG5ld1ZhbHVlKSB8fCAhdGhpcy5lcXVhbHNfKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy52YWx1ZV8gPSBuZXdWYWx1ZTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICBzcHlSZXBvcnQoe1xuICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcImNvbXB1dGVkXCIsXG4gICAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgIG9iamVjdDogdGhpcy5zY29wZV8sXG4gICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xuICB9O1xuXG4gIF9wcm90by5jb21wdXRlVmFsdWVfID0gZnVuY3Rpb24gY29tcHV0ZVZhbHVlXyh0cmFjaykge1xuICAgIHRoaXMuaXNDb21wdXRpbmdfID0gdHJ1ZTsgLy8gZG9uJ3QgYWxsb3cgc3RhdGUgY2hhbmdlcyBkdXJpbmcgY29tcHV0YXRpb25cblxuICAgIHZhciBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydChmYWxzZSk7XG4gICAgdmFyIHJlcztcblxuICAgIGlmICh0cmFjaykge1xuICAgICAgcmVzID0gdHJhY2tEZXJpdmVkRnVuY3Rpb24odGhpcywgdGhpcy5kZXJpdmF0aW9uLCB0aGlzLnNjb3BlXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuZGVyaXZhdGlvbi5jYWxsKHRoaXMuc2NvcGVfKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gdGhpcy5kZXJpdmF0aW9uLmNhbGwodGhpcy5zY29wZV8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmVzID0gbmV3IENhdWdodEV4Y2VwdGlvbihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xuICAgIHRoaXMuaXNDb21wdXRpbmdfID0gZmFsc2U7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBfcHJvdG8uc3VzcGVuZF8gPSBmdW5jdGlvbiBzdXNwZW5kXygpIHtcbiAgICBpZiAoIXRoaXMua2VlcEFsaXZlXykge1xuICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XG4gICAgICB0aGlzLnZhbHVlXyA9IHVuZGVmaW5lZDsgLy8gZG9uJ3QgaG9sZCBvbiB0byBjb21wdXRlZCB2YWx1ZSFcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiB0aGlzLmlzVHJhY2luZ18gIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdIENvbXB1dGVkIHZhbHVlICdcIiArIHRoaXMubmFtZV8gKyBcIicgd2FzIHN1c3BlbmRlZCBhbmQgaXQgd2lsbCByZWNvbXB1dGUgb24gdGhlIG5leHQgYWNjZXNzLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9ic2VydmVfID0gZnVuY3Rpb24gb2JzZXJ2ZV8obGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgICB2YXIgcHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBhdXRvcnVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFRPRE86IHdoeSBpcyB0aGlzIGluIGEgZGlmZmVyZW50IHBsYWNlIHRoYW4gdGhlIHNweVJlcG9ydCgpIGZ1bmN0aW9uPyBpbiBhbGwgb3RoZXIgb2JzZXJ2YWJsZXMgaXQncyBjYWxsZWQgaW4gdGhlIHNhbWUgcGxhY2VcbiAgICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzLmdldCgpO1xuXG4gICAgICBpZiAoIWZpcnN0VGltZSB8fCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcbiAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcImNvbXB1dGVkXCIsXG4gICAgICAgICAgZGVidWdPYmplY3ROYW1lOiBfdGhpcy5uYW1lXyxcbiAgICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgICAgb2JqZWN0OiBfdGhpcyxcbiAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgb2xkVmFsdWU6IHByZXZWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdW50cmFja2VkRW5kKHByZXZVKTtcbiAgICAgIH1cblxuICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICBwcmV2VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ud2FybkFib3V0VW50cmFja2VkUmVhZF8gPSBmdW5jdGlvbiB3YXJuQWJvdXRVbnRyYWNrZWRSZWFkXygpIHtcbiAgICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNUcmFjaW5nXyAhPT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdIENvbXB1dGVkIHZhbHVlICdcIiArIHRoaXMubmFtZV8gKyBcIicgaXMgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dC4gRG9pbmcgYSBmdWxsIHJlY29tcHV0ZS5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJlcXVpcmVzUmVhY3Rpb25fID09PSBcImJvb2xlYW5cIiA/IHRoaXMucmVxdWlyZXNSZWFjdGlvbl8gOiBnbG9iYWxTdGF0ZS5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBDb21wdXRlZCB2YWx1ZSAnXCIgKyB0aGlzLm5hbWVfICsgXCInIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuIERvaW5nIGEgZnVsbCByZWNvbXB1dGUuXCIpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXyArIFwiW1wiICsgdGhpcy5kZXJpdmF0aW9uLnRvU3RyaW5nKCkgKyBcIl1cIjtcbiAgfTtcblxuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xuICB9O1xuXG4gIF9wcm90b1tfU3ltYm9sJHRvUHJpbWl0aXZlMl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICB9O1xuXG4gIHJldHVybiBDb21wdXRlZFZhbHVlO1xufShfU3ltYm9sJHRvUHJpbWl0aXZlJDEpO1xudmFyIGlzQ29tcHV0ZWRWYWx1ZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQ29tcHV0ZWRWYWx1ZVwiLCBDb21wdXRlZFZhbHVlKTtcblxudmFyIElEZXJpdmF0aW9uU3RhdGVfO1xuXG4oZnVuY3Rpb24gKElEZXJpdmF0aW9uU3RhdGVfKSB7XG4gIC8vIGJlZm9yZSBiZWluZyBydW4gb3IgKG91dHNpZGUgYmF0Y2ggYW5kIG5vdCBiZWluZyBvYnNlcnZlZClcbiAgLy8gYXQgdGhpcyBwb2ludCBkZXJpdmF0aW9uIGlzIG5vdCBob2xkaW5nIGFueSBkYXRhIGFib3V0IGRlcGVuZGVuY3kgdHJlZVxuICBJRGVyaXZhdGlvblN0YXRlX1tJRGVyaXZhdGlvblN0YXRlX1tcIk5PVF9UUkFDS0lOR19cIl0gPSAtMV0gPSBcIk5PVF9UUkFDS0lOR19cIjsgLy8gbm8gc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQgc2luY2UgbGFzdCBjb21wdXRhdGlvblxuICAvLyB3b24ndCByZWNhbGN1bGF0ZSBkZXJpdmF0aW9uXG4gIC8vIHRoaXMgaXMgd2hhdCBtYWtlcyBtb2J4IGZhc3RcblxuICBJRGVyaXZhdGlvblN0YXRlX1tJRGVyaXZhdGlvblN0YXRlX1tcIlVQX1RPX0RBVEVfXCJdID0gMF0gPSBcIlVQX1RPX0RBVEVfXCI7IC8vIHNvbWUgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZWQsIGJ1dCBkb24ndCBrbm93IGlmIHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkXG4gIC8vIHdpbGwgcmVxdWlyZSB0byBjaGVjayBmaXJzdCBpZiBVUF9UT19EQVRFIG9yIFBPU1NJQkxZX1NUQUxFXG4gIC8vIGN1cnJlbnRseSBvbmx5IENvbXB1dGVkVmFsdWUgd2lsbCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEVcbiAgLy9cbiAgLy8gaGF2aW5nIHRoaXMgc3RhdGUgaXMgc2Vjb25kIGJpZyBvcHRpbWl6YXRpb246XG4gIC8vIGRvbid0IGhhdmUgdG8gcmVjb21wdXRlIG9uIGV2ZXJ5IGRlcGVuZGVuY3kgY2hhbmdlLCBidXQgb25seSB3aGVuIGl0J3MgbmVlZGVkXG5cbiAgSURlcml2YXRpb25TdGF0ZV9bSURlcml2YXRpb25TdGF0ZV9bXCJQT1NTSUJMWV9TVEFMRV9cIl0gPSAxXSA9IFwiUE9TU0lCTFlfU1RBTEVfXCI7IC8vIEEgc2hhbGxvdyBkZXBlbmRlbmN5IGhhcyBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb24gYW5kIHRoZSBkZXJpdmF0aW9uXG4gIC8vIHdpbGwgbmVlZCB0byByZWNvbXB1dGUgd2hlbiBpdCdzIG5lZWRlZCBuZXh0LlxuXG4gIElEZXJpdmF0aW9uU3RhdGVfW0lEZXJpdmF0aW9uU3RhdGVfW1wiU1RBTEVfXCJdID0gMl0gPSBcIlNUQUxFX1wiO1xufSkoSURlcml2YXRpb25TdGF0ZV8gfHwgKElEZXJpdmF0aW9uU3RhdGVfID0ge30pKTtcblxudmFyIFRyYWNlTW9kZTtcblxuKGZ1bmN0aW9uIChUcmFjZU1vZGUpIHtcbiAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiTE9HXCJdID0gMV0gPSBcIkxPR1wiO1xuICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiQlJFQUtcIl0gPSAyXSA9IFwiQlJFQUtcIjtcbn0pKFRyYWNlTW9kZSB8fCAoVHJhY2VNb2RlID0ge30pKTtcblxudmFyIENhdWdodEV4Y2VwdGlvbiA9IGZ1bmN0aW9uIENhdWdodEV4Y2VwdGlvbihjYXVzZSkge1xuICB0aGlzLmNhdXNlID0gdm9pZCAwO1xuICB0aGlzLmNhdXNlID0gY2F1c2U7IC8vIEVtcHR5XG59O1xuZnVuY3Rpb24gaXNDYXVnaHRFeGNlcHRpb24oZSkge1xuICByZXR1cm4gZSBpbnN0YW5jZW9mIENhdWdodEV4Y2VwdGlvbjtcbn1cbi8qKlxyXG4gKiBGaW5kcyBvdXQgd2hldGhlciBhbnkgZGVwZW5kZW5jeSBvZiB0aGUgZGVyaXZhdGlvbiBoYXMgYWN0dWFsbHkgY2hhbmdlZC5cclxuICogSWYgZGVwZW5kZW5jaWVzU3RhdGUgaXMgMSB0aGVuIGl0IHdpbGwgcmVjYWxjdWxhdGUgZGVwZW5kZW5jaWVzLFxyXG4gKiBpZiBhbnkgZGVwZW5kZW5jeSBjaGFuZ2VkIGl0IHdpbGwgcHJvcGFnYXRlIGl0IGJ5IGNoYW5naW5nIGRlcGVuZGVuY2llc1N0YXRlIHRvIDIuXHJcbiAqXHJcbiAqIEJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBkZXBlbmRlbmNpZXMgaW4gdGhlIHNhbWUgb3JkZXIgdGhhdCB0aGV5IHdlcmUgcmVwb3J0ZWQgYW5kXHJcbiAqIHN0b3BwaW5nIG9uIHRoZSBmaXJzdCBjaGFuZ2UsIGFsbCB0aGUgcmVjYWxjdWxhdGlvbnMgYXJlIG9ubHkgY2FsbGVkIGZvciBDb21wdXRlZFZhbHVlc1xyXG4gKiB0aGF0IHdpbGwgYmUgdHJhY2tlZCBieSBkZXJpdmF0aW9uLiBUaGF0IGlzIGJlY2F1c2Ugd2UgYXNzdW1lIHRoYXQgaWYgdGhlIGZpcnN0IHhcclxuICogZGVwZW5kZW5jaWVzIG9mIHRoZSBkZXJpdmF0aW9uIGRvZXNuJ3QgY2hhbmdlIHRoZW4gdGhlIGRlcml2YXRpb24gc2hvdWxkIHJ1biB0aGUgc2FtZSB3YXlcclxuICogdXAgdW50aWwgYWNjZXNzaW5nIHgtdGggZGVwZW5kZW5jeS5cclxuICovXG5cbmZ1bmN0aW9uIHNob3VsZENvbXB1dGUoZGVyaXZhdGlvbikge1xuICBzd2l0Y2ggKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfKSB7XG4gICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXzpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXzpcbiAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXzpcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlXy5QT1NTSUJMWV9TVEFMRV86XG4gICAgICB7XG4gICAgICAgIC8vIHN0YXRlIHByb3BhZ2F0aW9uIGNhbiBvY2N1ciBvdXRzaWRlIG9mIGFjdGlvbi9yZWFjdGl2ZSBjb250ZXh0ICMyMTk1XG4gICAgICAgIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XG4gICAgICAgIHZhciBwcmV2VW50cmFja2VkID0gdW50cmFja2VkU3RhcnQoKTsgLy8gbm8gbmVlZCBmb3IgdGhvc2UgY29tcHV0ZWRzIHRvIGJlIHJlcG9ydGVkLCB0aGV5IHdpbGwgYmUgcGlja2VkIHVwIGluIHRyYWNrRGVyaXZlZEZ1bmN0aW9uLlxuXG4gICAgICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZ18sXG4gICAgICAgICAgICBsID0gb2JzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBvYmogPSBvYnNbaV07XG5cbiAgICAgICAgICBpZiAoaXNDb21wdXRlZFZhbHVlKG9iaikpIHtcbiAgICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzKSB7XG4gICAgICAgICAgICAgIG9iai5nZXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2JqLmdldCgpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgYXJlIG5vdCBpbnRlcmVzdGVkIGluIHRoZSB2YWx1ZSAqb3IqIGV4Y2VwdGlvbiBhdCB0aGlzIG1vbWVudCwgYnV0IGlmIHRoZXJlIGlzIG9uZSwgbm90aWZ5IGFsbFxuICAgICAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gLy8gaWYgQ29tcHV0ZWRWYWx1ZSBgb2JqYCBhY3R1YWxseSBjaGFuZ2VkIGl0IHdpbGwgYmUgY29tcHV0ZWQgYW5kIHByb3BhZ2F0ZWQgdG8gaXRzIG9ic2VydmVycy5cbiAgICAgICAgICAgIC8vIGFuZCBgZGVyaXZhdGlvbmAgaXMgYW4gb2JzZXJ2ZXIgb2YgYG9iamBcbiAgICAgICAgICAgIC8vIGludmFyaWFudFNob3VsZENvbXB1dGUoZGVyaXZhdGlvbilcblxuXG4gICAgICAgICAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXykge1xuICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlVudHJhY2tlZCk7XG4gICAgICAgICAgICAgIGFsbG93U3RhdGVSZWFkc0VuZChwcmV2QWxsb3dTdGF0ZVJlYWRzKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbik7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGlzQ29tcHV0aW5nRGVyaXZhdGlvbigpIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiAhPT0gbnVsbDsgLy8gZmlsdGVyIG91dCBhY3Rpb25zIGluc2lkZSBjb21wdXRhdGlvbnNcbn1cbmZ1bmN0aW9uIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKGF0b20pIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBoYXNPYnNlcnZlcnMgPSBhdG9tLm9ic2VydmVyc18uc2l6ZSA+IDA7IC8vIFNob3VsZCBub3QgYmUgcG9zc2libGUgdG8gY2hhbmdlIG9ic2VydmVkIHN0YXRlIG91dHNpZGUgc3RyaWN0IG1vZGUsIGV4Y2VwdCBkdXJpbmcgaW5pdGlhbGl6YXRpb24sIHNlZSAjNTYzXG5cbiAgaWYgKCFnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyAmJiAoaGFzT2JzZXJ2ZXJzIHx8IGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zID09PSBcImFsd2F5c1wiKSkge1xuICAgIGNvbnNvbGUud2FybihcIltNb2JYXSBcIiArIChnbG9iYWxTdGF0ZS5lbmZvcmNlQWN0aW9ucyA/IFwiU2luY2Ugc3RyaWN0LW1vZGUgaXMgZW5hYmxlZCwgY2hhbmdpbmcgKG9ic2VydmVkKSBvYnNlcnZhYmxlIHZhbHVlcyB3aXRob3V0IHVzaW5nIGFuIGFjdGlvbiBpcyBub3QgYWxsb3dlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIiA6IFwiU2lkZSBlZmZlY3RzIGxpa2UgY2hhbmdpbmcgc3RhdGUgYXJlIG5vdCBhbGxvd2VkIGF0IHRoaXMgcG9pbnQuIEFyZSB5b3UgdHJ5aW5nIHRvIG1vZGlmeSBzdGF0ZSBmcm9tLCBmb3IgZXhhbXBsZSwgYSBjb21wdXRlZCB2YWx1ZSBvciB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9mIGEgUmVhY3QgY29tcG9uZW50PyBZb3UgY2FuIHdyYXAgc2lkZSBlZmZlY3RzIGluICdydW5JbkFjdGlvbicgKG9yIGRlY29yYXRlIGZ1bmN0aW9ucyB3aXRoICdhY3Rpb24nKSBpZiBuZWVkZWQuIFRyaWVkIHRvIG1vZGlmeTogXCIpICsgYXRvbS5uYW1lXyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoZWNrSWZTdGF0ZVJlYWRzQXJlQWxsb3dlZChvYnNlcnZhYmxlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyAmJiBnbG9iYWxTdGF0ZS5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbikge1xuICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBPYnNlcnZhYmxlICdcIiArIG9ic2VydmFibGUubmFtZV8gKyBcIicgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dC5cIik7XG4gIH1cbn1cbi8qKlxyXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYGZgIGFuZCB0cmFja3Mgd2hpY2ggb2JzZXJ2YWJsZXMgYXJlIGJlaW5nIGFjY2Vzc2VkLlxyXG4gKiBUaGUgdHJhY2tpbmcgaW5mb3JtYXRpb24gaXMgc3RvcmVkIG9uIHRoZSBgZGVyaXZhdGlvbmAgb2JqZWN0IGFuZCB0aGUgZGVyaXZhdGlvbiBpcyByZWdpc3RlcmVkXHJcbiAqIGFzIG9ic2VydmVyIG9mIGFueSBvZiB0aGUgYWNjZXNzZWQgb2JzZXJ2YWJsZXMuXHJcbiAqL1xuXG5mdW5jdGlvbiB0cmFja0Rlcml2ZWRGdW5jdGlvbihkZXJpdmF0aW9uLCBmLCBjb250ZXh0KSB7XG4gIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7IC8vIHByZSBhbGxvY2F0ZSBhcnJheSBhbGxvY2F0aW9uICsgcm9vbSBmb3IgdmFyaWF0aW9uIGluIGRlcHNcbiAgLy8gYXJyYXkgd2lsbCBiZSB0cmltbWVkIGJ5IGJpbmREZXBlbmRlbmNpZXNcblxuICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcbiAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfID0gbmV3IEFycmF5KGRlcml2YXRpb24ub2JzZXJ2aW5nXy5sZW5ndGggKyAxMDApO1xuICBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnRfID0gMDtcbiAgZGVyaXZhdGlvbi5ydW5JZF8gPSArK2dsb2JhbFN0YXRlLnJ1bklkO1xuICB2YXIgcHJldlRyYWNraW5nID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS5pbkJhdGNoKys7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcbiAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXN1bHQgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKGUpO1xuICAgIH1cbiAgfVxuXG4gIGdsb2JhbFN0YXRlLmluQmF0Y2gtLTtcbiAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xuICBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pO1xuICB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKTtcbiAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGVyaXZhdGlvbi5vYnNlcnZpbmdfLmxlbmd0aCAhPT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGVyaXZhdGlvbi5yZXF1aXJlc09ic2VydmFibGVfID09PSBcImJvb2xlYW5cIiA/IGRlcml2YXRpb24ucmVxdWlyZXNPYnNlcnZhYmxlXyA6IGdsb2JhbFN0YXRlLnJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYnhdIERlcml2YXRpb24gJ1wiICsgZGVyaXZhdGlvbi5uYW1lXyArIFwiJyBpcyBjcmVhdGVkL3VwZGF0ZWQgd2l0aG91dCByZWFkaW5nIGFueSBvYnNlcnZhYmxlIHZhbHVlLlwiKTtcbiAgfVxufVxuLyoqXHJcbiAqIGRpZmZzIG5ld09ic2VydmluZyB3aXRoIG9ic2VydmluZy5cclxuICogdXBkYXRlIG9ic2VydmluZyB0byBiZSBuZXdPYnNlcnZpbmcgd2l0aCB1bmlxdWUgb2JzZXJ2YWJsZXNcclxuICogbm90aWZ5IG9ic2VydmVycyB0aGF0IGJlY29tZSBvYnNlcnZlZC91bm9ic2VydmVkXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbikge1xuICAvLyBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcsIFwiSU5URVJOQUwgRVJST1IgYmluZERlcGVuZGVuY2llcyBleHBlY3RzIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICB2YXIgcHJldk9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXztcbiAgdmFyIG9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXyA9IGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nXztcbiAgdmFyIGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfOyAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKHRoaXMgbGlzdCBjYW4gY29udGFpbiBkdXBsaWNhdGVzKTpcbiAgLy8gICAwOiBmaXJzdCBvY2N1cnJlbmNlLCBjaGFuZ2UgdG8gMSBhbmQga2VlcCBpdFxuICAvLyAgIDE6IGV4dHJhIG9jY3VycmVuY2UsIGRyb3AgaXRcblxuICB2YXIgaTAgPSAwLFxuICAgICAgbCA9IGRlcml2YXRpb24udW5ib3VuZERlcHNDb3VudF87XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgZGVwID0gb2JzZXJ2aW5nW2ldO1xuXG4gICAgaWYgKGRlcC5kaWZmVmFsdWVfID09PSAwKSB7XG4gICAgICBkZXAuZGlmZlZhbHVlXyA9IDE7XG5cbiAgICAgIGlmIChpMCAhPT0gaSkge1xuICAgICAgICBvYnNlcnZpbmdbaTBdID0gZGVwO1xuICAgICAgfVxuXG4gICAgICBpMCsrO1xuICAgIH0gLy8gVXBjYXN0IGlzICdzYWZlJyBoZXJlLCBiZWNhdXNlIGlmIGRlcCBpcyBJT2JzZXJ2YWJsZSwgYGRlcGVuZGVuY2llc1N0YXRlYCB3aWxsIGJlIHVuZGVmaW5lZCxcbiAgICAvLyBub3QgaGl0dGluZyB0aGUgY29uZGl0aW9uXG5cblxuICAgIGlmIChkZXAuZGVwZW5kZW5jaWVzU3RhdGVfID4gbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlKSB7XG4gICAgICBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSBkZXAuZGVwZW5kZW5jaWVzU3RhdGVfO1xuICAgIH1cbiAgfVxuXG4gIG9ic2VydmluZy5sZW5ndGggPSBpMDtcbiAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfID0gbnVsbDsgLy8gbmV3T2JzZXJ2aW5nIHNob3VsZG4ndCBiZSBuZWVkZWQgb3V0c2lkZSB0cmFja2luZyAoc3RhdGVtZW50IG1vdmVkIGRvd24gdG8gd29yayBhcm91bmQgRkYgYnVnLCBzZWUgIzYxNClcbiAgLy8gR28gdGhyb3VnaCBhbGwgb2xkIG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6IChpdCBpcyB1bmlxdWUgYWZ0ZXIgbGFzdCBiaW5kRGVwZW5kZW5jaWVzKVxuICAvLyAgIDA6IGl0J3Mgbm90IGluIG5ldyBvYnNlcnZhYmxlcywgdW5vYnNlcnZlIGl0XG4gIC8vICAgMTogaXQga2VlcHMgYmVpbmcgb2JzZXJ2ZWQsIGRvbid0IHdhbnQgdG8gbm90aWZ5IGl0LiBjaGFuZ2UgdG8gMFxuXG4gIGwgPSBwcmV2T2JzZXJ2aW5nLmxlbmd0aDtcblxuICB3aGlsZSAobC0tKSB7XG4gICAgdmFyIF9kZXAgPSBwcmV2T2JzZXJ2aW5nW2xdO1xuXG4gICAgaWYgKF9kZXAuZGlmZlZhbHVlXyA9PT0gMCkge1xuICAgICAgcmVtb3ZlT2JzZXJ2ZXIoX2RlcCwgZGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgX2RlcC5kaWZmVmFsdWVfID0gMDtcbiAgfSAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKG5vdyBpdCBzaG91bGQgYmUgdW5pcXVlKVxuICAvLyAgIDA6IGl0IHdhcyBzZXQgdG8gMCBpbiBsYXN0IGxvb3AuIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gIC8vICAgMTogaXQgd2Fzbid0IG9ic2VydmVkLCBsZXQncyBvYnNlcnZlIGl0LiBzZXQgYmFjayB0byAwXG5cblxuICB3aGlsZSAoaTAtLSkge1xuICAgIHZhciBfZGVwMiA9IG9ic2VydmluZ1tpMF07XG5cbiAgICBpZiAoX2RlcDIuZGlmZlZhbHVlXyA9PT0gMSkge1xuICAgICAgX2RlcDIuZGlmZlZhbHVlXyA9IDA7XG4gICAgICBhZGRPYnNlcnZlcihfZGVwMiwgZGVyaXZhdGlvbik7XG4gICAgfVxuICB9IC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxuICAvLyBzbyB0aGV5IGhhdmUgaGFkIG5vIGNoYW5jZSB0byBwcm9wYWdhdGUgc3RhbGVuZXNzICgjOTE2KVxuXG5cbiAgaWYgKGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlXyA9IGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZTtcbiAgICBkZXJpdmF0aW9uLm9uQmVjb21lU3RhbGVfKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJPYnNlcnZpbmcoZGVyaXZhdGlvbikge1xuICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IgY2xlYXJPYnNlcnZpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXztcbiAgZGVyaXZhdGlvbi5vYnNlcnZpbmdfID0gW107XG4gIHZhciBpID0gb2JzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmVtb3ZlT2JzZXJ2ZXIob2JzW2ldLCBkZXJpdmF0aW9uKTtcbiAgfVxuXG4gIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXztcbn1cbmZ1bmN0aW9uIHVudHJhY2tlZChhY3Rpb24pIHtcbiAgdmFyIHByZXYgPSB1bnRyYWNrZWRTdGFydCgpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGFjdGlvbigpO1xuICB9IGZpbmFsbHkge1xuICAgIHVudHJhY2tlZEVuZChwcmV2KTtcbiAgfVxufVxuZnVuY3Rpb24gdW50cmFja2VkU3RhcnQoKSB7XG4gIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICByZXR1cm4gcHJldjtcbn1cbmZ1bmN0aW9uIHVudHJhY2tlZEVuZChwcmV2KSB7XG4gIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IHByZXY7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlUmVhZHNTdGFydChhbGxvd1N0YXRlUmVhZHMpIHtcbiAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHM7XG4gIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkcztcbiAgcmV0dXJuIHByZXY7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlUmVhZHNFbmQocHJldikge1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSBwcmV2O1xufVxuLyoqXHJcbiAqIG5lZWRlZCB0byBrZWVwIGBsb3dlc3RPYnNlcnZlclN0YXRlYCBjb3JyZWN0LiB3aGVuIGNoYW5naW5nIGZyb20gKDIgb3IgMSkgdG8gMFxyXG4gKlxyXG4gKi9cblxuZnVuY3Rpb24gY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbikge1xuICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXztcbiAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXztcbiAgdmFyIGkgPSBvYnMubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBvYnNbaV0ubG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXztcbiAgfVxufVxuXG4vKipcclxuICogVGhlc2UgdmFsdWVzIHdpbGwgcGVyc2lzdCBpZiBnbG9iYWwgc3RhdGUgaXMgcmVzZXRcclxuICovXG5cbnZhciBwZXJzaXN0ZW50S2V5cyA9IFtcIm1vYnhHdWlkXCIsIFwic3B5TGlzdGVuZXJzXCIsIFwiZW5mb3JjZUFjdGlvbnNcIiwgXCJjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb25cIiwgXCJyZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZVwiLCBcIm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uXCIsIFwiYWxsb3dTdGF0ZVJlYWRzXCIsIFwiZGlzYWJsZUVycm9yQm91bmRhcmllc1wiLCBcInJ1bklkXCIsIFwiVU5DSEFOR0VEXCIsIFwidXNlUHJveGllc1wiXTtcbnZhciBNb2JYR2xvYmFscyA9IGZ1bmN0aW9uIE1vYlhHbG9iYWxzKCkge1xuICB0aGlzLnZlcnNpb24gPSA2O1xuICB0aGlzLlVOQ0hBTkdFRCA9IHt9O1xuICB0aGlzLnRyYWNraW5nRGVyaXZhdGlvbiA9IG51bGw7XG4gIHRoaXMudHJhY2tpbmdDb250ZXh0ID0gbnVsbDtcbiAgdGhpcy5ydW5JZCA9IDA7XG4gIHRoaXMubW9ieEd1aWQgPSAwO1xuICB0aGlzLmluQmF0Y2ggPSAwO1xuICB0aGlzLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdO1xuICB0aGlzLnBlbmRpbmdSZWFjdGlvbnMgPSBbXTtcbiAgdGhpcy5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbiAgdGhpcy5hbGxvd1N0YXRlQ2hhbmdlcyA9IGZhbHNlO1xuICB0aGlzLmFsbG93U3RhdGVSZWFkcyA9IHRydWU7XG4gIHRoaXMuZW5mb3JjZUFjdGlvbnMgPSB0cnVlO1xuICB0aGlzLnNweUxpc3RlbmVycyA9IFtdO1xuICB0aGlzLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycyA9IFtdO1xuICB0aGlzLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9IGZhbHNlO1xuICB0aGlzLnJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlID0gZmFsc2U7XG4gIHRoaXMub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb24gPSBmYWxzZTtcbiAgdGhpcy5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID0gZmFsc2U7XG4gIHRoaXMuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IGZhbHNlO1xuICB0aGlzLnVzZVByb3hpZXMgPSB0cnVlO1xuICB0aGlzLnZlcmlmeVByb3hpZXMgPSBmYWxzZTtcbiAgdGhpcy5zYWZlRGVzY3JpcHRvcnMgPSB0cnVlO1xufTtcbnZhciBjYW5NZXJnZUdsb2JhbFN0YXRlID0gdHJ1ZTtcbnZhciBpc29sYXRlQ2FsbGVkID0gZmFsc2U7XG52YXIgZ2xvYmFsU3RhdGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgZ2xvYmFsID0gLyojX19QVVJFX18qL2dldEdsb2JhbCgpO1xuXG4gIGlmIChnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCA+IDAgJiYgIWdsb2JhbC5fX21vYnhHbG9iYWxzKSB7XG4gICAgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWxzICYmIGdsb2JhbC5fX21vYnhHbG9iYWxzLnZlcnNpb24gIT09IG5ldyBNb2JYR2xvYmFscygpLnZlcnNpb24pIHtcbiAgICBjYW5NZXJnZUdsb2JhbFN0YXRlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICAvLyBCZWNhdXNlIHRoaXMgaXMgYSBJSUZFIHdlIG5lZWQgdG8gbGV0IGlzb2xhdGVDYWxsZWQgYSBjaGFuY2UgdG8gY2hhbmdlXG4gICAgLy8gc28gd2UgcnVuIGl0IGFmdGVyIHRoZSBldmVudCBsb29wIGNvbXBsZXRlZCBhdCBsZWFzdCAxIGl0ZXJhdGlvblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpc29sYXRlQ2FsbGVkKSB7XG4gICAgICAgIGRpZSgzNSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gICAgcmV0dXJuIG5ldyBNb2JYR2xvYmFscygpO1xuICB9IGVsc2UgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWxzKSB7XG4gICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgKz0gMTtcblxuICAgIGlmICghZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEKSB7XG4gICAgICBnbG9iYWwuX19tb2J4R2xvYmFscy5VTkNIQU5HRUQgPSB7fTtcbiAgICB9IC8vIG1ha2UgbWVyZ2UgYmFja3dhcmQgY29tcGF0aWJsZVxuXG5cbiAgICByZXR1cm4gZ2xvYmFsLl9fbW9ieEdsb2JhbHM7XG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPSAxO1xuICAgIHJldHVybiBnbG9iYWwuX19tb2J4R2xvYmFscyA9IC8qI19fUFVSRV9fKi9uZXcgTW9iWEdsb2JhbHMoKTtcbiAgfVxufSgpO1xuZnVuY3Rpb24gaXNvbGF0ZUdsb2JhbFN0YXRlKCkge1xuICBpZiAoZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5sZW5ndGggfHwgZ2xvYmFsU3RhdGUuaW5CYXRjaCB8fCBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMpIHtcbiAgICBkaWUoMzYpO1xuICB9XG5cbiAgaXNvbGF0ZUNhbGxlZCA9IHRydWU7XG5cbiAgaWYgKGNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG5cbiAgICBpZiAoLS1nbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCA9PT0gMCkge1xuICAgICAgZ2xvYmFsLl9fbW9ieEdsb2JhbHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2xvYmFsU3RhdGUgPSBuZXcgTW9iWEdsb2JhbHMoKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0R2xvYmFsU3RhdGUoKSB7XG4gIHJldHVybiBnbG9iYWxTdGF0ZTtcbn1cbi8qKlxyXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5OyB0aGlzIHdpbGwgYnJlYWsgdGhlIGludGVybmFsIHN0YXRlIG9mIGV4aXN0aW5nIG9ic2VydmFibGVzLFxyXG4gKiBidXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGJhY2sgYXQgYSBzdGFibGUgc3RhdGUgYWZ0ZXIgdGhyb3dpbmcgZXJyb3JzXHJcbiAqL1xuXG5mdW5jdGlvbiByZXNldEdsb2JhbFN0YXRlKCkge1xuICB2YXIgZGVmYXVsdEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMoKTtcblxuICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdEdsb2JhbHMpIHtcbiAgICBpZiAocGVyc2lzdGVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgZ2xvYmFsU3RhdGVba2V5XSA9IGRlZmF1bHRHbG9iYWxzW2tleV07XG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSAhZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGhhc09ic2VydmVycyhvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLm9ic2VydmVyc18gJiYgb2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPiAwO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpIHtcbiAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzXztcbn0gLy8gZnVuY3Rpb24gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKSB7XG4vLyAgICAgY29uc3QgbGlzdCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzXG4vLyAgICAgY29uc3QgbWFwID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNJbmRleGVzXG4vLyAgICAgY29uc3QgbCA9IGxpc3QubGVuZ3RoXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbi8vICAgICAgICAgY29uc3QgaWQgPSBsaXN0W2ldLl9fbWFwaWRcbi8vICAgICAgICAgaWYgKGkpIHtcbi8vICAgICAgICAgICAgIGludmFyaWFudChtYXBbaWRdID09PSBpLCBcIklOVEVSTkFMIEVSUk9SIG1hcHMgZGVyaXZhdGlvbi5fX21hcGlkIHRvIGluZGV4IGluIGxpc3RcIikgLy8gZm9yIHBlcmZvcm1hbmNlXG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBpbnZhcmlhbnQoIShpZCBpbiBtYXApLCBcIklOVEVSTkFMIEVSUk9SIG9ic2VydmVyIG9uIGluZGV4IDAgc2hvdWxkbid0IGJlIGhlbGQgaW4gbWFwLlwiKSAvLyBmb3IgcGVyZm9ybWFuY2Vcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBpbnZhcmlhbnQoXG4vLyAgICAgICAgIGxpc3QubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKG1hcCkubGVuZ3RoID09PSBsaXN0Lmxlbmd0aCAtIDEsXG4vLyAgICAgICAgIFwiSU5URVJOQUwgRVJST1IgdGhlcmUgaXMgbm8ganVuayBpbiBtYXBcIlxuLy8gICAgIClcbi8vIH1cblxuZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAvLyBpbnZhcmlhbnQobm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IsIGNhbiBhZGQgb25seSBkZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XG4gIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgYWRkIGFscmVhZHkgYWRkZWQgbm9kZVwiKTtcbiAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uYWRkKG5vZGUpO1xuXG4gIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID4gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZV8pIHtcbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZV87XG4gIH0gLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGRpZG4ndCBhZGQgbm9kZVwiKTtcblxufVxuZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IsIHJlbW92ZSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgaW5zaWRlIGJhdGNoXCIpO1xuICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIHJlbW92ZSBhbHJlYWR5IHJlbW92ZWQgbm9kZVwiKTtcbiAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc19bXCJkZWxldGVcIl0obm9kZSk7XG5cbiAgaWYgKG9ic2VydmFibGUub2JzZXJ2ZXJzXy5zaXplID09PSAwKSB7XG4gICAgLy8gZGVsZXRpbmcgbGFzdCBvYnNlcnZlclxuICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcbiAgfSAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlMlwiKTtcblxufVxuZnVuY3Rpb24gcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpIHtcbiAgaWYgKG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbl8gPT09IGZhbHNlKSB7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5sZW5ndGggPT09IDAsIFwiSU5URVJOQUwgRVJST1IsIHNob3VsZCBvbmx5IHF1ZXVlIGZvciB1bm9ic2VydmF0aW9uIHVub2JzZXJ2ZWQgb2JzZXJ2YWJsZXNcIik7XG4gICAgb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IHRydWU7XG4gICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zLnB1c2gob2JzZXJ2YWJsZSk7XG4gIH1cbn1cbi8qKlxyXG4gKiBCYXRjaCBzdGFydHMgYSB0cmFuc2FjdGlvbiwgYXQgbGVhc3QgZm9yIHB1cnBvc2VzIG9mIG1lbW9pemluZyBDb21wdXRlZFZhbHVlcyB3aGVuIG5vdGhpbmcgZWxzZSBkb2VzLlxyXG4gKiBEdXJpbmcgYSBiYXRjaCBgb25CZWNvbWVVbm9ic2VydmVkYCB3aWxsIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UgcGVyIG9ic2VydmFibGUuXHJcbiAqIEF2b2lkcyB1bm5lY2Vzc2FyeSByZWNhbGN1bGF0aW9ucy5cclxuICovXG5cbmZ1bmN0aW9uIHN0YXJ0QmF0Y2goKSB7XG4gIGdsb2JhbFN0YXRlLmluQmF0Y2grKztcbn1cbmZ1bmN0aW9uIGVuZEJhdGNoKCkge1xuICBpZiAoLS1nbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwKSB7XG4gICAgcnVuUmVhY3Rpb25zKCk7IC8vIHRoZSBiYXRjaCBpcyBhY3R1YWxseSBhYm91dCB0byBmaW5pc2gsIGFsbCB1bm9ic2VydmluZyBzaG91bGQgaGFwcGVuIGhlcmUuXG5cbiAgICB2YXIgbGlzdCA9IGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9ic2VydmFibGUgPSBsaXN0W2ldO1xuICAgICAgb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IGZhbHNlO1xuXG4gICAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPT09IDApIHtcbiAgICAgICAgaWYgKG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkXykge1xuICAgICAgICAgIC8vIGlmIHRoaXMgb2JzZXJ2YWJsZSBoYWQgcmVhY3RpdmUgb2JzZXJ2ZXJzLCB0cmlnZ2VyIHRoZSBob29rc1xuICAgICAgICAgIG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkXyA9IGZhbHNlO1xuICAgICAgICAgIG9ic2VydmFibGUub25CVU8oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSkge1xuICAgICAgICAgIC8vIGNvbXB1dGVkIHZhbHVlcyBhcmUgYXV0b21hdGljYWxseSB0ZWFyZWQgZG93biB3aGVuIHRoZSBsYXN0IG9ic2VydmVyIGxlYXZlc1xuICAgICAgICAgIC8vIHRoaXMgcHJvY2VzcyBoYXBwZW5zIHJlY3Vyc2l2ZWx5LCB0aGlzIGNvbXB1dGVkIG1pZ2h0IGJlIHRoZSBsYXN0IG9ic2VydmFiZSBvZiBhbm90aGVyLCBldGMuLlxuICAgICAgICAgIG9ic2VydmFibGUuc3VzcGVuZF8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdO1xuICB9XG59XG5mdW5jdGlvbiByZXBvcnRPYnNlcnZlZChvYnNlcnZhYmxlKSB7XG4gIGNoZWNrSWZTdGF0ZVJlYWRzQXJlQWxsb3dlZChvYnNlcnZhYmxlKTtcbiAgdmFyIGRlcml2YXRpb24gPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG5cbiAgaWYgKGRlcml2YXRpb24gIT09IG51bGwpIHtcbiAgICAvKipcclxuICAgICAqIFNpbXBsZSBvcHRpbWl6YXRpb24sIGdpdmUgZWFjaCBkZXJpdmF0aW9uIHJ1biBhbiB1bmlxdWUgaWQgKHJ1bklkKVxyXG4gICAgICogQ2hlY2sgaWYgbGFzdCB0aW1lIHRoaXMgb2JzZXJ2YWJsZSB3YXMgYWNjZXNzZWQgdGhlIHNhbWUgcnVuSWQgaXMgdXNlZFxyXG4gICAgICogaWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIHJlbGF0aW9uIGlzIGFscmVhZHkga25vd25cclxuICAgICAqL1xuICAgIGlmIChkZXJpdmF0aW9uLnJ1bklkXyAhPT0gb2JzZXJ2YWJsZS5sYXN0QWNjZXNzZWRCeV8pIHtcbiAgICAgIG9ic2VydmFibGUubGFzdEFjY2Vzc2VkQnlfID0gZGVyaXZhdGlvbi5ydW5JZF87IC8vIFRyaWVkIHN0b3JpbmcgbmV3T2JzZXJ2aW5nLCBvciBvYnNlcnZpbmcsIG9yIGJvdGggYXMgU2V0LCBidXQgcGVyZm9ybWFuY2UgZGlkbid0IGNvbWUgY2xvc2UuLi5cblxuICAgICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfW2Rlcml2YXRpb24udW5ib3VuZERlcHNDb3VudF8rK10gPSBvYnNlcnZhYmxlO1xuXG4gICAgICBpZiAoIW9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkXyAmJiBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQpIHtcbiAgICAgICAgb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWRfID0gdHJ1ZTtcbiAgICAgICAgb2JzZXJ2YWJsZS5vbkJPKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPT09IDAgJiYgZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDApIHtcbiAgICBxdWV1ZUZvclVub2JzZXJ2YXRpb24ob2JzZXJ2YWJsZSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IC8vIGZ1bmN0aW9uIGludmFyaWFudExPUyhvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSwgbXNnOiBzdHJpbmcpIHtcbi8vICAgICAvLyBpdCdzIGV4cGVuc2l2ZSBzbyBiZXR0ZXIgbm90IHJ1biBpdCBpbiBwcm9kdWNpdG9uLiBidXQgdGVtcG9yYXJpbHkgaGVscGZ1bCBmb3IgdGVzdGluZ1xuLy8gICAgIGNvbnN0IG1pbiA9IGdldE9ic2VydmVycyhvYnNlcnZhYmxlKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWluKGEsIGIuZGVwZW5kZW5jaWVzU3RhdGUpLCAyKVxuLy8gICAgIGlmIChtaW4gPj0gb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlKSByZXR1cm4gLy8gPC0gdGhlIG9ubHkgYXNzdW1wdGlvbiBhYm91dCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWBcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoXG4vLyAgICAgICAgIFwibG93ZXN0T2JzZXJ2ZXJTdGF0ZSBpcyB3cm9uZyBmb3IgXCIgK1xuLy8gICAgICAgICAgICAgbXNnICtcbi8vICAgICAgICAgICAgIFwiIGJlY2F1c2UgXCIgK1xuLy8gICAgICAgICAgICAgbWluICtcbi8vICAgICAgICAgICAgIFwiIDwgXCIgK1xuLy8gICAgICAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXG4vLyAgICAgKVxuLy8gfVxuXG4vKipcclxuICogTk9URTogY3VycmVudCBwcm9wYWdhdGlvbiBtZWNoYW5pc20gd2lsbCBpbiBjYXNlIG9mIHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYmVoYXZlIHVuZXhwZWN0ZWRseVxyXG4gKiBJdCB3aWxsIHByb3BhZ2F0ZSBjaGFuZ2VzIHRvIG9ic2VydmVycyBmcm9tIHByZXZpb3VzIHJ1blxyXG4gKiBJdCdzIGhhcmQgb3IgbWF5YmUgaW1wb3NzaWJsZSAod2l0aCByZWFzb25hYmxlIHBlcmYpIHRvIGdldCBpdCByaWdodCB3aXRoIGN1cnJlbnQgYXBwcm9hY2hcclxuICogSG9wZWZ1bGx5IHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYXJlbid0IGEgZmVhdHVyZSBwZW9wbGUgc2hvdWxkIGRlcGVuZCBvblxyXG4gKiBBbHNvIG1vc3QgYmFzaWMgdXNlIGNhc2VzIHNob3VsZCBiZSBva1xyXG4gKi9cbi8vIENhbGxlZCBieSBBdG9tIHdoZW4gaXRzIHZhbHVlIGNoYW5nZXNcblxuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlZChvYnNlcnZhYmxlKSB7XG4gIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgc3RhcnRcIik7XG4gIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV8pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfOyAvLyBJZGVhbGx5IHdlIHVzZSBmb3IuLm9mIGhlcmUsIGJ1dCB0aGUgZG93bmNvbXBpbGVkIHZlcnNpb24gaXMgcmVhbGx5IHNsb3cuLi5cblxuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZC5pc1RyYWNpbmdfICE9PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGQub25CZWNvbWVTdGFsZV8oKTtcbiAgICB9XG5cbiAgICBkLmRlcGVuZGVuY2llc1N0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXztcbiAgfSk7IC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgZW5kXCIpO1xufSAvLyBDYWxsZWQgYnkgQ29tcHV0ZWRWYWx1ZSB3aGVuIGl0IHJlY2FsY3VsYXRlIGFuZCBpdHMgdmFsdWUgY2hhbmdlZFxuXG5mdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQob2JzZXJ2YWJsZSkge1xuICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgc3RhcnRcIik7XG4gIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV8pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uUE9TU0lCTFlfU1RBTEVfKSB7XG4gICAgICBkLmRlcGVuZGVuY2llc1N0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXztcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBkLmlzVHJhY2luZ18gIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICAgIGxvZ1RyYWNlSW5mbyhkLCBvYnNlcnZhYmxlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXyAvLyB0aGlzIGhhcHBlbnMgZHVyaW5nIGNvbXB1dGluZyBvZiBgZGAsIGp1c3Qga2VlcCBsb3dlc3RPYnNlcnZlclN0YXRlIHVwIHRvIGRhdGUuXG4gICAgKSB7XG4gICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV87XG4gICAgfVxuICB9KTsgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIGVuZFwiKTtcbn0gLy8gVXNlZCBieSBjb21wdXRlZCB3aGVuIGl0cyBkZXBlbmRlbmN5IGNoYW5nZWQsIGJ1dCB3ZSBkb24ndCB3YW4ndCB0byBpbW1lZGlhdGVseSByZWNvbXB1dGUuXG5cbmZ1bmN0aW9uIHByb3BhZ2F0ZU1heWJlQ2hhbmdlZChvYnNlcnZhYmxlKSB7XG4gIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIHN0YXJ0XCIpO1xuICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyAhPT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uUE9TU0lCTFlfU1RBTEVfO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uUE9TU0lCTFlfU1RBTEVfO1xuICAgICAgZC5vbkJlY29tZVN0YWxlXygpO1xuICAgIH1cbiAgfSk7IC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIGVuZFwiKTtcbn1cblxuZnVuY3Rpb24gbG9nVHJhY2VJbmZvKGRlcml2YXRpb24sIG9ic2VydmFibGUpIHtcbiAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgZGVyaXZhdGlvbi5uYW1lXyArIFwiJyBpcyBpbnZhbGlkYXRlZCBkdWUgdG8gYSBjaGFuZ2UgaW46ICdcIiArIG9ic2VydmFibGUubmFtZV8gKyBcIidcIik7XG5cbiAgaWYgKGRlcml2YXRpb24uaXNUcmFjaW5nXyA9PT0gVHJhY2VNb2RlLkJSRUFLKSB7XG4gICAgdmFyIGxpbmVzID0gW107XG4gICAgcHJpbnREZXBUcmVlKGdldERlcGVuZGVuY3lUcmVlKGRlcml2YXRpb24pLCBsaW5lcywgMSk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgbmV3IEZ1bmN0aW9uKFwiZGVidWdnZXI7XFxuLypcXG5UcmFjaW5nICdcIiArIGRlcml2YXRpb24ubmFtZV8gKyBcIidcXG5cXG5Zb3UgYXJlIGVudGVyaW5nIHRoaXMgYnJlYWsgcG9pbnQgYmVjYXVzZSBkZXJpdmF0aW9uICdcIiArIGRlcml2YXRpb24ubmFtZV8gKyBcIicgaXMgYmVpbmcgdHJhY2VkIGFuZCAnXCIgKyBvYnNlcnZhYmxlLm5hbWVfICsgXCInIGlzIG5vdyBmb3JjaW5nIGl0IHRvIHVwZGF0ZS5cXG5KdXN0IGZvbGxvdyB0aGUgc3RhY2t0cmFjZSB5b3Ugc2hvdWxkIG5vdyBzZWUgaW4gdGhlIGRldnRvb2xzIHRvIHNlZSBwcmVjaXNlbHkgd2hhdCBwaWVjZSBvZiB5b3VyIGNvZGUgaXMgY2F1c2luZyB0aGlzIHVwZGF0ZVxcblRoZSBzdGFja2ZyYW1lIHlvdSBhcmUgbG9va2luZyBmb3IgaXMgYXQgbGVhc3QgfjYtOCBzdGFjay1mcmFtZXMgdXAuXFxuXFxuXCIgKyAoZGVyaXZhdGlvbiBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUgPyBkZXJpdmF0aW9uLmRlcml2YXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKC9bKl1cXC8vZywgXCIvXCIpIDogXCJcIikgKyBcIlxcblxcblRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoaXMgZGVyaXZhdGlvbiBhcmU6XFxuXFxuXCIgKyBsaW5lcy5qb2luKFwiXFxuXCIpICsgXCJcXG4qL1xcbiAgICBcIikoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludERlcFRyZWUodHJlZSwgbGluZXMsIGRlcHRoKSB7XG4gIGlmIChsaW5lcy5sZW5ndGggPj0gMTAwMCkge1xuICAgIGxpbmVzLnB1c2goXCIoYW5kIG1hbnkgbW9yZSlcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGluZXMucHVzaChcIlwiICsgXCJcXHRcIi5yZXBlYXQoZGVwdGggLSAxKSArIHRyZWUubmFtZSk7XG5cbiAgaWYgKHRyZWUuZGVwZW5kZW5jaWVzKSB7XG4gICAgdHJlZS5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBwcmludERlcFRyZWUoY2hpbGQsIGxpbmVzLCBkZXB0aCArIDEpO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBSZWFjdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xuICBmdW5jdGlvbiBSZWFjdGlvbihuYW1lXywgb25JbnZhbGlkYXRlXywgZXJyb3JIYW5kbGVyXywgcmVxdWlyZXNPYnNlcnZhYmxlXykge1xuICAgIGlmIChuYW1lXyA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQoKSA6IFwiUmVhY3Rpb25cIjtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMub25JbnZhbGlkYXRlXyA9IHZvaWQgMDtcbiAgICB0aGlzLmVycm9ySGFuZGxlcl8gPSB2b2lkIDA7XG4gICAgdGhpcy5yZXF1aXJlc09ic2VydmFibGVfID0gdm9pZCAwO1xuICAgIHRoaXMub2JzZXJ2aW5nXyA9IFtdO1xuICAgIHRoaXMubmV3T2JzZXJ2aW5nXyA9IFtdO1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXztcbiAgICB0aGlzLmRpZmZWYWx1ZV8gPSAwO1xuICAgIHRoaXMucnVuSWRfID0gMDtcbiAgICB0aGlzLnVuYm91bmREZXBzQ291bnRfID0gMDtcbiAgICB0aGlzLmlzRGlzcG9zZWRfID0gZmFsc2U7XG4gICAgdGhpcy5pc1NjaGVkdWxlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmlzVHJhY2tQZW5kaW5nXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNSdW5uaW5nXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNUcmFjaW5nXyA9IFRyYWNlTW9kZS5OT05FO1xuICAgIHRoaXMubmFtZV8gPSBuYW1lXztcbiAgICB0aGlzLm9uSW52YWxpZGF0ZV8gPSBvbkludmFsaWRhdGVfO1xuICAgIHRoaXMuZXJyb3JIYW5kbGVyXyA9IGVycm9ySGFuZGxlcl87XG4gICAgdGhpcy5yZXF1aXJlc09ic2VydmFibGVfID0gcmVxdWlyZXNPYnNlcnZhYmxlXztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSZWFjdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQmVjb21lU3RhbGVfID0gZnVuY3Rpb24gb25CZWNvbWVTdGFsZV8oKSB7XG4gICAgdGhpcy5zY2hlZHVsZV8oKTtcbiAgfTtcblxuICBfcHJvdG8uc2NoZWR1bGVfID0gZnVuY3Rpb24gc2NoZWR1bGVfKCkge1xuICAgIGlmICghdGhpcy5pc1NjaGVkdWxlZF8pIHtcbiAgICAgIHRoaXMuaXNTY2hlZHVsZWRfID0gdHJ1ZTtcbiAgICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdSZWFjdGlvbnMucHVzaCh0aGlzKTtcbiAgICAgIHJ1blJlYWN0aW9ucygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaXNTY2hlZHVsZWQgPSBmdW5jdGlvbiBpc1NjaGVkdWxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NjaGVkdWxlZF87XG4gIH1cbiAgLyoqXHJcbiAgICogaW50ZXJuYWwsIHVzZSBzY2hlZHVsZSgpIGlmIHlvdSBpbnRlbmQgdG8ga2ljayBvZmYgYSByZWFjdGlvblxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJ1blJlYWN0aW9uXyA9IGZ1bmN0aW9uIHJ1blJlYWN0aW9uXygpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZF8pIHtcbiAgICAgIHN0YXJ0QmF0Y2goKTtcbiAgICAgIHRoaXMuaXNTY2hlZHVsZWRfID0gZmFsc2U7XG4gICAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dDtcbiAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHRoaXM7XG5cbiAgICAgIGlmIChzaG91bGRDb21wdXRlKHRoaXMpKSB7XG4gICAgICAgIHRoaXMuaXNUcmFja1BlbmRpbmdfID0gdHJ1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMub25JbnZhbGlkYXRlXygpO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiB0aGlzLmlzVHJhY2tQZW5kaW5nXyAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgLy8gb25JbnZhbGlkYXRlIGRpZG4ndCB0cmlnZ2VyIHRyYWNrIHJpZ2h0IGF3YXkuLlxuICAgICAgICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgICAgICAgdHlwZTogXCJzY2hlZHVsZWQtcmVhY3Rpb25cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5yZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb25fKGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHByZXY7XG4gICAgICBlbmRCYXRjaCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udHJhY2sgPSBmdW5jdGlvbiB0cmFjayhmbikge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWRfKSB7XG4gICAgICByZXR1cm47IC8vIGNvbnNvbGUud2FybihcIlJlYWN0aW9uIGFscmVhZHkgZGlzcG9zZWRcIikgLy8gTm90ZTogTm90IGEgd2FybmluZyAvIGVycm9yIGluIG1vYnggNCBlaXRoZXJcbiAgICB9XG5cbiAgICBzdGFydEJhdGNoKCk7XG4gICAgdmFyIG5vdGlmeSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgIHZhciBzdGFydFRpbWU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeSkge1xuICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgdHlwZTogXCJyZWFjdGlvblwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmlzUnVubmluZ18gPSB0cnVlO1xuICAgIHZhciBwcmV2UmVhY3Rpb24gPSBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQ7IC8vIHJlYWN0aW9ucyBjb3VsZCBjcmVhdGUgcmVhY3Rpb25zLi4uXG5cbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQgPSB0aGlzO1xuICAgIHZhciByZXN1bHQgPSB0cmFja0Rlcml2ZWRGdW5jdGlvbih0aGlzLCBmbiwgdW5kZWZpbmVkKTtcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQgPSBwcmV2UmVhY3Rpb247XG4gICAgdGhpcy5pc1J1bm5pbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1RyYWNrUGVuZGluZ18gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmlzRGlzcG9zZWRfKSB7XG4gICAgICAvLyBkaXNwb3NlZCBkdXJpbmcgbGFzdCBydW4uIENsZWFuIHVwIGV2ZXJ5dGhpbmcgdGhhdCB3YXMgYm91bmQgYWZ0ZXIgdGhlIGRpc3Bvc2UgY2FsbC5cbiAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChpc0NhdWdodEV4Y2VwdGlvbihyZXN1bHQpKSB7XG4gICAgICB0aGlzLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbl8ocmVzdWx0LmNhdXNlKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeSkge1xuICAgICAgc3B5UmVwb3J0RW5kKHtcbiAgICAgICAgdGltZTogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5kQmF0Y2goKTtcbiAgfTtcblxuICBfcHJvdG8ucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uXyA9IGZ1bmN0aW9uIHJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbl8oZXJyb3IpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZXJyb3JIYW5kbGVyXykge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXJfKGVycm9yLCB0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcykge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlttb2J4XSBFbmNvdW50ZXJlZCBhbiB1bmNhdWdodCBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGJ5IGEgcmVhY3Rpb24gb3Igb2JzZXJ2ZXIgY29tcG9uZW50LCBpbjogJ1wiICsgdGhpcyArIFwiJ1wiIDogXCJbbW9ieF0gdW5jYXVnaHQgZXJyb3IgaW4gJ1wiICsgdGhpcyArIFwiJ1wiO1xuXG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGVycm9yKTtcbiAgICAgIC8qKiBJZiBkZWJ1Z2dpbmcgYnJvdWdodCB5b3UgaGVyZSwgcGxlYXNlLCByZWFkIHRoZSBhYm92ZSBtZXNzYWdlIDotKS4gVG54ISAqL1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gKGVycm9yIGluIHJlYWN0aW9uICdcIiArIHRoaXMubmFtZV8gKyBcIicgc3VwcHJlc3NlZCwgZml4IGVycm9yIG9mIGNhdXNpbmcgYWN0aW9uIGJlbG93KVwiKTtcbiAgICB9IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICBzcHlSZXBvcnQoe1xuICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIGVycm9yOiBcIlwiICsgZXJyb3JcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICByZXR1cm4gZihlcnJvciwgX3RoaXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZF8pIHtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZF8gPSB0cnVlO1xuXG4gICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nXykge1xuICAgICAgICAvLyBpZiBkaXNwb3NlZCB3aGlsZSBydW5uaW5nLCBjbGVhbiB1cCBsYXRlci4gTWF5YmUgbm90IG9wdGltYWwsIGJ1dCByYXJlIGNhc2VcbiAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICAgICAgZW5kQmF0Y2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldERpc3Bvc2VyXyA9IGZ1bmN0aW9uIGdldERpc3Bvc2VyXygpIHtcbiAgICB2YXIgciA9IHRoaXMuZGlzcG9zZS5iaW5kKHRoaXMpO1xuICAgIHJbJG1vYnhdID0gdGhpcztcbiAgICByZXR1cm4gcjtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJSZWFjdGlvbltcIiArIHRoaXMubmFtZV8gKyBcIl1cIjtcbiAgfTtcblxuICBfcHJvdG8udHJhY2UgPSBmdW5jdGlvbiB0cmFjZSQxKGVudGVyQnJlYWtQb2ludCkge1xuICAgIGlmIChlbnRlckJyZWFrUG9pbnQgPT09IHZvaWQgMCkge1xuICAgICAgZW50ZXJCcmVha1BvaW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJhY2UodGhpcywgZW50ZXJCcmVha1BvaW50KTtcbiAgfTtcblxuICByZXR1cm4gUmVhY3Rpb247XG59KCk7XG5mdW5jdGlvbiBvblJlYWN0aW9uRXJyb3IoaGFuZGxlcikge1xuICBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaWR4ID0gZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG4gIH07XG59XG4vKipcclxuICogTWFnaWMgbnVtYmVyIGFsZXJ0IVxyXG4gKiBEZWZpbmVzIHdpdGhpbiBob3cgbWFueSB0aW1lcyBhIHJlYWN0aW9uIGlzIGFsbG93ZWQgdG8gcmUtdHJpZ2dlciBpdHNlbGZcclxuICogdW50aWwgaXQgaXMgYXNzdW1lZCB0aGF0IHRoaXMgaXMgZ29ubmEgYmUgYSBuZXZlciBlbmRpbmcgbG9vcC4uLlxyXG4gKi9cblxudmFyIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TID0gMTAwO1xuXG52YXIgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiByZWFjdGlvblNjaGVkdWxlcihmKSB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5mdW5jdGlvbiBydW5SZWFjdGlvbnMoKSB7XG4gIC8vIFRyYW1wb2xpbmluZywgaWYgcnVuUmVhY3Rpb25zIGFyZSBhbHJlYWR5IHJ1bm5pbmcsIG5ldyByZWFjdGlvbnMgd2lsbCBiZSBwaWNrZWQgdXBcbiAgaWYgKGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwIHx8IGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlYWN0aW9uU2NoZWR1bGVyKHJ1blJlYWN0aW9uc0hlbHBlcik7XG59XG5cbmZ1bmN0aW9uIHJ1blJlYWN0aW9uc0hlbHBlcigpIHtcbiAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gdHJ1ZTtcbiAgdmFyIGFsbFJlYWN0aW9ucyA9IGdsb2JhbFN0YXRlLnBlbmRpbmdSZWFjdGlvbnM7XG4gIHZhciBpdGVyYXRpb25zID0gMDsgLy8gV2hpbGUgcnVubmluZyByZWFjdGlvbnMsIG5ldyByZWFjdGlvbnMgbWlnaHQgYmUgdHJpZ2dlcmVkLlxuICAvLyBIZW5jZSB3ZSB3b3JrIHdpdGggdHdvIHZhcmlhYmxlcyBhbmQgY2hlY2sgd2hldGhlclxuICAvLyB3ZSBjb252ZXJnZSB0byBubyByZW1haW5pbmcgcmVhY3Rpb25zIGFmdGVyIGEgd2hpbGUuXG5cbiAgd2hpbGUgKGFsbFJlYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKCsraXRlcmF0aW9ucyA9PT0gTUFYX1JFQUNUSU9OX0lURVJBVElPTlMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJSZWFjdGlvbiBkb2Vzbid0IGNvbnZlcmdlIHRvIGEgc3RhYmxlIHN0YXRlIGFmdGVyIFwiICsgTUFYX1JFQUNUSU9OX0lURVJBVElPTlMgKyBcIiBpdGVyYXRpb25zLlwiICsgKFwiIFByb2JhYmx5IHRoZXJlIGlzIGEgY3ljbGUgaW4gdGhlIHJlYWN0aXZlIGZ1bmN0aW9uOiBcIiArIGFsbFJlYWN0aW9uc1swXSkgOiBcIlttb2J4XSBjeWNsZSBpbiByZWFjdGlvbjogXCIgKyBhbGxSZWFjdGlvbnNbMF0pO1xuICAgICAgYWxsUmVhY3Rpb25zLnNwbGljZSgwKTsgLy8gY2xlYXIgcmVhY3Rpb25zXG4gICAgfVxuXG4gICAgdmFyIHJlbWFpbmluZ1JlYWN0aW9ucyA9IGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJlbWFpbmluZ1JlYWN0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJlbWFpbmluZ1JlYWN0aW9uc1tpXS5ydW5SZWFjdGlvbl8oKTtcbiAgICB9XG4gIH1cblxuICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbn1cblxudmFyIGlzUmVhY3Rpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIlJlYWN0aW9uXCIsIFJlYWN0aW9uKTtcbmZ1bmN0aW9uIHNldFJlYWN0aW9uU2NoZWR1bGVyKGZuKSB7XG4gIHZhciBiYXNlU2NoZWR1bGVyID0gcmVhY3Rpb25TY2hlZHVsZXI7XG5cbiAgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiByZWFjdGlvblNjaGVkdWxlcihmKSB7XG4gICAgcmV0dXJuIGZuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBiYXNlU2NoZWR1bGVyKGYpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc1NweUVuYWJsZWQoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgISFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoO1xufVxuZnVuY3Rpb24gc3B5UmVwb3J0KGV2ZW50KSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGNhbiBkbyB0aGUgcmVzdFxuXG5cbiAgaWYgKCFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycztcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpO1xuICB9XG59XG5mdW5jdGlvbiBzcHlSZXBvcnRTdGFydChldmVudCkge1xuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNoYW5nZSA9IF9leHRlbmRzKHt9LCBldmVudCwge1xuICAgIHNweVJlcG9ydFN0YXJ0OiB0cnVlXG4gIH0pO1xuXG4gIHNweVJlcG9ydChjaGFuZ2UpO1xufVxudmFyIEVORF9FVkVOVCA9IHtcbiAgdHlwZTogXCJyZXBvcnQtZW5kXCIsXG4gIHNweVJlcG9ydEVuZDogdHJ1ZVxufTtcbmZ1bmN0aW9uIHNweVJlcG9ydEVuZChjaGFuZ2UpIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGFuZ2UpIHtcbiAgICBzcHlSZXBvcnQoX2V4dGVuZHMoe30sIGNoYW5nZSwge1xuICAgICAgdHlwZTogXCJyZXBvcnQtZW5kXCIsXG4gICAgICBzcHlSZXBvcnRFbmQ6IHRydWVcbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgc3B5UmVwb3J0KEVORF9FVkVOVCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNweShsaXN0ZW5lcikge1xuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYnguc3B5XSBJcyBhIG5vLW9wIGluIHByb2R1Y3Rpb24gYnVpbGRzXCIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzID0gZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgQUNUSU9OID0gXCJhY3Rpb25cIjtcbnZhciBBQ1RJT05fQk9VTkQgPSBcImFjdGlvbi5ib3VuZFwiO1xudmFyIEFVVE9BQ1RJT04gPSBcImF1dG9BY3Rpb25cIjtcbnZhciBBVVRPQUNUSU9OX0JPVU5EID0gXCJhdXRvQWN0aW9uLmJvdW5kXCI7XG52YXIgREVGQVVMVF9BQ1RJT05fTkFNRSA9IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xudmFyIGFjdGlvbkFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBQ1RJT04pO1xudmFyIGFjdGlvbkJvdW5kQW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVBY3Rpb25Bbm5vdGF0aW9uKEFDVElPTl9CT1VORCwge1xuICBib3VuZDogdHJ1ZVxufSk7XG52YXIgYXV0b0FjdGlvbkFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBVVRPQUNUSU9OLCB7XG4gIGF1dG9BY3Rpb246IHRydWVcbn0pO1xudmFyIGF1dG9BY3Rpb25Cb3VuZEFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBVVRPQUNUSU9OX0JPVU5ELCB7XG4gIGF1dG9BY3Rpb246IHRydWUsXG4gIGJvdW5kOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uRmFjdG9yeShhdXRvQWN0aW9uKSB7XG4gIHZhciByZXMgPSBmdW5jdGlvbiBhY3Rpb24oYXJnMSwgYXJnMikge1xuICAgIC8vIGFjdGlvbihmbigpIHt9KVxuICAgIGlmIChpc0Z1bmN0aW9uKGFyZzEpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKGFyZzEubmFtZSB8fCBERUZBVUxUX0FDVElPTl9OQU1FLCBhcmcxLCBhdXRvQWN0aW9uKTtcbiAgICB9IC8vIGFjdGlvbihcIm5hbWVcIiwgZm4oKSB7fSlcblxuXG4gICAgaWYgKGlzRnVuY3Rpb24oYXJnMikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMSwgYXJnMiwgYXV0b0FjdGlvbik7XG4gICAgfSAvLyBAYWN0aW9uXG5cblxuICAgIGlmIChpc1N0cmluZ2lzaChhcmcyKSkge1xuICAgICAgcmV0dXJuIHN0b3JlQW5ub3RhdGlvbihhcmcxLCBhcmcyLCBhdXRvQWN0aW9uID8gYXV0b0FjdGlvbkFubm90YXRpb24gOiBhY3Rpb25Bbm5vdGF0aW9uKTtcbiAgICB9IC8vIGFjdGlvbihcIm5hbWVcIikgJiBAYWN0aW9uKFwibmFtZVwiKVxuXG5cbiAgICBpZiAoaXNTdHJpbmdpc2goYXJnMSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGNyZWF0ZUFjdGlvbkFubm90YXRpb24oYXV0b0FjdGlvbiA/IEFVVE9BQ1RJT04gOiBBQ1RJT04sIHtcbiAgICAgICAgbmFtZTogYXJnMSxcbiAgICAgICAgYXV0b0FjdGlvbjogYXV0b0FjdGlvblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGRpZShcIkludmFsaWQgYXJndW1lbnRzIGZvciBgYWN0aW9uYFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIGFjdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVBY3Rpb25GYWN0b3J5KGZhbHNlKTtcbk9iamVjdC5hc3NpZ24oYWN0aW9uLCBhY3Rpb25Bbm5vdGF0aW9uKTtcbnZhciBhdXRvQWN0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUFjdGlvbkZhY3RvcnkodHJ1ZSk7XG5PYmplY3QuYXNzaWduKGF1dG9BY3Rpb24sIGF1dG9BY3Rpb25Bbm5vdGF0aW9uKTtcbmFjdGlvbi5ib3VuZCA9IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGFjdGlvbkJvdW5kQW5ub3RhdGlvbik7XG5hdXRvQWN0aW9uLmJvdW5kID0gLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24oYXV0b0FjdGlvbkJvdW5kQW5ub3RhdGlvbik7XG5mdW5jdGlvbiBydW5JbkFjdGlvbihmbikge1xuICByZXR1cm4gZXhlY3V0ZUFjdGlvbihmbi5uYW1lIHx8IERFRkFVTFRfQUNUSU9OX05BTUUsIGZhbHNlLCBmbiwgdGhpcywgdW5kZWZpbmVkKTtcbn1cbmZ1bmN0aW9uIGlzQWN0aW9uKHRoaW5nKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKHRoaW5nKSAmJiB0aGluZy5pc01vYnhBY3Rpb24gPT09IHRydWU7XG59XG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmFtZWQgcmVhY3RpdmUgdmlldyBhbmQga2VlcHMgaXQgYWxpdmUsIHNvIHRoYXQgdGhlIHZpZXcgaXMgYWx3YXlzXHJcbiAqIHVwZGF0ZWQgaWYgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgY2hhbmdlcywgZXZlbiB3aGVuIHRoZSB2aWV3IGlzIG5vdCBmdXJ0aGVyIHVzZWQgYnkgc29tZXRoaW5nIGVsc2UuXHJcbiAqIEBwYXJhbSB2aWV3IFRoZSByZWFjdGl2ZSB2aWV3XHJcbiAqIEByZXR1cm5zIGRpc3Bvc2VyIGZ1bmN0aW9uLCB3aGljaCBjYW4gYmUgdXNlZCB0byBzdG9wIHRoZSB2aWV3IGZyb20gYmVpbmcgdXBkYXRlZCBpbiB0aGUgZnV0dXJlLlxyXG4gKi9cblxuZnVuY3Rpb24gYXV0b3J1bih2aWV3LCBvcHRzKSB7XG4gIHZhciBfb3B0cyRuYW1lLCBfb3B0cztcblxuICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0cyA9IEVNUFRZX09CSkVDVDtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24odmlldykpIHtcbiAgICAgIGRpZShcIkF1dG9ydW4gZXhwZWN0cyBhIGZ1bmN0aW9uIGFzIGZpcnN0IGFyZ3VtZW50XCIpO1xuICAgIH1cblxuICAgIGlmIChpc0FjdGlvbih2aWV3KSkge1xuICAgICAgZGllKFwiQXV0b3J1biBkb2VzIG5vdCBhY2NlcHQgYWN0aW9ucyBzaW5jZSBhY3Rpb25zIGFyZSB1bnRyYWNrYWJsZVwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgbmFtZSA9IChfb3B0cyRuYW1lID0gKF9vcHRzID0gb3B0cykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRzLm5hbWUpICE9IG51bGwgPyBfb3B0cyRuYW1lIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdmlldy5uYW1lIHx8IFwiQXV0b3J1bkBcIiArIGdldE5leHRJZCgpIDogXCJBdXRvcnVuXCI7XG4gIHZhciBydW5TeW5jID0gIW9wdHMuc2NoZWR1bGVyICYmICFvcHRzLmRlbGF5O1xuICB2YXIgcmVhY3Rpb247XG5cbiAgaWYgKHJ1blN5bmMpIHtcbiAgICAvLyBub3JtYWwgYXV0b3J1blxuICAgIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhY2socmVhY3Rpb25SdW5uZXIpO1xuICAgIH0sIG9wdHMub25FcnJvciwgb3B0cy5yZXF1aXJlc09ic2VydmFibGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBzY2hlZHVsZXIgPSBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKTsgLy8gZGVib3VuY2VkIGF1dG9ydW5cblxuICAgIHZhciBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgICAgaXNTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICBzY2hlZHVsZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlzU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoIXJlYWN0aW9uLmlzRGlzcG9zZWRfKSB7XG4gICAgICAgICAgICByZWFjdGlvbi50cmFjayhyZWFjdGlvblJ1bm5lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBvcHRzLm9uRXJyb3IsIG9wdHMucmVxdWlyZXNPYnNlcnZhYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWN0aW9uUnVubmVyKCkge1xuICAgIHZpZXcocmVhY3Rpb24pO1xuICB9XG5cbiAgcmVhY3Rpb24uc2NoZWR1bGVfKCk7XG4gIHJldHVybiByZWFjdGlvbi5nZXREaXNwb3Nlcl8oKTtcbn1cblxudmFyIHJ1biA9IGZ1bmN0aW9uIHJ1bihmKSB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKSB7XG4gIHJldHVybiBvcHRzLnNjaGVkdWxlciA/IG9wdHMuc2NoZWR1bGVyIDogb3B0cy5kZWxheSA/IGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZiwgb3B0cy5kZWxheSk7XG4gIH0gOiBydW47XG59XG5cbmZ1bmN0aW9uIHJlYWN0aW9uKGV4cHJlc3Npb24sIGVmZmVjdCwgb3B0cykge1xuICB2YXIgX29wdHMkbmFtZTI7XG5cbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSBFTVBUWV9PQkpFQ1Q7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGV4cHJlc3Npb24pIHx8ICFpc0Z1bmN0aW9uKGVmZmVjdCkpIHtcbiAgICAgIGRpZShcIkZpcnN0IGFuZCBzZWNvbmQgYXJndW1lbnQgdG8gcmVhY3Rpb24gc2hvdWxkIGJlIGZ1bmN0aW9uc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzUGxhaW5PYmplY3Qob3B0cykpIHtcbiAgICAgIGRpZShcIlRoaXJkIGFyZ3VtZW50IG9mIHJlYWN0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBuYW1lID0gKF9vcHRzJG5hbWUyID0gb3B0cy5uYW1lKSAhPSBudWxsID8gX29wdHMkbmFtZTIgOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCkgOiBcIlJlYWN0aW9uXCI7XG4gIHZhciBlZmZlY3RBY3Rpb24gPSBhY3Rpb24obmFtZSwgb3B0cy5vbkVycm9yID8gd3JhcEVycm9ySGFuZGxlcihvcHRzLm9uRXJyb3IsIGVmZmVjdCkgOiBlZmZlY3QpO1xuICB2YXIgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheTtcbiAgdmFyIHNjaGVkdWxlciA9IGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpO1xuICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIG9sZFZhbHVlO1xuICB2YXIgZXF1YWxzID0gb3B0cy5jb21wYXJlU3RydWN0dXJhbCA/IGNvbXBhcmVyLnN0cnVjdHVyYWwgOiBvcHRzLmVxdWFscyB8fCBjb21wYXJlcltcImRlZmF1bHRcIl07XG4gIHZhciByID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZmlyc3RUaW1lIHx8IHJ1blN5bmMpIHtcbiAgICAgIHJlYWN0aW9uUnVubmVyKCk7XG4gICAgfSBlbHNlIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNjaGVkdWxlcihyZWFjdGlvblJ1bm5lcik7XG4gICAgfVxuICB9LCBvcHRzLm9uRXJyb3IsIG9wdHMucmVxdWlyZXNPYnNlcnZhYmxlKTtcblxuICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcbiAgICBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHIuaXNEaXNwb3NlZF8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHIudHJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5leHRWYWx1ZSA9IGFsbG93U3RhdGVDaGFuZ2VzKGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBleHByZXNzaW9uKHIpO1xuICAgICAgfSk7XG4gICAgICBjaGFuZ2VkID0gZmlyc3RUaW1lIHx8ICFlcXVhbHModmFsdWUsIG5leHRWYWx1ZSk7XG4gICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgICAgdmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgfSk7XG5cbiAgICBpZiAoZmlyc3RUaW1lICYmIG9wdHMuZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICBlZmZlY3RBY3Rpb24odmFsdWUsIG9sZFZhbHVlLCByKTtcbiAgICB9IGVsc2UgaWYgKCFmaXJzdFRpbWUgJiYgY2hhbmdlZCkge1xuICAgICAgZWZmZWN0QWN0aW9uKHZhbHVlLCBvbGRWYWx1ZSwgcik7XG4gICAgfVxuXG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH1cblxuICByLnNjaGVkdWxlXygpO1xuICByZXR1cm4gci5nZXREaXNwb3Nlcl8oKTtcbn1cblxuZnVuY3Rpb24gd3JhcEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIsIGJhc2VGbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYmFzZUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JIYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgT05fQkVDT01FX09CU0VSVkVEID0gXCJvbkJPXCI7XG52YXIgT05fQkVDT01FX1VOT0JTRVJWRUQgPSBcIm9uQlVPXCI7XG5mdW5jdGlvbiBvbkJlY29tZU9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gIHJldHVybiBpbnRlcmNlcHRIb29rKE9OX0JFQ09NRV9PQlNFUlZFRCwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuZnVuY3Rpb24gb25CZWNvbWVVbm9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gIHJldHVybiBpbnRlcmNlcHRIb29rKE9OX0JFQ09NRV9VTk9CU0VSVkVELCB0aGluZywgYXJnMiwgYXJnMyk7XG59XG5cbmZ1bmN0aW9uIGludGVyY2VwdEhvb2soaG9vaywgdGhpbmcsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIGF0b20gPSB0eXBlb2YgYXJnMyA9PT0gXCJmdW5jdGlvblwiID8gZ2V0QXRvbSh0aGluZywgYXJnMikgOiBnZXRBdG9tKHRoaW5nKTtcbiAgdmFyIGNiID0gaXNGdW5jdGlvbihhcmczKSA/IGFyZzMgOiBhcmcyO1xuICB2YXIgbGlzdGVuZXJzS2V5ID0gaG9vayArIFwiTFwiO1xuXG4gIGlmIChhdG9tW2xpc3RlbmVyc0tleV0pIHtcbiAgICBhdG9tW2xpc3RlbmVyc0tleV0uYWRkKGNiKTtcbiAgfSBlbHNlIHtcbiAgICBhdG9tW2xpc3RlbmVyc0tleV0gPSBuZXcgU2V0KFtjYl0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG9va0xpc3RlbmVycyA9IGF0b21bbGlzdGVuZXJzS2V5XTtcblxuICAgIGlmIChob29rTGlzdGVuZXJzKSB7XG4gICAgICBob29rTGlzdGVuZXJzW1wiZGVsZXRlXCJdKGNiKTtcblxuICAgICAgaWYgKGhvb2tMaXN0ZW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBkZWxldGUgYXRvbVtsaXN0ZW5lcnNLZXldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxudmFyIE5FVkVSID0gXCJuZXZlclwiO1xudmFyIEFMV0FZUyA9IFwiYWx3YXlzXCI7XG52YXIgT0JTRVJWRUQgPSBcIm9ic2VydmVkXCI7IC8vIGNvbnN0IElGX0FWQUlMQUJMRSA9IFwiaWZhdmFpbGFibGVcIlxuXG5mdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5pc29sYXRlR2xvYmFsU3RhdGUgPT09IHRydWUpIHtcbiAgICBpc29sYXRlR2xvYmFsU3RhdGUoKTtcbiAgfVxuXG4gIHZhciB1c2VQcm94aWVzID0gb3B0aW9ucy51c2VQcm94aWVzLFxuICAgICAgZW5mb3JjZUFjdGlvbnMgPSBvcHRpb25zLmVuZm9yY2VBY3Rpb25zO1xuXG4gIGlmICh1c2VQcm94aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbG9iYWxTdGF0ZS51c2VQcm94aWVzID0gdXNlUHJveGllcyA9PT0gQUxXQVlTID8gdHJ1ZSA6IHVzZVByb3hpZXMgPT09IE5FVkVSID8gZmFsc2UgOiB0eXBlb2YgUHJveHkgIT09IFwidW5kZWZpbmVkXCI7XG4gIH1cblxuICBpZiAodXNlUHJveGllcyA9PT0gXCJpZmF2YWlsYWJsZVwiKSB7XG4gICAgZ2xvYmFsU3RhdGUudmVyaWZ5UHJveGllcyA9IHRydWU7XG4gIH1cblxuICBpZiAoZW5mb3JjZUFjdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBlYSA9IGVuZm9yY2VBY3Rpb25zID09PSBBTFdBWVMgPyBBTFdBWVMgOiBlbmZvcmNlQWN0aW9ucyA9PT0gT0JTRVJWRUQ7XG4gICAgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPSBlYTtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGVhID09PSB0cnVlIHx8IGVhID09PSBBTFdBWVMgPyBmYWxzZSA6IHRydWU7XG4gIH1cbiAgW1wiY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uXCIsIFwicmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGVcIiwgXCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblwiLCBcImRpc2FibGVFcnJvckJvdW5kYXJpZXNcIiwgXCJzYWZlRGVzY3JpcHRvcnNcIl0uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBnbG9iYWxTdGF0ZVtrZXldID0gISFvcHRpb25zW2tleV07XG4gICAgfVxuICB9KTtcbiAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzID0gIWdsb2JhbFN0YXRlLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9PT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUud2FybihcIldBUk5JTkc6IERlYnVnIGZlYXR1cmUgb25seS4gTW9iWCB3aWxsIE5PVCByZWNvdmVyIGZyb20gZXJyb3JzIHdoZW4gYGRpc2FibGVFcnJvckJvdW5kYXJpZXNgIGlzIGVuYWJsZWQuXCIpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucmVhY3Rpb25TY2hlZHVsZXIpIHtcbiAgICBzZXRSZWFjdGlvblNjaGVkdWxlcihvcHRpb25zLnJlYWN0aW9uU2NoZWR1bGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRlbmRPYnNlcnZhYmxlKHRhcmdldCwgcHJvcGVydGllcywgYW5ub3RhdGlvbnMsIG9wdGlvbnMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gNCkge1xuICAgICAgZGllKFwiJ2V4dGVuZE9ic2VydmFibGUnIGV4cGVjdGVkIDItNCBhcmd1bWVudHNcIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGRpZShcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RzIGFuIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRhcmdldCkpIHtcbiAgICAgIGRpZShcIidleHRlbmRPYnNlcnZhYmxlJyBzaG91bGQgbm90IGJlIHVzZWQgb24gbWFwcywgdXNlIG1hcC5tZXJnZSBpbnN0ZWFkXCIpO1xuICAgIH1cblxuICAgIGlmICghaXNQbGFpbk9iamVjdChwcm9wZXJ0aWVzKSkge1xuICAgICAgZGllKFwiJ2V4dGVuZE9ic2VydmFibGUnIG9ubHkgYWNjZXB0cyBwbGFpbiBvYmplY3RzIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlKHByb3BlcnRpZXMpIHx8IGlzT2JzZXJ2YWJsZShhbm5vdGF0aW9ucykpIHtcbiAgICAgIGRpZShcIkV4dGVuZGluZyBhbiBvYmplY3Qgd2l0aCBhbm90aGVyIG9ic2VydmFibGUgKG9iamVjdCkgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9XG4gIH0gLy8gUHVsbCBkZXNjcmlwdG9ycyBmaXJzdCwgc28gd2UgZG9uJ3QgaGF2ZSB0byBkZWFsIHdpdGggcHJvcHMgYWRkZWQgYnkgYWRtaW5pc3RyYXRpb24gKCRtb2J4KVxuXG5cbiAgdmFyIGRlc2NyaXB0b3JzID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhwcm9wZXJ0aWVzKTtcbiAgdmFyIGFkbSA9IGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG9wdGlvbnMpWyRtb2J4XTtcbiAgc3RhcnRCYXRjaCgpO1xuXG4gIHRyeSB7XG4gICAgb3duS2V5cyhkZXNjcmlwdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBhZG0uZXh0ZW5kXyhrZXksIGRlc2NyaXB0b3JzW2tleV0sIC8vIG11c3QgcGFzcyBcInVuZGVmaW5lZFwiIGZvciB7IGtleTogdW5kZWZpbmVkIH1cbiAgICAgICFhbm5vdGF0aW9ucyA/IHRydWUgOiBrZXkgaW4gYW5ub3RhdGlvbnMgPyBhbm5vdGF0aW9uc1trZXldIDogdHJ1ZSk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgZW5kQmF0Y2goKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY3lUcmVlKHRoaW5nLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gbm9kZVRvRGVwZW5kZW5jeVRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbn1cblxuZnVuY3Rpb24gbm9kZVRvRGVwZW5kZW5jeVRyZWUobm9kZSkge1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIG5hbWU6IG5vZGUubmFtZV9cbiAgfTtcblxuICBpZiAobm9kZS5vYnNlcnZpbmdfICYmIG5vZGUub2JzZXJ2aW5nXy5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0LmRlcGVuZGVuY2llcyA9IHVuaXF1ZShub2RlLm9ic2VydmluZ18pLm1hcChub2RlVG9EZXBlbmRlbmN5VHJlZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlclRyZWUodGhpbmcsIHByb3BlcnR5KSB7XG4gIHJldHVybiBub2RlVG9PYnNlcnZlclRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbn1cblxuZnVuY3Rpb24gbm9kZVRvT2JzZXJ2ZXJUcmVlKG5vZGUpIHtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBuYW1lOiBub2RlLm5hbWVfXG4gIH07XG5cbiAgaWYgKGhhc09ic2VydmVycyhub2RlKSkge1xuICAgIHJlc3VsdC5vYnNlcnZlcnMgPSBBcnJheS5mcm9tKGdldE9ic2VydmVycyhub2RlKSkubWFwKG5vZGVUb09ic2VydmVyVHJlZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB1bmlxdWUobGlzdCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGxpc3QpKTtcbn1cblxudmFyIGdlbmVyYXRvcklkID0gMDtcbmZ1bmN0aW9uIEZsb3dDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgdGhpcy5tZXNzYWdlID0gXCJGTE9XX0NBTkNFTExFRFwiO1xufVxuRmxvd0NhbmNlbGxhdGlvbkVycm9yLnByb3RvdHlwZSA9IC8qI19fUFVSRV9fKi9PYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5mdW5jdGlvbiBpc0Zsb3dDYW5jZWxsYXRpb25FcnJvcihlcnJvcikge1xuICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBGbG93Q2FuY2VsbGF0aW9uRXJyb3I7XG59XG52YXIgZmxvd0Fubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlRmxvd0Fubm90YXRpb24oXCJmbG93XCIpO1xudmFyIGZsb3dCb3VuZEFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlRmxvd0Fubm90YXRpb24oXCJmbG93LmJvdW5kXCIsIHtcbiAgYm91bmQ6IHRydWVcbn0pO1xudmFyIGZsb3cgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmFzc2lnbihmdW5jdGlvbiBmbG93KGFyZzEsIGFyZzIpIHtcbiAgLy8gQGZsb3dcbiAgaWYgKGlzU3RyaW5naXNoKGFyZzIpKSB7XG4gICAgcmV0dXJuIHN0b3JlQW5ub3RhdGlvbihhcmcxLCBhcmcyLCBmbG93QW5ub3RhdGlvbik7XG4gIH0gLy8gZmxvdyhmbilcblxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgIGRpZShcIkZsb3cgZXhwZWN0cyBzaW5nbGUgYXJndW1lbnQgd2l0aCBnZW5lcmF0b3IgZnVuY3Rpb25cIik7XG4gIH1cblxuICB2YXIgZ2VuZXJhdG9yID0gYXJnMTtcbiAgdmFyIG5hbWUgPSBnZW5lcmF0b3IubmFtZSB8fCBcIjx1bm5hbWVkIGZsb3c+XCI7IC8vIEltcGxlbWVudGF0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90ai9jby9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4gIHZhciByZXMgPSBmdW5jdGlvbiByZXMoKSB7XG4gICAgdmFyIGN0eCA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHJ1bklkID0gKytnZW5lcmF0b3JJZDtcbiAgICB2YXIgZ2VuID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSBpbml0XCIsIGdlbmVyYXRvcikuYXBwbHkoY3R4LCBhcmdzKTtcbiAgICB2YXIgcmVqZWN0b3I7XG4gICAgdmFyIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHN0ZXBJZCA9IDA7XG4gICAgICByZWplY3RvciA9IHJlamVjdDtcblxuICAgICAgZnVuY3Rpb24gb25GdWxmaWxsZWQocmVzKSB7XG4gICAgICAgIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgcmV0O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0ID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSB5aWVsZCBcIiArIHN0ZXBJZCsrLCBnZW4ubmV4dCkuY2FsbChnZW4sIHJlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dChyZXQpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGVkKGVycikge1xuICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHJldDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuW1widGhyb3dcIl0pLmNhbGwoZ2VuLCBlcnIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQocmV0KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbmV4dChyZXQpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmV0ID09IG51bGwgPyB2b2lkIDAgOiByZXQudGhlbikpIHtcbiAgICAgICAgICAvLyBhbiBhc3luYyBpdGVyYXRvclxuICAgICAgICAgIHJldC50aGVuKG5leHQsIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldC5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUocmV0LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBlbmRpbmdQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJldC52YWx1ZSk7XG4gICAgICAgIHJldHVybiBwZW5kaW5nUHJvbWlzZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgb25GdWxmaWxsZWQodW5kZWZpbmVkKTsgLy8ga2ljayBvZmYgdGhlIHByb2Nlc3NcbiAgICB9KTtcbiAgICBwcm9taXNlLmNhbmNlbCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0gY2FuY2VsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChwZW5kaW5nUHJvbWlzZSkge1xuICAgICAgICAgIGNhbmNlbFByb21pc2UocGVuZGluZ1Byb21pc2UpO1xuICAgICAgICB9IC8vIEZpbmFsbHkgYmxvY2sgY2FuIHJldHVybiAob3IgeWllbGQpIHN0dWZmLi5cblxuXG4gICAgICAgIHZhciBfcmVzID0gZ2VuW1wicmV0dXJuXCJdKHVuZGVmaW5lZCk7IC8vIGVhdCBhbnl0aGluZyB0aGF0IHByb21pc2Ugd291bGQgZG8sIGl0J3MgY2FuY2VsbGVkIVxuXG5cbiAgICAgICAgdmFyIHlpZWxkZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKF9yZXMudmFsdWUpO1xuICAgICAgICB5aWVsZGVkUHJvbWlzZS50aGVuKG5vb3AsIG5vb3ApO1xuICAgICAgICBjYW5jZWxQcm9taXNlKHlpZWxkZWRQcm9taXNlKTsgLy8gbWF5YmUgaXQgY2FuIGJlIGNhbmNlbGxlZCA6KVxuICAgICAgICAvLyByZWplY3Qgb3VyIG9yaWdpbmFsIHByb21pc2VcblxuICAgICAgICByZWplY3RvcihuZXcgRmxvd0NhbmNlbGxhdGlvbkVycm9yKCkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3RvcihlKTsgLy8gdGhlcmUgY291bGQgYmUgYSB0aHJvd2luZyBmaW5hbGx5IGJsb2NrXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgcmVzLmlzTW9iWEZsb3cgPSB0cnVlO1xuICByZXR1cm4gcmVzO1xufSwgZmxvd0Fubm90YXRpb24pO1xuZmxvdy5ib3VuZCA9IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGZsb3dCb3VuZEFubm90YXRpb24pO1xuXG5mdW5jdGlvbiBjYW5jZWxQcm9taXNlKHByb21pc2UpIHtcbiAgaWYgKGlzRnVuY3Rpb24ocHJvbWlzZS5jYW5jZWwpKSB7XG4gICAgcHJvbWlzZS5jYW5jZWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmbG93UmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0OyAvLyBqdXN0IHRyaWNraW5nIFR5cGVTY3JpcHQgOilcbn1cbmZ1bmN0aW9uIGlzRmxvdyhmbikge1xuICByZXR1cm4gKGZuID09IG51bGwgPyB2b2lkIDAgOiBmbi5pc01vYlhGbG93KSA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0UmVhZHModGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgdmFyIHRhcmdldDtcblxuICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB8fCBpc09ic2VydmFibGVBcnJheSh0aGluZykgfHwgaXNPYnNlcnZhYmxlVmFsdWUodGhpbmcpKSB7XG4gICAgdGFyZ2V0ID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc1N0cmluZ2lzaChwcm9wT3JIYW5kbGVyKSkge1xuICAgICAgcmV0dXJuIGRpZShcIkludGVyY2VwdFJlYWRzIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBhIHNwZWNpZmljIHByb3BlcnR5LCBub3Qgd2l0aCBhbiBvYmplY3QgaW4gZ2VuZXJhbFwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcE9ySGFuZGxlcik7XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcmV0dXJuIGRpZShcIkV4cGVjdGVkIG9ic2VydmFibGUgbWFwLCBvYmplY3Qgb3IgYXJyYXkgYXMgZmlyc3QgYXJyYXlcIik7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHRhcmdldC5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRpZShcIkFuIGludGVyY2VwdCByZWFkZXIgd2FzIGFscmVhZHkgZXN0YWJsaXNoZWRcIik7XG4gIH1cblxuICB0YXJnZXQuZGVoYW5jZXIgPSB0eXBlb2YgcHJvcE9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiID8gcHJvcE9ySGFuZGxlciA6IGhhbmRsZXI7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdGFyZ2V0LmRlaGFuY2VyID0gdW5kZWZpbmVkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHQodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICByZXR1cm4gaW50ZXJjZXB0UHJvcGVydHkodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBwcm9wT3JIYW5kbGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBoYW5kbGVyKSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZykuaW50ZXJjZXB0XyhoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0UHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBoYW5kbGVyKSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLmludGVyY2VwdF8oaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIF9pc0NvbXB1dGVkKHZhbHVlLCBwcm9wZXJ0eSkge1xuICBpZiAocHJvcGVydHkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCF2YWx1ZVskbW9ieF0udmFsdWVzXy5oYXMocHJvcGVydHkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGF0b20gPSBnZXRBdG9tKHZhbHVlLCBwcm9wZXJ0eSk7XG4gIHJldHVybiBpc0NvbXB1dGVkVmFsdWUoYXRvbSk7XG59XG5mdW5jdGlvbiBpc0NvbXB1dGVkKHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gZGllKFwiaXNDb21wdXRlZCBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzQ29tcHV0ZWRQcm9wIHRvIGluc3BlY3QgdGhlIG9ic2VydmFiaWxpdHkgb2YgYSBwcm9wZXJ0eVwiKTtcbiAgfVxuXG4gIHJldHVybiBfaXNDb21wdXRlZCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0NvbXB1dGVkUHJvcCh2YWx1ZSwgcHJvcE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNTdHJpbmdpc2gocHJvcE5hbWUpKSB7XG4gICAgcmV0dXJuIGRpZShcImlzQ29tcHV0ZWQgZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBfaXNDb21wdXRlZCh2YWx1ZSwgcHJvcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBfaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wZXJ0eSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIChpc09ic2VydmFibGVNYXAodmFsdWUpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHZhbHVlKSkpIHtcbiAgICAgIHJldHVybiBkaWUoXCJpc09ic2VydmFibGUob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIGFycmF5cyBhbmQgbWFwcy4gVXNlIG1hcC5oYXMgb3IgYXJyYXkubGVuZ3RoIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVbJG1vYnhdLnZhbHVlc18uaGFzKHByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gRm9yIGZpcnN0IGNoZWNrLCBzZWUgIzcwMVxuXG5cbiAgcmV0dXJuIGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgfHwgISF2YWx1ZVskbW9ieF0gfHwgaXNBdG9tKHZhbHVlKSB8fCBpc1JlYWN0aW9uKHZhbHVlKSB8fCBpc0NvbXB1dGVkVmFsdWUodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc09ic2VydmFibGUodmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG4gICAgZGllKFwiaXNPYnNlcnZhYmxlIGV4cGVjdHMgb25seSAxIGFyZ3VtZW50LiBVc2UgaXNPYnNlcnZhYmxlUHJvcCB0byBpbnNwZWN0IHRoZSBvYnNlcnZhYmlsaXR5IG9mIGEgcHJvcGVydHlcIik7XG4gIH1cblxuICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc09ic2VydmFibGVQcm9wKHZhbHVlLCBwcm9wTmFtZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc1N0cmluZ2lzaChwcm9wTmFtZSkpIHtcbiAgICByZXR1cm4gZGllKFwiZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBfaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGtleXMob2JqKSB7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBvYmpbJG1vYnhdLmtleXNfKCk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikgfHwgaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShvYmoua2V5cygpKTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5tYXAoZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSk7XG4gIH1cblxuICBkaWUoNSk7XG59XG5mdW5jdGlvbiB2YWx1ZXMob2JqKSB7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBvYmouZ2V0KGtleSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShvYmoudmFsdWVzKCkpO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLnNsaWNlKCk7XG4gIH1cblxuICBkaWUoNik7XG59XG5mdW5jdGlvbiBlbnRyaWVzKG9iaikge1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gW2tleSwgb2JqW2tleV1dO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIFtrZXksIG9iai5nZXQoa2V5KV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShvYmouZW50cmllcygpKTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5tYXAoZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBbaW5kZXgsIGtleV07XG4gICAgfSk7XG4gIH1cblxuICBkaWUoNyk7XG59XG5mdW5jdGlvbiBzZXQob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgIHN0YXJ0QmF0Y2goKTtcbiAgICB2YXIgX3ZhbHVlcyA9IGtleTtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfa2V5IGluIF92YWx1ZXMpIHtcbiAgICAgICAgc2V0KG9iaiwgX2tleSwgX3ZhbHVlc1tfa2V5XSk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgb2JqWyRtb2J4XS5zZXRfKGtleSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgb2JqLnNldChrZXksIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgIG9iai5hZGQoa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGtleSA9IHBhcnNlSW50KGtleSwgMTApO1xuICAgIH1cblxuICAgIGlmIChrZXkgPCAwKSB7XG4gICAgICBkaWUoXCJJbnZhbGlkIGluZGV4OiAnXCIgKyBrZXkgKyBcIidcIik7XG4gICAgfVxuXG4gICAgc3RhcnRCYXRjaCgpO1xuXG4gICAgaWYgKGtleSA+PSBvYmoubGVuZ3RoKSB7XG4gICAgICBvYmoubGVuZ3RoID0ga2V5ICsgMTtcbiAgICB9XG5cbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIGVuZEJhdGNoKCk7XG4gIH0gZWxzZSB7XG4gICAgZGllKDgpO1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmUob2JqLCBrZXkpIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgb2JqWyRtb2J4XS5kZWxldGVfKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICBvYmpbXCJkZWxldGVcIl0oa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgIG9ialtcImRlbGV0ZVwiXShrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikge1xuICAgICAga2V5ID0gcGFyc2VJbnQoa2V5LCAxMCk7XG4gICAgfVxuXG4gICAgb2JqLnNwbGljZShrZXksIDEpO1xuICB9IGVsc2Uge1xuICAgIGRpZSg5KTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzKG9iaiwga2V5KSB7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBvYmpbJG1vYnhdLmhhc18oa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgIHJldHVybiBvYmouaGFzKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLmhhcyhrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICByZXR1cm4ga2V5ID49IDAgJiYga2V5IDwgb2JqLmxlbmd0aDtcbiAgfVxuXG4gIGRpZSgxMCk7XG59XG5mdW5jdGlvbiBnZXQob2JqLCBrZXkpIHtcbiAgaWYgKCFoYXMob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBvYmpbJG1vYnhdLmdldF8oa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgIHJldHVybiBvYmouZ2V0KGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuXG4gIGRpZSgxMSk7XG59XG5mdW5jdGlvbiBhcGlEZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgZGVzY3JpcHRvcikge1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqWyRtb2J4XS5kZWZpbmVQcm9wZXJ0eV8oa2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxuXG4gIGRpZSgzOSk7XG59XG5mdW5jdGlvbiBhcGlPd25LZXlzKG9iaikge1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqWyRtb2J4XS5vd25LZXlzXygpO1xuICB9XG5cbiAgZGllKDM4KTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgaWYgKGlzRnVuY3Rpb24oY2JPckZpcmUpKSB7XG4gICAgcmV0dXJuIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSwgZmlyZUltbWVkaWF0ZWx5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5vYnNlcnZlXyhsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkub2JzZXJ2ZV8obGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG59XG5cbmZ1bmN0aW9uIGNhY2hlKG1hcCwga2V5LCB2YWx1ZSkge1xuICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvSlNIZWxwZXIoc291cmNlLCBfX2FscmVhZHlTZWVuKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCB8fCB0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiIHx8IHNvdXJjZSBpbnN0YW5jZW9mIERhdGUgfHwgIWlzT2JzZXJ2YWJsZShzb3VyY2UpKSB7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVWYWx1ZShzb3VyY2UpIHx8IGlzQ29tcHV0ZWRWYWx1ZShzb3VyY2UpKSB7XG4gICAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLmdldCgpLCBfX2FscmVhZHlTZWVuKTtcbiAgfVxuXG4gIGlmIChfX2FscmVhZHlTZWVuLmhhcyhzb3VyY2UpKSB7XG4gICAgcmV0dXJuIF9fYWxyZWFkeVNlZW4uZ2V0KHNvdXJjZSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkoc291cmNlKSkge1xuICAgIHZhciByZXMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBBcnJheShzb3VyY2UubGVuZ3RoKSk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpZHgpIHtcbiAgICAgIHJlc1tpZHhdID0gdG9KU0hlbHBlcih2YWx1ZSwgX19hbHJlYWR5U2Vlbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVTZXQoc291cmNlKSkge1xuICAgIHZhciBfcmVzID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCBuZXcgU2V0KCkpO1xuXG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBfcmVzLmFkZCh0b0pTSGVscGVyKHZhbHVlLCBfX2FscmVhZHlTZWVuKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIF9yZXM7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlTWFwKHNvdXJjZSkpIHtcbiAgICB2YXIgX3JlczIgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBNYXAoKSk7XG5cbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgX3JlczIuc2V0KGtleSwgdG9KU0hlbHBlcih2YWx1ZSwgX19hbHJlYWR5U2VlbikpO1xuICAgIH0pO1xuICAgIHJldHVybiBfcmVzMjtcbiAgfSBlbHNlIHtcbiAgICAvLyBtdXN0IGJlIG9ic2VydmFibGUgb2JqZWN0XG4gICAgdmFyIF9yZXMzID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCB7fSk7XG5cbiAgICBhcGlPd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAob2JqZWN0UHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIF9yZXMzW2tleV0gPSB0b0pTSGVscGVyKHNvdXJjZVtrZXldLCBfX2FscmVhZHlTZWVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3JlczM7XG4gIH1cbn1cbi8qKlxyXG4gKiBSZWN1cnNpdmVseSBjb252ZXJ0cyBhbiBvYnNlcnZhYmxlIHRvIGl0J3Mgbm9uLW9ic2VydmFibGUgbmF0aXZlIGNvdW50ZXJwYXJ0LlxyXG4gKiBJdCBkb2VzIE5PVCByZWN1cnNlIGludG8gbm9uLW9ic2VydmFibGVzLCB0aGVzZSBhcmUgbGVmdCBhcyB0aGV5IGFyZSwgZXZlbiBpZiB0aGV5IGNvbnRhaW4gb2JzZXJ2YWJsZXMuXHJcbiAqIENvbXB1dGVkIGFuZCBvdGhlciBub24tZW51bWVyYWJsZSBwcm9wZXJ0aWVzIGFyZSBjb21wbGV0ZWx5IGlnbm9yZWQuXHJcbiAqIENvbXBsZXggc2NlbmFyaW9zIHJlcXVpcmUgY3VzdG9tIHNvbHV0aW9uLCBlZyBpbXBsZW1lbnRpbmcgYHRvSlNPTmAgb3IgdXNpbmcgYHNlcmlhbGl6cmAgbGliLlxyXG4gKi9cblxuXG5mdW5jdGlvbiB0b0pTKHNvdXJjZSwgb3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG9wdGlvbnMpIHtcbiAgICBkaWUoXCJ0b0pTIG5vIGxvbmdlciBzdXBwb3J0cyBvcHRpb25zXCIpO1xuICB9XG5cbiAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLCBuZXcgTWFwKCkpO1xufVxuXG5mdW5jdGlvbiB0cmFjZSgpIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGRpZShcInRyYWNlKCkgaXMgbm90IGF2YWlsYWJsZSBpbiBwcm9kdWN0aW9uIGJ1aWxkc1wiKTtcbiAgfVxuXG4gIHZhciBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgZW50ZXJCcmVha1BvaW50ID0gYXJncy5wb3AoKTtcbiAgfVxuXG4gIHZhciBkZXJpdmF0aW9uID0gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpO1xuXG4gIGlmICghZGVyaXZhdGlvbikge1xuICAgIHJldHVybiBkaWUoXCIndHJhY2UoYnJlYWs/KScgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSB0cmFja2VkIGNvbXB1dGVkIHZhbHVlIG9yIGEgUmVhY3Rpb24uIENvbnNpZGVyIHBhc3NpbmcgaW4gdGhlIGNvbXB1dGVkIHZhbHVlIG9yIHJlYWN0aW9uIGV4cGxpY2l0bHlcIik7XG4gIH1cblxuICBpZiAoZGVyaXZhdGlvbi5pc1RyYWNpbmdfID09PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIGRlcml2YXRpb24ubmFtZV8gKyBcIicgdHJhY2luZyBlbmFibGVkXCIpO1xuICB9XG5cbiAgZGVyaXZhdGlvbi5pc1RyYWNpbmdfID0gZW50ZXJCcmVha1BvaW50ID8gVHJhY2VNb2RlLkJSRUFLIDogVHJhY2VNb2RlLkxPRztcbn1cblxuZnVuY3Rpb24gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZ2V0QXRvbShhcmdzWzBdKTtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICB9XG59XG5cbi8qKlxyXG4gKiBEdXJpbmcgYSB0cmFuc2FjdGlvbiBubyB2aWV3cyBhcmUgdXBkYXRlZCB1bnRpbCB0aGUgZW5kIG9mIHRoZSB0cmFuc2FjdGlvbi5cclxuICogVGhlIHRyYW5zYWN0aW9uIHdpbGwgYmUgcnVuIHN5bmNocm9ub3VzbHkgbm9uZXRoZWxlc3MuXHJcbiAqXHJcbiAqIEBwYXJhbSBhY3Rpb24gYSBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgc29tZSByZWFjdGl2ZSBzdGF0ZVxyXG4gKiBAcmV0dXJucyBhbnkgdmFsdWUgdGhhdCB3YXMgcmV0dXJuZWQgYnkgdGhlICdhY3Rpb24nIHBhcmFtZXRlci5cclxuICovXG5cbmZ1bmN0aW9uIHRyYW5zYWN0aW9uKGFjdGlvbiwgdGhpc0FyZykge1xuICBpZiAodGhpc0FyZyA9PT0gdm9pZCAwKSB7XG4gICAgdGhpc0FyZyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXJ0QmF0Y2goKTtcblxuICB0cnkge1xuICAgIHJldHVybiBhY3Rpb24uYXBwbHkodGhpc0FyZyk7XG4gIH0gZmluYWxseSB7XG4gICAgZW5kQmF0Y2goKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSB8fCBhcmcxICYmIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgYXJnMSk7XG4gIH1cblxuICByZXR1cm4gX3doZW4ocHJlZGljYXRlLCBhcmcxLCBhcmcyIHx8IHt9KTtcbn1cblxuZnVuY3Rpb24gX3doZW4ocHJlZGljYXRlLCBlZmZlY3QsIG9wdHMpIHtcbiAgdmFyIHRpbWVvdXRIYW5kbGU7XG5cbiAgaWYgKHR5cGVvZiBvcHRzLnRpbWVvdXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJXSEVOX1RJTUVPVVRcIik7XG4gICAgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFkaXNwb3NlclskbW9ieF0uaXNEaXNwb3NlZF8pIHtcbiAgICAgICAgZGlzcG9zZXIoKTtcblxuICAgICAgICBpZiAob3B0cy5vbkVycm9yKSB7XG4gICAgICAgICAgb3B0cy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdHMudGltZW91dCk7XG4gIH1cblxuICBvcHRzLm5hbWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBvcHRzLm5hbWUgfHwgXCJXaGVuQFwiICsgZ2V0TmV4dElkKCkgOiBcIldoZW5cIjtcbiAgdmFyIGVmZmVjdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBvcHRzLm5hbWUgKyBcIi1lZmZlY3RcIiA6IFwiV2hlbi1lZmZlY3RcIiwgZWZmZWN0KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgdmFyIGRpc3Bvc2VyID0gYXV0b3J1bihmdW5jdGlvbiAocikge1xuICAgIC8vIHByZWRpY2F0ZSBzaG91bGQgbm90IGNoYW5nZSBzdGF0ZVxuICAgIHZhciBjb25kID0gYWxsb3dTdGF0ZUNoYW5nZXMoZmFsc2UsIHByZWRpY2F0ZSk7XG5cbiAgICBpZiAoY29uZCkge1xuICAgICAgci5kaXNwb3NlKCk7XG5cbiAgICAgIGlmICh0aW1lb3V0SGFuZGxlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgIH1cblxuICAgICAgZWZmZWN0QWN0aW9uKCk7XG4gICAgfVxuICB9LCBvcHRzKTtcbiAgcmV0dXJuIGRpc3Bvc2VyO1xufVxuXG5mdW5jdGlvbiB3aGVuUHJvbWlzZShwcmVkaWNhdGUsIG9wdHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBvcHRzICYmIG9wdHMub25FcnJvcikge1xuICAgIHJldHVybiBkaWUoXCJ0aGUgb3B0aW9ucyAnb25FcnJvcicgYW5kICdwcm9taXNlJyBjYW5ub3QgYmUgY29tYmluZWRcIik7XG4gIH1cblxuICB2YXIgY2FuY2VsO1xuICB2YXIgcmVzID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBkaXNwb3NlciA9IF93aGVuKHByZWRpY2F0ZSwgcmVzb2x2ZSwgX2V4dGVuZHMoe30sIG9wdHMsIHtcbiAgICAgIG9uRXJyb3I6IHJlamVjdFxuICAgIH0pKTtcblxuICAgIGNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgIGRpc3Bvc2VyKCk7XG4gICAgICByZWplY3QobmV3IEVycm9yKFwiV0hFTl9DQU5DRUxMRURcIikpO1xuICAgIH07XG4gIH0pO1xuICByZXMuY2FuY2VsID0gY2FuY2VsO1xuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBnZXRBZG0odGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXRbJG1vYnhdO1xufSAvLyBPcHRpbWl6YXRpb246IHdlIGRvbid0IG5lZWQgdGhlIGludGVybWVkaWF0ZSBvYmplY3RzIGFuZCBjb3VsZCBoYXZlIGEgY29tcGxldGVseSBjdXN0b20gYWRtaW5pc3RyYXRpb24gZm9yIER5bmFtaWNPYmplY3RzLFxuLy8gYW5kIHNraXAgZWl0aGVyIHRoZSBpbnRlcm5hbCB2YWx1ZXMgbWFwLCBvciB0aGUgYmFzZSBvYmplY3Qgd2l0aCBpdHMgcHJvcGVydHkgZGVzY3JpcHRvcnMhXG5cblxudmFyIG9iamVjdFByb3h5VHJhcHMgPSB7XG4gIGhhczogZnVuY3Rpb24gaGFzKHRhcmdldCwgbmFtZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKSB7XG4gICAgICB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KFwiZGV0ZWN0IG5ldyBwcm9wZXJ0aWVzIHVzaW5nIHRoZSAnaW4nIG9wZXJhdG9yLiBVc2UgJ2hhcycgZnJvbSAnbW9ieCcgaW5zdGVhZC5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldEFkbSh0YXJnZXQpLmhhc18obmFtZSk7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xuICAgIHJldHVybiBnZXRBZG0odGFyZ2V0KS5nZXRfKG5hbWUpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIF9nZXRBZG0kc2V0XztcblxuICAgIGlmICghaXNTdHJpbmdpc2gobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFnZXRBZG0odGFyZ2V0KS52YWx1ZXNfLmhhcyhuYW1lKSkge1xuICAgICAgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChcImFkZCBhIG5ldyBvYnNlcnZhYmxlIHByb3BlcnR5IHRocm91Z2ggZGlyZWN0IGFzc2lnbm1lbnQuIFVzZSAnc2V0JyBmcm9tICdtb2J4JyBpbnN0ZWFkLlwiKTtcbiAgICB9IC8vIG51bGwgKGludGVyY2VwdGVkKSAtPiB0cnVlIChzdWNjZXNzKVxuXG5cbiAgICByZXR1cm4gKF9nZXRBZG0kc2V0XyA9IGdldEFkbSh0YXJnZXQpLnNldF8obmFtZSwgdmFsdWUsIHRydWUpKSAhPSBudWxsID8gX2dldEFkbSRzZXRfIDogdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgbmFtZSkge1xuICAgIHZhciBfZ2V0QWRtJGRlbGV0ZV87XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KFwiZGVsZXRlIHByb3BlcnRpZXMgZnJvbSBhbiBvYnNlcnZhYmxlIG9iamVjdC4gVXNlICdyZW1vdmUnIGZyb20gJ21vYngnIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIGlmICghaXNTdHJpbmdpc2gobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIG51bGwgKGludGVyY2VwdGVkKSAtPiB0cnVlIChzdWNjZXNzKVxuXG5cbiAgICByZXR1cm4gKF9nZXRBZG0kZGVsZXRlXyA9IGdldEFkbSh0YXJnZXQpLmRlbGV0ZV8obmFtZSwgdHJ1ZSkpICE9IG51bGwgPyBfZ2V0QWRtJGRlbGV0ZV8gOiB0cnVlO1xuICB9LFxuICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIF9nZXRBZG0kZGVmaW5lUHJvcGVydDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHdhcm5BYm91dFByb3h5UmVxdWlyZW1lbnQoXCJkZWZpbmUgcHJvcGVydHkgb24gYW4gb2JzZXJ2YWJsZSBvYmplY3QuIFVzZSAnZGVmaW5lUHJvcGVydHknIGZyb20gJ21vYngnIGluc3RlYWQuXCIpO1xuICAgIH0gLy8gbnVsbCAoaW50ZXJjZXB0ZWQpIC0+IHRydWUgKHN1Y2Nlc3MpXG5cblxuICAgIHJldHVybiAoX2dldEFkbSRkZWZpbmVQcm9wZXJ0ID0gZ2V0QWRtKHRhcmdldCkuZGVmaW5lUHJvcGVydHlfKG5hbWUsIGRlc2NyaXB0b3IpKSAhPSBudWxsID8gX2dldEFkbSRkZWZpbmVQcm9wZXJ0IDogdHJ1ZTtcbiAgfSxcbiAgb3duS2V5czogZnVuY3Rpb24gb3duS2V5cyh0YXJnZXQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikge1xuICAgICAgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChcIml0ZXJhdGUga2V5cyB0byBkZXRlY3QgYWRkZWQgLyByZW1vdmVkIHByb3BlcnRpZXMuIFVzZSAna2V5cycgZnJvbSAnbW9ieCcgaW5zdGVhZC5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldEFkbSh0YXJnZXQpLm93bktleXNfKCk7XG4gIH0sXG4gIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpIHtcbiAgICBkaWUoMTMpO1xuICB9XG59O1xuZnVuY3Rpb24gYXNEeW5hbWljT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgdmFyIF90YXJnZXQkJG1vYngsIF90YXJnZXQkJG1vYngkcHJveHlfO1xuXG4gIGFzc2VydFByb3hpZXMoKTtcbiAgdGFyZ2V0ID0gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gIHJldHVybiAoX3RhcmdldCQkbW9ieCRwcm94eV8gPSAoX3RhcmdldCQkbW9ieCA9IHRhcmdldFskbW9ieF0pLnByb3h5XykgIT0gbnVsbCA/IF90YXJnZXQkJG1vYngkcHJveHlfIDogX3RhcmdldCQkbW9ieC5wcm94eV8gPSBuZXcgUHJveHkodGFyZ2V0LCBvYmplY3RQcm94eVRyYXBzKTtcbn1cblxuZnVuY3Rpb24gaGFzSW50ZXJjZXB0b3JzKGludGVyY2VwdGFibGUpIHtcbiAgcmV0dXJuIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzXyAhPT0gdW5kZWZpbmVkICYmIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzXy5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcihpbnRlcmNlcHRhYmxlLCBoYW5kbGVyKSB7XG4gIHZhciBpbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18gfHwgKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzXyA9IFtdKTtcbiAgaW50ZXJjZXB0b3JzLnB1c2goaGFuZGxlcik7XG4gIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaWR4ID0gaW50ZXJjZXB0b3JzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgaW50ZXJjZXB0b3JzLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRDaGFuZ2UoaW50ZXJjZXB0YWJsZSwgY2hhbmdlKSB7XG4gIHZhciBwcmV2VSA9IHVudHJhY2tlZFN0YXJ0KCk7XG5cbiAgdHJ5IHtcbiAgICAvLyBJbnRlcmNlcHRvciBjYW4gbW9kaWZ5IHRoZSBhcnJheSwgY29weSBpdCB0byBhdm9pZCBjb25jdXJyZW50IG1vZGlmaWNhdGlvbiwgc2VlICMxOTUwXG4gICAgdmFyIGludGVyY2VwdG9ycyA9IFtdLmNvbmNhdChpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18gfHwgW10pO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpbnRlcmNlcHRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGFuZ2UgPSBpbnRlcmNlcHRvcnNbaV0oY2hhbmdlKTtcblxuICAgICAgaWYgKGNoYW5nZSAmJiAhY2hhbmdlLnR5cGUpIHtcbiAgICAgICAgZGllKDE0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZTtcbiAgfSBmaW5hbGx5IHtcbiAgICB1bnRyYWNrZWRFbmQocHJldlUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc0xpc3RlbmVycyhsaXN0ZW5hYmxlKSB7XG4gIHJldHVybiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc18gIT09IHVuZGVmaW5lZCAmJiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc18ubGVuZ3RoID4gMDtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuYWJsZSwgaGFuZGxlcikge1xuICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnNfIHx8IChsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc18gPSBbXSk7XG4gIGxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgIGxpc3RlbmVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKGxpc3RlbmFibGUsIGNoYW5nZSkge1xuICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnNfO1xuXG4gIGlmICghbGlzdGVuZXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKCk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGlzdGVuZXJzW2ldKGNoYW5nZSk7XG4gIH1cblxuICB1bnRyYWNrZWRFbmQocHJldlUpO1xufVxuXG5mdW5jdGlvbiBtYWtlT2JzZXJ2YWJsZSh0YXJnZXQsIGFubm90YXRpb25zLCBvcHRpb25zKSB7XG4gIHZhciBhZG0gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zKVskbW9ieF07XG4gIHN0YXJ0QmF0Y2goKTtcblxuICB0cnkge1xuICAgIHZhciBfYW5ub3RhdGlvbnM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGFubm90YXRpb25zICYmIHRhcmdldFtzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbF0pIHtcbiAgICAgIGRpZShcIm1ha2VPYnNlcnZhYmxlIHNlY29uZCBhcmcgbXVzdCBiZSBudWxsaXNoIHdoZW4gdXNpbmcgZGVjb3JhdG9ycy4gTWl4aW5nIEBkZWNvcmF0b3Igc3ludGF4IHdpdGggYW5ub3RhdGlvbnMgaXMgbm90IHN1cHBvcnRlZC5cIik7XG4gICAgfSAvLyBEZWZhdWx0IHRvIGRlY29yYXRvcnNcblxuXG4gICAgKF9hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zKSAhPSBudWxsID8gX2Fubm90YXRpb25zIDogYW5ub3RhdGlvbnMgPSBjb2xsZWN0U3RvcmVkQW5ub3RhdGlvbnModGFyZ2V0KTsgLy8gQW5ub3RhdGVcblxuICAgIG93bktleXMoYW5ub3RhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGFkbS5tYWtlXyhrZXksIGFubm90YXRpb25zW2tleV0pO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGVuZEJhdGNoKCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSAvLyBwcm90b1trZXlzU3ltYm9sXSA9IG5ldyBTZXQ8UHJvcGVydHlLZXk+KClcblxudmFyIGtleXNTeW1ib2wgPSAvKiNfX1BVUkVfXyovU3ltYm9sKFwibW9ieC1rZXlzXCIpO1xuZnVuY3Rpb24gbWFrZUF1dG9PYnNlcnZhYmxlKHRhcmdldCwgb3ZlcnJpZGVzLCBvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiAhaXNQbGFpbk9iamVjdChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpIHtcbiAgICAgIGRpZShcIidtYWtlQXV0b09ic2VydmFibGUnIGNhbiBvbmx5IGJlIHVzZWQgZm9yIGNsYXNzZXMgdGhhdCBkb24ndCBoYXZlIGEgc3VwZXJjbGFzc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgIGRpZShcIm1ha2VBdXRvT2JzZXJ2YWJsZSBjYW4gb25seSBiZSB1c2VkIG9uIG9iamVjdHMgbm90IGFscmVhZHkgbWFkZSBvYnNlcnZhYmxlXCIpO1xuICAgIH1cbiAgfSAvLyBPcHRpbWl6YXRpb246IGF2b2lkIHZpc2l0aW5nIHByb3Rvc1xuICAvLyBBc3N1bWVzIHRoYXQgYW5ub3RhdGlvbi5tYWtlXy8uZXh0ZW5kXyB3b3JrcyB0aGUgc2FtZSBmb3IgcGxhaW4gb2JqZWN0c1xuXG5cbiAgaWYgKGlzUGxhaW5PYmplY3QodGFyZ2V0KSkge1xuICAgIHJldHVybiBleHRlbmRPYnNlcnZhYmxlKHRhcmdldCwgdGFyZ2V0LCBvdmVycmlkZXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIGFkbSA9IGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG9wdGlvbnMpWyRtb2J4XTsgLy8gT3B0aW1pemF0aW9uOiBjYWNoZSBrZXlzIG9uIHByb3RvXG4gIC8vIEFzc3VtZXMgbWFrZUF1dG9PYnNlcnZhYmxlIGNhbiBiZSBjYWxsZWQgb25seSBvbmNlIHBlciBvYmplY3QgYW5kIGNhbid0IGJlIHVzZWQgaW4gc3ViY2xhc3NcblxuICBpZiAoIXRhcmdldFtrZXlzU3ltYm9sXSkge1xuICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xuICAgIHZhciBrZXlzID0gbmV3IFNldChbXS5jb25jYXQob3duS2V5cyh0YXJnZXQpLCBvd25LZXlzKHByb3RvKSkpO1xuICAgIGtleXNbXCJkZWxldGVcIl0oXCJjb25zdHJ1Y3RvclwiKTtcbiAgICBrZXlzW1wiZGVsZXRlXCJdKCRtb2J4KTtcbiAgICBhZGRIaWRkZW5Qcm9wKHByb3RvLCBrZXlzU3ltYm9sLCBrZXlzKTtcbiAgfVxuXG4gIHN0YXJ0QmF0Y2goKTtcblxuICB0cnkge1xuICAgIHRhcmdldFtrZXlzU3ltYm9sXS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBhZG0ubWFrZV8oa2V5LCAvLyBtdXN0IHBhc3MgXCJ1bmRlZmluZWRcIiBmb3IgeyBrZXk6IHVuZGVmaW5lZCB9XG4gICAgICAhb3ZlcnJpZGVzID8gdHJ1ZSA6IGtleSBpbiBvdmVycmlkZXMgPyBvdmVycmlkZXNba2V5XSA6IHRydWUpO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGVuZEJhdGNoKCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgU1BMSUNFID0gXCJzcGxpY2VcIjtcbnZhciBVUERBVEUgPSBcInVwZGF0ZVwiO1xudmFyIE1BWF9TUExJQ0VfU0laRSA9IDEwMDAwOyAvLyBTZWUgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzg1OVxuXG52YXIgYXJyYXlUcmFwcyA9IHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XG4gICAgdmFyIGFkbSA9IHRhcmdldFskbW9ieF07XG5cbiAgICBpZiAobmFtZSA9PT0gJG1vYngpIHtcbiAgICAgIHJldHVybiBhZG07XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09IFwibGVuZ3RoXCIpIHtcbiAgICAgIHJldHVybiBhZG0uZ2V0QXJyYXlMZW5ndGhfKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiICYmICFpc05hTihuYW1lKSkge1xuICAgICAgcmV0dXJuIGFkbS5nZXRfKHBhcnNlSW50KG5hbWUpKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzUHJvcChhcnJheUV4dGVuc2lvbnMsIG5hbWUpKSB7XG4gICAgICByZXR1cm4gYXJyYXlFeHRlbnNpb25zW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRbbmFtZV07XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgYWRtID0gdGFyZ2V0WyRtb2J4XTtcblxuICAgIGlmIChuYW1lID09PSBcImxlbmd0aFwiKSB7XG4gICAgICBhZG0uc2V0QXJyYXlMZW5ndGhfKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIgfHwgaXNOYU4obmFtZSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBudW1lcmljIHN0cmluZ1xuICAgICAgYWRtLnNldF8ocGFyc2VJbnQobmFtZSksIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKCkge1xuICAgIGRpZSgxNSk7XG4gIH1cbn07XG52YXIgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyB0aGlzIGlzIHRoZSBwcm9wIHRoYXQgZ2V0cyBwcm94aWVkLCBzbyBjYW4ndCByZXBsYWNlIGl0IVxuICBmdW5jdGlvbiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWRfLCBsZWdhY3lNb2RlXykge1xuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpIDogXCJPYnNlcnZhYmxlQXJyYXlcIjtcbiAgICB9XG5cbiAgICB0aGlzLm93bmVkXyA9IHZvaWQgMDtcbiAgICB0aGlzLmxlZ2FjeU1vZGVfID0gdm9pZCAwO1xuICAgIHRoaXMuYXRvbV8gPSB2b2lkIDA7XG4gICAgdGhpcy52YWx1ZXNfID0gW107XG4gICAgdGhpcy5pbnRlcmNlcHRvcnNfID0gdm9pZCAwO1xuICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmVuaGFuY2VyXyA9IHZvaWQgMDtcbiAgICB0aGlzLmRlaGFuY2VyID0gdm9pZCAwO1xuICAgIHRoaXMucHJveHlfID0gdm9pZCAwO1xuICAgIHRoaXMubGFzdEtub3duTGVuZ3RoXyA9IDA7XG4gICAgdGhpcy5vd25lZF8gPSBvd25lZF87XG4gICAgdGhpcy5sZWdhY3lNb2RlXyA9IGxlZ2FjeU1vZGVfO1xuICAgIHRoaXMuYXRvbV8gPSBuZXcgQXRvbShuYW1lKTtcblxuICAgIHRoaXMuZW5oYW5jZXJfID0gZnVuY3Rpb24gKG5ld1YsIG9sZFYpIHtcbiAgICAgIHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBuYW1lICsgXCJbLi5dXCIgOiBcIk9ic2VydmFibGVBcnJheVsuLl1cIik7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlaGFuY2VWYWx1ZV8gPSBmdW5jdGlvbiBkZWhhbmNlVmFsdWVfKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBfcHJvdG8uZGVoYW5jZVZhbHVlc18gPSBmdW5jdGlvbiBkZWhhbmNlVmFsdWVzXyh2YWx1ZXMpIHtcbiAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkICYmIHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdmFsdWVzLm1hcCh0aGlzLmRlaGFuY2VyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIF9wcm90by5pbnRlcmNlcHRfID0gZnVuY3Rpb24gaW50ZXJjZXB0XyhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gIH07XG5cbiAgX3Byb3RvLm9ic2VydmVfID0gZnVuY3Rpb24gb2JzZXJ2ZV8obGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkge1xuICAgICAgZmlyZUltbWVkaWF0ZWx5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgbGlzdGVuZXIoe1xuICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJhcnJheVwiLFxuICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMuYXRvbV8ubmFtZV8sXG4gICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBhZGRlZDogdGhpcy52YWx1ZXNfLnNsaWNlKCksXG4gICAgICAgIGFkZGVkQ291bnQ6IHRoaXMudmFsdWVzXy5sZW5ndGgsXG4gICAgICAgIHJlbW92ZWQ6IFtdLFxuICAgICAgICByZW1vdmVkQ291bnQ6IDBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0QXJyYXlMZW5ndGhfID0gZnVuY3Rpb24gZ2V0QXJyYXlMZW5ndGhfKCkge1xuICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXNfLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uc2V0QXJyYXlMZW5ndGhfID0gZnVuY3Rpb24gc2V0QXJyYXlMZW5ndGhfKG5ld0xlbmd0aCkge1xuICAgIGlmICh0eXBlb2YgbmV3TGVuZ3RoICE9PSBcIm51bWJlclwiIHx8IGlzTmFOKG5ld0xlbmd0aCkgfHwgbmV3TGVuZ3RoIDwgMCkge1xuICAgICAgZGllKFwiT3V0IG9mIHJhbmdlOiBcIiArIG5ld0xlbmd0aCk7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlc18ubGVuZ3RoO1xuXG4gICAgaWYgKG5ld0xlbmd0aCA9PT0gY3VycmVudExlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobmV3TGVuZ3RoID4gY3VycmVudExlbmd0aCkge1xuICAgICAgdmFyIG5ld0l0ZW1zID0gbmV3IEFycmF5KG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdJdGVtc1tpXSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gLy8gTm8gQXJyYXkuZmlsbCBldmVyeXdoZXJlLi4uXG5cblxuICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXlfKGN1cnJlbnRMZW5ndGgsIDAsIG5ld0l0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXlfKG5ld0xlbmd0aCwgY3VycmVudExlbmd0aCAtIG5ld0xlbmd0aCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by51cGRhdGVBcnJheUxlbmd0aF8gPSBmdW5jdGlvbiB1cGRhdGVBcnJheUxlbmd0aF8ob2xkTGVuZ3RoLCBkZWx0YSkge1xuICAgIGlmIChvbGRMZW5ndGggIT09IHRoaXMubGFzdEtub3duTGVuZ3RoXykge1xuICAgICAgZGllKDE2KTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RLbm93bkxlbmd0aF8gKz0gZGVsdGE7XG5cbiAgICBpZiAodGhpcy5sZWdhY3lNb2RlXyAmJiBkZWx0YSA+IDApIHtcbiAgICAgIHJlc2VydmVBcnJheUJ1ZmZlcihvbGRMZW5ndGggKyBkZWx0YSArIDEpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc3BsaWNlV2l0aEFycmF5XyA9IGZ1bmN0aW9uIHNwbGljZVdpdGhBcnJheV8oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmF0b21fKTtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy52YWx1ZXNfLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+IGxlbmd0aCkge1xuICAgICAgaW5kZXggPSBsZW5ndGg7XG4gICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkZWxldGVDb3VudCA9IGxlbmd0aCAtIGluZGV4O1xuICAgIH0gZWxzZSBpZiAoZGVsZXRlQ291bnQgPT09IHVuZGVmaW5lZCB8fCBkZWxldGVDb3VudCA9PT0gbnVsbCkge1xuICAgICAgZGVsZXRlQ291bnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVDb3VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGRlbGV0ZUNvdW50LCBsZW5ndGggLSBpbmRleCkpO1xuICAgIH1cblxuICAgIGlmIChuZXdJdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdJdGVtcyA9IEVNUFRZX0FSUkFZO1xuICAgIH1cblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfLFxuICAgICAgICB0eXBlOiBTUExJQ0UsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgcmVtb3ZlZENvdW50OiBkZWxldGVDb3VudCxcbiAgICAgICAgYWRkZWQ6IG5ld0l0ZW1zXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIEVNUFRZX0FSUkFZO1xuICAgICAgfVxuXG4gICAgICBkZWxldGVDb3VudCA9IGNoYW5nZS5yZW1vdmVkQ291bnQ7XG4gICAgICBuZXdJdGVtcyA9IGNoYW5nZS5hZGRlZDtcbiAgICB9XG5cbiAgICBuZXdJdGVtcyA9IG5ld0l0ZW1zLmxlbmd0aCA9PT0gMCA/IG5ld0l0ZW1zIDogbmV3SXRlbXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gX3RoaXMuZW5oYW5jZXJfKHYsIHVuZGVmaW5lZCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5sZWdhY3lNb2RlXyB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHZhciBsZW5ndGhEZWx0YSA9IG5ld0l0ZW1zLmxlbmd0aCAtIGRlbGV0ZUNvdW50O1xuICAgICAgdGhpcy51cGRhdGVBcnJheUxlbmd0aF8obGVuZ3RoLCBsZW5ndGhEZWx0YSk7IC8vIGNoZWNrcyBpZiBpbnRlcm5hbCBhcnJheSB3YXNuJ3QgbW9kaWZpZWRcbiAgICB9XG5cbiAgICB2YXIgcmVzID0gdGhpcy5zcGxpY2VJdGVtc0ludG9WYWx1ZXNfKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xuXG4gICAgaWYgKGRlbGV0ZUNvdW50ICE9PSAwIHx8IG5ld0l0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5ub3RpZnlBcnJheVNwbGljZV8oaW5kZXgsIG5ld0l0ZW1zLCByZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZXNfKHJlcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNwbGljZUl0ZW1zSW50b1ZhbHVlc18gPSBmdW5jdGlvbiBzcGxpY2VJdGVtc0ludG9WYWx1ZXNfKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICBpZiAobmV3SXRlbXMubGVuZ3RoIDwgTUFYX1NQTElDRV9TSVpFKSB7XG4gICAgICB2YXIgX3RoaXMkdmFsdWVzXztcblxuICAgICAgcmV0dXJuIChfdGhpcyR2YWx1ZXNfID0gdGhpcy52YWx1ZXNfKS5zcGxpY2UuYXBwbHkoX3RoaXMkdmFsdWVzXywgW2luZGV4LCBkZWxldGVDb3VudF0uY29uY2F0KG5ld0l0ZW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBpdGVtcyByZW1vdmVkIGJ5IHRoZSBzcGxpY2VcbiAgICAgIHZhciByZXMgPSB0aGlzLnZhbHVlc18uc2xpY2UoaW5kZXgsIGluZGV4ICsgZGVsZXRlQ291bnQpOyAvLyBUaGUgaXRlbXMgdGhhdCB0aGF0IHNob3VsZCByZW1haW4gYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcblxuICAgICAgdmFyIG9sZEl0ZW1zID0gdGhpcy52YWx1ZXNfLnNsaWNlKGluZGV4ICsgZGVsZXRlQ291bnQpOyAvLyBOZXcgbGVuZ3RoIGlzIHRoZSBwcmV2aW91cyBsZW5ndGggKyBhZGRpdGlvbiBjb3VudCAtIGRlbGV0aW9uIGNvdW50XG5cbiAgICAgIHRoaXMudmFsdWVzXy5sZW5ndGggKz0gbmV3SXRlbXMubGVuZ3RoIC0gZGVsZXRlQ291bnQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy52YWx1ZXNfW2luZGV4ICsgaV0gPSBuZXdJdGVtc1tpXTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG9sZEl0ZW1zLmxlbmd0aDsgX2krKykge1xuICAgICAgICB0aGlzLnZhbHVlc19baW5kZXggKyBuZXdJdGVtcy5sZW5ndGggKyBfaV0gPSBvbGRJdGVtc1tfaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ub3RpZnlBcnJheUNoaWxkVXBkYXRlXyA9IGZ1bmN0aW9uIG5vdGlmeUFycmF5Q2hpbGRVcGRhdGVfKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWRfICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICBvYnNlcnZhYmxlS2luZDogXCJhcnJheVwiLFxuICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyxcbiAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5hdG9tXy5uYW1lXyxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgIH0gOiBudWxsOyAvLyBUaGUgcmVhc29uIHdoeSB0aGlzIGlzIG9uIHJpZ2h0IGhhbmQgc2lkZSBoZXJlIChhbmQgbm90IGFib3ZlKSwgaXMgdGhpcyB3YXkgdGhlIHVnbGlmaWVyIHdpbGwgZHJvcCBpdCwgYnV0IGl0IHdvbid0XG4gICAgLy8gY2F1c2UgYW55IHJ1bnRpbWUgb3ZlcmhlYWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSB3aXRob3V0IE5PREVfRU5WIHNldCwgdW5sZXNzIHNweWluZyBpcyBlbmFibGVkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkge1xuICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0b21fLnJlcG9ydENoYW5nZWQoKTtcblxuICAgIGlmIChub3RpZnkpIHtcbiAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSB7XG4gICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeUFycmF5U3BsaWNlXyA9IGZ1bmN0aW9uIG5vdGlmeUFycmF5U3BsaWNlXyhpbmRleCwgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWRfICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICBvYnNlcnZhYmxlS2luZDogXCJhcnJheVwiLFxuICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyxcbiAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5hdG9tXy5uYW1lXyxcbiAgICAgIHR5cGU6IFNQTElDRSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIHJlbW92ZWQ6IHJlbW92ZWQsXG4gICAgICBhZGRlZDogYWRkZWQsXG4gICAgICByZW1vdmVkQ291bnQ6IHJlbW92ZWQubGVuZ3RoLFxuICAgICAgYWRkZWRDb3VudDogYWRkZWQubGVuZ3RoXG4gICAgfSA6IG51bGw7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkge1xuICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0b21fLnJlcG9ydENoYW5nZWQoKTsgLy8gY29uZm9ybTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvb2JzZXJ2ZVxuXG4gICAgaWYgKG5vdGlmeSkge1xuICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHtcbiAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0XyA9IGZ1bmN0aW9uIGdldF8oaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCB0aGlzLnZhbHVlc18ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWVfKHRoaXMudmFsdWVzX1tpbmRleF0pO1xuICAgIH1cblxuICAgIGNvbnNvbGUud2Fybihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlttb2J4XSBPdXQgb2YgYm91bmRzIHJlYWQ6IFwiICsgaW5kZXggOiBcIlttb2J4LmFycmF5XSBBdHRlbXB0IHRvIHJlYWQgYW4gYXJyYXkgaW5kZXggKFwiICsgaW5kZXggKyBcIikgdGhhdCBpcyBvdXQgb2YgYm91bmRzIChcIiArIHRoaXMudmFsdWVzXy5sZW5ndGggKyBcIikuIFBsZWFzZSBjaGVjayBsZW5ndGggZmlyc3QuIE91dCBvZiBib3VuZCBpbmRpY2VzIHdpbGwgbm90IGJlIHRyYWNrZWQgYnkgTW9iWFwiKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0XyA9IGZ1bmN0aW9uIHNldF8oaW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzXztcblxuICAgIGlmIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIC8vIHVwZGF0ZSBhdCBpbmRleCBpbiByYW5nZVxuICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tXyk7XG4gICAgICB2YXIgb2xkVmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xuXG4gICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgbmV3VmFsdWUgPSB0aGlzLmVuaGFuY2VyXyhuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgdmFyIGNoYW5nZWQgPSBuZXdWYWx1ZSAhPT0gb2xkVmFsdWU7XG5cbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5ub3RpZnlBcnJheUNoaWxkVXBkYXRlXyhpbmRleCwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAvLyBhZGQgYSBuZXcgaXRlbVxuICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXlfKGluZGV4LCAwLCBbbmV3VmFsdWVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3V0IG9mIGJvdW5kc1xuICAgICAgZGllKDE3LCBpbmRleCwgdmFsdWVzLmxlbmd0aCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbjtcbn0oKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCBlbmhhbmNlciwgbmFtZSwgb3duZWQpIHtcbiAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgIG5hbWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpIDogXCJPYnNlcnZhYmxlQXJyYXlcIjtcbiAgfVxuXG4gIGlmIChvd25lZCA9PT0gdm9pZCAwKSB7XG4gICAgb3duZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFzc2VydFByb3hpZXMoKTtcbiAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQsIGZhbHNlKTtcbiAgYWRkSGlkZGVuRmluYWxQcm9wKGFkbS52YWx1ZXNfLCAkbW9ieCwgYWRtKTtcbiAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGFkbS52YWx1ZXNfLCBhcnJheVRyYXBzKTtcbiAgYWRtLnByb3h5XyA9IHByb3h5O1xuXG4gIGlmIChpbml0aWFsVmFsdWVzICYmIGluaXRpYWxWYWx1ZXMubGVuZ3RoKSB7XG4gICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xuICAgIGFkbS5zcGxpY2VXaXRoQXJyYXlfKDAsIDAsIGluaXRpYWxWYWx1ZXMpO1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xuICB9XG5cbiAgcmV0dXJuIHByb3h5O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxudmFyIGFycmF5RXh0ZW5zaW9ucyA9IHtcbiAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHJldHVybiB0aGlzLnNwbGljZSgwKTtcbiAgfSxcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShuZXdJdGVtcykge1xuICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheV8oMCwgYWRtLnZhbHVlc18ubGVuZ3RoLCBuZXdJdGVtcyk7XG4gIH0sXG4gIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpY2UoKTtcbiAgfSxcblxuICAvKlxyXG4gICAqIGZ1bmN0aW9ucyB0aGF0IGRvIGFsdGVyIHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCAoYmFzZWQgb24gbGliLmVzNi5kLnRzKVxyXG4gICAqIHNpbmNlIHRoZXNlIGZ1bmN0aW9ucyBhbHRlciB0aGUgaW5uZXIgc3RydWN0dXJlIG9mIHRoZSBhcnJheSwgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLlxyXG4gICAqIEJlY2F1c2UgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLCB0aGV5IHNob3VsZCBub3QgYmUgdXNlZCBpbiBjb21wdXRlZCBmdW5jdGlvbixcclxuICAgKiBhbmQgZm9yIHRoYXQgcmVhc29uIHRoZSBkbyBub3QgY2FsbCBkZXBlbmRlbmN5U3RhdGUubm90aWZ5T2JzZXJ2ZWRcclxuICAgKi9cbiAgc3BsaWNlOiBmdW5jdGlvbiBzcGxpY2UoaW5kZXgsIGRlbGV0ZUNvdW50KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG5ld0l0ZW1zID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIG5ld0l0ZW1zW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG5cbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFtdO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5XyhpbmRleCk7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGluZGV4LCBkZWxldGVDb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xuICB9LFxuICBzcGxpY2VXaXRoQXJyYXk6IGZ1bmN0aW9uIHNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XG4gICAgcmV0dXJuIHRoaXNbJG1vYnhdLnNwbGljZVdpdGhBcnJheV8oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gIH0sXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goKSB7XG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgaXRlbXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBhZG0uc3BsaWNlV2l0aEFycmF5XyhhZG0udmFsdWVzXy5sZW5ndGgsIDAsIGl0ZW1zKTtcbiAgICByZXR1cm4gYWRtLnZhbHVlc18ubGVuZ3RoO1xuICB9LFxuICBwb3A6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoTWF0aC5tYXgodGhpc1skbW9ieF0udmFsdWVzXy5sZW5ndGggLSAxLCAwKSwgMSlbMF07XG4gIH0sXG4gIHNoaWZ0OiBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCwgMSlbMF07XG4gIH0sXG4gIHVuc2hpZnQ6IGZ1bmN0aW9uIHVuc2hpZnQoKSB7XG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuXG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgaXRlbXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBhZG0uc3BsaWNlV2l0aEFycmF5XygwLCAwLCBpdGVtcyk7XG4gICAgcmV0dXJuIGFkbS52YWx1ZXNfLmxlbmd0aDtcbiAgfSxcbiAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAvLyByZXZlcnNlIGJ5IGRlZmF1bHQgbXV0YXRlcyBpbiBwbGFjZSBiZWZvcmUgcmV0dXJuaW5nIHRoZSByZXN1bHRcbiAgICAvLyB3aGljaCBtYWtlcyBpdCBib3RoIGEgJ2Rlcml2YXRpb24nIGFuZCBhICdtdXRhdGlvbicuXG4gICAgaWYgKGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikge1xuICAgICAgZGllKDM3LCBcInJldmVyc2VcIik7XG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlKHRoaXMuc2xpY2UoKS5yZXZlcnNlKCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzb3J0OiBmdW5jdGlvbiBzb3J0KCkge1xuICAgIC8vIHNvcnQgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxuICAgIC8vIHdoaWNoIGdvZXMgYWdhaW5zdCBhbGwgZ29vZCBwcmFjdGljZXMuIExldCdzIG5vdCBjaGFuZ2UgdGhlIGFycmF5IGluIHBsYWNlIVxuICAgIGlmIChnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHtcbiAgICAgIGRpZSgzNywgXCJzb3J0XCIpO1xuICAgIH1cblxuICAgIHZhciBjb3B5ID0gdGhpcy5zbGljZSgpO1xuICAgIGNvcHkuc29ydC5hcHBseShjb3B5LCBhcmd1bWVudHMpO1xuICAgIHRoaXMucmVwbGFjZShjb3B5KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUodmFsdWUpIHtcbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgdmFyIGlkeCA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXykuaW5kZXhPZih2YWx1ZSk7XG5cbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4vKipcclxuICogV3JhcCBmdW5jdGlvbiBmcm9tIHByb3RvdHlwZVxyXG4gKiBXaXRob3V0IHRoaXMsIGV2ZXJ5dGhpbmcgd29ya3MgYXMgd2VsbCwgYnV0IHRoaXMgd29ya3NcclxuICogZmFzdGVyIGFzIGV2ZXJ5dGhpbmcgd29ya3Mgb24gdW5wcm94aWVkIHZhbHVlc1xyXG4gKi9cblxuYWRkQXJyYXlFeHRlbnNpb24oXCJjb25jYXRcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImZsYXRcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImluY2x1ZGVzXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJpbmRleE9mXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJqb2luXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJsYXN0SW5kZXhPZlwiLCBzaW1wbGVGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwic2xpY2VcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcInRvU3RyaW5nXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJ0b0xvY2FsZVN0cmluZ1wiLCBzaW1wbGVGdW5jKTsgLy8gbWFwXG5cbmFkZEFycmF5RXh0ZW5zaW9uKFwiZXZlcnlcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJmaWx0ZXJcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJmaW5kXCIsIG1hcExpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZmluZEluZGV4XCIsIG1hcExpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZmxhdE1hcFwiLCBtYXBMaWtlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImZvckVhY2hcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJtYXBcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJzb21lXCIsIG1hcExpa2VGdW5jKTsgLy8gcmVkdWNlXG5cbmFkZEFycmF5RXh0ZW5zaW9uKFwicmVkdWNlXCIsIHJlZHVjZUxpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwicmVkdWNlUmlnaHRcIiwgcmVkdWNlTGlrZUZ1bmMpO1xuXG5mdW5jdGlvbiBhZGRBcnJheUV4dGVuc2lvbihmdW5jTmFtZSwgZnVuY0ZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGVbZnVuY05hbWVdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBhcnJheUV4dGVuc2lvbnNbZnVuY05hbWVdID0gZnVuY0ZhY3RvcnkoZnVuY05hbWUpO1xuICB9XG59IC8vIFJlcG9ydCBhbmQgZGVsZWdhdGUgdG8gZGVoYW5jZWQgYXJyYXlcblxuXG5mdW5jdGlvbiBzaW1wbGVGdW5jKGZ1bmNOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgIGFkbS5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHZhciBkZWhhbmNlZFZhbHVlcyA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXyk7XG4gICAgcmV0dXJuIGRlaGFuY2VkVmFsdWVzW2Z1bmNOYW1lXS5hcHBseShkZWhhbmNlZFZhbHVlcywgYXJndW1lbnRzKTtcbiAgfTtcbn0gLy8gTWFrZSBzdXJlIGNhbGxiYWNrcyByZWNpZXZlIGNvcnJlY3QgYXJyYXkgYXJnICMyMzI2XG5cblxuZnVuY3Rpb24gbWFwTGlrZUZ1bmMoZnVuY05hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgIGFkbS5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHZhciBkZWhhbmNlZFZhbHVlcyA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXyk7XG4gICAgcmV0dXJuIGRlaGFuY2VkVmFsdWVzW2Z1bmNOYW1lXShmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGVsZW1lbnQsIGluZGV4LCBfdGhpczIpO1xuICAgIH0pO1xuICB9O1xufSAvLyBNYWtlIHN1cmUgY2FsbGJhY2tzIHJlY2lldmUgY29ycmVjdCBhcnJheSBhcmcgIzIzMjZcblxuXG5mdW5jdGlvbiByZWR1Y2VMaWtlRnVuYyhmdW5jTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgIGFkbS5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHZhciBkZWhhbmNlZFZhbHVlcyA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXyk7IC8vICMyNDMyIC0gcmVkdWNlIGJlaGF2aW9yIGRlcGVuZHMgb24gYXJndW1lbnRzLmxlbmd0aFxuXG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdO1xuXG4gICAgYXJndW1lbnRzWzBdID0gZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUsIGluZGV4KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSwgaW5kZXgsIF90aGlzMyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWhhbmNlZFZhbHVlc1tmdW5jTmFtZV0uYXBwbHkoZGVoYW5jZWRWYWx1ZXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbnZhciBpc09ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbik7XG5mdW5jdGlvbiBpc09ic2VydmFibGVBcnJheSh0aGluZykge1xuICByZXR1cm4gaXNPYmplY3QodGhpbmcpICYmIGlzT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcbn1cblxudmFyIF9TeW1ib2wkaXRlcmF0b3IsIF9TeW1ib2wkdG9TdHJpbmdUYWc7XG52YXIgT2JzZXJ2YWJsZU1hcE1hcmtlciA9IHt9O1xudmFyIEFERCA9IFwiYWRkXCI7XG52YXIgREVMRVRFID0gXCJkZWxldGVcIjsgLy8ganVzdCBleHRlbmQgTWFwPyBTZWUgYWxzbyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9uZXN0aGFydXMvMTNiNGQ3NGYyZWY0YTJmNDM1N2RiZDNmYzIzYzFlNTRcbi8vIEJ1dDogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy8xNTU2XG5cbl9TeW1ib2wkaXRlcmF0b3IgPSBTeW1ib2wuaXRlcmF0b3I7XG5fU3ltYm9sJHRvU3RyaW5nVGFnID0gU3ltYm9sLnRvU3RyaW5nVGFnO1xudmFyIE9ic2VydmFibGVNYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TeW1ib2wkaXRlcmF0b3IyLCBfU3ltYm9sJHRvU3RyaW5nVGFnMikge1xuICAvLyBoYXNNYXAsIG5vdCBoYXNoTWFwID4tKS5cbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZU1hcChpbml0aWFsRGF0YSwgZW5oYW5jZXJfLCBuYW1lXykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoZW5oYW5jZXJfID09PSB2b2lkIDApIHtcbiAgICAgIGVuaGFuY2VyXyA9IGRlZXBFbmhhbmNlcjtcbiAgICB9XG5cbiAgICBpZiAobmFtZV8gPT09IHZvaWQgMCkge1xuICAgICAgbmFtZV8gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk9ic2VydmFibGVNYXBAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZU1hcFwiO1xuICAgIH1cblxuICAgIHRoaXMuZW5oYW5jZXJfID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgdGhpc1skbW9ieF0gPSBPYnNlcnZhYmxlTWFwTWFya2VyO1xuICAgIHRoaXMuZGF0YV8gPSB2b2lkIDA7XG4gICAgdGhpcy5oYXNNYXBfID0gdm9pZCAwO1xuICAgIHRoaXMua2V5c0F0b21fID0gdm9pZCAwO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmNoYW5nZUxpc3RlbmVyc18gPSB2b2lkIDA7XG4gICAgdGhpcy5kZWhhbmNlciA9IHZvaWQgMDtcbiAgICB0aGlzLmVuaGFuY2VyXyA9IGVuaGFuY2VyXztcbiAgICB0aGlzLm5hbWVfID0gbmFtZV87XG5cbiAgICBpZiAoIWlzRnVuY3Rpb24oTWFwKSkge1xuICAgICAgZGllKDE4KTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXNBdG9tXyA9IGNyZWF0ZUF0b20ocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdGhpcy5uYW1lXyArIFwiLmtleXMoKVwiIDogXCJPYnNlcnZhYmxlTWFwLmtleXMoKVwiKTtcbiAgICB0aGlzLmRhdGFfID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuaGFzTWFwXyA9IG5ldyBNYXAoKTtcbiAgICBhbGxvd1N0YXRlQ2hhbmdlcyh0cnVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5tZXJnZShpbml0aWFsRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhc18gPSBmdW5jdGlvbiBoYXNfKGtleSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFfLmhhcyhrZXkpO1xuICB9O1xuXG4gIF9wcm90by5oYXMgPSBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIWdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzXyhrZXkpO1xuICAgIH1cblxuICAgIHZhciBlbnRyeSA9IHRoaXMuaGFzTWFwXy5nZXQoa2V5KTtcblxuICAgIGlmICghZW50cnkpIHtcbiAgICAgIHZhciBuZXdFbnRyeSA9IGVudHJ5ID0gbmV3IE9ic2VydmFibGVWYWx1ZSh0aGlzLmhhc18oa2V5KSwgcmVmZXJlbmNlRW5oYW5jZXIsIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHRoaXMubmFtZV8gKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpICsgXCI/XCIgOiBcIk9ic2VydmFibGVNYXAua2V5P1wiLCBmYWxzZSk7XG4gICAgICB0aGlzLmhhc01hcF8uc2V0KGtleSwgbmV3RW50cnkpO1xuICAgICAgb25CZWNvbWVVbm9ic2VydmVkKG5ld0VudHJ5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuaGFzTWFwX1tcImRlbGV0ZVwiXShrZXkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJ5LmdldCgpO1xuICB9O1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBoYXNLZXkgPSB0aGlzLmhhc18oa2V5KTtcblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBoYXNLZXkgPyBVUERBVEUgOiBBREQsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgbmV3VmFsdWU6IHZhbHVlLFxuICAgICAgICBuYW1lOiBrZXlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGhhc0tleSkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZV8oa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkVmFsdWVfKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90b1tcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uIF9kZWxldGUoa2V5KSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmtleXNBdG9tXyk7XG5cbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgdHlwZTogREVMRVRFLFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG5hbWU6IGtleVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghY2hhbmdlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNfKGtleSkpIHtcbiAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG5cbiAgICAgIHZhciBfY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwibWFwXCIsXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgdHlwZTogREVMRVRFLFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG9sZFZhbHVlOiB0aGlzLmRhdGFfLmdldChrZXkpLnZhbHVlXyxcbiAgICAgICAgbmFtZToga2V5XG4gICAgICB9IDogbnVsbDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHtcbiAgICAgICAgc3B5UmVwb3J0U3RhcnQoX2NoYW5nZSk7XG4gICAgICB9IC8vIFRPRE8gZml4IHR5cGVcblxuXG4gICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpczMkaGFzTWFwXyRnZXQ7XG5cbiAgICAgICAgX3RoaXMzLmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG5cbiAgICAgICAgKF90aGlzMyRoYXNNYXBfJGdldCA9IF90aGlzMy5oYXNNYXBfLmdldChrZXkpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMzJGhhc01hcF8kZ2V0LnNldE5ld1ZhbHVlXyhmYWxzZSk7XG5cbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBfdGhpczMuZGF0YV8uZ2V0KGtleSk7XG5cbiAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZV8odW5kZWZpbmVkKTtcblxuICAgICAgICBfdGhpczMuZGF0YV9bXCJkZWxldGVcIl0oa2V5KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBfY2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHtcbiAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlVmFsdWVfID0gZnVuY3Rpb24gdXBkYXRlVmFsdWVfKGtleSwgbmV3VmFsdWUpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuZGF0YV8uZ2V0KGtleSk7XG4gICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnByZXBhcmVOZXdWYWx1ZV8obmV3VmFsdWUpO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcbiAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwibWFwXCIsXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlXyxcbiAgICAgICAgbmFtZToga2V5LFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgIH0gOiBudWxsO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkge1xuICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgICAgfSAvLyBUT0RPIGZpeCB0eXBlXG5cblxuICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZV8obmV3VmFsdWUpO1xuXG4gICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkge1xuICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFkZFZhbHVlXyA9IGZ1bmN0aW9uIGFkZFZhbHVlXyhrZXksIG5ld1ZhbHVlKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmtleXNBdG9tXyk7XG4gICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzNCRoYXNNYXBfJGdldDtcblxuICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKG5ld1ZhbHVlLCBfdGhpczQuZW5oYW5jZXJfLCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBfdGhpczQubmFtZV8gKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpIDogXCJPYnNlcnZhYmxlTWFwLmtleVwiLCBmYWxzZSk7XG5cbiAgICAgIF90aGlzNC5kYXRhXy5zZXQoa2V5LCBvYnNlcnZhYmxlKTtcblxuICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnZhbHVlXzsgLy8gdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIGNoYW5nZWRcblxuICAgICAgKF90aGlzNCRoYXNNYXBfJGdldCA9IF90aGlzNC5oYXNNYXBfLmdldChrZXkpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXM0JGhhc01hcF8kZ2V0LnNldE5ld1ZhbHVlXyh0cnVlKTtcblxuICAgICAgX3RoaXM0LmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgfSk7XG4gICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICBvYnNlcnZhYmxlS2luZDogXCJtYXBcIixcbiAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgIHR5cGU6IEFERCxcbiAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgIG5hbWU6IGtleSxcbiAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgIH0gOiBudWxsO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHtcbiAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgfSAvLyBUT0RPIGZpeCB0eXBlXG5cblxuICAgIGlmIChub3RpZnkpIHtcbiAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSB7XG4gICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlXyh0aGlzLmRhdGFfLmdldChrZXkpLmdldCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWVfKHVuZGVmaW5lZCk7XG4gIH07XG5cbiAgX3Byb3RvLmRlaGFuY2VWYWx1ZV8gPSBmdW5jdGlvbiBkZWhhbmNlVmFsdWVfKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBfcHJvdG8ua2V5cyA9IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhXy5rZXlzKCk7XG4gIH07XG5cbiAgX3Byb3RvLnZhbHVlcyA9IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGtleXMgPSB0aGlzLmtleXMoKTtcbiAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciBfa2V5cyRuZXh0ID0ga2V5cy5uZXh0KCksXG4gICAgICAgICAgICBkb25lID0gX2tleXMkbmV4dC5kb25lLFxuICAgICAgICAgICAgdmFsdWUgPSBfa2V5cyRuZXh0LnZhbHVlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogZG9uZSxcbiAgICAgICAgICB2YWx1ZTogZG9uZSA/IHVuZGVmaW5lZCA6IHNlbGYuZ2V0KHZhbHVlKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5lbnRyaWVzID0gZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGtleXMgPSB0aGlzLmtleXMoKTtcbiAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciBfa2V5cyRuZXh0MiA9IGtleXMubmV4dCgpLFxuICAgICAgICAgICAgZG9uZSA9IF9rZXlzJG5leHQyLmRvbmUsXG4gICAgICAgICAgICB2YWx1ZSA9IF9rZXlzJG5leHQyLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogZG9uZSxcbiAgICAgICAgICB2YWx1ZTogZG9uZSA/IHVuZGVmaW5lZCA6IFt2YWx1ZSwgc2VsZi5nZXQodmFsdWUpXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90b1tfU3ltYm9sJGl0ZXJhdG9yMl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICB9O1xuXG4gIF9wcm90by5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UodGhpcyksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX3N0ZXAkdmFsdWUgPSBfc3RlcC52YWx1ZSxcbiAgICAgICAgICBrZXkgPSBfc3RlcCR2YWx1ZVswXSxcbiAgICAgICAgICB2YWx1ZSA9IF9zdGVwJHZhbHVlWzFdO1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwga2V5LCB0aGlzKTtcbiAgICB9XG4gIH1cbiAgLyoqIE1lcmdlIGFub3RoZXIgb2JqZWN0IGludG8gdGhpcyBvYmplY3QsIHJldHVybnMgdGhpcy4gKi9cbiAgO1xuXG4gIF9wcm90by5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKG90aGVyKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG90aGVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgTWFwKG90aGVyKTtcbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChvdGhlcikpIHtcbiAgICAgICAgZ2V0UGxhaW5PYmplY3RLZXlzKG90aGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM1LnNldChrZXksIG90aGVyW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpIHtcbiAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBrZXkgPSBfcmVmWzBdLFxuICAgICAgICAgICAgICB2YWx1ZSA9IF9yZWZbMV07XG4gICAgICAgICAgcmV0dXJuIF90aGlzNS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc0VTNk1hcChvdGhlcikpIHtcbiAgICAgICAgaWYgKG90aGVyLmNvbnN0cnVjdG9yICE9PSBNYXApIHtcbiAgICAgICAgICBkaWUoMTksIG90aGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM1LnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG90aGVyICE9PSBudWxsICYmIG90aGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGllKDIwLCBvdGhlcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShfdGhpczYua2V5cygpKSwgX3N0ZXAyOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIoKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIga2V5ID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgX3RoaXM2W1wiZGVsZXRlXCJdKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSh2YWx1ZXMpIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIC8vIEltcGxlbWVudGF0aW9uIHJlcXVpcmVtZW50czpcbiAgICAvLyAtIHJlc3BlY3Qgb3JkZXJpbmcgb2YgcmVwbGFjZW1lbnQgbWFwXG4gICAgLy8gLSBhbGxvdyBpbnRlcmNlcHRvcnMgdG8gcnVuIGFuZCBwb3RlbnRpYWxseSBwcmV2ZW50IGluZGl2aWR1YWwgb3BlcmF0aW9uc1xuICAgIC8vIC0gZG9uJ3QgcmVjcmVhdGUgb2JzZXJ2YWJsZXMgdGhhdCBhbHJlYWR5IGV4aXN0IGluIG9yaWdpbmFsIG1hcCAoc28gd2UgZG9uJ3QgZGVzdHJveSBleGlzdGluZyBzdWJzY3JpcHRpb25zKVxuICAgIC8vIC0gZG9uJ3QgX2tleXNBdG9tLnJlcG9ydENoYW5nZWQgaWYgdGhlIGtleXMgb2YgcmVzdWx0aW5nIG1hcCBhcmUgaW5kZW50aWNhbCAob3JkZXIgbWF0dGVycyEpXG4gICAgLy8gLSBub3RlIHRoYXQgcmVzdWx0IG1hcCBtYXkgZGlmZmVyIGZyb20gcmVwbGFjZW1lbnQgbWFwIGR1ZSB0byB0aGUgaW50ZXJjZXB0b3JzXG4gICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ29udmVydCB0byBtYXAgc28gd2UgY2FuIGRvIHF1aWNrIGtleSBsb29rdXBzXG4gICAgICB2YXIgcmVwbGFjZW1lbnRNYXAgPSBjb252ZXJ0VG9NYXAodmFsdWVzKTtcbiAgICAgIHZhciBvcmRlcmVkRGF0YSA9IG5ldyBNYXAoKTsgLy8gVXNlZCBmb3Igb3B0aW1pemF0aW9uXG5cbiAgICAgIHZhciBrZXlzUmVwb3J0Q2hhbmdlZENhbGxlZCA9IGZhbHNlOyAvLyBEZWxldGUga2V5cyB0aGF0IGRvbid0IGV4aXN0IGluIHJlcGxhY2VtZW50IG1hcFxuICAgICAgLy8gaWYgdGhlIGtleSBkZWxldGlvbiBpcyBwcmV2ZW50ZWQgYnkgaW50ZXJjZXB0b3JcbiAgICAgIC8vIGFkZCBlbnRyeSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSByZXN1bHQgbWFwXG5cbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKF90aGlzNy5kYXRhXy5rZXlzKCkpLCBfc3RlcDM7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMygpKS5kb25lOykge1xuICAgICAgICB2YXIga2V5ID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICAgIC8vIENvbmN1cnJlbnRseSBpdGVyYXRpbmcvZGVsZXRpbmcga2V5c1xuICAgICAgICAvLyBpdGVyYXRvciBzaG91bGQgaGFuZGxlIHRoaXMgY29ycmVjdGx5XG4gICAgICAgIGlmICghcmVwbGFjZW1lbnRNYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICB2YXIgZGVsZXRlZCA9IF90aGlzN1tcImRlbGV0ZVwiXShrZXkpOyAvLyBXYXMgdGhlIGtleSByZW1vdmVkP1xuXG5cbiAgICAgICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICAgICAgLy8gX2tleXNBdG9tLnJlcG9ydENoYW5nZWQoKSB3YXMgYWxyZWFkeSBjYWxsZWRcbiAgICAgICAgICAgIGtleXNSZXBvcnRDaGFuZ2VkQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGVsZXRlIHByZXZlbnRlZCBieSBpbnRlcmNlcHRvclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXM3LmRhdGFfLmdldChrZXkpO1xuXG4gICAgICAgICAgICBvcmRlcmVkRGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIE1lcmdlIGVudHJpZXNcblxuXG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShyZXBsYWNlbWVudE1hcC5lbnRyaWVzKCkpLCBfc3RlcDQ7ICEoX3N0ZXA0ID0gX2l0ZXJhdG9yNCgpKS5kb25lOykge1xuICAgICAgICB2YXIgX3N0ZXA0JHZhbHVlID0gX3N0ZXA0LnZhbHVlLFxuICAgICAgICAgICAgX2tleSA9IF9zdGVwNCR2YWx1ZVswXSxcbiAgICAgICAgICAgIF92YWx1ZSA9IF9zdGVwNCR2YWx1ZVsxXTtcblxuICAgICAgICAvLyBXZSB3aWxsIHdhbnQgdG8ga25vdyB3aGV0aGVyIGEgbmV3IGtleSBpcyBhZGRlZFxuICAgICAgICB2YXIga2V5RXhpc3RlZCA9IF90aGlzNy5kYXRhXy5oYXMoX2tleSk7IC8vIEFkZCBvciB1cGRhdGUgdmFsdWVcblxuXG4gICAgICAgIF90aGlzNy5zZXQoX2tleSwgX3ZhbHVlKTsgLy8gVGhlIGFkZGl0aW9uIGNvdWxkIGhhdmUgYmVlbiBwcmV2ZW50IGJ5IGludGVyY2VwdG9yXG5cblxuICAgICAgICBpZiAoX3RoaXM3LmRhdGFfLmhhcyhfa2V5KSkge1xuICAgICAgICAgIC8vIFRoZSB1cGRhdGUgY291bGQgaGF2ZSBiZWVuIHByZXZlbnRlZCBieSBpbnRlcmNlcHRvclxuICAgICAgICAgIC8vIGFuZCBhbHNvIHdlIHdhbnQgdG8gcHJlc2VydmUgZXhpc3RpbmcgdmFsdWVzXG4gICAgICAgICAgLy8gc28gdXNlIHZhbHVlIGZyb20gX2RhdGEgbWFwIChpbnN0ZWFkIG9mIHJlcGxhY2VtZW50IG1hcClcbiAgICAgICAgICB2YXIgX3ZhbHVlMiA9IF90aGlzNy5kYXRhXy5nZXQoX2tleSk7XG5cbiAgICAgICAgICBvcmRlcmVkRGF0YS5zZXQoX2tleSwgX3ZhbHVlMik7IC8vIFdhcyBhIG5ldyBrZXkgYWRkZWQ/XG5cbiAgICAgICAgICBpZiAoIWtleUV4aXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIF9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCkgd2FzIGFscmVhZHkgY2FsbGVkXG4gICAgICAgICAgICBrZXlzUmVwb3J0Q2hhbmdlZENhbGxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIENoZWNrIGZvciBwb3NzaWJsZSBrZXkgb3JkZXIgY2hhbmdlXG5cblxuICAgICAgaWYgKCFrZXlzUmVwb3J0Q2hhbmdlZENhbGxlZCkge1xuICAgICAgICBpZiAoX3RoaXM3LmRhdGFfLnNpemUgIT09IG9yZGVyZWREYXRhLnNpemUpIHtcbiAgICAgICAgICAvLyBJZiBzaXplIGRpZmZlcnMsIGtleXMgYXJlIGRlZmluaXRlbHkgbW9kaWZpZWRcbiAgICAgICAgICBfdGhpczcua2V5c0F0b21fLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaXRlcjEgPSBfdGhpczcuZGF0YV8ua2V5cygpO1xuXG4gICAgICAgICAgdmFyIGl0ZXIyID0gb3JkZXJlZERhdGEua2V5cygpO1xuICAgICAgICAgIHZhciBuZXh0MSA9IGl0ZXIxLm5leHQoKTtcbiAgICAgICAgICB2YXIgbmV4dDIgPSBpdGVyMi5uZXh0KCk7XG5cbiAgICAgICAgICB3aGlsZSAoIW5leHQxLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChuZXh0MS52YWx1ZSAhPT0gbmV4dDIudmFsdWUpIHtcbiAgICAgICAgICAgICAgX3RoaXM3LmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQxID0gaXRlcjEubmV4dCgpO1xuICAgICAgICAgICAgbmV4dDIgPSBpdGVyMi5uZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFVzZSBjb3JyZWN0bHkgb3JkZXJlZCBtYXBcblxuXG4gICAgICBfdGhpczcuZGF0YV8gPSBvcmRlcmVkRGF0YTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IE9ic2VydmFibGVNYXBdXCI7XG4gIH07XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbiAgfTtcblxuICAvKipcclxuICAgKiBPYnNlcnZlcyB0aGlzIG9iamVjdC4gVHJpZ2dlcnMgZm9yIHRoZSBldmVudHMgJ2FkZCcsICd1cGRhdGUnIGFuZCAnZGVsZXRlJy5cclxuICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXHJcbiAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcclxuICAgKi9cbiAgX3Byb3RvLm9ic2VydmVfID0gZnVuY3Rpb24gb2JzZXJ2ZV8obGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZmlyZUltbWVkaWF0ZWx5ID09PSB0cnVlKSB7XG4gICAgICBkaWUoXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggbWFwcy5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5pbnRlcmNlcHRfID0gZnVuY3Rpb24gaW50ZXJjZXB0XyhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKE9ic2VydmFibGVNYXAsIFt7XG4gICAga2V5OiBcInNpemVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRoaXMua2V5c0F0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhXy5zaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogX1N5bWJvbCR0b1N0cmluZ1RhZzIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJNYXBcIjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZU1hcDtcbn0oX1N5bWJvbCRpdGVyYXRvciwgX1N5bWJvbCR0b1N0cmluZ1RhZyk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG52YXIgaXNPYnNlcnZhYmxlTWFwID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlTWFwXCIsIE9ic2VydmFibGVNYXApO1xuXG5mdW5jdGlvbiBjb252ZXJ0VG9NYXAoZGF0YVN0cnVjdHVyZSkge1xuICBpZiAoaXNFUzZNYXAoZGF0YVN0cnVjdHVyZSkgfHwgaXNPYnNlcnZhYmxlTWFwKGRhdGFTdHJ1Y3R1cmUpKSB7XG4gICAgcmV0dXJuIGRhdGFTdHJ1Y3R1cmU7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhU3RydWN0dXJlKSkge1xuICAgIHJldHVybiBuZXcgTWFwKGRhdGFTdHJ1Y3R1cmUpO1xuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoZGF0YVN0cnVjdHVyZSkpIHtcbiAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGRhdGFTdHJ1Y3R1cmUpIHtcbiAgICAgIG1hcC5zZXQoa2V5LCBkYXRhU3RydWN0dXJlW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZSgyMSwgZGF0YVN0cnVjdHVyZSk7XG4gIH1cbn1cblxudmFyIF9TeW1ib2wkaXRlcmF0b3IkMSwgX1N5bWJvbCR0b1N0cmluZ1RhZyQxO1xudmFyIE9ic2VydmFibGVTZXRNYXJrZXIgPSB7fTtcbl9TeW1ib2wkaXRlcmF0b3IkMSA9IFN5bWJvbC5pdGVyYXRvcjtcbl9TeW1ib2wkdG9TdHJpbmdUYWckMSA9IFN5bWJvbC50b1N0cmluZ1RhZztcbnZhciBPYnNlcnZhYmxlU2V0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3ltYm9sJGl0ZXJhdG9yMiwgX1N5bWJvbCR0b1N0cmluZ1RhZzIpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZVNldChpbml0aWFsRGF0YSwgZW5oYW5jZXIsIG5hbWVfKSB7XG4gICAgaWYgKGVuaGFuY2VyID09PSB2b2lkIDApIHtcbiAgICAgIGVuaGFuY2VyID0gZGVlcEVuaGFuY2VyO1xuICAgIH1cblxuICAgIGlmIChuYW1lXyA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiT2JzZXJ2YWJsZVNldEBcIiArIGdldE5leHRJZCgpIDogXCJPYnNlcnZhYmxlU2V0XCI7XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lXyA9IHZvaWQgMDtcbiAgICB0aGlzWyRtb2J4XSA9IE9ic2VydmFibGVTZXRNYXJrZXI7XG4gICAgdGhpcy5kYXRhXyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmF0b21fID0gdm9pZCAwO1xuICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmludGVyY2VwdG9yc18gPSB2b2lkIDA7XG4gICAgdGhpcy5kZWhhbmNlciA9IHZvaWQgMDtcbiAgICB0aGlzLmVuaGFuY2VyXyA9IHZvaWQgMDtcbiAgICB0aGlzLm5hbWVfID0gbmFtZV87XG5cbiAgICBpZiAoIWlzRnVuY3Rpb24oU2V0KSkge1xuICAgICAgZGllKDIyKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0b21fID0gY3JlYXRlQXRvbSh0aGlzLm5hbWVfKTtcblxuICAgIHRoaXMuZW5oYW5jZXJfID0gZnVuY3Rpb24gKG5ld1YsIG9sZFYpIHtcbiAgICAgIHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lXyk7XG4gICAgfTtcblxuICAgIGlmIChpbml0aWFsRGF0YSkge1xuICAgICAgdGhpcy5yZXBsYWNlKGluaXRpYWxEYXRhKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2JzZXJ2YWJsZVNldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlaGFuY2VWYWx1ZV8gPSBmdW5jdGlvbiBkZWhhbmNlVmFsdWVfKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShfdGhpcy5kYXRhXy52YWx1ZXMoKSksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICBfdGhpc1tcImRlbGV0ZVwiXSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja0ZuLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UodGhpcyksIF9zdGVwMjsgIShfc3RlcDIgPSBfaXRlcmF0b3IyKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgdmFsdWUgPSBfc3RlcDIudmFsdWU7XG4gICAgICBjYWxsYmFja0ZuLmNhbGwodGhpc0FyZywgdmFsdWUsIHZhbHVlLCB0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tXyk7XG5cbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgdHlwZTogQURELFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghY2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSAvLyBpZGVhbGx5LCB2YWx1ZSA9IGNoYW5nZS52YWx1ZSB3b3VsZCBiZSBkb25lIGhlcmUsIHNvIHRoYXQgdmFsdWVzIGNhbiBiZVxuICAgICAgLy8gY2hhbmdlZCBieSBpbnRlcmNlcHRvci4gU2FtZSBhcHBsaWVzIGZvciBvdGhlciBTZXQgYW5kIE1hcCBhcGkncy5cblxuICAgIH1cblxuICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5kYXRhXy5hZGQoX3RoaXMyLmVuaGFuY2VyXyh2YWx1ZSwgdW5kZWZpbmVkKSk7XG5cbiAgICAgICAgX3RoaXMyLmF0b21fLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG5vdGlmeVNweSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG5cbiAgICAgIHZhciBfY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwic2V0XCIsXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgdHlwZTogQURELFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgfSA6IG51bGw7XG5cbiAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIHNweVJlcG9ydFN0YXJ0KF9jaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBfY2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvW1wiZGVsZXRlXCJdID0gZnVuY3Rpb24gX2RlbGV0ZSh2YWx1ZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBvbGRWYWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgdmFyIG5vdGlmeVNweSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG5cbiAgICAgIHZhciBfY2hhbmdlMiA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcInNldFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBvbGRWYWx1ZTogdmFsdWVcbiAgICAgIH0gOiBudWxsO1xuXG4gICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBzcHlSZXBvcnRTdGFydChfY2hhbmdlMik7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLmF0b21fLnJlcG9ydENoYW5nZWQoKTtcblxuICAgICAgICBfdGhpczMuZGF0YV9bXCJkZWxldGVcIl0odmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIF9jaGFuZ2UyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8uaGFzID0gZnVuY3Rpb24gaGFzKHZhbHVlKSB7XG4gICAgdGhpcy5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiB0aGlzLmRhdGFfLmhhcyh0aGlzLmRlaGFuY2VWYWx1ZV8odmFsdWUpKTtcbiAgfTtcblxuICBfcHJvdG8uZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgdmFyIGtleXMgPSBBcnJheS5mcm9tKHRoaXMua2V5cygpKTtcbiAgICB2YXIgdmFsdWVzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlcygpKTtcbiAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgbmV4dEluZGV4ICs9IDE7XG4gICAgICAgIHJldHVybiBpbmRleCA8IHZhbHVlcy5sZW5ndGggPyB7XG4gICAgICAgICAgdmFsdWU6IFtrZXlzW2luZGV4XSwgdmFsdWVzW2luZGV4XV0sXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmtleXMgPSBmdW5jdGlvbiBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICB9O1xuXG4gIF9wcm90by52YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgdGhpcy5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICB2YXIgb2JzZXJ2YWJsZVZhbHVlcyA9IEFycmF5LmZyb20odGhpcy5kYXRhXy52YWx1ZXMoKSk7XG4gICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgb2JzZXJ2YWJsZVZhbHVlcy5sZW5ndGggPyB7XG4gICAgICAgICAgdmFsdWU6IHNlbGYuZGVoYW5jZVZhbHVlXyhvYnNlcnZhYmxlVmFsdWVzW25leHRJbmRleCsrXSksXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKG90aGVyKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KG90aGVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2V0KG90aGVyKTtcbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpIHtcbiAgICAgICAgX3RoaXM0LmNsZWFyKCk7XG5cbiAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc0VTNlNldChvdGhlcikpIHtcbiAgICAgICAgX3RoaXM0LmNsZWFyKCk7XG5cbiAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChvdGhlciAhPT0gbnVsbCAmJiBvdGhlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRpZShcIkNhbm5vdCBpbml0aWFsaXplIHNldCBmcm9tIFwiICsgb3RoZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAvLyAuLi4gJ2ZpcmVJbW1lZGlhdGVseScgY291bGQgYWxzbyBiZSB0cnVlP1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZmlyZUltbWVkaWF0ZWx5ID09PSB0cnVlKSB7XG4gICAgICBkaWUoXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggc2V0cy5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5pbnRlcmNlcHRfID0gZnVuY3Rpb24gaW50ZXJjZXB0XyhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gIH07XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IE9ic2VydmFibGVTZXRdXCI7XG4gIH07XG5cbiAgX3Byb3RvW19TeW1ib2wkaXRlcmF0b3IyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoT2JzZXJ2YWJsZVNldCwgW3tcbiAgICBrZXk6IFwic2l6ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdGhpcy5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YV8uc2l6ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IF9TeW1ib2wkdG9TdHJpbmdUYWcyLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiU2V0XCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9ic2VydmFibGVTZXQ7XG59KF9TeW1ib2wkaXRlcmF0b3IkMSwgX1N5bWJvbCR0b1N0cmluZ1RhZyQxKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbnZhciBpc09ic2VydmFibGVTZXQgPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVTZXRcIiwgT2JzZXJ2YWJsZVNldCk7XG5cbnZhciBkZXNjcmlwdG9yQ2FjaGUgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmNyZWF0ZShudWxsKTtcbnZhciBSRU1PVkUgPSBcInJlbW92ZVwiO1xudmFyIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXRfLCB2YWx1ZXNfLCBuYW1lXywgLy8gVXNlZCBhbnl0aW1lIGFubm90YXRpb24gaXMgbm90IGV4cGxpY2l0ZWx5IHByb3ZpZGVkXG4gIGRlZmF1bHRBbm5vdGF0aW9uXykge1xuICAgIGlmICh2YWx1ZXNfID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlc18gPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRBbm5vdGF0aW9uXyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0QW5ub3RhdGlvbl8gPSBhdXRvQW5ub3RhdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnRhcmdldF8gPSB2b2lkIDA7XG4gICAgdGhpcy52YWx1ZXNfID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5kZWZhdWx0QW5ub3RhdGlvbl8gPSB2b2lkIDA7XG4gICAgdGhpcy5rZXlzQXRvbV8gPSB2b2lkIDA7XG4gICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnNfID0gdm9pZCAwO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICB0aGlzLnByb3h5XyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUGxhaW5PYmplY3RfID0gdm9pZCAwO1xuICAgIHRoaXMuYXBwbGllZEFubm90YXRpb25zXyA9IHZvaWQgMDtcbiAgICB0aGlzLnBlbmRpbmdLZXlzXyA9IHZvaWQgMDtcbiAgICB0aGlzLnRhcmdldF8gPSB0YXJnZXRfO1xuICAgIHRoaXMudmFsdWVzXyA9IHZhbHVlc187XG4gICAgdGhpcy5uYW1lXyA9IG5hbWVfO1xuICAgIHRoaXMuZGVmYXVsdEFubm90YXRpb25fID0gZGVmYXVsdEFubm90YXRpb25fO1xuICAgIHRoaXMua2V5c0F0b21fID0gbmV3IEF0b20ocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdGhpcy5uYW1lXyArIFwiLmtleXNcIiA6IFwiT2JzZXJ2YWJsZU9iamVjdC5rZXlzXCIpOyAvLyBPcHRpbWl6YXRpb246IHdlIHVzZSB0aGlzIGZyZXF1ZW50bHlcblxuICAgIHRoaXMuaXNQbGFpbk9iamVjdF8gPSBpc1BsYWluT2JqZWN0KHRoaXMudGFyZ2V0Xyk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc0Fubm90YXRpb24odGhpcy5kZWZhdWx0QW5ub3RhdGlvbl8pKSB7XG4gICAgICBkaWUoXCJkZWZhdWx0QW5ub3RhdGlvbiBtdXN0IGJlIHZhbGlkIGFubm90YXRpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgLy8gUHJlcGFyZSBzdHJ1Y3R1cmUgZm9yIHRyYWNraW5nIHdoaWNoIGZpZWxkcyB3ZXJlIGFscmVhZHkgYW5ub3RhdGVkXG4gICAgICB0aGlzLmFwcGxpZWRBbm5vdGF0aW9uc18gPSB7fTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0T2JzZXJ2YWJsZVByb3BWYWx1ZV8gPSBmdW5jdGlvbiBnZXRPYnNlcnZhYmxlUHJvcFZhbHVlXyhrZXkpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXNfLmdldChrZXkpLmdldCgpO1xuICB9O1xuXG4gIF9wcm90by5zZXRPYnNlcnZhYmxlUHJvcFZhbHVlXyA9IGZ1bmN0aW9uIHNldE9ic2VydmFibGVQcm9wVmFsdWVfKGtleSwgbmV3VmFsdWUpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMudmFsdWVzXy5nZXQoa2V5KTtcblxuICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSkge1xuICAgICAgb2JzZXJ2YWJsZS5zZXQobmV3VmFsdWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBpbnRlcmNlcHRcblxuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgIH1cblxuICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS5wcmVwYXJlTmV3VmFsdWVfKG5ld1ZhbHVlKTsgLy8gbm90aWZ5IHNweSAmIG9ic2VydmVyc1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpO1xuXG4gICAgICB2YXIgX2NoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwib2JqZWN0XCIsXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlXyxcbiAgICAgICAgbmFtZToga2V5LFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgIH0gOiBudWxsO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkge1xuICAgICAgICBzcHlSZXBvcnRTdGFydChfY2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIG9ic2VydmFibGUuc2V0TmV3VmFsdWVfKG5ld1ZhbHVlKTtcblxuICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgX2NoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5nZXRfID0gZnVuY3Rpb24gZ2V0XyhrZXkpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uICYmICFoYXNQcm9wKHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgLy8gS2V5IGRvZXNuJ3QgZXhpc3QgeWV0LCBzdWJzY3JpYmUgZm9yIGl0IGluIGNhc2UgaXQncyBhZGRlZCBsYXRlclxuICAgICAgdGhpcy5oYXNfKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0X1trZXldO1xuICB9XG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UHJvcGVydHlLZXl9IGtleVxyXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAqIEBwYXJhbSB7QW5ub3RhdGlvbnxib29sZWFufSBhbm5vdGF0aW9uIHRydWUgLSB1c2UgZGVmYXVsdCBhbm5vdGF0aW9uLCBmYWxzZSAtIGNvcHkgYXMgaXNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByb3h5VHJhcCB3aGV0aGVyIGl0J3MgY2FsbGVkIGZyb20gcHJveHkgdHJhcFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRfID0gZnVuY3Rpb24gc2V0XyhrZXksIHZhbHVlLCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIERvbid0IHVzZSAuaGFzKGtleSkgLSB3ZSBjYXJlIGFib3V0IG93blxuICAgIGlmIChoYXNQcm9wKHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgLy8gRXhpc3RpbmcgcHJvcFxuICAgICAgaWYgKHRoaXMudmFsdWVzXy5oYXMoa2V5KSkge1xuICAgICAgICAvLyBPYnNlcnZhYmxlIChjYW4gYmUgaW50ZXJjZXB0ZWQpXG4gICAgICAgIHJldHVybiB0aGlzLnNldE9ic2VydmFibGVQcm9wVmFsdWVfKGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgLy8gTm9uLW9ic2VydmFibGUgLSBwcm94eVxuICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQodGhpcy50YXJnZXRfLCBrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vbi1vYnNlcnZhYmxlXG4gICAgICAgIHRoaXMudGFyZ2V0X1trZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOZXcgcHJvcFxuICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5kXyhrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9LCB0aGlzLmRlZmF1bHRBbm5vdGF0aW9uXywgcHJveHlUcmFwKTtcbiAgICB9XG4gIH0gLy8gVHJhcCBmb3IgXCJpblwiXG4gIDtcblxuICBfcHJvdG8uaGFzXyA9IGZ1bmN0aW9uIGhhc18oa2V5KSB7XG4gICAgaWYgKCFnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHtcbiAgICAgIC8vIFNraXAga2V5IHN1YnNjcmlwdGlvbiBvdXRzaWRlIGRlcml2YXRpb25cbiAgICAgIHJldHVybiBrZXkgaW4gdGhpcy50YXJnZXRfO1xuICAgIH1cblxuICAgIHRoaXMucGVuZGluZ0tleXNfIHx8ICh0aGlzLnBlbmRpbmdLZXlzXyA9IG5ldyBNYXAoKSk7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5wZW5kaW5nS2V5c18uZ2V0KGtleSk7XG5cbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICBlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoa2V5IGluIHRoaXMudGFyZ2V0XywgcmVmZXJlbmNlRW5oYW5jZXIsIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHRoaXMubmFtZV8gKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpICsgXCI/XCIgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5P1wiLCBmYWxzZSk7XG4gICAgICB0aGlzLnBlbmRpbmdLZXlzXy5zZXQoa2V5LCBlbnRyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJ5LmdldCgpO1xuICB9XG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UHJvcGVydHlLZXl9IGtleVxyXG4gICAqIEBwYXJhbSB7QW5ub3RhdGlvbnxib29sZWFufSBhbm5vdGF0aW9uIHRydWUgLSB1c2UgZGVmYXVsdCBhbm5vdGF0aW9uLCBmYWxzZSAtIGlnbm9yZSBwcm9wXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ubWFrZV8gPSBmdW5jdGlvbiBtYWtlXyhrZXksIGFubm90YXRpb24pIHtcbiAgICBpZiAoYW5ub3RhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgYW5ub3RhdGlvbiA9IHRoaXMuZGVmYXVsdEFubm90YXRpb25fO1xuICAgIH1cblxuICAgIGlmIChhbm5vdGF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFzc2VydEFubm90YWJsZSh0aGlzLCBhbm5vdGF0aW9uLCBrZXkpO1xuXG4gICAgaWYgKCEoa2V5IGluIHRoaXMudGFyZ2V0XykpIHtcbiAgICAgIHZhciBfdGhpcyR0YXJnZXRfJHN0b3JlZEE7XG5cbiAgICAgIC8vIFRocm93IG9uIG1pc3Npbmcga2V5LCBleGNlcHQgZm9yIGRlY29yYXRvcnM6XG4gICAgICAvLyBEZWNvcmF0b3IgYW5ub3RhdGlvbnMgYXJlIGNvbGxlY3RlZCBmcm9tIHdob2xlIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gc3VwZXIoKSBzb21lIHByb3BzIG1heSBub3QgZXhpc3QgeWV0LlxuICAgICAgLy8gSG93ZXZlciB3ZSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IG1pc3NpbmcgcHJvcCxcbiAgICAgIC8vIGJlY2F1c2UgdGhlIGRlY29yYXRvciBtdXN0IGhhdmUgYmVlbiBhcHBsaWVkIHRvIHNvbWV0aGluZy5cbiAgICAgIGlmICgoX3RoaXMkdGFyZ2V0XyRzdG9yZWRBID0gdGhpcy50YXJnZXRfW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkgIT0gbnVsbCAmJiBfdGhpcyR0YXJnZXRfJHN0b3JlZEFba2V5XSkge1xuICAgICAgICByZXR1cm47IC8vIHdpbGwgYmUgYW5ub3RhdGVkIGJ5IHN1YmNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaWUoMSwgYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZV8sIHRoaXMubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc291cmNlID0gdGhpcy50YXJnZXRfO1xuXG4gICAgd2hpbGUgKHNvdXJjZSAmJiBzb3VyY2UgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXREZXNjcmlwdG9yKHNvdXJjZSwga2V5KTtcblxuICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgdmFyIG91dGNvbWUgPSBhbm5vdGF0aW9uLm1ha2VfKHRoaXMsIGtleSwgZGVzY3JpcHRvciwgc291cmNlKTtcblxuICAgICAgICBpZiAob3V0Y29tZSA9PT0gMFxuICAgICAgICAvKiBDYW5jZWwgKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dGNvbWUgPT09IDFcbiAgICAgICAgLyogQnJlYWsgKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc291cmNlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSk7XG4gICAgfVxuXG4gICAgcmVjb3JkQW5ub3RhdGlvbkFwcGxpZWQodGhpcywgYW5ub3RhdGlvbiwga2V5KTtcbiAgfVxuICAvKipcclxuICAgKiBAcGFyYW0ge1Byb3BlcnR5S2V5fSBrZXlcclxuICAgKiBAcGFyYW0ge1Byb3BlcnR5RGVzY3JpcHRvcn0gZGVzY3JpcHRvclxyXG4gICAqIEBwYXJhbSB7QW5ub3RhdGlvbnxib29sZWFufSBhbm5vdGF0aW9uIHRydWUgLSB1c2UgZGVmYXVsdCBhbm5vdGF0aW9uLCBmYWxzZSAtIGNvcHkgYXMgaXNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByb3h5VHJhcCB3aGV0aGVyIGl0J3MgY2FsbGVkIGZyb20gcHJveHkgdHJhcFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5leHRlbmRfID0gZnVuY3Rpb24gZXh0ZW5kXyhrZXksIGRlc2NyaXB0b3IsIGFubm90YXRpb24sIHByb3h5VHJhcCkge1xuICAgIGlmIChwcm94eVRyYXAgPT09IHZvaWQgMCkge1xuICAgICAgcHJveHlUcmFwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGFubm90YXRpb24gPT09IHRydWUpIHtcbiAgICAgIGFubm90YXRpb24gPSB0aGlzLmRlZmF1bHRBbm5vdGF0aW9uXztcbiAgICB9XG5cbiAgICBpZiAoYW5ub3RhdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmluZVByb3BlcnR5XyhrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCk7XG4gICAgfVxuXG4gICAgYXNzZXJ0QW5ub3RhYmxlKHRoaXMsIGFubm90YXRpb24sIGtleSk7XG4gICAgdmFyIG91dGNvbWUgPSBhbm5vdGF0aW9uLmV4dGVuZF8odGhpcywga2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApO1xuXG4gICAgaWYgKG91dGNvbWUpIHtcbiAgICAgIHJlY29yZEFubm90YXRpb25BcHBsaWVkKHRoaXMsIGFubm90YXRpb24sIGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dGNvbWU7XG4gIH1cbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQcm9wZXJ0eUtleX0ga2V5XHJcbiAgICogQHBhcmFtIHtQcm9wZXJ0eURlc2NyaXB0b3J9IGRlc2NyaXB0b3JcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByb3h5VHJhcCB3aGV0aGVyIGl0J3MgY2FsbGVkIGZyb20gcHJveHkgdHJhcFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWZpbmVQcm9wZXJ0eV8gPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eV8oa2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzdGFydEJhdGNoKCk7IC8vIERlbGV0ZVxuXG4gICAgICB2YXIgZGVsZXRlT3V0Y29tZSA9IHRoaXMuZGVsZXRlXyhrZXkpO1xuXG4gICAgICBpZiAoIWRlbGV0ZU91dGNvbWUpIHtcbiAgICAgICAgLy8gRmFpbHVyZSBvciBpbnRlcmNlcHRlZFxuICAgICAgICByZXR1cm4gZGVsZXRlT3V0Y29tZTtcbiAgICAgIH0gLy8gQUREIGludGVyY2VwdG9yXG5cblxuICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgdHlwZTogQURELFxuICAgICAgICAgIG5ld1ZhbHVlOiBkZXNjcmlwdG9yLnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghY2hhbmdlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG5cbiAgICAgICAgaWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgZGVzY3JpcHRvciA9IF9leHRlbmRzKHt9LCBkZXNjcmlwdG9yLCB7XG4gICAgICAgICAgICB2YWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBEZWZpbmVcblxuXG4gICAgICBpZiAocHJveHlUcmFwKSB7XG4gICAgICAgIGlmICghUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnRhcmdldF8sIGtleSwgZGVzY3JpcHRvcikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMudGFyZ2V0Xywga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH0gLy8gTm90aWZ5XG5cblxuICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uXyhrZXksIGRlc2NyaXB0b3IudmFsdWUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBlbmRCYXRjaCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIElmIG9yaWdpbmFsIGRlc2NyaXB0b3IgYmVjb21lcyByZWxldmFudCwgbW92ZSB0aGlzIHRvIGFubm90YXRpb24gZGlyZWN0bHlcbiAgO1xuXG4gIF9wcm90by5kZWZpbmVPYnNlcnZhYmxlUHJvcGVydHlfID0gZnVuY3Rpb24gZGVmaW5lT2JzZXJ2YWJsZVByb3BlcnR5XyhrZXksIHZhbHVlLCBlbmhhbmNlciwgcHJveHlUcmFwKSB7XG4gICAgaWYgKHByb3h5VHJhcCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm94eVRyYXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgc3RhcnRCYXRjaCgpOyAvLyBEZWxldGVcblxuICAgICAgdmFyIGRlbGV0ZU91dGNvbWUgPSB0aGlzLmRlbGV0ZV8oa2V5KTtcblxuICAgICAgaWYgKCFkZWxldGVPdXRjb21lKSB7XG4gICAgICAgIC8vIEZhaWx1cmUgb3IgaW50ZXJjZXB0ZWRcbiAgICAgICAgcmV0dXJuIGRlbGV0ZU91dGNvbWU7XG4gICAgICB9IC8vIEFERCBpbnRlcmNlcHRvclxuXG5cbiAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FjaGVkRGVzY3JpcHRvciA9IGdldENhY2hlZE9ic2VydmFibGVQcm9wRGVzY3JpcHRvcihrZXkpO1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzID8gdGhpcy5pc1BsYWluT2JqZWN0XyA6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogY2FjaGVkRGVzY3JpcHRvci5nZXQsXG4gICAgICAgIHNldDogY2FjaGVkRGVzY3JpcHRvci5zZXRcbiAgICAgIH07IC8vIERlZmluZVxuXG4gICAgICBpZiAocHJveHlUcmFwKSB7XG4gICAgICAgIGlmICghUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnRhcmdldF8sIGtleSwgZGVzY3JpcHRvcikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMudGFyZ2V0Xywga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBlbmhhbmNlciwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdGhpcy5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5XCIsIGZhbHNlKTtcbiAgICAgIHRoaXMudmFsdWVzXy5zZXQoa2V5LCBvYnNlcnZhYmxlKTsgLy8gTm90aWZ5ICh2YWx1ZSBwb3NzaWJseSBjaGFuZ2VkIGJ5IE9ic2VydmFibGVWYWx1ZSlcblxuICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uXyhrZXksIG9ic2VydmFibGUudmFsdWVfKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZW5kQmF0Y2goKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBJZiBvcmlnaW5hbCBkZXNjcmlwdG9yIGJlY29tZXMgcmVsZXZhbnQsIG1vdmUgdGhpcyB0byBhbm5vdGF0aW9uIGRpcmVjdGx5XG4gIDtcblxuICBfcHJvdG8uZGVmaW5lQ29tcHV0ZWRQcm9wZXJ0eV8gPSBmdW5jdGlvbiBkZWZpbmVDb21wdXRlZFByb3BlcnR5XyhrZXksIG9wdGlvbnMsIHByb3h5VHJhcCkge1xuICAgIGlmIChwcm94eVRyYXAgPT09IHZvaWQgMCkge1xuICAgICAgcHJveHlUcmFwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHN0YXJ0QmF0Y2goKTsgLy8gRGVsZXRlXG5cbiAgICAgIHZhciBkZWxldGVPdXRjb21lID0gdGhpcy5kZWxldGVfKGtleSk7XG5cbiAgICAgIGlmICghZGVsZXRlT3V0Y29tZSkge1xuICAgICAgICAvLyBGYWlsdXJlIG9yIGludGVyY2VwdGVkXG4gICAgICAgIHJldHVybiBkZWxldGVPdXRjb21lO1xuICAgICAgfSAvLyBBREQgaW50ZXJjZXB0b3JcblxuXG4gICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICB0eXBlOiBBREQsXG4gICAgICAgICAgbmV3VmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMubmFtZSB8fCAob3B0aW9ucy5uYW1lID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdGhpcy5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5XCIpO1xuICAgICAgb3B0aW9ucy5jb250ZXh0ID0gdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfO1xuICAgICAgdmFyIGNhY2hlZERlc2NyaXB0b3IgPSBnZXRDYWNoZWRPYnNlcnZhYmxlUHJvcERlc2NyaXB0b3Ioa2V5KTtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IGdsb2JhbFN0YXRlLnNhZmVEZXNjcmlwdG9ycyA/IHRoaXMuaXNQbGFpbk9iamVjdF8gOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZ2V0OiBjYWNoZWREZXNjcmlwdG9yLmdldCxcbiAgICAgICAgc2V0OiBjYWNoZWREZXNjcmlwdG9yLnNldFxuICAgICAgfTsgLy8gRGVmaW5lXG5cbiAgICAgIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgaWYgKCFSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMudGFyZ2V0Xywga2V5LCBkZXNjcmlwdG9yKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZhbHVlc18uc2V0KGtleSwgbmV3IENvbXB1dGVkVmFsdWUob3B0aW9ucykpOyAvLyBOb3RpZnlcblxuICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uXyhrZXksIHVuZGVmaW5lZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQcm9wZXJ0eUtleX0ga2V5XHJcbiAgICogQHBhcmFtIHtQcm9wZXJ0eURlc2NyaXB0b3J9IGRlc2NyaXB0b3JcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByb3h5VHJhcCB3aGV0aGVyIGl0J3MgY2FsbGVkIGZyb20gcHJveHkgdHJhcFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWxldGVfID0gZnVuY3Rpb24gZGVsZXRlXyhrZXksIHByb3h5VHJhcCkge1xuICAgIGlmIChwcm94eVRyYXAgPT09IHZvaWQgMCkge1xuICAgICAgcHJveHlUcmFwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gTm8gc3VjaCBwcm9wXG4gICAgaWYgKCFoYXNQcm9wKHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBJbnRlcmNlcHRcblxuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIHR5cGU6IFJFTU9WRVxuICAgICAgfSk7IC8vIENhbmNlbGxlZFxuXG4gICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IC8vIERlbGV0ZVxuXG5cbiAgICB0cnkge1xuICAgICAgdmFyIF90aGlzJHBlbmRpbmdLZXlzXywgX3RoaXMkcGVuZGluZ0tleXNfJGdlO1xuXG4gICAgICBzdGFydEJhdGNoKCk7XG4gICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgdmFyIG5vdGlmeVNweSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKTtcbiAgICAgIHZhciBvYnNlcnZhYmxlID0gdGhpcy52YWx1ZXNfLmdldChrZXkpOyAvLyBWYWx1ZSBuZWVkZWQgZm9yIHNwaWVzL2xpc3RlbmVyc1xuXG4gICAgICB2YXIgdmFsdWUgPSB1bmRlZmluZWQ7IC8vIE9wdGltaXphdGlvbjogZG9uJ3QgcHVsbCB0aGUgdmFsdWUgdW5sZXNzIHdlIHdpbGwgbmVlZCBpdFxuXG4gICAgICBpZiAoIW9ic2VydmFibGUgJiYgKG5vdGlmeSB8fCBub3RpZnlTcHkpKSB7XG4gICAgICAgIHZhciBfZ2V0RGVzY3JpcHRvcjtcblxuICAgICAgICB2YWx1ZSA9IChfZ2V0RGVzY3JpcHRvciA9IGdldERlc2NyaXB0b3IodGhpcy50YXJnZXRfLCBrZXkpKSA9PSBudWxsID8gdm9pZCAwIDogX2dldERlc2NyaXB0b3IudmFsdWU7XG4gICAgICB9IC8vIGRlbGV0ZSBwcm9wIChkbyBmaXJzdCwgbWF5IGZhaWwpXG5cblxuICAgICAgaWYgKHByb3h5VHJhcCkge1xuICAgICAgICBpZiAoIVJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy50YXJnZXRfW2tleV07XG4gICAgICB9IC8vIEFsbG93IHJlLWFubm90YXRpbmcgdGhpcyBmaWVsZFxuXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYXBwbGllZEFubm90YXRpb25zX1trZXldO1xuICAgICAgfSAvLyBDbGVhciBvYnNlcnZhYmxlXG5cblxuICAgICAgaWYgKG9ic2VydmFibGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNfW1wiZGVsZXRlXCJdKGtleSk7IC8vIGZvciBjb21wdXRlZCwgdmFsdWUgaXMgdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlVmFsdWUpIHtcbiAgICAgICAgICB2YWx1ZSA9IG9ic2VydmFibGUudmFsdWVfO1xuICAgICAgICB9IC8vIE5vdGlmeTogYXV0b3J1bigoKSA9PiBvYmpba2V5XSksIHNlZSAjMTc5NlxuXG5cbiAgICAgICAgcHJvcGFnYXRlQ2hhbmdlZChvYnNlcnZhYmxlKTtcbiAgICAgIH0gLy8gTm90aWZ5IFwia2V5cy9lbnRyaWVzL3ZhbHVlc1wiIG9ic2VydmVyc1xuXG5cbiAgICAgIHRoaXMua2V5c0F0b21fLnJlcG9ydENoYW5nZWQoKTsgLy8gTm90aWZ5IFwiaGFzXCIgb2JzZXJ2ZXJzXG4gICAgICAvLyBcImluXCIgYXMgaXQgbWF5IHN0aWxsIGV4aXN0IGluIHByb3RvXG5cbiAgICAgIChfdGhpcyRwZW5kaW5nS2V5c18gPSB0aGlzLnBlbmRpbmdLZXlzXykgPT0gbnVsbCA/IHZvaWQgMCA6IChfdGhpcyRwZW5kaW5nS2V5c18kZ2UgPSBfdGhpcyRwZW5kaW5nS2V5c18uZ2V0KGtleSkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRwZW5kaW5nS2V5c18kZ2Uuc2V0KGtleSBpbiB0aGlzLnRhcmdldF8pOyAvLyBOb3RpZnkgc3BpZXMvbGlzdGVuZXJzXG5cbiAgICAgIGlmIChub3RpZnkgfHwgbm90aWZ5U3B5KSB7XG4gICAgICAgIHZhciBfY2hhbmdlMiA9IHtcbiAgICAgICAgICB0eXBlOiBSRU1PVkUsXG4gICAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwib2JqZWN0XCIsXG4gICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgIG9sZFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkge1xuICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9jaGFuZ2UyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgX2NoYW5nZTIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHtcbiAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBlbmRCYXRjaCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxyXG4gICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxyXG4gICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcclxuICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9ic2VydmVfID0gZnVuY3Rpb24gb2JzZXJ2ZV8oY2FsbGJhY2ssIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZmlyZUltbWVkaWF0ZWx5ID09PSB0cnVlKSB7XG4gICAgICBkaWUoXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IHRoZSBmaXJlIGltbWVkaWF0ZWx5IHByb3BlcnR5IGZvciBvYnNlcnZhYmxlIG9iamVjdHMuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uXyA9IGZ1bmN0aW9uIG5vdGlmeVByb3BlcnR5QWRkaXRpb25fKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgX3RoaXMkcGVuZGluZ0tleXNfMiwgX3RoaXMkcGVuZGluZ0tleXNfMiRnO1xuXG4gICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICB2YXIgbm90aWZ5U3B5ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpO1xuXG4gICAgaWYgKG5vdGlmeSB8fCBub3RpZnlTcHkpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICB0eXBlOiBBREQsXG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm9iamVjdFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgfSA6IG51bGw7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIChfdGhpcyRwZW5kaW5nS2V5c18yID0gdGhpcy5wZW5kaW5nS2V5c18pID09IG51bGwgPyB2b2lkIDAgOiAoX3RoaXMkcGVuZGluZ0tleXNfMiRnID0gX3RoaXMkcGVuZGluZ0tleXNfMi5nZXQoa2V5KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHBlbmRpbmdLZXlzXzIkZy5zZXQodHJ1ZSk7IC8vIE5vdGlmeSBcImtleXMvZW50cmllcy92YWx1ZXNcIiBvYnNlcnZlcnNcblxuICAgIHRoaXMua2V5c0F0b21fLnJlcG9ydENoYW5nZWQoKTtcbiAgfTtcblxuICBfcHJvdG8ub3duS2V5c18gPSBmdW5jdGlvbiBvd25LZXlzXygpIHtcbiAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiBvd25LZXlzKHRoaXMudGFyZ2V0Xyk7XG4gIH07XG5cbiAgX3Byb3RvLmtleXNfID0gZnVuY3Rpb24ga2V5c18oKSB7XG4gICAgLy8gUmV0dXJucyBlbnVtZXJhYmxlICYmIG93biwgYnV0IHVuZm9ydHVuYXRlbHkga2V5c0F0b20gd2lsbCByZXBvcnQgb24gQU5ZIGtleSBjaGFuZ2UuXG4gICAgLy8gVGhlcmUgaXMgbm8gd2F5IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gT2JqZWN0LmtleXMob2JqZWN0KSBhbmQgUmVmbGVjdC5vd25LZXlzKG9iamVjdCkgLSBib3RoIGFyZSBoYW5kbGVkIGJ5IG93bktleXMgdHJhcC5cbiAgICAvLyBXZSBjYW4gZWl0aGVyIG92ZXItcmVwb3J0IGluIE9iamVjdC5rZXlzKG9iamVjdCkgb3IgdW5kZXItcmVwb3J0IGluIFJlZmxlY3Qub3duS2V5cyhvYmplY3QpXG4gICAgLy8gV2UgY2hvb3NlIHRvIG92ZXItcmVwb3J0IGluIE9iamVjdC5rZXlzKG9iamVjdCksIGJlY2F1c2U6XG4gICAgLy8gLSB0eXBpY2FsbHkgaXQncyB1c2VkIHdpdGggc2ltcGxlIGRhdGEgb2JqZWN0c1xuICAgIC8vIC0gd2hlbiBzeW1ib2xpYy9ub24tZW51bWVyYWJsZSBrZXlzIGFyZSByZWxldmFudCBSZWZsZWN0Lm93bktleXMgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRhcmdldF8pO1xuICB9O1xuXG4gIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb247XG59KCk7XG5mdW5jdGlvbiBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRuYW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgb3B0aW9ucyAmJiBpc09ic2VydmFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgIGRpZShcIk9wdGlvbnMgY2FuJ3QgYmUgcHJvdmlkZWQgZm9yIGFscmVhZHkgb2JzZXJ2YWJsZSBvYmplY3RzLlwiKTtcbiAgfVxuXG4gIGlmIChoYXNQcm9wKHRhcmdldCwgJG1vYngpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhKGdldEFkbWluaXN0cmF0aW9uKHRhcmdldCkgaW5zdGFuY2VvZiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24pKSB7XG4gICAgICBkaWUoXCJDYW5ub3QgY29udmVydCAnXCIgKyBnZXREZWJ1Z05hbWUodGFyZ2V0KSArIFwiJyBpbnRvIG9ic2VydmFibGUgb2JqZWN0OlwiICsgXCJcXG5UaGUgdGFyZ2V0IGlzIGFscmVhZHkgb2JzZXJ2YWJsZSBvZiBkaWZmZXJlbnQgdHlwZS5cIiArIFwiXFxuRXh0ZW5kaW5nIGJ1aWx0aW5zIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFPYmplY3QuaXNFeHRlbnNpYmxlKHRhcmdldCkpIHtcbiAgICBkaWUoXCJDYW5ub3QgbWFrZSB0aGUgZGVzaWduYXRlZCBvYmplY3Qgb2JzZXJ2YWJsZTsgaXQgaXMgbm90IGV4dGVuc2libGVcIik7XG4gIH1cblxuICB2YXIgbmFtZSA9IChfb3B0aW9ucyRuYW1lID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5uYW1lKSAhPSBudWxsID8gX29wdGlvbnMkbmFtZSA6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IChpc1BsYWluT2JqZWN0KHRhcmdldCkgPyBcIk9ic2VydmFibGVPYmplY3RcIiA6IHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lKSArIFwiQFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVPYmplY3RcIjtcbiAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGFyZ2V0LCBuZXcgTWFwKCksIFN0cmluZyhuYW1lKSwgZ2V0QW5ub3RhdGlvbkZyb21PcHRpb25zKG9wdGlvbnMpKTtcbiAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsICRtb2J4LCBhZG0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxudmFyIGlzT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb25cIiwgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKTtcblxuZnVuY3Rpb24gZ2V0Q2FjaGVkT2JzZXJ2YWJsZVByb3BEZXNjcmlwdG9yKGtleSkge1xuICByZXR1cm4gZGVzY3JpcHRvckNhY2hlW2tleV0gfHwgKGRlc2NyaXB0b3JDYWNoZVtrZXldID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbJG1vYnhdLmdldE9ic2VydmFibGVQcm9wVmFsdWVfKGtleSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXNbJG1vYnhdLnNldE9ic2VydmFibGVQcm9wVmFsdWVfKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykge1xuICBpZiAoaXNPYmplY3QodGhpbmcpKSB7XG4gICAgcmV0dXJuIGlzT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKHRoaW5nWyRtb2J4XSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiByZWNvcmRBbm5vdGF0aW9uQXBwbGllZChhZG0sIGFubm90YXRpb24sIGtleSkge1xuICB2YXIgX2FkbSR0YXJnZXRfJHN0b3JlZEFuO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBhZG0uYXBwbGllZEFubm90YXRpb25zX1trZXldID0gYW5ub3RhdGlvbjtcbiAgfSAvLyBSZW1vdmUgYXBwbGllZCBkZWNvcmF0b3IgYW5ub3RhdGlvbiBzbyB3ZSBkb24ndCB0cnkgdG8gYXBwbHkgaXQgYWdhaW4gaW4gc3ViY2xhc3MgY29uc3RydWN0b3JcblxuXG4gIChfYWRtJHRhcmdldF8kc3RvcmVkQW4gPSBhZG0udGFyZ2V0X1tzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbF0pID09IG51bGwgPyB0cnVlIDogZGVsZXRlIF9hZG0kdGFyZ2V0XyRzdG9yZWRBbltrZXldO1xufVxuXG5mdW5jdGlvbiBhc3NlcnRBbm5vdGFibGUoYWRtLCBhbm5vdGF0aW9uLCBrZXkpIHtcbiAgLy8gVmFsaWQgYW5ub3RhdGlvblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc0Fubm90YXRpb24oYW5ub3RhdGlvbikpIHtcbiAgICBkaWUoXCJDYW5ub3QgYW5ub3RhdGUgJ1wiICsgYWRtLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJzogSW52YWxpZCBhbm5vdGF0aW9uLlwiKTtcbiAgfVxuICAvKlxyXG4gIC8vIENvbmZpZ3VyYWJsZSwgbm90IHNlYWxlZCwgbm90IGZyb3plblxyXG4gIC8vIFBvc3NpYmx5IG5vdCBuZWVkZWQsIGp1c3QgYSBsaXR0bGUgYmV0dGVyIGVycm9yIHRoZW4gdGhlIG9uZSB0aHJvd24gYnkgZW5naW5lLlxyXG4gIC8vIENhc2VzIHdoZXJlIHRoaXMgd291bGQgYmUgdXNlZnVsIHRoZSBtb3N0IChzdWJjbGFzcyBmaWVsZCBpbml0aWFsaXplcikgYXJlIG5vdCBpbnRlcmNlcHRhYmxlIGJ5IHRoaXMuXHJcbiAgaWYgKF9fREVWX18pIHtcclxuICAgICAgY29uc3QgY29uZmlndXJhYmxlID0gZ2V0RGVzY3JpcHRvcihhZG0udGFyZ2V0Xywga2V5KT8uY29uZmlndXJhYmxlXHJcbiAgICAgIGNvbnN0IGZyb3plbiA9IE9iamVjdC5pc0Zyb3plbihhZG0udGFyZ2V0XylcclxuICAgICAgY29uc3Qgc2VhbGVkID0gT2JqZWN0LmlzU2VhbGVkKGFkbS50YXJnZXRfKVxyXG4gICAgICBpZiAoIWNvbmZpZ3VyYWJsZSB8fCBmcm96ZW4gfHwgc2VhbGVkKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBgJHthZG0ubmFtZV99LiR7a2V5LnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdGVkQW5ub3RhdGlvblR5cGUgPSBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlX1xyXG4gICAgICAgICAgbGV0IGVycm9yID0gYENhbm5vdCBhcHBseSAnJHtyZXF1ZXN0ZWRBbm5vdGF0aW9uVHlwZX0nIHRvICcke2ZpZWxkTmFtZX0nOmBcclxuICAgICAgICAgIGlmIChmcm96ZW4pIHtcclxuICAgICAgICAgICAgICBlcnJvciArPSBgXFxuT2JqZWN0IGlzIGZyb3plbi5gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7XHJcbiAgICAgICAgICAgICAgZXJyb3IgKz0gYFxcbk9iamVjdCBpcyBzZWFsZWQuYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFjb25maWd1cmFibGUpIHtcclxuICAgICAgICAgICAgICBlcnJvciArPSBgXFxucHJvcGVydHkgaXMgbm90IGNvbmZpZ3VyYWJsZS5gXHJcbiAgICAgICAgICAgICAgLy8gTWVudGlvbiBvbmx5IGlmIGNhdXNlZCBieSB1cyB0byBhdm9pZCBjb25mdXNpb25cclxuICAgICAgICAgICAgICBpZiAoaGFzUHJvcChhZG0uYXBwbGllZEFubm90YXRpb25zISwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICBlcnJvciArPSBgXFxuVG8gcHJldmVudCBhY2NpZGVudGFsIHJlLWRlZmluaXRpb24gb2YgYSBmaWVsZCBieSBhIHN1YmNsYXNzLCBgXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yICs9IGBhbGwgYW5ub3RhdGVkIGZpZWxkcyBvZiBub24tcGxhaW4gb2JqZWN0cyAoY2xhc3NlcykgYXJlIG5vdCBjb25maWd1cmFibGUuYFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpZShlcnJvcilcclxuICAgICAgfVxyXG4gIH1cclxuICAqL1xuICAvLyBOb3QgYW5ub3RhdGVkXG5cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc092ZXJyaWRlKGFubm90YXRpb24pICYmIGhhc1Byb3AoYWRtLmFwcGxpZWRBbm5vdGF0aW9uc18sIGtleSkpIHtcbiAgICB2YXIgZmllbGROYW1lID0gYWRtLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKTtcbiAgICB2YXIgY3VycmVudEFubm90YXRpb25UeXBlID0gYWRtLmFwcGxpZWRBbm5vdGF0aW9uc19ba2V5XS5hbm5vdGF0aW9uVHlwZV87XG4gICAgdmFyIHJlcXVlc3RlZEFubm90YXRpb25UeXBlID0gYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZV87XG4gICAgZGllKFwiQ2Fubm90IGFwcGx5ICdcIiArIHJlcXVlc3RlZEFubm90YXRpb25UeXBlICsgXCInIHRvICdcIiArIGZpZWxkTmFtZSArIFwiJzpcIiArIChcIlxcblRoZSBmaWVsZCBpcyBhbHJlYWR5IGFubm90YXRlZCB3aXRoICdcIiArIGN1cnJlbnRBbm5vdGF0aW9uVHlwZSArIFwiJy5cIikgKyBcIlxcblJlLWFubm90YXRpbmcgZmllbGRzIGlzIG5vdCBhbGxvd2VkLlwiICsgXCJcXG5Vc2UgJ292ZXJyaWRlJyBhbm5vdGF0aW9uIGZvciBtZXRob2RzIG92ZXJyaWRlbiBieSBzdWJjbGFzcy5cIik7XG4gIH1cbn1cblxuLyoqXHJcbiAqIFRoaXMgYXJyYXkgYnVmZmVyIGNvbnRhaW5zIHR3byBsaXN0cyBvZiBwcm9wZXJ0aWVzLCBzbyB0aGF0IGFsbCBhcnJheXNcclxuICogY2FuIHJlY3ljbGUgdGhlaXIgcHJvcGVydHkgZGVmaW5pdGlvbnMsIHdoaWNoIHNpZ25pZmljYW50bHkgaW1wcm92ZXMgcGVyZm9ybWFuY2Ugb2YgY3JlYXRpbmdcclxuICogcHJvcGVydGllcyBvbiB0aGUgZmx5LlxyXG4gKi9cblxudmFyIE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUgPSAwOyAvLyBUeXBlc2NyaXB0IHdvcmthcm91bmQgdG8gbWFrZSBzdXJlIE9ic2VydmFibGVBcnJheSBleHRlbmRzIEFycmF5XG5cbnZhciBTdHViQXJyYXkgPSBmdW5jdGlvbiBTdHViQXJyYXkoKSB7fTtcblxuZnVuY3Rpb24gaW5oZXJpdChjdG9yLCBwcm90bykge1xuICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGN0b3IucHJvdG90eXBlLCBwcm90byk7XG4gIH0gZWxzZSBpZiAoY3Rvci5wcm90b3R5cGUuX19wcm90b19fICE9PSB1bmRlZmluZWQpIHtcbiAgICBjdG9yLnByb3RvdHlwZS5fX3Byb3RvX18gPSBwcm90bztcbiAgfSBlbHNlIHtcbiAgICBjdG9yLnByb3RvdHlwZSA9IHByb3RvO1xuICB9XG59XG5cbmluaGVyaXQoU3R1YkFycmF5LCBBcnJheS5wcm90b3R5cGUpOyAvLyBXZWV4IHByb3RvIGZyZWV6ZSBwcm90ZWN0aW9uIHdhcyBoZXJlLFxuLy8gYnV0IGl0IGlzIHVuY2xlYXIgd2h5IHRoZSBoYWNrIGlzIG5lZWQgYXMgTW9iWCBuZXZlciBjaGFuZ2VkIHRoZSBwcm90b3R5cGVcbi8vIGFueXdheSwgc28gcmVtb3ZlZCBpdCBpbiBWNlxuXG52YXIgTGVnYWN5T2JzZXJ2YWJsZUFycmF5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3R1YkFycmF5LCBfU3ltYm9sJHRvU3RyaW5nVGFnLCBfU3ltYm9sJGl0ZXJhdG9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKExlZ2FjeU9ic2VydmFibGVBcnJheSwgX1N0dWJBcnJheSk7XG5cbiAgZnVuY3Rpb24gTGVnYWN5T2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIGVuaGFuY2VyLCBuYW1lLCBvd25lZCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpIDogXCJPYnNlcnZhYmxlQXJyYXlcIjtcbiAgICB9XG5cbiAgICBpZiAob3duZWQgPT09IHZvaWQgMCkge1xuICAgICAgb3duZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9TdHViQXJyYXkuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIHZhciBhZG0gPSBuZXcgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24obmFtZSwgZW5oYW5jZXIsIG93bmVkLCB0cnVlKTtcbiAgICBhZG0ucHJveHlfID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgYWRkSGlkZGVuRmluYWxQcm9wKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAkbW9ieCwgYWRtKTtcblxuICAgIGlmIChpbml0aWFsVmFsdWVzICYmIGluaXRpYWxWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQodHJ1ZSk7IC8vIEB0cy1pZ25vcmVcblxuICAgICAgX3RoaXMuc3BsaWNlV2l0aEFycmF5KDAsIDAsIGluaXRpYWxWYWx1ZXMpO1xuXG4gICAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGVnYWN5T2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHRoaXNbJG1vYnhdLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJyYXlzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJyYXlzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMuc2xpY2UoKSwgLy9AdHMtaWdub3JlXG4gICAgYXJyYXlzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGlzT2JzZXJ2YWJsZUFycmF5KGEpID8gYS5zbGljZSgpIDogYTtcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvW19TeW1ib2wkaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBzZWxmLmxlbmd0aCA/IHtcbiAgICAgICAgICB2YWx1ZTogc2VsZltuZXh0SW5kZXgrK10sXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoTGVnYWN5T2JzZXJ2YWJsZUFycmF5LCBbe1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5nZXRBcnJheUxlbmd0aF8oKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0xlbmd0aCkge1xuICAgICAgdGhpc1skbW9ieF0uc2V0QXJyYXlMZW5ndGhfKG5ld0xlbmd0aCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBfU3ltYm9sJHRvU3RyaW5nVGFnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiQXJyYXlcIjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGVnYWN5T2JzZXJ2YWJsZUFycmF5O1xufShTdHViQXJyYXksIFN5bWJvbC50b1N0cmluZ1RhZywgU3ltYm9sLml0ZXJhdG9yKTtcblxuT2JqZWN0LmVudHJpZXMoYXJyYXlFeHRlbnNpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBwcm9wID0gX3JlZlswXSxcbiAgICAgIGZuID0gX3JlZlsxXTtcblxuICBpZiAocHJvcCAhPT0gXCJjb25jYXRcIikge1xuICAgIGFkZEhpZGRlblByb3AoTGVnYWN5T2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZSwgcHJvcCwgZm4pO1xuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlQXJyYXlFbnRyeURlc2NyaXB0b3IoaW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpc1skbW9ieF0uZ2V0XyhpbmRleCk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpc1skbW9ieF0uc2V0XyhpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXJyYXlCdWZmZXJJdGVtKGluZGV4KSB7XG4gIGRlZmluZVByb3BlcnR5KExlZ2FjeU9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIFwiXCIgKyBpbmRleCwgY3JlYXRlQXJyYXlFbnRyeURlc2NyaXB0b3IoaW5kZXgpKTtcbn1cblxuZnVuY3Rpb24gcmVzZXJ2ZUFycmF5QnVmZmVyKG1heCkge1xuICBpZiAobWF4ID4gT0JTRVJWQUJMRV9BUlJBWV9CVUZGRVJfU0laRSkge1xuICAgIGZvciAodmFyIGluZGV4ID0gT0JTRVJWQUJMRV9BUlJBWV9CVUZGRVJfU0laRTsgaW5kZXggPCBtYXggKyAxMDA7IGluZGV4KyspIHtcbiAgICAgIGNyZWF0ZUFycmF5QnVmZmVySXRlbShpbmRleCk7XG4gICAgfVxuXG4gICAgT0JTRVJWQUJMRV9BUlJBWV9CVUZGRVJfU0laRSA9IG1heDtcbiAgfVxufVxucmVzZXJ2ZUFycmF5QnVmZmVyKDEwMDApO1xuZnVuY3Rpb24gY3JlYXRlTGVnYWN5QXJyYXkoaW5pdGlhbFZhbHVlcywgZW5oYW5jZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBMZWdhY3lPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZW5oYW5jZXIsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkge1xuICBpZiAodHlwZW9mIHRoaW5nID09PSBcIm9iamVjdFwiICYmIHRoaW5nICE9PSBudWxsKSB7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSkge1xuICAgICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGllKDIzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XS5hdG9tXztcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSkge1xuICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSkge1xuICAgICAgaWYgKHByb3BlcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaW5nLmtleXNBdG9tXztcbiAgICAgIH1cblxuICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGluZy5kYXRhXy5nZXQocHJvcGVydHkpIHx8IHRoaW5nLmhhc01hcF8uZ2V0KHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFvYnNlcnZhYmxlKSB7XG4gICAgICAgIGRpZSgyNSwgcHJvcGVydHksIGdldERlYnVnTmFtZSh0aGluZykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9XG5cblxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XG4gICAgICBpZiAoIXByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiBkaWUoMjYpO1xuICAgICAgfVxuXG4gICAgICB2YXIgX29ic2VydmFibGUgPSB0aGluZ1skbW9ieF0udmFsdWVzXy5nZXQocHJvcGVydHkpO1xuXG4gICAgICBpZiAoIV9vYnNlcnZhYmxlKSB7XG4gICAgICAgIGRpZSgyNywgcHJvcGVydHksIGdldERlYnVnTmFtZSh0aGluZykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX29ic2VydmFibGU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXRvbSh0aGluZykgfHwgaXNDb21wdXRlZFZhbHVlKHRoaW5nKSB8fCBpc1JlYWN0aW9uKHRoaW5nKSkge1xuICAgICAgcmV0dXJuIHRoaW5nO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaW5nKSkge1xuICAgIGlmIChpc1JlYWN0aW9uKHRoaW5nWyRtb2J4XSkpIHtcbiAgICAgIC8vIGRpc3Bvc2VyIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gdGhpbmdbJG1vYnhdO1xuICAgIH1cbiAgfVxuXG4gIGRpZSgyOCk7XG59XG5mdW5jdGlvbiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpIHtcbiAgaWYgKCF0aGluZykge1xuICAgIGRpZSgyOSk7XG4gIH1cblxuICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbihnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xuICB9XG5cbiAgaWYgKGlzQXRvbSh0aGluZykgfHwgaXNDb21wdXRlZFZhbHVlKHRoaW5nKSB8fCBpc1JlYWN0aW9uKHRoaW5nKSkge1xuICAgIHJldHVybiB0aGluZztcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVNldCh0aGluZykpIHtcbiAgICByZXR1cm4gdGhpbmc7XG4gIH1cblxuICBpZiAodGhpbmdbJG1vYnhdKSB7XG4gICAgcmV0dXJuIHRoaW5nWyRtb2J4XTtcbiAgfVxuXG4gIGRpZSgyNCwgdGhpbmcpO1xufVxuZnVuY3Rpb24gZ2V0RGVidWdOYW1lKHRoaW5nLCBwcm9wZXJ0eSkge1xuICB2YXIgbmFtZWQ7XG5cbiAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBuYW1lZCA9IGdldEF0b20odGhpbmcsIHByb3BlcnR5KTtcbiAgfSBlbHNlIGlmIChpc0FjdGlvbih0aGluZykpIHtcbiAgICByZXR1cm4gdGhpbmcubmFtZTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSkge1xuICAgIG5hbWVkID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpO1xuICB9IGVsc2Uge1xuICAgIC8vIHZhbGlkIGZvciBhcnJheXMgYXMgd2VsbFxuICAgIG5hbWVkID0gZ2V0QXRvbSh0aGluZyk7XG4gIH1cblxuICByZXR1cm4gbmFtZWQubmFtZV87XG59XG5cbnZhciB0b1N0cmluZyA9IG9iamVjdFByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiLCBkZXB0aCkge1xuICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgIGRlcHRoID0gLTE7XG4gIH1cblxuICByZXR1cm4gZXEoYSwgYiwgZGVwdGgpO1xufSAvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvYmxvYi81YzIzN2E3YzY4MmZiNjhmZDUzNzgyMDNmMGJmMjJkY2UxNjI0ODU0L3VuZGVyc2NvcmUuanMjTDExODYtTDEyODlcbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG5cbmZ1bmN0aW9uIGVxKGEsIGIsIGRlcHRoLCBhU3RhY2ssIGJTdGFjaykge1xuICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcbiAgfSAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cblxuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG5cblxuICBpZiAoYSAhPT0gYSkge1xuICAgIHJldHVybiBiICE9PSBiO1xuICB9IC8vIEV4aGF1c3QgcHJpbWl0aXZlIGNoZWNrc1xuXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcblxuICBpZiAodHlwZSAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGIgIT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuXG5cbiAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gdG9TdHJpbmcuY2FsbChiKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgLy8gU3RyaW5ncywgbnVtYmVycywgcmVndWxhciBleHByZXNzaW9ucywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgY2FzZSBcIltvYmplY3QgUmVnRXhwXVwiOiAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuXG4gICAgY2FzZSBcIltvYmplY3QgU3RyaW5nXVwiOlxuICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgIHJldHVybiBcIlwiICsgYSA9PT0gXCJcIiArIGI7XG5cbiAgICBjYXNlIFwiW29iamVjdCBOdW1iZXJdXCI6XG4gICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgLy8gT2JqZWN0KE5hTikgaXMgZXF1aXZhbGVudCB0byBOYU4uXG4gICAgICBpZiAoK2EgIT09ICthKSB7XG4gICAgICAgIHJldHVybiArYiAhPT0gK2I7XG4gICAgICB9IC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG5cblxuICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYjtcblxuICAgIGNhc2UgXCJbb2JqZWN0IERhdGVdXCI6XG4gICAgY2FzZSBcIltvYmplY3QgQm9vbGVhbl1cIjpcbiAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgIHJldHVybiArYSA9PT0gK2I7XG5cbiAgICBjYXNlIFwiW29iamVjdCBTeW1ib2xdXCI6XG4gICAgICByZXR1cm4gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wudmFsdWVPZi5jYWxsKGEpID09PSBTeW1ib2wudmFsdWVPZi5jYWxsKGIpO1xuXG4gICAgY2FzZSBcIltvYmplY3QgTWFwXVwiOlxuICAgIGNhc2UgXCJbb2JqZWN0IFNldF1cIjpcbiAgICAgIC8vIE1hcHMgYW5kIFNldHMgYXJlIHVud3JhcHBlZCB0byBhcnJheXMgb2YgZW50cnktcGFpcnMsIGFkZGluZyBhbiBpbmNpZGVudGFsIGxldmVsLlxuICAgICAgLy8gSGlkZSB0aGlzIGV4dHJhIGxldmVsIGJ5IGluY3JlYXNpbmcgdGhlIGRlcHRoLlxuICAgICAgaWYgKGRlcHRoID49IDApIHtcbiAgICAgICAgZGVwdGgrKztcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG5cblxuICBhID0gdW53cmFwKGEpO1xuICBiID0gdW53cmFwKGIpO1xuICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSBcIltvYmplY3QgQXJyYXldXCI7XG5cbiAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICBpZiAodHlwZW9mIGEgIT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuXG5cbiAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLFxuICAgICAgICBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG5cbiAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoaXNGdW5jdGlvbihhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJiBpc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKSAmJiBcImNvbnN0cnVjdG9yXCIgaW4gYSAmJiBcImNvbnN0cnVjdG9yXCIgaW4gYikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkZXB0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChkZXB0aCA8IDApIHtcbiAgICBkZXB0aCA9IC0xO1xuICB9IC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG4gIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxuXG5cbiAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xuICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XG4gIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpIHtcbiAgICAgIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PT0gYjtcbiAgICB9XG4gIH0gLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuXG5cbiAgYVN0YWNrLnB1c2goYSk7XG4gIGJTdGFjay5wdXNoKGIpOyAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cblxuICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgbGVuZ3RoID0gYS5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cblxuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBkZXB0aCAtIDEsIGFTdGFjaywgYlN0YWNrKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgdmFyIGtleTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDsgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxuXG4gICAgaWYgKE9iamVjdC5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXJcbiAgICAgIGtleSA9IGtleXNbbGVuZ3RoXTtcblxuICAgICAgaWYgKCEoaGFzUHJvcChiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBkZXB0aCAtIDEsIGFTdGFjaywgYlN0YWNrKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cblxuXG4gIGFTdGFjay5wb3AoKTtcbiAgYlN0YWNrLnBvcCgpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdW53cmFwKGEpIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KGEpKSB7XG4gICAgcmV0dXJuIGEuc2xpY2UoKTtcbiAgfVxuXG4gIGlmIChpc0VTNk1hcChhKSB8fCBpc09ic2VydmFibGVNYXAoYSkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhLmVudHJpZXMoKSk7XG4gIH1cblxuICBpZiAoaXNFUzZTZXQoYSkgfHwgaXNPYnNlcnZhYmxlU2V0KGEpKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYS5lbnRyaWVzKCkpO1xuICB9XG5cbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIG1ha2VJdGVyYWJsZShpdGVyYXRvcikge1xuICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZ2V0U2VsZjtcbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxmKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gaXNBbm5vdGF0aW9uKHRoaW5nKSB7XG4gIHJldHVybiAoLy8gQ2FuIGJlIGZ1bmN0aW9uXG4gICAgdGhpbmcgaW5zdGFuY2VvZiBPYmplY3QgJiYgdHlwZW9mIHRoaW5nLmFubm90YXRpb25UeXBlXyA9PT0gXCJzdHJpbmdcIiAmJiBpc0Z1bmN0aW9uKHRoaW5nLm1ha2VfKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLmV4dGVuZF8pXG4gICk7XG59XG5cbi8qKlxyXG4gKiAoYykgTWljaGVsIFdlc3RzdHJhdGUgMjAxNSAtIDIwMjBcclxuICogTUlUIExpY2Vuc2VkXHJcbiAqXHJcbiAqIFdlbGNvbWUgdG8gdGhlIG1vYnggc291cmNlcyEgVG8gZ2V0IGFuIGdsb2JhbCBvdmVydmlldyBvZiBob3cgTW9iWCBpbnRlcm5hbGx5IHdvcmtzLFxyXG4gKiB0aGlzIGlzIGEgZ29vZCBwbGFjZSB0byBzdGFydDpcclxuICogaHR0cHM6Ly9tZWRpdW0uY29tL0Btd2VzdHN0cmF0ZS9iZWNvbWluZy1mdWxseS1yZWFjdGl2ZS1hbi1pbi1kZXB0aC1leHBsYW5hdGlvbi1vZi1tb2JzZXJ2YWJsZS01NTk5NTI2MmEyNTQjLnh2Ymg2cWQ3NFxyXG4gKlxyXG4gKiBTb3VyY2UgZm9sZGVyczpcclxuICogPT09PT09PT09PT09PT09XHJcbiAqXHJcbiAqIC0gYXBpLyAgICAgTW9zdCBvZiB0aGUgcHVibGljIHN0YXRpYyBtZXRob2RzIGV4cG9zZWQgYnkgdGhlIG1vZHVsZSBjYW4gYmUgZm91bmQgaGVyZS5cclxuICogLSBjb3JlLyAgICBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgTW9iWCBhbGdvcml0aG07IGF0b21zLCBkZXJpdmF0aW9ucywgcmVhY3Rpb25zLCBkZXBlbmRlbmN5IHRyZWVzLCBvcHRpbWl6YXRpb25zLiBDb29sIHN0dWZmIGNhbiBiZSBmb3VuZCBoZXJlLlxyXG4gKiAtIHR5cGVzLyAgIEFsbCB0aGUgbWFnaWMgdGhhdCBpcyBuZWVkIHRvIGhhdmUgb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIHZhbHVlcyBpcyBpbiB0aGlzIGZvbGRlci4gSW5jbHVkaW5nIHRoZSBtb2RpZmllcnMgbGlrZSBgYXNGbGF0YC5cclxuICogLSB1dGlscy8gICBVdGlsaXR5IHN0dWZmLlxyXG4gKlxyXG4gKi9cbltcIlN5bWJvbFwiLCBcIk1hcFwiLCBcIlNldFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gIHZhciBnID0gZ2V0R2xvYmFsKCk7XG5cbiAgaWYgKHR5cGVvZiBnW21dID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZGllKFwiTW9iWCByZXF1aXJlcyBnbG9iYWwgJ1wiICsgbSArIFwiJyB0byBiZSBhdmFpbGFibGUgb3IgcG9seWZpbGxlZFwiKTtcbiAgfVxufSk7XG5cbmlmICh0eXBlb2YgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09IFwib2JqZWN0XCIpIHtcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5keWtvZy9tb2J4LWRldnRvb2xzL1xuICBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5pbmplY3RNb2J4KHtcbiAgICBzcHk6IHNweSxcbiAgICBleHRyYXM6IHtcbiAgICAgIGdldERlYnVnTmFtZTogZ2V0RGVidWdOYW1lXG4gICAgfSxcbiAgICAkbW9ieDogJG1vYnhcbiAgfSk7XG59XG5cbmV4cG9ydCB7ICRtb2J4LCBGbG93Q2FuY2VsbGF0aW9uRXJyb3IsIE9ic2VydmFibGVNYXAsIE9ic2VydmFibGVTZXQsIFJlYWN0aW9uLCBhbGxvd1N0YXRlQ2hhbmdlcyBhcyBfYWxsb3dTdGF0ZUNoYW5nZXMsIHJ1bkluQWN0aW9uIGFzIF9hbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkLCBhbGxvd1N0YXRlUmVhZHNFbmQgYXMgX2FsbG93U3RhdGVSZWFkc0VuZCwgYWxsb3dTdGF0ZVJlYWRzU3RhcnQgYXMgX2FsbG93U3RhdGVSZWFkc1N0YXJ0LCBhdXRvQWN0aW9uIGFzIF9hdXRvQWN0aW9uLCBfZW5kQWN0aW9uLCBnZXRBZG1pbmlzdHJhdGlvbiBhcyBfZ2V0QWRtaW5pc3RyYXRpb24sIGdldEdsb2JhbFN0YXRlIGFzIF9nZXRHbG9iYWxTdGF0ZSwgaW50ZXJjZXB0UmVhZHMgYXMgX2ludGVyY2VwdFJlYWRzLCBpc0NvbXB1dGluZ0Rlcml2YXRpb24gYXMgX2lzQ29tcHV0aW5nRGVyaXZhdGlvbiwgcmVzZXRHbG9iYWxTdGF0ZSBhcyBfcmVzZXRHbG9iYWxTdGF0ZSwgX3N0YXJ0QWN0aW9uLCBhY3Rpb24sIGF1dG9ydW4sIGNvbXBhcmVyLCBjb21wdXRlZCwgY29uZmlndXJlLCBjcmVhdGVBdG9tLCBhcGlEZWZpbmVQcm9wZXJ0eSBhcyBkZWZpbmVQcm9wZXJ0eSwgZW50cmllcywgZXh0ZW5kT2JzZXJ2YWJsZSwgZmxvdywgZmxvd1Jlc3VsdCwgZ2V0LCBnZXRBdG9tLCBnZXREZWJ1Z05hbWUsIGdldERlcGVuZGVuY3lUcmVlLCBnZXRPYnNlcnZlclRyZWUsIGhhcywgaW50ZXJjZXB0LCBpc0FjdGlvbiwgaXNPYnNlcnZhYmxlVmFsdWUgYXMgaXNCb3hlZE9ic2VydmFibGUsIGlzQ29tcHV0ZWQsIGlzQ29tcHV0ZWRQcm9wLCBpc0Zsb3csIGlzRmxvd0NhbmNlbGxhdGlvbkVycm9yLCBpc09ic2VydmFibGUsIGlzT2JzZXJ2YWJsZUFycmF5LCBpc09ic2VydmFibGVNYXAsIGlzT2JzZXJ2YWJsZU9iamVjdCwgaXNPYnNlcnZhYmxlUHJvcCwgaXNPYnNlcnZhYmxlU2V0LCBrZXlzLCBtYWtlQXV0b09ic2VydmFibGUsIG1ha2VPYnNlcnZhYmxlLCBvYnNlcnZhYmxlLCBvYnNlcnZlLCBvbkJlY29tZU9ic2VydmVkLCBvbkJlY29tZVVub2JzZXJ2ZWQsIG9uUmVhY3Rpb25FcnJvciwgb3ZlcnJpZGUsIGFwaU93bktleXMgYXMgb3duS2V5cywgcmVhY3Rpb24sIHJlbW92ZSwgcnVuSW5BY3Rpb24sIHNldCwgc3B5LCB0b0pTLCB0cmFjZSwgdHJhbnNhY3Rpb24sIHVudHJhY2tlZCwgdmFsdWVzLCB3aGVuIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2J4LmVzbS5qcy5tYXBcbiIsInZhciBJRFg9MjU2LCBIRVg9W10sIFNJWkU9MjU2LCBCVUZGRVI7XG53aGlsZSAoSURYLS0pIEhFWFtJRFhdID0gKElEWCArIDI1NikudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcblxuZnVuY3Rpb24gdWlkKGxlbikge1xuXHR2YXIgaT0wLCB0bXA9KGxlbiB8fCAxMSk7XG5cdGlmICghQlVGRkVSIHx8ICgoSURYICsgdG1wKSA+IFNJWkUqMikpIHtcblx0XHRmb3IgKEJVRkZFUj0nJyxJRFg9MDsgaSA8IFNJWkU7IGkrKykge1xuXHRcdFx0QlVGRkVSICs9IEhFWFtNYXRoLnJhbmRvbSgpICogMjU2IHwgMF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIEJVRkZFUi5zdWJzdHJpbmcoSURYLCBJRFgrKyArIHRtcCk7XG59XG5cbmV4cG9ydHMudWlkID0gdWlkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==