"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _nothing = _interopRequireDefault(require("uniforms/nothing"));

var Error = function Error(_ref) {
  var children = _ref.children,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "error", "errorMessage"]);
  return !error ? _nothing.default : _react.default.createElement("div", (0, _filterDOMProps.default)(props), children ? children : _react.default.createElement("div", {
    style: {
      margin: '3px'
    }
  }, errorMessage));
};

Error.defaultProps = {
  style: {
    backgroundColor: 'rgba(255, 85, 0, 0.2)',
    border: '1px solid rgb(255, 85, 0)',
    borderRadius: '7px',
    margin: '20px 0px',
    padding: '10px'
  }
};

var _default = (0, _connectField.default)(Error, {
  initialValue: false
});

exports.default = _default;