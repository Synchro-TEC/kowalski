'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEasyState = require('react-easy-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var state = (0, _reactEasyState.store)({
  charts: ['A', 'B', 'C'],
  selectedChart: null
});

var Kowalski = function (_Component) {
  _inherits(Kowalski, _Component);

  function Kowalski(props) {
    _classCallCheck(this, Kowalski);

    var _this = _possibleConstructorReturn(this, (Kowalski.__proto__ || Object.getPrototypeOf(Kowalski)).call(this, props));

    _this.changeSelected = function (ev) {
      state.selectedChart = ev.target.value;
    };

    return _this;
  }

  _createClass(Kowalski, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buttons = state.charts.map(function (chart) {
        return _react2.default.createElement(
          'button',
          { onClick: _this2.changeSelected, value: chart, key: 'chart-' + chart },
          chart
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          this.props.appName
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Selected Chart: ',
          state.selectedChart
        ),
        _react2.default.createElement('hr', null),
        buttons
      );
    }
  }]);

  return Kowalski;
}(_react.Component);

Kowalski.propTypes = {
  appName: _propTypes2.default.string.isRequired
};

exports.default = (0, _reactEasyState.view)(Kowalski);