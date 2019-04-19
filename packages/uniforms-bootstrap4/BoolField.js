"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var Bool = function Bool(_ref) {
  var label = _ref.label,
      labelBefore = _ref.labelBefore,
      props = (0, _objectWithoutProperties2.default)(_ref, ["label", "labelBefore"]);
  return (0, _wrapField.default)((0, _objectSpread2.default)({
    label: labelBefore
  }, props), _react.default.createElement("div", {
    className: (0, _classnames.default)(props.inputClassName, 'form-check', 'checkbox', {
      'text-danger': props.error,
      'custom-control-inline': props.inline
    })
  }, _react.default.createElement("label", {
    htmlFor: props.id,
    className: "form-check-label"
  }, _react.default.createElement("input", {
    checked: props.value,
    className: "form-check-input",
    disabled: props.disabled,
    id: props.id,
    name: props.name,
    onChange: function onChange() {
      return props.onChange(!props.value);
    },
    ref: props.inputRef,
    type: "checkbox"
  }), "\xA0", label)));
};

var _default = (0, _connectField.default)(Bool);

exports.default = _default;