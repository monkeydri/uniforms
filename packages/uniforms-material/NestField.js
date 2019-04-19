"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _react = _interopRequireDefault(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _injectName = _interopRequireDefault(require("uniforms/injectName"));

var _joinName = _interopRequireDefault(require("uniforms/joinName"));

var _AutoField = _interopRequireDefault(require("./AutoField"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var Nest = function Nest(_ref) {
  var children = _ref.children,
      fields = _ref.fields,
      itemProps = _ref.itemProps,
      label = _ref.label,
      name = _ref.name,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "fields", "itemProps", "label", "name"]);
  return (0, _wrapField.default)((0, _objectSpread2.default)({}, props, {
    component: undefined
  }), label && _react.default.createElement(_FormLabel.default, {
    component: "legend"
  }, label), children ? (0, _injectName.default)(name, children) : fields.map(function (key) {
    return _react.default.createElement(_AutoField.default, (0, _extends2.default)({
      key: key,
      name: (0, _joinName.default)(name, key)
    }, itemProps));
  }));
};

Nest.defaultProps = {
  fullWidth: true,
  margin: 'dense'
};

var _default = (0, _connectField.default)(Nest, {
  ensureValue: false,
  includeInChain: false
});

exports.default = _default;