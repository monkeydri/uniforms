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

var Bool = function Bool(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "disabled", "error", "errorMessage", "id", "inputRef", "label", "name", "onChange", "required", "showInlineError", "value"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(className, {
      disabled: disabled,
      error: error,
      required: required
    }, 'field')
  }, (0, _filterDOMProps.default)(props)), _react.default.createElement("div", {
    className: "ui checkbox"
  }, _react.default.createElement("input", {
    checked: value,
    className: "hidden",
    disabled: disabled,
    id: id,
    name: name,
    onChange: function onChange() {
      return _onChange(!value);
    },
    ref: inputRef,
    type: "checkbox"
  }), _react.default.createElement("label", {
    htmlFor: id
  }, label)), !!(error && showInlineError) && _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "ui red basic pointing label"
  }, errorMessage)));
};

var _default = (0, _connectField.default)(Bool);

exports.default = _default;