/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Scripts/App.ts":
/*!************************!*\
  !*** ./Scripts/App.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
var uid_1 = __webpack_require__(/*! uid */ "./node_modules/uid/dist/index.js");
var DataBinding_1 = __webpack_require__(/*! ./DataBinding */ "./Scripts/DataBinding.ts");
var MultiGroupComponent_1 = __webpack_require__(/*! ./MultiGroupComponent */ "./Scripts/MultiGroupComponent.ts");
var Node_1 = __webpack_require__(/*! ./Node */ "./Scripts/Node.ts");
var RadioNodeView_1 = __webpack_require__(/*! ./RadioNodeView */ "./Scripts/RadioNodeView.ts");
var SelectNodeView_1 = __webpack_require__(/*! ./SelectNodeView */ "./Scripts/SelectNodeView.ts");
var TextNodeView_1 = __webpack_require__(/*! ./TextNodeView */ "./Scripts/TextNodeView.ts");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        Object.defineProperty(this, "root", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "groupStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "multiCost", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new MultiGroupComponent_1.Cost()
        });
        Object.defineProperty(this, "taxRate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        // load xml.
        var testfilePath = './assets/xmlTest.xml';
        var promise = this.RequestFile(testfilePath);
        this.root = document.getElementById('root');
        // parse xml
        promise.then(function (value) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(value, "text/xml");
            // parse customer info
            var orderLineBreakElement = DataBinding_1.DataBinding.getElement('break-before-order', _this.root);
            var parent = orderLineBreakElement.parentElement;
            var customerinfo = xmlDoc.getElementsByTagName('customer_info')[0].children;
            var colname = 'col-md-4';
            for (var i = 0; i < customerinfo.length; i++) {
                var ele = customerinfo[i];
                if (ele.nodeName === 'address')
                    break;
                var node = new Node_1.Node(ele, (0, uid_1.uid)());
                switch (node.Type) {
                    case 'text':
                        var input = new TextNodeView_1.TextNodeView(_this.root, node, 'tmp-text-input');
                        parent.insertBefore(input.ExportAsCol(colname), orderLineBreakElement);
                        _this.store.set(input.ID, input);
                        break;
                    case 'select':
                        var select = new SelectNodeView_1.SelectNodeView(_this.root, node, 'tmp-select-input');
                        parent.insertBefore(select.ExportAsCol(colname), orderLineBreakElement);
                        _this.store.set(select.ID, select);
                        break;
                    case 'radio':
                        var radio = new RadioNodeView_1.RadioNodeView(_this.root, node, 'tmp-radio-input');
                        parent.insertBefore(radio.ExportAsCol(colname), orderLineBreakElement);
                        _this.store.set(radio.ID, radio);
                        break;
                }
            }
            // parse address.
            var addressinfo = xmlDoc.getElementsByTagName('address')[0].children;
            for (var i = 0; i < addressinfo.length; i++) {
                var ele = addressinfo[i];
                var node = new Node_1.Node(ele, (0, uid_1.uid)());
                // Adjust col class name.
                if (node.name === 'street_address')
                    colname = 'col-md-6';
                else if (node.name === 'province')
                    colname = 'col-md-4';
                else
                    colname = 'col-md-3';
                switch (node.Type) {
                    case 'text':
                        var input = new TextNodeView_1.TextNodeView(_this.root, node, 'tmp-text-input');
                        parent.insertBefore(input.ExportAsCol(colname), orderLineBreakElement);
                        _this.store.set(input.ID, input);
                        break;
                    case 'select':
                        var select = new SelectNodeView_1.SelectNodeView(_this.root, node, 'tmp-select-input');
                        parent.insertBefore(select.ExportAsCol(colname), orderLineBreakElement);
                        _this.store.set(select.ID, select);
                        break;
                    case 'radio':
                        var radio = new RadioNodeView_1.RadioNodeView(_this.root, node, 'tmp-radio-input');
                        parent.insertBefore(radio.ExportAsCol(colname), orderLineBreakElement);
                        _this.store.set(radio.ID, radio);
                        break;
                }
            }
            // pase order.
            var detail = xmlDoc.getElementsByTagName('order_details')[0].children;
            var taxRateEle = DataBinding_1.DataBinding.getElement('tax-rate', _this.root);
            var summaryEle = taxRateEle.parentElement;
            var _loop_1 = function (i) {
                var ele = detail[i];
                var node = new Node_1.Node(ele, (0, uid_1.uid)());
                switch (node.name) {
                    case 'expedited':
                        var radio_1 = new RadioNodeView_1.RadioNodeView(_this.root, node, 'tmp-radio-input', function (input) {
                            if (input === null || input === '') {
                                _this.multiCost.Update(radio_1.ID, 0);
                            }
                            else {
                                _this.multiCost.Update(radio_1.ID, parseInt(input));
                            }
                            _this.UpdateSummary(_this.root, _this.multiCost.Cost);
                        });
                        summaryEle.insertBefore(radio_1.ExportAsRow(), taxRateEle);
                        _this.store.set(radio_1.ID, radio_1);
                        break;
                    case 'item':
                        var multiple = new MultiGroupComponent_1.MultipleGroupView(_this.root);
                        multiple.AddNodeViewCallback = function () {
                            var select = new SelectNodeView_1.SelectNodeView(_this.root, node.Duplicate(), 'tmp-select-input', function (input) {
                                if (input === null || input === '') {
                                    _this.multiCost.Update(select.ID, 0);
                                }
                                else {
                                    _this.multiCost.Update(select.ID, parseInt(input));
                                }
                                _this.UpdateSummary(_this.root, _this.multiCost.Cost);
                            });
                            _this.store.set(select.ID, select);
                            return select;
                        };
                        multiple.RemoveNodeViewCallBack = function (id) {
                            _this.store.delete(id);
                            _this.multiCost.Remove(id);
                            _this.UpdateSummary(_this.root, _this.multiCost.Cost);
                        };
                        _this.groupStore.push(multiple);
                        summaryEle.insertBefore(multiple.multipleGroupEle, taxRateEle);
                        multiple.AddBtn.click();
                        break;
                    case 'tax':
                        _this.taxRate = node.taxRate;
                        DataBinding_1.DataBinding.getElement('tax-rate-value', _this.root).value = _this.taxRate * 100 + '%';
                        break;
                }
            };
            for (var i = 0; i < detail.length; i++) {
                _loop_1(i);
            }
            var submit = DataBinding_1.DataBinding.getElement('submit', _this.root);
            submit.addEventListener('click', function () {
                var forms = document.querySelectorAll('.needs-validation');
                // Loop over them and prevent submission
                Array.prototype.slice.call(forms)
                    .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        else {
                            // export.
                            var str_1 = '{';
                            _this.store.forEach(function (value, key) {
                                str_1 += '\"' + value.name + '\":\"' + value.inputValue + '\",';
                            });
                            // add tax rate, tax and sum.
                            str_1 += '\"taxRate\":' + _this.taxRate + ',';
                            str_1 += '\"tax\":' + _this.taxRate * _this.multiCost.Cost + ',';
                            str_1 += '\"sum\":' + _this.multiCost.Cost + (_this.taxRate * _this.multiCost.Cost);
                            str_1 += '}';
                            // download
                            var a = document.createElement("a");
                            var file = new Blob([str_1], { type: 'text/plain' });
                            a.href = URL.createObjectURL(file);
                            a.download = 'submit.json';
                            a.click();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            });
        });
    }
    Object.defineProperty(App.prototype, "UpdateSummary", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (root, cost) {
            var tax = this.taxRate * cost;
            DataBinding_1.DataBinding.getElement('tax-value', this.root).value = tax.toString();
            DataBinding_1.DataBinding.getElement('total-value', this.root).value = (tax + cost).toString();
        }
    });
    Object.defineProperty(App.prototype, "RequestFile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (filePath) {
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.responseType = 'text';
                request.open('GET', filePath, true);
                request.onload = function () {
                    if (request.response) {
                        resolve(request.response);
                    }
                };
                request.send(null);
            });
        }
    });
    return App;
}());
exports.App = App;
var app = new App();


