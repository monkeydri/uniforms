"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _joinName = _interopRequireDefault(require("uniforms/joinName"));

var _AutoField = _interopRequireDefault(require("./AutoField"));

var _ListDelField = _interopRequireDefault(require("./ListDelField"));

var ListItem = function ListItem(_ref) {
  var removeIcon = _ref.removeIcon,
      props = (0, _objectWithoutProperties2.default)(_ref, ["removeIcon"]);
  return _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-1"
  }, _react.default.createElement(_ListDelField.default, {
    name: props.name,
    removeIcon: removeIcon
  })), props.children ? _react.Children.map(props.children, function (child) {
    return _react.default.cloneElement(child, {
      className: 'col-11',
      name: (0, _joinName.default)(props.name, child.props.name),
      label: null
    });
  }) : _react.default.createElement(_AutoField.default, (0, _extends2.default)({}, props, {
    className: "col-11"
  })));
};

var _default = (0, _connectField.default)(ListItem, {
  includeInChain: false,
  includeParent: true
});

exports.default = _default;