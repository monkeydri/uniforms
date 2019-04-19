"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _BaseField = _interopRequireDefault(require("uniforms/BaseField"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _react = _interopRequireDefault(require("react"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var SubmitField = function SubmitField(_ref, _ref2) {
  var children = _ref.children,
      disabled = _ref.disabled,
      inputRef = _ref.inputRef,
      label = _ref.label,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "disabled", "inputRef", "label", "value"]);
  var _ref2$uniforms = _ref2.uniforms,
      error = _ref2$uniforms.error,
      state = _ref2$uniforms.state;
  return _react.default.createElement(_Button.default, (0, _extends2.default)({
    disabled: disabled === undefined ? !!(error || state.disabled) : disabled,
    ref: inputRef,
    type: "submit",
    value: value
  }, (0, _filterDOMProps.default)(props)), label || children);
};

SubmitField.contextTypes = _BaseField.default.contextTypes;
SubmitField.defaultProps = {
  label: 'Submit',
  variant: 'contained'
};
var _default = SubmitField;
exports.default = _default;