/***/ }),

/***/ "./Scripts/DataBinding.ts":
/*!********************************!*\
  !*** ./Scripts/DataBinding.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataBinding = void 0;
var DataBinding;
(function (DataBinding) {
    function getElement(name, container) {
        if (container === void 0) { container = null; }
        var selector = '[data-bind="' + name + '"]';
        if (container) {
            return container.querySelector(selector);
        }
        else {
            return document.querySelector(selector);
        }
    }
    DataBinding.getElement = getElement;
    function getElements(name, container) {
        var selector = '[data-bind="' + name + '"]';
        var eles = [];
        if (container) {
            container.querySelectorAll(selector).forEach(function (ele) { return eles.push(ele); });
        }
        else {
            document.querySelectorAll(selector).forEach(function (ele) { return eles.push(ele); });
        }
        return eles;
    }
    DataBinding.getElements = getElements;
    function removeAllChildren(element) {
        while (element.hasChildNodes()) {
            if (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }
    DataBinding.removeAllChildren = removeAllChildren;
    function show(element) {
        element.classList.remove('d-none');
    }
    DataBinding.show = show;
    function hide(element) {
        element.classList.add('d-none');
    }
    DataBinding.hide = hide;
    function isVisible(element) {
        return !element.classList.contains('d-none');
    }
    DataBinding.isVisible = isVisible;
})(DataBinding = exports.DataBinding || (exports.DataBinding = {}));


/***/ }),

/***/ "./Scripts/MultiGroupComponent.ts":
/*!****************************************!*\
  !*** ./Scripts/MultiGroupComponent.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultipleGroupView = exports.Cost = void 0;
var mobx_1 = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
var DataBinding_1 = __webpack_require__(/*! ./DataBinding */ "./Scripts/DataBinding.ts");
var Cost = /** @class */ (function () {
    function Cost() {
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "Cost", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
    Object.defineProperty(Cost.prototype, "Update", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (key, value) {
            if (this.store.has(key)) {
                var oldV = this.store.get(key);
                this.Cost += value - oldV;
                this.store.set(key, value);
            }
            else {
                this.store.set(key, value);
                this.Cost += value;
            }
        }
    });
    Object.defineProperty(Cost.prototype, "Remove", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (key) {
            var oldV = this.store.get(key);
            this.Cost -= oldV;
            this.store.delete(key);
        }
    });
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], Cost.prototype, "Cost", void 0);
    return Cost;
}());
exports.Cost = Cost;
var MultipleGroupView = /** @class */ (function () {
    function MultipleGroupView(root) {
        var _this = this;
        // The group view.
        Object.defineProperty(this, "multipleGroupEle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // New node should append before this element.
        Object.defineProperty(this, "buttonSection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Count the number of node append in the group.
        Object.defineProperty(this, "childCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        // The add and remove button.
        Object.defineProperty(this, "AddBtn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "RemoveBtn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // The cost from select.
        Object.defineProperty(this, "Cost", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        // ID list.
        Object.defineProperty(this, "IDList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        // Callback
        Object.defineProperty(this, "AddNodeViewCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "RemoveNodeViewCallBack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        var template = DataBinding_1.DataBinding.getElement('tmp-multiple', root);
        var content = template.content.cloneNode(true);
        this.multipleGroupEle = content.querySelector('div');
        this.buttonSection = DataBinding_1.DataBinding.getElement('button-section', this.multipleGroupEle);
        this.AddBtn = DataBinding_1.DataBinding.getElement('btn-add', this.multipleGroupEle);
        this.RemoveBtn = DataBinding_1.DataBinding.getElement('btn-remove', this.multipleGroupEle);
        // When init, the remove button should hide.
        DataBinding_1.DataBinding.hide(this.RemoveBtn);
        // Add button, add a node.
        this.AddBtn.addEventListener('click', function () {
            if (_this.AddNodeViewCallback === undefined)
                return;
            var ele = _this.AddNodeViewCallback();
            _this.IDList.push(ele.ID);
            // Add to container.
            var row = ele.ExportAsRow('col-md-12');
            row.id = ele.ID;
            _this.multipleGroupEle.insertBefore(row, _this.buttonSection);
            _this.childCount++;
            if (_this.childCount === 1)
                DataBinding_1.DataBinding.hide(_this.RemoveBtn);
            else
                DataBinding_1.DataBinding.show(_this.RemoveBtn);
        });
        // Remove
        this.RemoveBtn.addEventListener('click', function () {
            // update cost.
            var lastIdx = _this.IDList.length - 1;
            var id = _this.IDList[lastIdx];
            _this.IDList.splice(lastIdx, 1);
            if (_this.RemoveNodeViewCallBack) {
                _this.RemoveNodeViewCallBack(id);
            }
            var queryselector = '[id="' + id + '"]';
            var child = _this.multipleGroupEle.querySelector(queryselector);
            // remove from page.
            _this.multipleGroupEle.removeChild(child);
            _this.childCount--;
            if (_this.childCount === 1)
                DataBinding_1.DataBinding.hide(_this.RemoveBtn);
            else
                DataBinding_1.DataBinding.show(_this.RemoveBtn);
        });
    }
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], MultipleGroupView.prototype, "childCount", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], MultipleGroupView.prototype, "Cost", void 0);
    return MultipleGroupView;
}());
exports.MultipleGroupView = MultipleGroupView;


/***/ }),

/***/ "./Scripts/Node.ts":
/*!*************************!*\
  !*** ./Scripts/Node.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Node = void 0;
var uid_1 = __webpack_require__(/*! uid */ "./node_modules/uid/dist/index.js");
var Option = /** @class */ (function () {
    function Option(name, value) {
        Object.defineProperty(this, "DisplayName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.DisplayName = name;
        this.Value = value;
    }
    Object.defineProperty(Option.prototype, "HasValue", {
        get: function () {
            return !isNaN(this.Value);
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param rawInput Input with value: "One|150 Two|300" or without value: "Green Black Red Blue"
     */
    Object.defineProperty(Option, "Parse", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (rawInput) {
            var opt = [];
            if (rawInput == null)
                return opt;
            var split = rawInput.split(',');
            split.forEach(function (s) {
                var split2 = s.trim().split('|');
                if (split2.length == 2) {
                    opt.push(new Option(split2[0], parseInt(split2[1])));
                }
                else {
                    opt.push(new Option(split2[0], NaN));
                }
            });
            return opt;
        }
    });
    return Option;
}());
var Node = /** @class */ (function () {
    function Node(nodeElement, UID) {
        // Unique id.
        Object.defineProperty(this, "ID", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Keep a copy of the raw data.
        Object.defineProperty(this, "nodeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // The label created for the form entry.
        Object.defineProperty(this, "Title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Expected format of input.
        Object.defineProperty(this, "Format", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Options for the drop down. If they are divided by a pipe ('One|100'), the first entry is the display text, and the latter is the value.
        Object.defineProperty(this, "Options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // The cost
        Object.defineProperty(this, "Cost", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Tax rate
        Object.defineProperty(this, "TaxRate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Require or not
        Object.defineProperty(this, "Require", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // the disable
        Object.defineProperty(this, "Disable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Multiple", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "taxRate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sum", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.ID = UID;
        this.nodeElement = nodeElement;
        // Parse node string.
        this.Title = nodeElement.getAttribute('title');
        var formatVal = nodeElement.getAttribute('format');
        if (formatVal == null)
            this.Format = '';
        else
            this.Format = formatVal;
        this.Options = Option.Parse(nodeElement.getAttribute('options'));
        if (nodeElement.getAttribute('cost') == null)
            this.Cost = 0;
        else
            this.Cost = parseFloat(nodeElement.getAttribute('cost'));
        if (this.Cost !== 0 && this.Options.length === 2)
            this.Options[0].Value = this.Cost;
        if (nodeElement.getAttribute('tax_rate') == null)
            this.TaxRate = 0;
        else
            this.TaxRate = parseFloat(nodeElement.getAttribute('tax_rate'));
        var breq = nodeElement.getAttribute('required');
        this.Require = breq === null || breq.toLowerCase() === 'false' ? false : true;
        var bdis = nodeElement.getAttribute('disabled');
        this.Disable = bdis === null || bdis.toLowerCase() === 'false' ? false : true;
        this.Type = nodeElement.getAttribute('type');
        this.Type = this.Type.toLowerCase();
        var bm = nodeElement.getAttribute('multiple');
        this.Multiple = bm === null || bm.toLowerCase() === 'false' ? false : true;
        var num = nodeElement.getAttribute('tax_rate');
        this.taxRate = num === null ? 0 : parseFloat(num) / 100;
        var sumstr = nodeElement.getAttribute('sum');
        this.sum = sumstr === null ? '' : sumstr;
        this.name = nodeElement.nodeName;
    }
    /**
     * Used in multi-group, to create a new instance.
     * @returns A new Node object
     */
    Object.defineProperty(Node.prototype, "Duplicate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return new Node(this.nodeElement, (0, uid_1.uid)());
        }
    });
    Object.defineProperty(Node.prototype, "Update", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value) {
            this.nodeElement.nodeValue = value;
        }
    });
    return Node;
}());
exports.Node = Node;


/***/ }),

/***/ "./Scripts/NodeView.ts":
/*!*****************************!*\
  !*** ./Scripts/NodeView.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeView = void 0;
var mobx_1 = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
var DataBinding_1 = __webpack_require__(/*! ./DataBinding */ "./Scripts/DataBinding.ts");
var NodeView = /** @class */ (function () {
    function NodeView(root, databind, node) {
        Object.defineProperty(this, "inputValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ID", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        var template = DataBinding_1.DataBinding.getElement(databind, root);
        var content = template.content.cloneNode(true);
        this.container = content.querySelector('div');
        this.name = node.name;
        this.ID = node.ID;
    }
    Object.defineProperty(NodeView.prototype, "ExportAsCol", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (colName) {
            this.container.classList.add(colName);
            return this.container;
        }
    });
    Object.defineProperty(NodeView.prototype, "ExportAsRow", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (colName) {
            if (colName === void 0) { colName = ''; }
            if (colName === '')
                this.container.classList.add('col-auto');
            else
                this.container.classList.add(colName);
            var row = document.createElement('div');
            row.classList.add('row', 'mb-3');
            row.appendChild(this.container);
            return row;
        }
    });
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], NodeView.prototype, "inputValue", void 0);
    return NodeView;
}());
exports.NodeView = NodeView;


/***/ }),

/***/ "./Scripts/RadioNodeView.ts":
/*!**********************************!*\
  !*** ./Scripts/RadioNodeView.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RadioNodeView = void 0;
var DataBinding_1 = __webpack_require__(/*! ./DataBinding */ "./Scripts/DataBinding.ts");
var NodeView_1 = __webpack_require__(/*! ./NodeView */ "./Scripts/NodeView.ts");
var RadioNodeView = /** @class */ (function (_super) {
    __extends(RadioNodeView, _super);
    function RadioNodeView(root, node, databind, callback) {
        if (callback === void 0) { callback = undefined; }
        var _this = _super.call(this, root, databind, node) || this;
        Object.defineProperty(_this, "titleEle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // set title.
        _this.titleEle = _this.container.querySelector('label');
        _this.titleEle.innerHTML = node.Title;
        var forattr = _this.titleEle.getAttribute('for');
        _this.titleEle.setAttribute('for', forattr + node.ID);
        var _loop_1 = function (i) {
            var template = DataBinding_1.DataBinding.getElement('tmp-radio-select-input', this_1.container);
            var content = template.content.cloneNode(true);
            var div = content.querySelector('div');
            // Add to parent.
            DataBinding_1.DataBinding.getElement('select-container', this_1.container).appendChild(div);
            // update content.
            var input = div.querySelector('input');
            var label = div.querySelector('label');
            // set attr.
            var idattr = input.getAttribute('id');
            input.setAttribute('id', idattr + '-' + i + '-' + node.ID);
            label.setAttribute('id', idattr + '-' + i + '-' + node.ID);
            // set value if have.
            if (node.Options[i].HasValue)
                input.value = node.Options[i].Value.toString();
            else
                input.value = '';
            label.innerHTML = node.Options[i].DisplayName;
            // Add listener.
            input.addEventListener('click', function () {
                _this.inputValue = input.value;
                if (callback)
                    callback(_this.inputValue);
            });
            // set disabled.
            if (node.Disable) {
                input.disabled = true;
            }
            // set require
            if (node.Require) {
                input.required = true;
            }
        };
        var this_1 = this;
        // set radiogroup.
        for (var i = 0; i < node.Options.length; i++) {
            _loop_1(i);
        }
        // set require
        if (node.Require) {
            var sp = DataBinding_1.DataBinding.getElement('require', _this.container);
            DataBinding_1.DataBinding.show(sp);
        }
        return _this;
    }
    return RadioNodeView;
}(NodeView_1.NodeView));
exports.RadioNodeView = RadioNodeView;


/***/ }),

