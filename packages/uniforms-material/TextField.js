"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var Text = function Text(_ref) {
  var disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      helperText = _ref.helperText,
      inputRef = _ref.inputRef,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      showInlineError = _ref.showInlineError,
      type = _ref.type,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "error", "errorMessage", "helperText", "inputRef", "label", "name", "onChange", "placeholder", "showInlineError", "type", "value"]);
  return _react.default.createElement(_TextField.default, (0, _extends2.default)({
    disabled: !!disabled,
    error: !!error,
    helperText: error && showInlineError && errorMessage || helperText,
    label: label,
    name: name,
    onChange: function onChange(event) {
      return disabled || _onChange(event.target.value);
    },
    placeholder: placeholder,
    ref: inputRef,
    type: type,
    value: value
  }, (0, _filterDOMProps.default)(props)));
};

Text.defaultProps = {
  fullWidth: true,
  margin: 'dense',
  type: 'text'
};

var _default = (0, _connectField.default)(Text);

exports.default = _default;