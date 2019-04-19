"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _nothing = _interopRequireDefault(require("uniforms/nothing"));

var Error = function Error(_ref) {
  var children = _ref.children,
      className = _ref.className,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "error", "errorMessage"]);
  return !error ? _nothing.default : _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('ui', className, 'error message')
  }, (0, _filterDOMProps.default)(props)), children ? children : _react.default.createElement("div", {
    className: "header"
  }, errorMessage));
};

var _default = (0, _connectField.default)(Error, {
  initialValue: false
});

exports.default = _default;