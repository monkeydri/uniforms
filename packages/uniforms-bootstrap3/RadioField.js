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

var Radio = function Radio(props) {
  return (0, _wrapField.default)(props, props.allowedValues.map(function (item) {
    return _react.default.createElement("div", {
      key: item,
      className: (0, _classnames.default)(props.inputClassName, "radio".concat(props.inline ? '-inline' : ''))
    }, _react.default.createElement("label", {
      htmlFor: "".concat(props.id, "-").concat(item)
    }, _react.default.createElement("input", {
      checked: item === props.value,
      disabled: props.disabled,
      id: "".concat(props.id, "-").concat(item),
      name: props.name,
      onChange: function onChange() {
        return props.onChange(item);
      },
      type: "radio"
    }), props.transform ? props.transform(item) : item));
  }));
};

var _default = (0, _connectField.default)(Radio);

exports.default = _default;