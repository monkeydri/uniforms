"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _BaseForm = _interopRequireDefault(require("uniforms/BaseForm"));

var Material = function Material(parent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_parent) {
    (0, _inherits2.default)(_class, _parent);

    function _class() {
      (0, _classCallCheck2.default)(this, _class);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
    }

    return _class;
  }(parent), _class.Material = Material, _class.displayName = "Material".concat(parent.displayName), _temp;
};

var _default = Material(_BaseForm.default);

exports.default = _default;