"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var ListAdd = function ListAdd(_ref) {
  var disabled = _ref.disabled,
      parent = _ref.parent,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "parent", "value"]);
  var limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
  return _react.default.createElement(_button.default, (0, _extends2.default)({
    disabled: !limitNotReached || disabled,
    onClick: function onClick() {
      return limitNotReached && parent.onChange(parent.value.concat([(0, _cloneDeep.default)(value)]));
    }
  }, (0, _filterDOMProps.default)(props)));
};

ListAdd.defaultProps = {
  icon: 'plus-square-o',
  size: 'small',
  style: {
    width: '100%'
  },
  type: 'dashed'
};

var _default = (0, _connectField.default)(ListAdd, {
  includeParent: true,
  initialValue: false
});

exports.default = _default;