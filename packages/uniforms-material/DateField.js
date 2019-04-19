"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var DateConstructor = ((typeof global === "undefined" ? "undefined" : (0, _typeof2.default)(global)) === 'object' ? global : window).Date;

var dateFormat = function dateFormat(value) {
  return value && value.toISOString().slice(0, -8);
};

var dateParse = function dateParse(timestamp, onChange) {
  var date = new DateConstructor(timestamp);

  if (date.getFullYear() < 10000) {
    onChange(date);
  } else if (isNaN(timestamp)) {
    onChange(undefined);
  }
};

var Date = function Date(_ref) {
  var InputLabelProps = _ref.InputLabelProps,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      helperText = _ref.helperText,
      inputRef = _ref.inputRef,
      label = _ref.label,
      labelProps = _ref.labelProps,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      showInlineError = _ref.showInlineError,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["InputLabelProps", "disabled", "error", "errorMessage", "helperText", "inputRef", "label", "labelProps", "name", "onChange", "placeholder", "showInlineError", "value"]);
  return _react.default.createElement(_TextField.default, (0, _extends2.default)({
    disabled: !!disabled,
    error: !!error,
    helperText: error && showInlineError && errorMessage || helperText,
    label: label,
    InputLabelProps: (0, _objectSpread2.default)({}, labelProps, InputLabelProps),
    name: name,
    onChange: function onChange(event) {
      return disabled || dateParse(event.target.valueAsNumber, _onChange);
    },
    placeholder: placeholder,
    ref: inputRef,
    type: "datetime-local",
    value: dateFormat(value)
  }, (0, _filterDOMProps.default)(props)));
};

Date.defaultProps = {
  fullWidth: true,
  margin: 'dense'
};

var _default = (0, _connectField.default)(Date);

exports.default = _default;