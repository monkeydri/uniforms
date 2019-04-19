"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var Radio = function Radio(_ref) {
  var allowedValues = _ref.allowedValues,
      checkboxes = _ref.checkboxes,
      disabled = _ref.disabled,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      transform = _ref.transform,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["allowedValues", "checkboxes", "disabled", "id", "inputRef", "label", "name", "onChange", "transform", "value"]);

  var filteredProps = _wrapField.default._filterDOMProps((0, _filterDOMProps.default)(props));

  return (0, _wrapField.default)((0, _objectSpread2.default)({}, props, {
    disabled: disabled,
    component: 'fieldset'
  }), label && _react.default.createElement(_FormLabel.default, {
    component: "legend",
    htmlFor: name
  }, label), _react.default.createElement(_RadioGroup.default, {
    id: id,
    name: name,
    onChange: function onChange(event) {
      return disabled || _onChange(event.target.value);
    },
    ref: inputRef,
    value: value
  }, allowedValues.map(function (item) {
    return _react.default.createElement(_FormControlLabel.default, {
      control: _react.default.createElement(_Radio.default, filteredProps),
      key: item,
      label: transform ? transform(item) : item,
      value: "".concat(item)
    });
  })));
};

Radio.defaultProps = {
  fullWidth: true,
  margin: 'dense'
};

var _default = (0, _connectField.default)(Radio);

exports.default = _default;