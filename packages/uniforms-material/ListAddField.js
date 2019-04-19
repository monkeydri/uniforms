"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var ListAdd = function ListAdd(_ref) {
  var disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      icon = _ref.icon,
      margin = _ref.margin,
      parent = _ref.parent,
      value = _ref.value,
      variant = _ref.variant,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "fullWidth", "icon", "margin", "parent", "value", "variant"]);
  var limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
  return _react.default.createElement(_FormControl.default, {
    fullWidth: !!fullWidth,
    margin: margin,
    variant: variant
  }, _react.default.createElement(_IconButton.default, (0, _extends2.default)({
    disabled: !limitNotReached,
    onClick: function onClick() {
      return limitNotReached && parent.onChange(parent.value.concat([(0, _cloneDeep.default)(value)]));
    }
  }, (0, _filterDOMProps.default)(props)), icon));
};

ListAdd.propTypes = process.env.NODE_ENV !== "production" ? {
  icon: _propTypes.default.node
} : {};
ListAdd.defaultProps = {
  fullWidth: true,
  icon: '+',
  margin: 'dense'
};

var _default = (0, _connectField.default)(ListAdd, {
  includeParent: true,
  initialValue: false
});

exports.default = _default;