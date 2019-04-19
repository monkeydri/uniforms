"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var Bool = function Bool(_ref) {
  var disabled = _ref.disabled,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "id", "inputRef", "label", "name", "onChange", "value"]);
  return _react.default.createElement("div", (0, _filterDOMProps.default)(props), _react.default.createElement("input", {
    checked: value,
    disabled: disabled,
    id: id,
    name: name,
    onChange: function onChange() {
      return disabled || _onChange(!value);
    },
    ref: inputRef,
    type: "checkbox"
  }), label && _react.default.createElement("label", {
    htmlFor: id
  }, label));
};

var _default = (0, _connectField.default)(Bool);

exports.default = _default;