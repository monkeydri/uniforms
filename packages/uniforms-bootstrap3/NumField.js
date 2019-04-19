"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _wrapField = _interopRequireDefault(require("./wrapField"));

var noneIfNaN = function noneIfNaN(x) {
  return isNaN(x) ? undefined : x;
};

var Num_ = function Num_(props) {
  return (0, _wrapField.default)(props, _react.default.createElement("input", {
    className: (0, _classnames.default)(props.inputClassName, 'form-control', {
      'form-control-danger': props.error
    }),
    disabled: props.disabled,
    id: props.id,
    max: props.max,
    min: props.min,
    name: props.name,
    onChange: props.onChange,
    placeholder: props.placeholder,
    ref: props.inputRef,
    step: props.step || (props.decimal ? 0.01 : 1),
    type: "number",
    value: props.value
  }));
}; // NOTE: React < 16 workaround. Make it optional?


var Num =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Num, _Component);

  function Num() {
    var _this;

    (0, _classCallCheck2.default)(this, Num);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Num).apply(this, arguments));
    _this.state = {
      value: '' + _this.props.value
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Num, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var decimal = _ref.decimal,
          value = _ref.value;
      var parse = decimal ? parseFloat : parseInt;

      if (noneIfNaN(parse(value)) !== noneIfNaN(parse(this.state.value.replace(/[.,]+$/, '')))) {
        this.setState({
          value: value === undefined || value === '' ? '' : '' + value
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(_ref2) {
      var value = _ref2.target.value;
      var change = value.replace(/[^\d.,-]/g, '');
      this.setState({
        value: change
      });
      this.props.onChange(noneIfNaN((this.props.decimal ? parseFloat : parseInt)(change)));
    }
  }, {
    key: "render",
    value: function render() {
      return Num_((0, _objectSpread2.default)({}, this.props, {
        onChange: this.onChange,
        value: this.state.value
      }));
    }
  }]);
  return Num;
}(_react.Component);

var _default = (0, _connectField.default)(Num);

exports.default = _default;