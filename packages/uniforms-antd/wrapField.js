"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapField;

var _form = _interopRequireDefault(require("antd/lib/form"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

function wrapField(_ref, children) {
  var colon = _ref.colon,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      id = _ref.id,
      info = _ref.info,
      label = _ref.label,
      labelCol = _ref.labelCol,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      wrapperCol = _ref.wrapperCol,
      wrapperStyle = _ref.wrapperStyle;

  var labelNode = !!label && _react.default.createElement("span", null, label, !!info && _react.default.createElement("span", null, "\xA0", _react.default.createElement(_tooltip.default, {
    title: info
  }, _react.default.createElement(_icon.default, {
    type: "question-circle-o"
  }))));

  return _react.default.createElement(_form.default.Item, {
    colon: colon,
    hasFeedback: true,
    help: showInlineError && error && errorMessage,
    htmlFor: id,
    label: labelNode,
    labelCol: labelCol,
    required: required,
    style: wrapperStyle || {
      marginBottom: '12px'
    },
    validateStatus: error ? 'error' : undefined,
    wrapperCol: wrapperCol
  }, children);
}

_filterDOMProps.default.register('colon', 'labelCol', 'wrapperCol', 'wrapperStyle');