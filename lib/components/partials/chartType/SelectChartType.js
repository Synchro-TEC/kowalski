'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEasyState = require('react-easy-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectChartType = function SelectChartType(props) {
  var buttons = props.store.charts.map(function (chart) {
    return _react2.default.createElement(
      'button',
      {
        className: 'sv-button small default',
        onClick: function onClick(e) {
          return props.store.setChartType(e.target.value);
        },
        value: chart,
        key: 'chart-' + chart
      },
      chart
    );
  });

  return _react2.default.createElement(
    'div',
    { style: { borderBottom: '1px solid #ccc' }, className: 'sv-pa--10' },
    _react2.default.createElement(
      'p',
      null,
      'Selected Chart: ',
      props.store.selectedChart
    ),
    buttons
  );
};

SelectChartType.propTypes = {
  store: _propTypes2.default.object
};

exports.default = (0, _reactEasyState.view)(SelectChartType);