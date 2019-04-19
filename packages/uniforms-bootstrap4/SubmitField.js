"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _BaseField = _interopRequireDefault(require("uniforms/BaseField"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _gridClassName = _interopRequireDefault(require("./gridClassName"));

var SubmitField = function SubmitField(_ref, _ref2) {
  var className = _ref.className,
      disabled = _ref.disabled,
      inputClassName = _ref.inputClassName,
      inputRef = _ref.inputRef,
      value = _ref.value,
      wrapClassName = _ref.wrapClassName,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "disabled", "inputClassName", "inputRef", "value", "wrapClassName"]);
  var _ref2$uniforms = _ref2.uniforms,
      error = _ref2$uniforms.error,
      state = _ref2$uniforms.state;
  var hasWrap = !!(state.grid || wrapClassName);

  var blockInput = _react.default.createElement("input", (0, _extends2.default)({
    className: inputClassName,
    disabled: disabled === undefined ? !!(error || state.disabled) : disabled,
    ref: inputRef,
    type: "submit"
  }, value ? {
    value: value
  } : {}));

  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(className, {
      'is-invalid': error,
      row: state.grid
    })
  }, (0, _filterDOMProps.default)(props)), hasWrap && _react.default.createElement("label", {
    className: (0, _classnames.default)('col-form-label', (0, _gridClassName.default)(state.grid, 'label'))
  }, "\xA0"), hasWrap && _react.default.createElement("div", {
    className: (0, _classnames.default)(wrapClassName, (0, _gridClassName.default)(state.grid, 'input'))
  }, blockInput), !hasWrap && blockInput);
};

SubmitField.contextTypes = _BaseField.default.contextTypes;
SubmitField.defaultProps = {
  inputClassName: 'btn btn-primary'
};
var _default = SubmitField;
exports.default = _default;