"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

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
  var disabled = _ref.disabled,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "value"]);
  return _react.default.createElement("div", (0, _filterDOMProps.default)(props), label && _react.default.createElement("label", {
    htmlFor: id
  }, label), _react.default.createElement("input", {
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
  }));
};

var _default = (0, _connectField.default)(Date);

exports.default = _default;