"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _react = _interopRequireWildcard(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _joinName = _interopRequireDefault(require("uniforms/joinName"));

var _ListAddField = _interopRequireDefault(require("./ListAddField"));

var _ListItemField = _interopRequireDefault(require("./ListItemField"));

var List = function List(_ref) {
  var addIcon = _ref.addIcon,
      children = _ref.children,
      dense = _ref.dense,
      initialCount = _ref.initialCount,
      itemProps = _ref.itemProps,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["addIcon", "children", "dense", "initialCount", "itemProps", "label", "name", "value"]);
  return [_react.default.createElement(_List.default, (0, _extends2.default)({
    key: "list",
    dense: dense,
    subheader: label ? _react.default.createElement(_ListSubheader.default, {
      disableSticky: true
    }, label) : undefined
  }, (0, _filterDOMProps.default)(props)), children ? value.map(function (item, index) {
    return _react.Children.map(children, function (child) {
      return _react.default.cloneElement(child, {
        key: index,
        label: null,
        name: (0, _joinName.default)(name, child.props.name && child.props.name.replace('$', index))
      });
    });
  }) : value.map(function (item, index) {
    return _react.default.createElement(_ListItemField.default, (0, _extends2.default)({
      key: index,
      label: null,
      name: (0, _joinName.default)(name, index)
    }, itemProps));
  })), _react.default.createElement(_ListAddField.default, {
    key: "listAddField",
    name: "".concat(name, ".$"),
    icon: addIcon,
    initialCount: initialCount
  })];
};

List.defaultProps = {
  dense: true
};

var _default = (0, _connectField.default)(List, {
  ensureValue: false,
  includeInChain: false
});

exports.default = _default;