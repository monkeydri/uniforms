"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var Text = function Text(props) {
  return (0, _wrapField.default)(props, _react.default.createElement("input", {
    className: (0, _classnames.default)(props.inputClassName, 'form-control', {
      'is-invalid': props.error
    }),
    disabled: props.disabled,
    id: props.id,
    name: props.name,
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    },
    placeholder: props.placeholder,
    ref: props.inputRef,
    type: props.type,
    value: props.value
  }));
};

Text.defaultProps = {
  type: 'text'
};

var _default = (0, _connectField.default)(Text);

exports.default = _default;