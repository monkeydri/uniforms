"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

// NOTE: Input.TextArea was introduced in 2.12.0 and removed in 3.0.0.
var TextArea = _input.default.TextArea || _input.default;
var textType = _input.default.TextArea ? undefined : 'textarea';

var LongText = function LongText(props) {
  return (0, _wrapField.default)(props, _react.default.createElement(TextArea, (0, _extends2.default)({
    disabled: props.disabled,
    id: props.id,
    name: props.name,
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    },
    placeholder: props.placeholder,
    ref: props.inputRef,
    type: textType,
    value: props.value
  }, (0, _filterDOMProps.default)(props))));
};

LongText.defaultProps = {
  rows: 5
};

var _default = (0, _connectField.default)(LongText);

exports.default = _default;