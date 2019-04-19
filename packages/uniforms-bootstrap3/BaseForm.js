"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _BaseForm = _interopRequireDefault(require("uniforms/BaseForm"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var Bootstrap3 = function Bootstrap3(parent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_parent) {
    (0, _inherits2.default)(_class, _parent);

    function _class() {
      (0, _classCallCheck2.default)(this, _class);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
    }

    (0, _createClass2.default)(_class, [{
      key: "getChildContextState",
      value: function getChildContextState() {
        return (0, _objectSpread2.default)({}, (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "getChildContextState", this).call(this), {
          grid: this.props.grid
        });
      }
    }, {
      key: "getNativeFormProps",
      value: function getNativeFormProps() {
        var error = this.getChildContextError();

        var _get$call = (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "getNativeFormProps", this).call(this),
            className = _get$call.className,
            grid = _get$call.grid,
            props = (0, _objectWithoutProperties2.default)(_get$call, ["className", "grid"]);

        return (0, _objectSpread2.default)({}, props, {
          className: (0, _classnames.default)('form', {
            error: error,
            'form-horizontal': grid
          }, className)
        });
      }
    }]);
    return _class;
  }(parent), _class.Bootstrap3 = Bootstrap3, _class.displayName = "Bootstrap3".concat(parent.displayName), _class.propTypes = (0, _objectSpread2.default)({}, parent.propTypes, {
    grid: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.object, _propTypes.default.string])
  }), _temp;
};

var _default = Bootstrap3(_BaseForm.default);

exports.default = _default;