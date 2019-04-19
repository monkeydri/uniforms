"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

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

var Date = function Date(props) {
  return (0, _wrapField.default)(props, _react.default.createElement("input", {
    className: (0, _classnames.default)(props.inputClassName, 'form-control', {
      'form-control-danger': props.error
    }),
    disabled: props.disabled,
    id: props.id,
    max: dateFormat(props.max),
    min: dateFormat(props.min),
    name: props.name,
    onChange: function onChange(event) {
      return dateParse(event.target.valueAsNumber, props.onChange);
    },
    placeholder: props.placeholder,
    ref: props.inputRef,
    type: "datetime-local",
    value: dateFormat(props.value)
  }));
};

var _default = (0, _connectField.default)(Date);

exports.default = _default;