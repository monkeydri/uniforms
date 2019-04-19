"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

var _radio = _interopRequireDefault(require("antd/lib/radio"));

var _react = _interopRequireDefault(require("react"));

var _select = _interopRequireDefault(require("antd/lib/select"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var renderCheckboxes = function renderCheckboxes(props) {
  return props.fieldType === Array ? _react.default.createElement(_checkbox.default.Group, (0, _extends2.default)({
    disabled: props.disabled,
    id: props.id,
    name: props.name,
    onChange: function onChange(value) {
      return props.onChange(value);
    },
    options: props.allowedValues.map(String),
    value: props.value.map(String).map(props.transform || String)
  }, (0, _filterDOMProps.default)(props))) : _react.default.createElement(_radio.default.Group, (0, _extends2.default)({
    disabled: props.disabled,
    name: props.name,
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    },
    value: props.value
  }, (0, _filterDOMProps.default)(props)), props.allowedValues.map(function (value) {
    return _react.default.createElement(_radio.default, {
      key: value,
      value: value,
      style: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }, props.transform ? props.transform(value) : value);
  }));
};

var renderSelect = function renderSelect(props) {
  return _react.default.createElement(_select.default, (0, _extends2.default)({
    allowClear: !props.required,
    disabled: props.disabled,
    id: props.id,
    mode: props.fieldType === Array ? 'multiple' : undefined,
    name: props.name,
    onChange: function onChange(value) {
      return props.onChange(value);
    },
    placeholder: props.placeholder,
    ref: props.inputRef,
    value: props.fieldType === Array ? props.value || [] : '' + (props.value || '')
  }, (0, _filterDOMProps.default)(props)), props.allowedValues.map(function (value) {
    return _react.default.createElement(_select.default.Option, {
      key: value,
      value: value
    }, props.transform ? props.transform(value) : value);
  }));
};

var Select = function Select(_ref) {
  var checkboxes = _ref.checkboxes,
      props = (0, _objectWithoutProperties2.default)(_ref, ["checkboxes"]);
  return (0, _wrapField.default)(props, checkboxes ? renderCheckboxes(props) : renderSelect(props));
};

var _default = (0, _connectField.default)(Select);

exports.default = _default;