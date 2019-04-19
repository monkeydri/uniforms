"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _joinName = _interopRequireDefault(require("uniforms/joinName"));

var _AutoField = _interopRequireDefault(require("./AutoField"));

var _ListDelField = _interopRequireDefault(require("./ListDelField"));

var ListItem = function ListItem(props) {
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    style: {
      float: 'right',
      marginBottom: '10px',
      marginLeft: '10px',
      marginRight: '6px',
      width: '20px'
    }
  }, _react.default.createElement(_ListDelField.default, {
    className: "top aligned",
    name: props.name
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '4px',
      overflow: 'hidden'
    }
  }, _react.default.createElement("div", {
    style: {
      borderBottom: '1px solid #DDD',
      height: '20px',
      marginTop: '-8px'
    }
  })), _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, props.children ? _react.Children.map(props.children, function (child) {
    return _react.default.cloneElement(child, {
      name: (0, _joinName.default)(props.name, child.props.name),
      label: null
    });
  }) : _react.default.createElement(_AutoField.default, props)));
};

var _default = (0, _connectField.default)(ListItem, {
  includeInChain: false,
  includeParent: true
});

exports.default = _default;