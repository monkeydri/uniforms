"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var Bool = function Bool(_ref) {
  var appearance = _ref.appearance,
      disabled = _ref.disabled,
      inputRef = _ref.inputRef,
      label = _ref.label,
      legend = _ref.legend,
      name = _ref.name,
      _onChange = _ref.onChange,
      transform = _ref.transform,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["appearance", "disabled", "inputRef", "label", "legend", "name", "onChange", "transform", "value"]);
  var SelectionControl = appearance === 'checkbox' ? _Checkbox.default : _Switch.default;

  var filteredProps = _wrapField.default._filterDOMProps((0, _filterDOMProps.default)(props));

  return (0, _wrapField.default)((0, _objectSpread2.default)({}, props, {
    component: 'fieldset',
    disabled: disabled
  }), legend && _react.default.createElement(_FormLabel.default, {
    component: "legend",
    htmlFor: name
  }, legend), _react.default.createElement(_FormGroup.default, null, _react.default.createElement(_FormControlLabel.default, {
    control: _react.default.createElement(SelectionControl, (0, _extends2.default)({
      checked: !!value,
      name: name,
      onChange: function onChange(event) {
        return disabled || _onChange(event.target.checked);
      },
      ref: inputRef,
      value: name
    }, filteredProps)),
    label: transform ? transform(label) : label
  })));
};

Bool.defaultProps = {
  appearance: 'checkbox',
  fullWidth: true,
  margin: 'dense'
};
Bool.propTypes = process.env.NODE_ENV !== "production" ? {
  appearance: _propTypes.default.oneOf(['toggle', 'checkbox'])
} : {};

var _default = (0, _connectField.default)(Bool);

exports.default = _default;