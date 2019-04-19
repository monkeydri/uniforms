"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var ListAdd = function ListAdd(_ref) {
  var addIcon = _ref.addIcon,
      className = _ref.className,
      disabled = _ref.disabled,
      parent = _ref.parent,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["addIcon", "className", "disabled", "parent", "value"]);
  var limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('badge badge-pill float-right', className),
    onClick: function onClick() {
      return limitNotReached && parent.onChange(parent.value.concat([(0, _cloneDeep.default)(value)]));
    }
  }, (0, _filterDOMProps.default)(props)), addIcon);
};

ListAdd.defaultProps = {
  addIcon: _react.default.createElement("i", {
    className: "octicon octicon-plus"
  })
};

var _default = (0, _connectField.default)(ListAdd, {
  includeParent: true,
  initialValue: false
});

exports.default = _default;