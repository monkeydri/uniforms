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

var xor = function xor(item, array) {
  var index = array.indexOf(item);

  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

var renderCheckboxes = function renderCheckboxes(_ref) {
  var allowedValues = _ref.allowedValues,
      disabled = _ref.disabled,
      fieldType = _ref.fieldType,
      id = _ref.id,
      name = _ref.name,
      _onChange = _ref.onChange,
      transform = _ref.transform,
      value = _ref.value;
  return allowedValues.map(function (item) {
    return _react.default.createElement("div", {
      className: "field",
      key: item
    }, _react.default.createElement("div", {
      className: "ui checkbox"
    }, _react.default.createElement("input", {
      checked: fieldType === Array ? value.includes(item) : value === item,
      disabled: disabled,
      id: "".concat(id, "-").concat(item),
      name: name,
      onChange: function onChange() {
        return _onChange(fieldType === Array ? xor(item, value) : item);
      },
      type: "checkbox"
    }), _react.default.createElement("label", {
      htmlFor: "".concat(id, "-").concat(item)
    }, transform ? transform(item) : item)));
  });
};

var renderSelect = function renderSelect(_ref2) {
  var allowedValues = _ref2.allowedValues,
      disabled = _ref2.disabled,
      id = _ref2.id,
      inputRef = _ref2.inputRef,
      label = _ref2.label,
      name = _ref2.name,
      _onChange2 = _ref2.onChange,
      placeholder = _ref2.placeholder,
      required = _ref2.required,
      transform = _ref2.transform,
      value = _ref2.value;
  return _react.default.createElement("select", {
    className: "ui selection dropdown",
    disabled: disabled,
    id: id,
    name: name,
    onChange: function onChange(event) {
      return _onChange2(event.target.value);
    },
    ref: inputRef,
    value: value
  }, (!!placeholder || !required) && _react.default.createElement("option", {
    value: "",
    disabled: required,
    hidden: required
  }, placeholder ? placeholder : label), allowedValues.map(function (value) {
    return _react.default.createElement("option", {
      key: value,
      value: value
    }, transform ? transform(value) : value);
  }));
};

var Select = function Select(_ref3) {
  var allowedValues = _ref3.allowedValues,
      checkboxes = _ref3.checkboxes,
      className = _ref3.className,
      disabled = _ref3.disabled,
      error = _ref3.error,
      errorMessage = _ref3.errorMessage,
      fieldType = _ref3.fieldType,
      id = _ref3.id,
      inputRef = _ref3.inputRef,
      label = _ref3.label,
      name = _ref3.name,
      onChange = _ref3.onChange,
      placeholder = _ref3.placeholder,
      required = _ref3.required,
      showInlineError = _ref3.showInlineError,
      transform = _ref3.transform,
      value = _ref3.value,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["allowedValues", "checkboxes", "className", "disabled", "error", "errorMessage", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "required", "showInlineError", "transform", "value"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)({
      disabled: disabled,
      error: error,
      required: required
    }, className, 'field')
  }, (0, _filterDOMProps.default)(props)), label && _react.default.createElement("label", {
    htmlFor: id
  }, label), checkboxes || fieldType === Array ? renderCheckboxes({
    allowedValues: allowedValues,
    disabled: disabled,
    id: id,
    name: name,
    onChange: onChange,
    transform: transform,
    value: value,
    fieldType: fieldType
  }) : renderSelect({
    allowedValues: allowedValues,
    disabled: disabled,
    id: id,
    name: name,
    onChange: onChange,
    transform: transform,
    value: value,
    inputRef: inputRef,
    label: label,
    placeholder: placeholder,
    required: required
  }), !!(error && showInlineError) && _react.default.createElement("div", {
    className: "ui red basic pointing label"
  }, errorMessage));
};

var _default = (0, _connectField.default)(Select);

exports.default = _default;