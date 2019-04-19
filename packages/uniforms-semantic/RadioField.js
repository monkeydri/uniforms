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

var Radio = function Radio(_ref) {
  var allowedValues = _ref.allowedValues,
      checkboxes = _ref.checkboxes,
      className = _ref.className,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      transform = _ref.transform,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["allowedValues", "checkboxes", "className", "disabled", "error", "errorMessage", "id", "label", "name", "onChange", "required", "showInlineError", "transform", "value"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(className, {
      disabled: disabled,
      error: error
    }, 'grouped fields')
  }, (0, _filterDOMProps.default)(props)), label && _react.default.createElement("div", {
    className: (0, _classnames.default)({
      required: required
    }, 'field')
  }, _react.default.createElement("label", null, label)), allowedValues.map(function (item) {
    return _react.default.createElement("div", {
      className: "field",
      key: item
    }, _react.default.createElement("div", {
      className: "ui radio checkbox"
    }, _react.default.createElement("input", {
      checked: item === value,
      disabled: disabled,
      id: "".concat(id, "-").concat(item),
      name: name,
      onChange: function onChange() {
        return _onChange(item);
      },
      type: "radio"
    }), _react.default.createElement("label", {
      htmlFor: "".concat(id, "-").concat(item)
    }, transform ? transform(item) : item)));
  }), !!(error && showInlineError) && _react.default.createElement("div", {
    className: "ui red basic pointing label"
  }, errorMessage));
};

var _default = (0, _connectField.default)(Radio);

exports.default = _default;