"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var ListDel = function ListDel(_ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      parent = _ref.parent,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "name", "parent"]);
  var fieldIndex = +name.slice(1 + name.lastIndexOf('.'));
  var limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
  return _react.default.createElement("span", (0, _extends2.default)({}, (0, _filterDOMProps.default)(props), {
    onClick: function onClick() {
      return limitNotReached && parent.onChange([].concat(parent.value.slice(0, fieldIndex)).concat(parent.value.slice(1 + fieldIndex)));
    }
  }), "-");
};

var _default = (0, _connectField.default)(ListDel, {
  includeParent: true,
  initialValue: false
});

exports.default = _default;