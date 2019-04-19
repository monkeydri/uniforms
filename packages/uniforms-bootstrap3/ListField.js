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

var _classnames = _interopRequireDefault(require("classnames"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _joinName = _interopRequireDefault(require("uniforms/joinName"));

var _ListAddField = _interopRequireDefault(require("./ListAddField"));

var _ListItemField = _interopRequireDefault(require("./ListItemField"));

var List = function List(_ref) {
  var addIcon = _ref.addIcon,
      children = _ref.children,
      className = _ref.className,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      initialCount = _ref.initialCount,
      itemProps = _ref.itemProps,
      label = _ref.label,
      name = _ref.name,
      removeIcon = _ref.removeIcon,
      showInlineError = _ref.showInlineError,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["addIcon", "children", "className", "error", "errorMessage", "initialCount", "itemProps", "label", "name", "removeIcon", "showInlineError", "value"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('panel panel-default', {
      'panel-danger': error
    }, className)
  }, (0, _filterDOMProps.default)(props)), _react.default.createElement("div", {
    className: "panel-body"
  }, label && _react.default.createElement("div", {
    className: (0, _classnames.default)('panel-heading', {
      'has-error': error
    })
  }, _react.default.createElement("label", {
    className: "control-label"
  }, label, "\xA0"), _react.default.createElement(_ListAddField.default, {
    name: "".concat(name, ".$"),
    initialCount: initialCount,
    addIcon: addIcon
  }), !!(error && showInlineError) && _react.default.createElement("span", {
    className: "help-block"
  }, errorMessage)), children ? value.map(function (item, index) {
    return _react.Children.map(children, function (child) {
      return _react.default.cloneElement(child, {
        key: index,
        label: null,
        name: (0, _joinName.default)(name, child.props.name && child.props.name.replace('$', index)),
        removeIcon: removeIcon
      });
    });
  }) : value.map(function (item, index) {
    return _react.default.createElement(_ListItemField.default, (0, _extends2.default)({
      key: index,
      label: null,
      name: (0, _joinName.default)(name, index),
      removeIcon: removeIcon
    }, itemProps));
  })));
};

var _default = (0, _connectField.default)(List, {
  ensureValue: false,
  includeInChain: false
});

exports.default = _default;