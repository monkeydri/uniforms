"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireWildcard(require("react"));

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _joinName = _interopRequireDefault(require("uniforms/joinName"));

var _ListAddField = _interopRequireDefault(require("./ListAddField"));

var _ListItemField = _interopRequireDefault(require("./ListItemField"));

var List = function List(_ref) {
  var children = _ref.children,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      info = _ref.info,
      initialCount = _ref.initialCount,
      itemProps = _ref.itemProps,
      label = _ref.label,
      labelCol = _ref.labelCol,
      name = _ref.name,
      showInlineError = _ref.showInlineError,
      value = _ref.value,
      wrapperCol = _ref.wrapperCol,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "error", "errorMessage", "info", "initialCount", "itemProps", "label", "labelCol", "name", "showInlineError", "value", "wrapperCol"]);
  return _react.default.createElement("div", (0, _filterDOMProps.default)(props), !!label && _react.default.createElement("div", null, label, !!info && _react.default.createElement("span", null, "\xA0", _react.default.createElement(_tooltip.default, {
    title: info
  }, _react.default.createElement(_icon.default, {
    type: "question-circle-o"
  })))), !!(error && showInlineError) && _react.default.createElement("div", null, errorMessage), children ? value.map(function (item, index) {
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
      labelCol: labelCol,
      name: (0, _joinName.default)(name, index),
      wrapperCol: wrapperCol
    }, itemProps));
  }), _react.default.createElement(_ListAddField.default, {
    name: "".concat(name, ".$"),
    initialCount: initialCount
  }));
};

List.defaultProps = {
  style: {
    border: '1px solid #DDD',
    borderRadius: '7px',
    marginBottom: '5px',
    marginTop: '5px',
    padding: '10px'
  }
};

var _default = (0, _connectField.default)(List, {
  ensureValue: false,
  includeInChain: false
});

exports.default = _default;