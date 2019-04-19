"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var xor = function xor(item, array) {
  var index = array.indexOf(item);

  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

var renderCheckboxes = function renderCheckboxes(props) {
  return props.allowedValues.map(function (item) {
    return _react.default.createElement("div", {
      key: item,
      className: (0, _classnames.default)(props.inputClassName, "checkbox".concat(props.inline ? '-inline' : ''))
    }, _react.default.createElement("label", {
      htmlFor: "".concat(props.id, "-").concat(item)
    }, _react.default.createElement("input", {
      checked: props.fieldType === Array ? props.value.includes(item) : props.value === item,
      disabled: props.disabled,
      id: "".concat(props.id, "-").concat(item),
      name: props.name,
      onChange: function onChange() {
        return props.onChange(props.fieldType === Array ? xor(item, props.value) : item);
      },
      type: "checkbox"
    }), props.transform ? props.transform(item) : item));
  });
};

var renderSelect = function renderSelect(props) {
  return _react.default.createElement("select", {
    className: (0, _classnames.default)(props.inputClassName, 'form-control', {
      'form-control-danger': props.error
    }),
    disabled: props.disabled,
    id: props.id,
    name: props.name,
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    },
    ref: props.inputRef,
    value: props.value
  }, (!!props.placeholder || !props.required) && _react.default.createElement("option", {
    value: "",
    disabled: props.required,
    hidden: props.required
  }, props.placeholder ? props.placeholder : props.label), props.allowedValues.map(function (value) {
    return _react.default.createElement("option", {
      key: value,
      value: value
    }, props.transform ? props.transform(value) : value);
  }));
};

var Select = function Select(props) {
  return (0, _wrapField.default)(props, props.checkboxes || props.fieldType === Array ? renderCheckboxes(props) : renderSelect(props));
};

var _default = (0, _connectField.default)(Select);

exports.default = _default;