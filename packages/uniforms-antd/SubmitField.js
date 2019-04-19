"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _BaseField = _interopRequireDefault(require("uniforms/BaseField"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var SubmitField = function SubmitField(_ref, _ref2) {
  var inputRef = _ref.inputRef,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["inputRef", "value"]);
  var _ref2$uniforms = _ref2.uniforms,
      error = _ref2$uniforms.error,
      disabled = _ref2$uniforms.state.disabled;
  return _react.default.createElement(_button.default, (0, _extends2.default)({
    disabled: !!(error || disabled),
    htmlType: "submit",
    ref: inputRef,
    type: "primary"
  }, props), value);
};

SubmitField.contextTypes = _BaseField.default.contextTypes;
SubmitField.defaultProps = {
  value: 'Submit'
};
var _default = SubmitField;
exports.default = _default;