/***/ "./Scripts/SelectNodeView.ts":
/*!***********************************!*\
  !*** ./Scripts/SelectNodeView.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectNodeView = void 0;
var DataBinding_1 = __webpack_require__(/*! ./DataBinding */ "./Scripts/DataBinding.ts");
var NodeView_1 = __webpack_require__(/*! ./NodeView */ "./Scripts/NodeView.ts");
var SelectNodeView = /** @class */ (function (_super) {
    __extends(SelectNodeView, _super);
    function SelectNodeView(root, node, databind, callback) {
        if (callback === void 0) { callback = undefined; }
        var _this = _super.call(this, root, databind, node) || this;
        Object.defineProperty(_this, "titleEle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(_this, "selectEle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // set title
        _this.titleEle = _this.container.querySelector('label');
        _this.titleEle.innerHTML = node.Title;
        // set options.
        _this.selectEle = _this.container.querySelector('select');
        node.Options.forEach(function (opt) {
            var optele = document.createElement('option');
            optele.innerHTML = opt.DisplayName;
            if (opt.HasValue) {
                optele.setAttribute('value', opt.Value.toString());
            }
            _this.selectEle.appendChild(optele);
        });
        // set select listener.
        _this.selectEle.addEventListener('change', function () {
            var val = _this.selectEle.value;
            _this.inputValue = val;
            if (callback)
                callback(val);
        });
        // set attr
        var forattr = _this.titleEle.getAttribute('for');
        _this.titleEle.setAttribute('for', forattr + node.ID);
        _this.selectEle.setAttribute('id', forattr + node.ID);
        // set disabled.
        if (node.Disable) {
            _this.selectEle.disabled = true;
        }
        // set require
        if (node.Require) {
            _this.selectEle.required = true;
            var sp = DataBinding_1.DataBinding.getElement('require', _this.container);
            DataBinding_1.DataBinding.show(sp);
        }
        return _this;
    }
    return SelectNodeView;
}(NodeView_1.NodeView));
exports.SelectNodeView = SelectNodeView;


/***/ }),

