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
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      initialCount = _ref.initialCount,
      itemProps = _ref.itemProps,
      label = _ref.label,
      name = _ref.name,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "disabled", "error", "errorMessage", "initialCount", "itemProps", "label", "name", "required", "showInlineError", "value"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('ui', className, {
      disabled: disabled
    }, 'grouped fitted fields list')
  }, (0, _filterDOMProps.default)(props)), label && _react.default.createElement("div", {
    className: (0, _classnames.default)({
      error: error,
      required: required
    }, 'field item')
  }, _react.default.createElement("label", {
    className: "left floated"
  }, label), _react.default.createElement(_ListAddField.default, {
    name: "".concat(name, ".$"),
    initialCount: initialCount,
    className: "right floated"
  })), label && _react.default.createElement("div", {
    className: "ui fitted hidden clearing horizontal divider"
  }), !!(error && showInlineError) && _react.default.createElement("div", {
    className: "ui red basic label"
  }, errorMessage), children ? value.map(function (item, index) {
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
  }));
};

var _default = (0, _connectField.default)(List, {
  ensureValue: false,
  includeInChain: false
});

exports.default = _default;