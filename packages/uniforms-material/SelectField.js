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

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var xor = function xor(item, array) {
  var index = array.indexOf(item);

  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

var renderSelect = function renderSelect(_ref) {
  var InputLabelProps = _ref.InputLabelProps,
      allowedValues = _ref.allowedValues,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      fieldType = _ref.fieldType,
      fullWidth = _ref.fullWidth,
      helperText = _ref.helperText,
      id = _ref.id,
      inputProps = _ref.inputProps,
      label = _ref.label,
      labelProps = _ref.labelProps,
      margin = _ref.margin,
      name = _ref.name,
      native = _ref.native,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      transform = _ref.transform,
      value = _ref.value,
      variant = _ref.variant,
      props = (0, _objectWithoutProperties2.default)(_ref, ["InputLabelProps", "allowedValues", "disabled", "error", "errorMessage", "fieldType", "fullWidth", "helperText", "id", "inputProps", "label", "labelProps", "margin", "name", "native", "onChange", "placeholder", "required", "showInlineError", "transform", "value", "variant"]);
  var Item = native ? 'option' : _MenuItem.default;
  var hasPlaceholder = !!placeholder;
  return _react.default.createElement(_TextField.default, {
    disabled: !!disabled,
    error: !!error,
    fullWidth: fullWidth,
    helperText: error && showInlineError && errorMessage || helperText,
    InputLabelProps: (0, _objectSpread2.default)({
      shrink: label && (hasPlaceholder || value !== undefined)
    }, labelProps, InputLabelProps),
    label: label,
    margin: margin,
    onChange: function onChange(event) {
      return disabled || _onChange(event.target.value);
    },
    required: required,
    select: true,
    SelectProps: (0, _objectSpread2.default)({
      displayEmpty: hasPlaceholder,
      inputProps: (0, _objectSpread2.default)({
        name: name,
        id: id
      }, inputProps),
      multiple: fieldType === Array || undefined,
      native: native
    }, (0, _filterDOMProps.default)(props)),
    value: native && !value ? '' : value,
    variant: variant
  }, hasPlaceholder && _react.default.createElement(Item, {
    value: "",
    disabled: !!required
  }, placeholder), allowedValues.map(function (value) {
    return _react.default.createElement(Item, {
      key: value,
      value: value
    }, transform ? transform(value) : value);
  }));
};

var renderCheckboxes = function renderCheckboxes(_ref2) {
  var allowedValues = _ref2.allowedValues,
      appearance = _ref2.appearance,
      disabled = _ref2.disabled,
      error = _ref2.error,
      errorMessage = _ref2.errorMessage,
      fieldType = _ref2.fieldType,
      id = _ref2.id,
      inputRef = _ref2.inputRef,
      label = _ref2.label,
      legend = _ref2.legend,
      name = _ref2.name,
      _onChange2 = _ref2.onChange,
      showInlineError = _ref2.showInlineError,
      transform = _ref2.transform,
      value = _ref2.value,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["allowedValues", "appearance", "disabled", "error", "errorMessage", "fieldType", "id", "inputRef", "label", "legend", "name", "onChange", "showInlineError", "transform", "value"]);
  var children;

  var filteredProps = _wrapField.default._filterDOMProps((0, _filterDOMProps.default)(props));

  if (fieldType !== Array) {
    children = _react.default.createElement(_RadioGroup.default, {
      id: id,
      name: name,
      onChange: function onChange(event) {
        return disabled || _onChange2(event.target.value);
      },
      ref: inputRef,
      value: value
    }, allowedValues.map(function (item) {
      return _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Radio.default, (0, _extends2.default)({
          id: "".concat(id, "-").concat(item)
        }, filteredProps)),
        key: item,
        label: transform ? transform(item) : item,
        value: item
      });
    }), showInlineError && error && _react.default.createElement(_FormHelperText.default, null, errorMessage));
  } else {
    var SelectionControl = appearance === 'checkbox' ? _Checkbox.default : _Switch.default;
    children = _react.default.createElement(_FormGroup.default, {
      id: id
    }, allowedValues.map(function (item) {
      return _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(SelectionControl, (0, _extends2.default)({
          checked: value.includes(item),
          id: "".concat(id, "-").concat(item),
          name: name,
          onChange: function onChange() {
            return disabled || _onChange2(xor(item, value));
          },
          ref: inputRef,
          value: props.name
        }, filteredProps)),
        key: item,
        label: transform ? transform(item) : item
      });
    }));
  }

  return (0, _wrapField.default)((0, _objectSpread2.default)({}, props, {
    component: 'fieldset',
    disabled: disabled,
    error: error,
    errorMessage: errorMessage,
    showInlineError: showInlineError
  }), (legend || label) && _react.default.createElement(_FormLabel.default, {
    component: "legend"
  }, legend || label), children);
};

var Select = function Select(_ref3) {
  var checkboxes = _ref3.checkboxes,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["checkboxes"]);
  return checkboxes ? renderCheckboxes(props) : renderSelect(props);
};

Select.defaultProps = {
  appearance: 'checkbox',
  fullWidth: true,
  margin: 'dense'
};

var _default = (0, _connectField.default)(Select);

exports.default = _default;