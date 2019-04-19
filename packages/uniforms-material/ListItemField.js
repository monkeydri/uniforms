"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _react = _interopRequireWildcard(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _joinName = _interopRequireDefault(require("uniforms/joinName"));

var _AutoField = _interopRequireDefault(require("./AutoField"));

var _ListDelField = _interopRequireDefault(require("./ListDelField"));

var ListItem = function ListItem(_ref) {
  var dense = _ref.dense,
      divider = _ref.divider,
      disableGutters = _ref.disableGutters,
      removeIcon = _ref.removeIcon,
      props = (0, _objectWithoutProperties2.default)(_ref, ["dense", "divider", "disableGutters", "removeIcon"]);
  return _react.default.createElement(_ListItem.default, {
    dense: dense,
    divider: divider,
    disableGutters: disableGutters
  }, props.children ? _react.Children.map(props.children, function (child) {
    return _react.default.cloneElement(child, {
      name: (0, _joinName.default)(props.name, child.props.name),
      label: null
    });
  }) : _react.default.createElement(_AutoField.default, props), _react.default.createElement(_ListDelField.default, {
    name: props.name,
    icon: removeIcon
  }));
};

ListItem.defaultProps = {
  dense: true
};

var _default = (0, _connectField.default)(ListItem, {
  includeInChain: false,
  includeParent: true
});

exports.default = _default;