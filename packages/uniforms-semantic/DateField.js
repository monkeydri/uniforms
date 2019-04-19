"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

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
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      value = _ref.value,
      wrapClassName = _ref.wrapClassName,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "disabled", "error", "errorMessage", "icon", "iconLeft", "iconProps", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "required", "showInlineError", "value", "wrapClassName"]);
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
    max: dateFormat(max),
    min: dateFormat(min),
    name: name,
    onChange: function onChange(event) {
      return dateParse(event.target.valueAsNumber, _onChange);
    },
    placeholder: placeholder,
    ref: inputRef,
    type: "datetime-local",
    value: dateFormat(value)
  }), (icon || iconLeft) && _react.default.createElement("i", (0, _extends2.default)({
    className: "".concat(icon || iconLeft, " icon")
  }, iconProps))), !!(error && showInlineError) && _react.default.createElement("div", {
    className: "ui red basic pointing label"
  }, errorMessage));
};

var _default = (0, _connectField.default)(Date);

exports.default = _default;