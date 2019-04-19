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

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _connectField = _interopRequireDefault(require("uniforms/connectField"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

var Text_ = function Text_(_ref) {
  var disabled = _ref.disabled,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      type = _ref.type,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "type", "value"]);
  return _react.default.createElement("div", (0, _filterDOMProps.default)(props), label && _react.default.createElement("label", {
    htmlFor: id
  }, label), _react.default.createElement("input", {
    disabled: disabled,
    id: id,
    name: name,
    onChange: onChange,
    placeholder: placeholder,
    ref: inputRef,
    type: type,
    value: value
  }));
};

Text_.defaultProps = {
  type: 'text'
}; // NOTE: React < 16 workaround. Make it optional?

var Text =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Text, _Component);

  function Text() {
    var _this;

    (0, _classCallCheck2.default)(this, Text);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Text).apply(this, arguments));
    _this.state = {
      value: '' + _this.props.value
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Text, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref2) {
      var value = _ref2.value;
      this.setState({
        value: value === undefined || value === '' ? '' : '' + value
      });
    }
  }, {
    key: "onChange",
    value: function onChange(_ref3) {
      var value = _ref3.target.value;
      this.setState({
        value: value
      });
      this.props.onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      return Text_((0, _objectSpread2.default)({}, this.props, {
        onChange: this.onChange,
        value: this.state.value
      }));
    }
  }]);
  return Text;
}(_react.Component);

var _default = (0, _connectField.default)(Text);

exports.default = _default;