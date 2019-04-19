"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _nothing = _interopRequireDefault(require("uniforms/nothing"));

var Error = function Error(_ref) {
  var children = _ref.children,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      fullWidth = _ref.fullWidth,
      margin = _ref.margin,
      variant = _ref.variant,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "error", "errorMessage", "fullWidth", "margin", "variant"]);
  return !error ? _nothing.default : _react.default.createElement(_FormControl.default, {
    error: !!error,
    fullWidth: !!fullWidth,
    margin: margin,
    variant: variant
  }, _react.default.createElement(_FormHelperText.default, (0, _filterDOMProps.default)(props), children || errorMessage));
};

Error.defaultProps = {
  fullWidth: true,
  margin: 'dense'
};

var _default = (0, _connectField.default)(Error, {
  initialValue: false
});

exports.default = _default;