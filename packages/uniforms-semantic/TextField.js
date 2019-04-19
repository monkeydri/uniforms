"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var Text = function Text(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      icon = _ref.icon,
      iconLeft = _ref.iconLeft,
      iconProps = _ref.iconProps,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      type = _ref.type,
      value = _ref.value,
      wrapClassName = _ref.wrapClassName,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "disabled", "error", "errorMessage", "icon", "iconLeft", "iconProps", "id", "inputRef", "label", "name", "onChange", "placeholder", "required", "showInlineError", "type", "value", "wrapClassName"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(className, {
      disabled: disabled,
      error: error,
      required: required
    }, 'field')
  }, (0, _filterDOMProps.default)(props)), label && _react.default.createElement("label", {
    htmlFor: id
  }, label), _react.default.createElement("div", {
    className: (0, _classnames.default)('ui', wrapClassName, {
      left: iconLeft,
      icon: icon || iconLeft
    }, 'input')
  }, _react.default.createElement("input", {
    disabled: disabled,
    id: id,
    name: name,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    placeholder: placeholder,
    ref: inputRef,
    type: type,
    value: value
  }), (icon || iconLeft) && _react.default.createElement("i", (0, _extends2.default)({
    className: "".concat(icon || iconLeft, " icon")
  }, iconProps))), !!(error && showInlineError) && _react.default.createElement("div", {
    className: "ui red basic pointing label"
  }, errorMessage));
};

Text.defaultProps = {
  type: 'text'
};

var _default = (0, _connectField.default)(Text);

exports.default = _default;