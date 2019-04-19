"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _moment = _interopRequireDefault(require("moment"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var Date = function Date(props) {
  return (0, _wrapField.default)(props, _react.default.createElement(_datePicker.default, (0, _extends2.default)({
    disabled: props.disabled,
    id: props.id,
    name: props.name,
    onChange: function onChange(value) {
      return props.onChange(value && value.toDate());
    },
    placeholder: props.placeholder,
    ref: props.inputRef,
    value: props.value && (0, _moment.default)(props.value)
  }, (0, _filterDOMProps.default)(props))));
};

Date.defaultProps = {
  showTime: true,
  style: {
    width: '100%'
  }
};

var _default = (0, _connectField.default)(Date, {
  ensureValue: false
});

exports.default = _default;