"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _joinName = _interopRequireDefault(require("uniforms/joinName"));

var _AutoField = _interopRequireDefault(require("./AutoField"));

var _ListDelField = _interopRequireDefault(require("./ListDelField"));

var ListItem = function ListItem(props) {
  return _react.default.createElement("div", {
    className: "item"
  }, _react.default.createElement(_ListDelField.default, {
    className: "top aligned",
    name: props.name
  }), _react.default.createElement("div", {
    className: "middle aligned content",
    style: {
      width: '100%'
    }
  }, props.children ? _react.Children.map(props.children, function (child) {
    return _react.default.cloneElement(child, {
      name: (0, _joinName.default)(props.name, child.props.name),
      label: null,
      style: (0, _objectSpread2.default)({
        margin: 0
      }, child.props.style)
    });
  }) : _react.default.createElement(_AutoField.default, (0, _extends2.default)({}, props, {
    style: {
      margin: 0
    }
  }))));
};

var _default = (0, _connectField.default)(ListItem, {
  includeInChain: false,
  includeParent: true
});

exports.default = _default;