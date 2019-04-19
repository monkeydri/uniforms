"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _AutoField = _interopRequireDefault(require("./AutoField"));

var AutoFields = function AutoFields(_ref, _ref2) {
  var autoField = _ref.autoField,
      element = _ref.element,
      fields = _ref.fields,
      omitFields = _ref.omitFields,
      props = (0, _objectWithoutProperties2.default)(_ref, ["autoField", "element", "fields", "omitFields"]);
  var schema = _ref2.uniforms.schema;
  return (0, _react.createElement)(element, props, (fields || schema.getSubfields()).filter(function (field) {
    return omitFields.indexOf(field) === -1;
  }).map(function (field) {
    return (0, _react.createElement)(autoField, {
      key: field,
      name: field
    });
  }));
};

AutoFields.contextTypes = _AutoField.default.contextTypes;
AutoFields.propTypes = {
  autoField: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  element: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  fields: _propTypes.default.arrayOf(_propTypes.default.string),
  omitFields: _propTypes.default.arrayOf(_propTypes.default.string)
};
AutoFields.defaultProps = {
  autoField: _AutoField.default,
  element: 'div',
  omitFields: []
};
var _default = AutoFields;
exports.default = _default;