/***/ "./Scripts/TextNodeView.ts":
/*!*********************************!*\
  !*** ./Scripts/TextNodeView.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextNodeView = void 0;
var DataBinding_1 = __webpack_require__(/*! ./DataBinding */ "./Scripts/DataBinding.ts");
var NodeView_1 = __webpack_require__(/*! ./NodeView */ "./Scripts/NodeView.ts");
var TextNodeView = /** @class */ (function (_super) {
    __extends(TextNodeView, _super);
    function TextNodeView(root, node, databind) {
        var _this = _super.call(this, root, databind, node) || this;
        Object.defineProperty(_this, "inputElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // set title
        var title = _this.container.querySelector('label');
        title.innerHTML = node.Title;
        // init input
        _this.inputElement = _this.container.querySelector('input');
        _this.inputElement.addEventListener('keyup', function (ev) {
            _this.inputValue = _this.inputElement.value;
        });
        // set attr
        var forattr = title.getAttribute('for');
        title.setAttribute('for', forattr + node.ID);
        _this.inputElement.setAttribute('id', forattr + node.ID);
        // set require.
        if (node.Require) {
            var r = DataBinding_1.DataBinding.getElement('require', _this.container);
            DataBinding_1.DataBinding.show(r);
            _this.inputElement.required = true;
        }
        // set disable.
        if (node.Disable) {
            _this.inputElement.readOnly = true;
        }
        // set place holder
        _this.inputElement.placeholder = node.Format;
        return _this;
    }
    return TextNodeView;
}(NodeView_1.NodeView));
exports.TextNodeView = TextNodeView;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcustomer_order"] = self["webpackChunkcustomer_order"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Scripts/App.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3VzdG9tZXJfb3JkZXIvLi9TY3JpcHRzL0FwcC50cyIsIndlYnBhY2s6Ly9jdXN0b21lcl9vcmRlci8uL1NjcmlwdHMvRGF0YUJpbmRpbmcudHMiLCJ3ZWJwYWNrOi8vY3VzdG9tZXJfb3JkZXIvLi9TY3JpcHRzL011bHRpR3JvdXBDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY3VzdG9tZXJfb3JkZXIvLi9TY3JpcHRzL05vZGUudHMiLCJ3ZWJwYWNrOi8vY3VzdG9tZXJfb3JkZXIvLi9TY3JpcHRzL05vZGVWaWV3LnRzIiwid2VicGFjazovL2N1c3RvbWVyX29yZGVyLy4vU2NyaXB0cy9SYWRpb05vZGVWaWV3LnRzIiwid2VicGFjazovL2N1c3RvbWVyX29yZGVyLy4vU2NyaXB0cy9TZWxlY3ROb2RlVmlldy50cyIsIndlYnBhY2s6Ly9jdXN0b21lcl9vcmRlci8uL1NjcmlwdHMvVGV4dE5vZGVWaWV3LnRzIiwid2VicGFjazovL2N1c3RvbWVyX29yZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N1c3RvbWVyX29yZGVyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY3VzdG9tZXJfb3JkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2N1c3RvbWVyX29yZGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY3VzdG9tZXJfb3JkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jdXN0b21lcl9vcmRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2N1c3RvbWVyX29yZGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2N1c3RvbWVyX29yZGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY3VzdG9tZXJfb3JkZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2N1c3RvbWVyX29yZGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1aWQgfSBmcm9tICd1aWQnXHJcbmltcG9ydCB7IERhdGFCaW5kaW5nIH0gZnJvbSAnLi9EYXRhQmluZGluZyc7XHJcbmltcG9ydCB7IENvc3QsIE11bHRpcGxlR3JvdXBWaWV3IH0gZnJvbSAnLi9NdWx0aUdyb3VwQ29tcG9uZW50JztcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZSc7XHJcbmltcG9ydCB7IFJhZGlvTm9kZVZpZXcgfSBmcm9tICcuL1JhZGlvTm9kZVZpZXcnO1xyXG5pbXBvcnQgeyBTZWxlY3ROb2RlVmlldyB9IGZyb20gJy4vU2VsZWN0Tm9kZVZpZXcnO1xyXG5pbXBvcnQgeyBUZXh0Tm9kZVZpZXcgfSBmcm9tIFwiLi9UZXh0Tm9kZVZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgcm9vdDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzdG9yZTogTWFwPHN0cmluZywgVGV4dE5vZGVWaWV3IHwgU2VsZWN0Tm9kZVZpZXcgfCBSYWRpb05vZGVWaWV3PiA9IG5ldyBNYXAoKTtcclxuICAgIGdyb3VwU3RvcmU6IE11bHRpcGxlR3JvdXBWaWV3W10gPSBbXTtcclxuICAgIG11bHRpQ29zdCA9IG5ldyBDb3N0KCk7XHJcbiAgICB0YXhSYXRlID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBsb2FkIHhtbC5cclxuICAgICAgICBsZXQgdGVzdGZpbGVQYXRoID0gJy4vYXNzZXRzL3htbFRlc3QueG1sJztcclxuICAgICAgICBsZXQgcHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+ID0gdGhpcy5SZXF1ZXN0RmlsZSh0ZXN0ZmlsZVBhdGgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBwYXJzZSB4bWxcclxuICAgICAgICBwcm9taXNlLnRoZW4oKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICAgICAgbGV0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIFwidGV4dC94bWxcIikgYXMgWE1MRG9jdW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBwYXJzZSBjdXN0b21lciBpbmZvXHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyTGluZUJyZWFrRWxlbWVudCA9IERhdGFCaW5kaW5nLmdldEVsZW1lbnQoJ2JyZWFrLWJlZm9yZS1vcmRlcicsIHRoaXMucm9vdCkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG9yZGVyTGluZUJyZWFrRWxlbWVudC5wYXJlbnRFbGVtZW50IGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgY3VzdG9tZXJpbmZvID0geG1sRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjdXN0b21lcl9pbmZvJylbMF0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGxldCBjb2xuYW1lID0gJ2NvbC1tZC00JztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXN0b21lcmluZm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZSA9IGN1c3RvbWVyaW5mb1tpXSBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2FkZHJlc3MnKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShlbGUsIHVpZCgpKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZS5UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gbmV3IFRleHROb2RlVmlldyh0aGlzLnJvb3QsIG5vZGUsICd0bXAtdGV4dC1pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGlucHV0LkV4cG9ydEFzQ29sKGNvbG5hbWUpLCBvcmRlckxpbmVCcmVha0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNldChpbnB1dC5JRCwgaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSBuZXcgU2VsZWN0Tm9kZVZpZXcodGhpcy5yb290LCBub2RlLCAndG1wLXNlbGVjdC1pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHNlbGVjdC5FeHBvcnRBc0NvbChjb2xuYW1lKSwgb3JkZXJMaW5lQnJlYWtFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXQoc2VsZWN0LklELCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlvID0gbmV3IFJhZGlvTm9kZVZpZXcodGhpcy5yb290LCBub2RlLCAndG1wLXJhZGlvLWlucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocmFkaW8uRXhwb3J0QXNDb2woY29sbmFtZSksIG9yZGVyTGluZUJyZWFrRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0KHJhZGlvLklELCByYWRpbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBwYXJzZSBhZGRyZXNzLlxyXG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzaW5mbyA9IHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYWRkcmVzcycpWzBdLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZHJlc3NpbmZvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGUgPSBhZGRyZXNzaW5mb1tpXSBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGVsZSwgdWlkKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IGNvbCBjbGFzcyBuYW1lLlxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gJ3N0cmVldF9hZGRyZXNzJykgY29sbmFtZSA9ICdjb2wtbWQtNic7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLm5hbWUgPT09ICdwcm92aW5jZScpIGNvbG5hbWUgPSAnY29sLW1kLTQnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjb2xuYW1lID0gJ2NvbC1tZC0zJztcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZS5UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gbmV3IFRleHROb2RlVmlldyh0aGlzLnJvb3QsIG5vZGUsICd0bXAtdGV4dC1pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGlucHV0LkV4cG9ydEFzQ29sKGNvbG5hbWUpLCBvcmRlckxpbmVCcmVha0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNldChpbnB1dC5JRCwgaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSBuZXcgU2VsZWN0Tm9kZVZpZXcodGhpcy5yb290LCBub2RlLCAndG1wLXNlbGVjdC1pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHNlbGVjdC5FeHBvcnRBc0NvbChjb2xuYW1lKSwgb3JkZXJMaW5lQnJlYWtFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXQoc2VsZWN0LklELCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlvID0gbmV3IFJhZGlvTm9kZVZpZXcodGhpcy5yb290LCBub2RlLCAndG1wLXJhZGlvLWlucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocmFkaW8uRXhwb3J0QXNDb2woY29sbmFtZSksIG9yZGVyTGluZUJyZWFrRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0KHJhZGlvLklELCByYWRpbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBwYXNlIG9yZGVyLlxyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWwgPSB4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29yZGVyX2RldGFpbHMnKVswXS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgY29uc3QgdGF4UmF0ZUVsZSA9IERhdGFCaW5kaW5nLmdldEVsZW1lbnQoJ3RheC1yYXRlJywgdGhpcy5yb290KSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeUVsZSA9IHRheFJhdGVFbGUucGFyZW50RWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXRhaWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZSA9IGRldGFpbFtpXSBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGVsZSwgdWlkKCkpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChub2RlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdleHBlZGl0ZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYWRpbyA9IG5ldyBSYWRpb05vZGVWaWV3KHRoaXMucm9vdCwgbm9kZSwgJ3RtcC1yYWRpby1pbnB1dCcsIChpbnB1dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aUNvc3QuVXBkYXRlKHJhZGlvLklELCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlDb3N0LlVwZGF0ZShyYWRpby5JRCwgcGFyc2VJbnQoaW5wdXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlU3VtbWFyeSh0aGlzLnJvb3QsIHRoaXMubXVsdGlDb3N0LkNvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeUVsZS5pbnNlcnRCZWZvcmUocmFkaW8uRXhwb3J0QXNSb3coKSwgdGF4UmF0ZUVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0KHJhZGlvLklELCByYWRpbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtdWx0aXBsZSA9IG5ldyBNdWx0aXBsZUdyb3VwVmlldyh0aGlzLnJvb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZS5BZGROb2RlVmlld0NhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gbmV3IFNlbGVjdE5vZGVWaWV3KHRoaXMucm9vdCwgbm9kZS5EdXBsaWNhdGUoKSwgJ3RtcC1zZWxlY3QtaW5wdXQnLCAoaW5wdXQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aUNvc3QuVXBkYXRlKHNlbGVjdC5JRCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpQ29zdC5VcGRhdGUoc2VsZWN0LklELCBwYXJzZUludChpbnB1dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZVN1bW1hcnkodGhpcy5yb290LCB0aGlzLm11bHRpQ29zdC5Db3N0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNldChzZWxlY3QuSUQsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlLlJlbW92ZU5vZGVWaWV3Q2FsbEJhY2sgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aUNvc3QuUmVtb3ZlKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlU3VtbWFyeSh0aGlzLnJvb3QsIHRoaXMubXVsdGlDb3N0LkNvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBTdG9yZS5wdXNoKG11bHRpcGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeUVsZS5pbnNlcnRCZWZvcmUobXVsdGlwbGUubXVsdGlwbGVHcm91cEVsZSwgdGF4UmF0ZUVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlLkFkZEJ0bi5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0YXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRheFJhdGUgPSBub2RlLnRheFJhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChEYXRhQmluZGluZy5nZXRFbGVtZW50KCd0YXgtcmF0ZS12YWx1ZScsIHRoaXMucm9vdCkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSB0aGlzLnRheFJhdGUgKiAxMDAgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXQgPSBEYXRhQmluZGluZy5nZXRFbGVtZW50KCdzdWJtaXQnLCB0aGlzLnJvb3QpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmVlZHMtdmFsaWRhdGlvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIHRoZW0gYW5kIHByZXZlbnQgc3VibWlzc2lvblxyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZm9ybXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBvcnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9ICd7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZTogVGV4dE5vZGVWaWV3IHwgU2VsZWN0Tm9kZVZpZXcgfCBSYWRpb05vZGVWaWV3LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9ICdcXFwiJyArIHZhbHVlLm5hbWUgICsgJ1xcXCI6XFxcIicgKyAgdmFsdWUuaW5wdXRWYWx1ZSArICdcXFwiLCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRheCByYXRlLCB0YXggYW5kIHN1bS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJ1xcXCJ0YXhSYXRlXFxcIjonICsgIHRoaXMudGF4UmF0ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSAnXFxcInRheFxcXCI6JyArICB0aGlzLnRheFJhdGUgKiB0aGlzLm11bHRpQ29zdC5Db3N0ICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9ICdcXFwic3VtXFxcIjonICsgIHRoaXMubXVsdGlDb3N0LkNvc3QgKyAodGhpcy50YXhSYXRlICogdGhpcy5tdWx0aUNvc3QuQ29zdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJ30nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZSA9IG5ldyBCbG9iKFtzdHJdLCB7dHlwZTogJ3RleHQvcGxhaW4nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRvd25sb2FkID0gJ3N1Ym1pdC5qc29uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVXBkYXRlU3VtbWFyeShyb290OiBIVE1MRGl2RWxlbWVudCwgY29zdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRheCA9IHRoaXMudGF4UmF0ZSAqIGNvc3Q7XHJcbiAgICAgICAgKERhdGFCaW5kaW5nLmdldEVsZW1lbnQoJ3RheC12YWx1ZScsIHRoaXMucm9vdCkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSB0YXgudG9TdHJpbmcoKTtcclxuICAgICAgICAoRGF0YUJpbmRpbmcuZ2V0RWxlbWVudCgndG90YWwtdmFsdWUnLCB0aGlzLnJvb3QpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gKHRheCArIGNvc3QpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBSZXF1ZXN0RmlsZShmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGZpbGVQYXRoLCB0cnVlKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IGFwcCA9IG5ldyBBcHAoKTtcclxuIiwiZXhwb3J0IG5hbWVzcGFjZSBEYXRhQmluZGluZyB7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQobmFtZTogc3RyaW5nLCBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGwpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0b3I6IHN0cmluZyA9ICdbZGF0YS1iaW5kPVwiJyArIG5hbWUgKyAnXCJdJztcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzKG5hbWU6IHN0cmluZywgY29udGFpbmVyPzogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdIHtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdG9yOiBzdHJpbmcgPSAnW2RhdGEtYmluZD1cIicgKyBuYW1lICsgJ1wiXSc7XHJcbiAgICAgICAgbGV0IGVsZXM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikuZm9yRWFjaChlbGUgPT4gZWxlcy5wdXNoKGVsZSBhcyBIVE1MRWxlbWVudCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWxlID0+IGVsZXMucHVzaChlbGUgYXMgSFRNTEVsZW1lbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgICB3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gc2hvdyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoaWRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IG9ic2VydmFibGUsIHJlYWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0IHsgRGF0YUJpbmRpbmcgfSBmcm9tIFwiLi9EYXRhQmluZGluZ1wiO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlJztcclxuaW1wb3J0IHsgUmFkaW9Ob2RlVmlldyB9IGZyb20gXCIuL1JhZGlvTm9kZVZpZXdcIjtcclxuaW1wb3J0IHsgU2VsZWN0Tm9kZVZpZXcgfSBmcm9tIFwiLi9TZWxlY3ROb2RlVmlld1wiO1xyXG5pbXBvcnQgeyBUZXh0Tm9kZVZpZXcgfSBmcm9tIFwiLi9UZXh0Tm9kZVZpZXdcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29zdCB7XHJcbiAgICBzdG9yZTogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuICAgIEBvYnNlcnZhYmxlIENvc3QgPSAwO1xyXG5cclxuICAgIFVwZGF0ZShrZXk6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFYgPSB0aGlzLnN0b3JlLmdldChrZXkpIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgdGhpcy5Db3N0ICs9IHZhbHVlIC0gb2xkVjtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5Db3N0ICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBSZW1vdmUoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBvbGRWID0gdGhpcy5zdG9yZS5nZXQoa2V5KSBhcyBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5Db3N0IC09IG9sZFY7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kZWxldGUoa2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE11bHRpcGxlR3JvdXBWaWV3IHtcclxuICAgIC8vIFRoZSBncm91cCB2aWV3LlxyXG4gICAgbXVsdGlwbGVHcm91cEVsZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAvLyBOZXcgbm9kZSBzaG91bGQgYXBwZW5kIGJlZm9yZSB0aGlzIGVsZW1lbnQuXHJcbiAgICBidXR0b25TZWN0aW9uOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2Ygbm9kZSBhcHBlbmQgaW4gdGhlIGdyb3VwLlxyXG4gICAgQG9ic2VydmFibGUgY2hpbGRDb3VudCA9IDA7XHJcbiAgICAvLyBUaGUgYWRkIGFuZCByZW1vdmUgYnV0dG9uLlxyXG4gICAgQWRkQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIFJlbW92ZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAvLyBUaGUgY29zdCBmcm9tIHNlbGVjdC5cclxuICAgIEBvYnNlcnZhYmxlIENvc3QgPSAwO1xyXG4gICAgLy8gSUQgbGlzdC5cclxuICAgIHByaXZhdGUgSURMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgLy8gQ2FsbGJhY2tcclxuICAgIEFkZE5vZGVWaWV3Q2FsbGJhY2s6ICgoKSA9PiBTZWxlY3ROb2RlVmlldyB8IFJhZGlvTm9kZVZpZXcgfCBUZXh0Tm9kZVZpZXcpIHwgdW5kZWZpbmVkO1xyXG4gICAgUmVtb3ZlTm9kZVZpZXdDYWxsQmFjazogKChpZDogc3RyaW5nKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihyb290OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gRGF0YUJpbmRpbmcuZ2V0RWxlbWVudCgndG1wLW11bHRpcGxlJywgcm9vdCkgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZUdyb3VwRWxlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25TZWN0aW9uID0gRGF0YUJpbmRpbmcuZ2V0RWxlbWVudCgnYnV0dG9uLXNlY3Rpb24nLCB0aGlzLm11bHRpcGxlR3JvdXBFbGUpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuQWRkQnRuID0gRGF0YUJpbmRpbmcuZ2V0RWxlbWVudCgnYnRuLWFkZCcsIHRoaXMubXVsdGlwbGVHcm91cEVsZSkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5SZW1vdmVCdG4gPSBEYXRhQmluZGluZy5nZXRFbGVtZW50KCdidG4tcmVtb3ZlJywgdGhpcy5tdWx0aXBsZUdyb3VwRWxlKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAvLyBXaGVuIGluaXQsIHRoZSByZW1vdmUgYnV0dG9uIHNob3VsZCBoaWRlLlxyXG4gICAgICAgIERhdGFCaW5kaW5nLmhpZGUodGhpcy5SZW1vdmVCdG4pO1xyXG4gICAgICAgIC8vIEFkZCBidXR0b24sIGFkZCBhIG5vZGUuXHJcbiAgICAgICAgdGhpcy5BZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkFkZE5vZGVWaWV3Q2FsbGJhY2sgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBlbGUgPSB0aGlzLkFkZE5vZGVWaWV3Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgdGhpcy5JRExpc3QucHVzaChlbGUuSUQpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEFkZCB0byBjb250YWluZXIuXHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGVsZS5FeHBvcnRBc1JvdygnY29sLW1kLTEyJyk7XHJcbiAgICAgICAgICAgIHJvdy5pZCA9IGVsZS5JRDtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aXBsZUdyb3VwRWxlLmluc2VydEJlZm9yZShyb3csIHRoaXMuYnV0dG9uU2VjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRDb3VudCsrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRDb3VudCA9PT0gMSkgRGF0YUJpbmRpbmcuaGlkZSh0aGlzLlJlbW92ZUJ0bik7XHJcbiAgICAgICAgICAgIGVsc2UgRGF0YUJpbmRpbmcuc2hvdyh0aGlzLlJlbW92ZUJ0bik7IFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmVcclxuICAgICAgICB0aGlzLlJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIGNvc3QuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJZHggPSB0aGlzLklETGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuSURMaXN0W2xhc3RJZHhdO1xyXG4gICAgICAgICAgICB0aGlzLklETGlzdC5zcGxpY2UobGFzdElkeCwgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5SZW1vdmVOb2RlVmlld0NhbGxCYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZU5vZGVWaWV3Q2FsbEJhY2soaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeXNlbGVjdG9yID0gJ1tpZD1cIicgKyBpZCArICdcIl0nO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLm11bHRpcGxlR3JvdXBFbGUucXVlcnlTZWxlY3RvcihxdWVyeXNlbGVjdG9yKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGZyb20gcGFnZS5cclxuICAgICAgICAgICAgdGhpcy5tdWx0aXBsZUdyb3VwRWxlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZENvdW50LS07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGlsZENvdW50ID09PSAxKSBEYXRhQmluZGluZy5oaWRlKHRoaXMuUmVtb3ZlQnRuKTtcclxuICAgICAgICAgICAgZWxzZSBEYXRhQmluZGluZy5zaG93KHRoaXMuUmVtb3ZlQnRuKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB1aWQgfSBmcm9tICd1aWQnXHJcblxyXG5cclxuY2xhc3MgT3B0aW9uIHtcclxuICAgIERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogbnVtYmVyO1xyXG4gICAgZ2V0IEhhc1ZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiAhaXNOYU4odGhpcy5WYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5EaXNwbGF5TmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5WYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcmF3SW5wdXQgSW5wdXQgd2l0aCB2YWx1ZTogXCJPbmV8MTUwIFR3b3wzMDBcIiBvciB3aXRob3V0IHZhbHVlOiBcIkdyZWVuIEJsYWNrIFJlZCBCbHVlXCJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFBhcnNlKHJhd0lucHV0OiBzdHJpbmcgfCBudWxsKTogT3B0aW9uW10ge1xyXG4gICAgICAgIGxldCBvcHQ6IE9wdGlvbltdID0gW107XHJcbiAgICAgICAgaWYgKHJhd0lucHV0ID09IG51bGwpIHJldHVybiBvcHQ7XHJcbiAgICAgICAgbGV0IHNwbGl0ID0gcmF3SW5wdXQuc3BsaXQoJywnKTtcclxuICAgICAgICBzcGxpdC5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3BsaXQyID0gcy50cmltKCkuc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0Mi5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgb3B0LnB1c2gobmV3IE9wdGlvbihzcGxpdDJbMF0sIHBhcnNlSW50KHNwbGl0MlsxXSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wdC5wdXNoKG5ldyBPcHRpb24oc3BsaXQyWzBdLCBOYU4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb2RlIHtcclxuICAgIC8vIFVuaXF1ZSBpZC5cclxuICAgIElEOiBzdHJpbmc7XHJcbiAgICAvLyBLZWVwIGEgY29weSBvZiB0aGUgcmF3IGRhdGEuXHJcbiAgICBub2RlRWxlbWVudDogRWxlbWVudDtcclxuICAgIC8vIFRoZSBsYWJlbCBjcmVhdGVkIGZvciB0aGUgZm9ybSBlbnRyeS5cclxuICAgIFRpdGxlOiBzdHJpbmc7XHJcbiAgICAvLyBFeHBlY3RlZCBmb3JtYXQgb2YgaW5wdXQuXHJcbiAgICBGb3JtYXQ6IHN0cmluZztcclxuICAgIC8vIE9wdGlvbnMgZm9yIHRoZSBkcm9wIGRvd24uIElmIHRoZXkgYXJlIGRpdmlkZWQgYnkgYSBwaXBlICgnT25lfDEwMCcpLCB0aGUgZmlyc3QgZW50cnkgaXMgdGhlIGRpc3BsYXkgdGV4dCwgYW5kIHRoZSBsYXR0ZXIgaXMgdGhlIHZhbHVlLlxyXG4gICAgT3B0aW9uczogT3B0aW9uW107XHJcbiAgICAvLyBUaGUgY29zdFxyXG4gICAgQ29zdDogbnVtYmVyO1xyXG4gICAgLy8gVGF4IHJhdGVcclxuICAgIFRheFJhdGU6IG51bWJlcjtcclxuICAgIC8vIFJlcXVpcmUgb3Igbm90XHJcbiAgICBSZXF1aXJlOiBib29sZWFuO1xyXG4gICAgLy8gdGhlIGRpc2FibGVcclxuICAgIERpc2FibGU6IGJvb2xlYW47XHJcblxyXG4gICAgVHlwZTogc3RyaW5nO1xyXG5cclxuICAgIE11bHRpcGxlOiBib29sZWFuO1xyXG5cclxuICAgIHRheFJhdGU6IG51bWJlcjtcclxuXHJcbiAgICBzdW06IHN0cmluZztcclxuXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9kZUVsZW1lbnQ6IEVsZW1lbnQsIFVJRDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5JRCA9IFVJRDtcclxuICAgICAgICB0aGlzLm5vZGVFbGVtZW50ID0gbm9kZUVsZW1lbnQ7XHJcbiAgICAgICAgLy8gUGFyc2Ugbm9kZSBzdHJpbmcuXHJcbiAgICAgICAgdGhpcy5UaXRsZSA9IG5vZGVFbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm9ybWF0VmFsID0gbm9kZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmb3JtYXQnKTtcclxuICAgICAgICBpZiAoZm9ybWF0VmFsID09IG51bGwpIHRoaXMuRm9ybWF0ID0gJyc7XHJcbiAgICAgICAgZWxzZSB0aGlzLkZvcm1hdCA9IGZvcm1hdFZhbDtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zID0gT3B0aW9uLlBhcnNlKG5vZGVFbGVtZW50LmdldEF0dHJpYnV0ZSgnb3B0aW9ucycpKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobm9kZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjb3N0JykgPT0gbnVsbCkgdGhpcy5Db3N0ID0gMDtcclxuICAgICAgICBlbHNlIHRoaXMuQ29zdCA9IHBhcnNlRmxvYXQobm9kZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjb3N0JykgYXMgc3RyaW5nKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuQ29zdCAhPT0gMCAmJiB0aGlzLk9wdGlvbnMubGVuZ3RoID09PSAyKSB0aGlzLk9wdGlvbnNbMF0uVmFsdWUgPSB0aGlzLkNvc3Q7XHJcblxyXG4gICAgICAgIGlmIChub2RlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RheF9yYXRlJykgPT0gbnVsbCkgdGhpcy5UYXhSYXRlID0gMDtcclxuICAgICAgICBlbHNlIHRoaXMuVGF4UmF0ZSA9IHBhcnNlRmxvYXQobm9kZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YXhfcmF0ZScpIGFzIHN0cmluZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyZXEgPSBub2RlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XHJcbiAgICAgICAgdGhpcy5SZXF1aXJlID0gYnJlcSA9PT0gbnVsbCB8fCBicmVxLnRvTG93ZXJDYXNlKCkgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGJkaXMgPSBub2RlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgdGhpcy5EaXNhYmxlID0gYmRpcyA9PT0gbnVsbCB8fCBiZGlzLnRvTG93ZXJDYXNlKCkgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuVHlwZSA9IG5vZGVFbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpIGFzIHN0cmluZztcclxuICAgICAgICB0aGlzLlR5cGUgPSB0aGlzLlR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBibSA9IG5vZGVFbGVtZW50LmdldEF0dHJpYnV0ZSgnbXVsdGlwbGUnKTtcclxuICAgICAgICB0aGlzLk11bHRpcGxlID0gYm0gPT09IG51bGwgfHwgYm0udG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbnVtID0gbm9kZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YXhfcmF0ZScpO1xyXG4gICAgICAgIHRoaXMudGF4UmF0ZSA9IG51bSA9PT0gbnVsbCA/IDAgOiBwYXJzZUZsb2F0KG51bSkgLyAxMDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1bXN0ciA9IG5vZGVFbGVtZW50LmdldEF0dHJpYnV0ZSgnc3VtJyk7XHJcbiAgICAgICAgdGhpcy5zdW0gPSBzdW1zdHIgPT09IG51bGwgPyAnJyA6IHN1bXN0cjtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbm9kZUVsZW1lbnQubm9kZU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIGluIG11bHRpLWdyb3VwLCB0byBjcmVhdGUgYSBuZXcgaW5zdGFuY2UuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBOb2RlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBEdXBsaWNhdGUoKTogTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMubm9kZUVsZW1lbnQsIHVpZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubm9kZUVsZW1lbnQubm9kZVZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCByZWFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XHJcbmltcG9ydCB7IERhdGFCaW5kaW5nIH0gZnJvbSBcIi4vRGF0YUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOb2RlVmlldyB7XHJcbiAgICBAb2JzZXJ2YWJsZSBpbnB1dFZhbHVlID0gJyc7XHJcbiAgICBwcm90ZWN0ZWQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIElEOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Iocm9vdDogSFRNTERpdkVsZW1lbnQsIGRhdGFiaW5kOiBzdHJpbmcsIG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IERhdGFCaW5kaW5nLmdldEVsZW1lbnQoZGF0YWJpbmQsIHJvb3QpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5JRCA9IG5vZGUuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgRXhwb3J0QXNDb2woY29sTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChjb2xOYW1lKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBFeHBvcnRBc1Jvdyhjb2xOYW1lOiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgIGlmIChjb2xOYW1lID09PSAnJykgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLWF1dG8nKVxyXG4gICAgICAgIGVsc2UgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChjb2xOYW1lKTtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JywgJ21iLTMnKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiByb3c7XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUnXHJcbmltcG9ydCB7IERhdGFCaW5kaW5nIH0gZnJvbSBcIi4vRGF0YUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgb2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgeyBOb2RlVmlldyB9IGZyb20gJy4vTm9kZVZpZXcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhZGlvTm9kZVZpZXcgZXh0ZW5kcyBOb2RlVmlldyB7XHJcbiAgICBwcm90ZWN0ZWQgdGl0bGVFbGU6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Iocm9vdDogSFRNTERpdkVsZW1lbnQsIG5vZGU6IE5vZGUsIGRhdGFiaW5kOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN1cGVyKHJvb3QsIGRhdGFiaW5kLCBub2RlKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRpdGxlLlxyXG4gICAgICAgIHRoaXMudGl0bGVFbGUgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpIGFzIEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50aXRsZUVsZS5pbm5lckhUTUwgPSBub2RlLlRpdGxlO1xyXG4gICAgICAgIGNvbnN0IGZvcmF0dHIgPSB0aGlzLnRpdGxlRWxlLmdldEF0dHJpYnV0ZSgnZm9yJyk7XHJcbiAgICAgICAgdGhpcy50aXRsZUVsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGZvcmF0dHIgKyBub2RlLklEKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHJhZGlvZ3JvdXAuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGUuT3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IERhdGFCaW5kaW5nLmdldEVsZW1lbnQoJ3RtcC1yYWRpby1zZWxlY3QtaW5wdXQnLCB0aGlzLmNvbnRhaW5lcikgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAvLyBBZGQgdG8gcGFyZW50LlxyXG4gICAgICAgICAgICAoRGF0YUJpbmRpbmcuZ2V0RWxlbWVudCgnc2VsZWN0LWNvbnRhaW5lcicsIHRoaXMuY29udGFpbmVyKSBhcyBIVE1MRGl2RWxlbWVudCkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIGNvbnRlbnQuXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkaXYucXVlcnlTZWxlY3RvcignbGFiZWwnKSBhcyBIVE1MTGFiZWxFbGVtZW50O1xyXG4gICAgICAgICAgICAvLyBzZXQgYXR0ci5cclxuICAgICAgICAgICAgY29uc3QgaWRhdHRyID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRhdHRyICsgJy0nICsgaSArICctJyArIG5vZGUuSUQpO1xyXG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRhdHRyICsgJy0nICsgaSArICctJyArIG5vZGUuSUQpO1xyXG4gICAgICAgICAgICAvLyBzZXQgdmFsdWUgaWYgaGF2ZS5cclxuICAgICAgICAgICAgaWYgKG5vZGUuT3B0aW9uc1tpXS5IYXNWYWx1ZSkgaW5wdXQudmFsdWUgPSBub2RlLk9wdGlvbnNbaV0uVmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZWxzZSBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBub2RlLk9wdGlvbnNbaV0uRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIC8vIEFkZCBsaXN0ZW5lci5cclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgZGlzYWJsZWQuXHJcbiAgICAgICAgICAgIGlmIChub2RlLkRpc2FibGUpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzZXQgcmVxdWlyZVxyXG4gICAgICAgICAgICBpZiAobm9kZS5SZXF1aXJlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCByZXF1aXJlXHJcbiAgICAgICAgaWYgKG5vZGUuUmVxdWlyZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzcCA9IERhdGFCaW5kaW5nLmdldEVsZW1lbnQoJ3JlcXVpcmUnLCB0aGlzLmNvbnRhaW5lcikgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgICAgICAgICBEYXRhQmluZGluZy5zaG93KHNwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZSdcclxuaW1wb3J0IHsgRGF0YUJpbmRpbmcgfSBmcm9tIFwiLi9EYXRhQmluZGluZ1wiO1xyXG5pbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7IE5vZGVWaWV3IH0gZnJvbSAnLi9Ob2RlVmlldyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Tm9kZVZpZXcgZXh0ZW5kcyBOb2RlVmlldyB7XHJcbiAgICBwcm90ZWN0ZWQgdGl0bGVFbGU6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgICBzZWxlY3RFbGU6IEhUTUxTZWxlY3RFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvb3Q6IEhUTUxEaXZFbGVtZW50LCBub2RlOiBOb2RlLCBkYXRhYmluZDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdXBlcihyb290LCBkYXRhYmluZCwgbm9kZSk7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aXRsZVxyXG4gICAgICAgIHRoaXMudGl0bGVFbGUgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpIGFzIEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50aXRsZUVsZS5pbm5lckhUTUwgPSBub2RlLlRpdGxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldCBvcHRpb25zLlxyXG4gICAgICAgIHRoaXMuc2VsZWN0RWxlID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgbm9kZS5PcHRpb25zLmZvckVhY2gob3B0ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0ZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJykgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG9wdGVsZS5pbm5lckhUTUwgPSBvcHQuRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIGlmIChvcHQuSGFzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIG9wdGVsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0LlZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RWxlLmFwcGVuZENoaWxkKG9wdGVsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBsaXN0ZW5lci5cclxuICAgICAgICB0aGlzLnNlbGVjdEVsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuc2VsZWN0RWxlLnZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh2YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldCBhdHRyXHJcbiAgICAgICAgY29uc3QgZm9yYXR0ciA9IHRoaXMudGl0bGVFbGUuZ2V0QXR0cmlidXRlKCdmb3InKTtcclxuICAgICAgICB0aGlzLnRpdGxlRWxlLnNldEF0dHJpYnV0ZSgnZm9yJywgZm9yYXR0ciArIG5vZGUuSUQpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RWxlLnNldEF0dHJpYnV0ZSgnaWQnLCBmb3JhdHRyICsgbm9kZS5JRCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2V0IGRpc2FibGVkLlxyXG4gICAgICAgIGlmIChub2RlLkRpc2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RFbGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHJlcXVpcmVcclxuICAgICAgICBpZiAobm9kZS5SZXF1aXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RWxlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc3AgPSBEYXRhQmluZGluZy5nZXRFbGVtZW50KCdyZXF1aXJlJywgdGhpcy5jb250YWluZXIpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgICAgICAgICAgRGF0YUJpbmRpbmcuc2hvdyhzcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUnXHJcbmltcG9ydCB7IERhdGFCaW5kaW5nIH0gZnJvbSBcIi4vRGF0YUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgTm9kZVZpZXcgfSBmcm9tICcuL05vZGVWaWV3JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0Tm9kZVZpZXcgZXh0ZW5kcyBOb2RlVmlld3tcclxuICAgIHByb3RlY3RlZCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Iocm9vdDogSFRNTERpdkVsZW1lbnQsIG5vZGU6IE5vZGUsIGRhdGFiaW5kOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihyb290LCBkYXRhYmluZCwgbm9kZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2V0IHRpdGxlXHJcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignbGFiZWwnKSBhcyBIVE1MTGFiZWxFbGVtZW50O1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IG5vZGUuVGl0bGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaW5pdCBpbnB1dFxyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldCBhdHRyXHJcbiAgICAgICAgY29uc3QgZm9yYXR0ciA9IHRpdGxlLmdldEF0dHJpYnV0ZSgnZm9yJyk7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCBmb3JhdHRyICsgbm9kZS5JRCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGZvcmF0dHIgKyBub2RlLklEKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHJlcXVpcmUuXHJcbiAgICAgICAgaWYgKG5vZGUuUmVxdWlyZSkge1xyXG4gICAgICAgICAgICBsZXQgciA9IERhdGFCaW5kaW5nLmdldEVsZW1lbnQoJ3JlcXVpcmUnLCB0aGlzLmNvbnRhaW5lcikgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgICAgICAgICBEYXRhQmluZGluZy5zaG93KHIpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldCBkaXNhYmxlLlxyXG4gICAgICAgIGlmIChub2RlLkRpc2FibGUpe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgcGxhY2UgaG9sZGVyXHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQucGxhY2Vob2xkZXIgPSBub2RlLkZvcm1hdDtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2N1c3RvbWVyX29yZGVyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2N1c3RvbWVyX29yZGVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vU2NyaXB0cy9BcHAudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==