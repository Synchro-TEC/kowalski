'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactColor = require('react-color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_React$Component) {
  _inherits(ColorPicker, _React$Component);

  function ColorPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      displayColorPicker: false
    }, _this.handleClick = function () {
      _this.setState({ displayColorPicker: !_this.state.displayColorPicker });
    }, _this.handleClose = function () {
      _this.setState({ displayColorPicker: false });
    }, _this.handleChange = function (color) {
      _this.props.handleChange('rgba(' + color.rgb.r + ', ' + color.rgb.g + ', ' + color.rgb.b + ', ' + color.rgb.a + ')', color);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorPicker, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !this.props.color !== nextProps.color;
    }
  }, {
    key: '_extractRGBA',
    value: function _extractRGBA(stringColor) {
      var color = stringColor.replace('rgba(', '').replace(')', '').split(',').map(function (s) {
        return s.trim();
      });

      return { r: color[0], g: color[1], b: color[2], a: color[3] };
    }
  }, {
    key: 'render',
    value: function render() {
      var color = this._extractRGBA(this.props.color);
      var styles = {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')'
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: styles.swatch, onClick: this.handleClick },
          _react2.default.createElement('div', { style: styles.color })
        ),
        this.state.displayColorPicker ? _react2.default.createElement(
          'div',
          { style: styles.popover },
          _react2.default.createElement('div', { style: styles.cover, onClick: this.handleClose }),
          _react2.default.createElement(_reactColor.SketchPicker, { color: this.props.color, onChange: this.handleChange })
        ) : null
      );
    }
  }]);

  return ColorPicker;
}(_react2.default.Component);

ColorPicker.defaultProps = {
  color: 'rgba(250,250,250,1)'
};

ColorPicker.propTypes = {
  color: _propTypes2.default.string,
  handleChange: _propTypes2.default.func.isRequired
};

exports.default = ColorPicker;