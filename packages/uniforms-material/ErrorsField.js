"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _BaseField = _interopRequireDefault(require("uniforms/BaseField"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _react = _interopRequireDefault(require("react"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _nothing = _interopRequireDefault(require("uniforms/nothing"));

var ErrorsField = function ErrorsField(_ref, _ref2) {
  var children = _ref.children,
      fullWidth = _ref.fullWidth,
      margin = _ref.margin,
      variant = _ref.variant,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "fullWidth", "margin", "variant"]);
  var _ref2$uniforms = _ref2.uniforms,
      error = _ref2$uniforms.error,
      schema = _ref2$uniforms.schema;
  return !error && !children ? _nothing.default : _react.default.createElement(_FormControl.default, {
    error: !!error,
    fullWidth: !!fullWidth,
    margin: margin,
    variant: variant
  }, !!children && _react.default.createElement(_FormHelperText.default, (0, _filterDOMProps.default)(props), children), schema.getErrorMessages(error).map(function (message, index) {
    return _react.default.createElement(_FormHelperText.default, (0, _extends2.default)({
      key: index
    }, (0, _filterDOMProps.default)(props)), message);
  }));
};

ErrorsField.contextTypes = _BaseField.default.contextTypes;
ErrorsField.defaultProps = {
  fullWidth: true,
  margin: 'dense'
};
var _default = ErrorsField;
exports.default = _default;