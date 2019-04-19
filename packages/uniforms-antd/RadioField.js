"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _radio = _interopRequireDefault(require("antd/lib/radio"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var Radio = function Radio(props) {
  return (0, _wrapField.default)(props, _react.default.createElement(_radio.default.Group, (0, _extends2.default)({
    disabled: props.disabled,
    name: props.name,
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    },
    value: props.value
  }, (0, _filterDOMProps.default)(props)), props.allowedValues.map(function (value) {
    return _react.default.createElement(_radio.default, {
      key: value,
      value: value,
      style: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }, props.transform ? props.transform(value) : value);
  })));
};

var _default = (0, _connectField.default)(Radio);

exports.default = _default;