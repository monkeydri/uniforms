"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapField;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _gridClassName = _interopRequireDefault(require("./gridClassName"));

function wrapField(_ref, children) {
  var className = _ref.className,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      grid = _ref.grid,
      help = _ref.help,
      helpClassName = _ref.helpClassName,
      id = _ref.id,
      label = _ref.label,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      wrapClassName = _ref.wrapClassName,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "disabled", "error", "errorMessage", "grid", "help", "helpClassName", "id", "label", "required", "showInlineError", "wrapClassName"]);
  var hasWrap = !!(grid || wrapClassName);

  var blockError = !!(error && showInlineError) && _react.default.createElement("span", {
    className: "form-text text-danger"
  }, errorMessage);

  var blockHelp = !!help && _react.default.createElement("span", {
    className: (0, _classnames.default)('form-text', helpClassName || 'text-muted')
  }, help);

  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(className, 'form-group', {
      'is-invalid': error,
      disabled: disabled,
      required: required,
      row: grid
    })
  }, (0, _filterDOMProps.default)((0, _omit.default)(props, ['checkboxes', 'inline', 'inputClassName', 'inputRef', 'rows', 'transform']))), label && _react.default.createElement("label", {
    htmlFor: id,
    className: (0, _classnames.default)({
      'col-form-label': grid,
      'text-danger': error
    }, (0, _gridClassName.default)(grid, 'label'))
  }, label), hasWrap && _react.default.createElement("div", {
    className: (0, _classnames.default)(wrapClassName, (0, _gridClassName.default)(grid, 'input'))
  }, children, blockHelp, blockError), !hasWrap && children, !hasWrap && blockHelp, !hasWrap && blockError);
}