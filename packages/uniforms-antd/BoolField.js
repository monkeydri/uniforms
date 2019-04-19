"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

var _switch = _interopRequireDefault(require("antd/lib/switch"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var Bool = function Bool(_ref) {
  var checkbox = _ref.checkbox,
      props = (0, _objectWithoutProperties2.default)(_ref, ["checkbox"]);
  return (0, _wrapField.default)(props, _react.default.createElement(checkbox ? _checkbox.default : _switch.default, (0, _objectSpread2.default)({
    checked: props.value,
    disabled: props.disabled,
    id: props.id,
    name: props.name,
    onChange: function onChange() {
      return props.onChange(!props.value);
    },
    ref: props.inputRef
  }, (0, _filterDOMProps.default)(props))));
};

Bool.defaultProps = {
  checkbox: false,
  checkedChildren: _react.default.createElement(_icon.default, {
    type: "check"
  }),
  unCheckedChildren: _react.default.createElement(_icon.default, {
    type: "cross"
  })
};

var _default = (0, _connectField.default)(Bool, {
  ensureValue: false
});

exports.default = _default;