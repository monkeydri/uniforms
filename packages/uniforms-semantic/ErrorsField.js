"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _BaseField = _interopRequireDefault(require("uniforms/BaseField"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _nothing = _interopRequireDefault(require("uniforms/nothing"));

var ErrorsField = function ErrorsField(_ref, _ref2) {
  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "children"]);
  var _ref2$uniforms = _ref2.uniforms,
      error = _ref2$uniforms.error,
      schema = _ref2$uniforms.schema;
  return !error && !children ? _nothing.default : _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('ui', className, 'error message')
  }, (0, _filterDOMProps.default)(props)), children, _react.default.createElement("ul", {
    className: "list"
  }, schema.getErrorMessages(error).map(function (message, index) {
    return _react.default.createElement("li", {
      key: index
    }, message);
  })));
};

ErrorsField.contextTypes = _BaseField.default.contextTypes;
var _default = ErrorsField;
exports.default = _default;