"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var noneIfNaN = function noneIfNaN(x) {
  return isNaN(x) ? undefined : x;
};

var Num_ = function Num_(_ref) {
  var decimal = _ref.decimal,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      helperText = _ref.helperText,
      inputProps = _ref.inputProps,
      inputRef = _ref.inputRef,
      label = _ref.label,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      showInlineError = _ref.showInlineError,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["decimal", "disabled", "error", "errorMessage", "helperText", "inputProps", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "showInlineError", "value"]);
  return _react.default.createElement(_TextField.default, (0, _extends2.default)({
    disabled: !!disabled,
    error: !!error,
    helperText: error && showInlineError && errorMessage || helperText,
    inputProps: (0, _objectSpread2.default)({
      min: min,
      max: max,
      step: decimal ? 0.01 : 1
    }, inputProps),
    label: label,
    name: name,
    onChange: onChange,
    placeholder: placeholder,
    ref: inputRef,
    type: "number",
    value: value
  }, (0, _filterDOMProps.default)(props)));
};

Num_.defaultProps = {
  fullWidth: true,
  margin: 'dense'
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
    value: function componentWillReceiveProps(_ref2) {
      var decimal = _ref2.decimal,
          value = _ref2.value;
      var parse = decimal ? parseFloat : parseInt;

      if (noneIfNaN(parse(value)) !== noneIfNaN(parse(this.state.value.replace(/[.,]+$/, '')))) {
        this.setState({
          value: value === undefined || value === '' ? '' : '' + value
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(_ref3) {
      var value = _ref3.target.value;
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