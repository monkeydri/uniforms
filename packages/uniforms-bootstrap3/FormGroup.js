"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _warning = _interopRequireDefault(require("warning"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  (0, _warning.default)(false, 'FormGroup is deprecated and will be removed in the next release.');
  return (0, _wrapField.default)(props, children);
};

var _default = FormGroup;
exports.default = _default;