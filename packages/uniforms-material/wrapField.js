"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapField;

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _react = _interopRequireDefault(require("react"));

var _omit = _interopRequireDefault(require("lodash/omit"));

function wrapField(_ref) {
  var component = _ref.component,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      fullWidth = _ref.fullWidth,
      helperText = _ref.helperText,
      margin = _ref.margin,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      variant = _ref.variant;
  var formHelperText = showInlineError && error ? errorMessage : helperText;
  var props = {
    component: component,
    disabled: !!disabled,
    error: !!error,
    fullWidth: !!fullWidth,
    margin: margin,
    required: required,
    variant: variant
  };

  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  return _react.default.createElement.apply(_react.default, [_FormControl.default, props].concat(children, [!!formHelperText && _react.default.createElement(_FormHelperText.default, null, formHelperText)]));
}

wrapField._filterDOMPropsList = ['fullWidth', 'helperText', 'margin', 'variant'];

wrapField._filterDOMProps = function (props) {
  return (0, _omit.default)(props, wrapField._filterDOMPropsList);
};