"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var noneIfNaN = function noneIfNaN(x) {
  return isNaN(x) ? undefined : x;
};

var Num = function Num(props) {
  return (0, _wrapField.default)(props, _react.default.createElement(_inputNumber.default, (0, _extends2.default)({
    disabled: props.disabled,
    id: props.id,
    max: props.max,
    min: props.min,
    name: props.name,
    onChange: function onChange(value) {
      return props.onChange(noneIfNaN(value));
    },
    placeholder: props.placeholder,
    ref: props.inputRef,
    step: props.step || (props.decimal ? 0.01 : 1),
    value: props.value,
    style: {
      width: '100%'
    }
  }, (0, _filterDOMProps.default)(props))));
};

var _default = (0, _connectField.default)(Num, {
  ensureValue: false
});

exports.default = _default;