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

// import Values from '../../../echarts-props/options/values';

var GridOptions = function GridOptions(props) {
  return _react2.default.createElement(
    'div',
    { className: 'sv-form sv-pa--10', style: { borderBottom: '1px solid #ccc' } },
    _react2.default.createElement(
      'p',
      null,
      'Top:',
      ' ',
      _react2.default.createElement('input', {
        type: 'text',
        value: props.state.chart.grid.top,
        onChange: function onChange(e) {
          return props.state.setValue('chart.grid.top', e.target.value);
        }
      })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Bottom:',
      ' ',
      _react2.default.createElement('input', {
        type: 'text',
        value: props.state.chart.grid.bottom,
        onChange: function onChange(e) {
          return props.state.setValue('chart.grid.bottom', e.target.value);
        }
      })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Left:',
      ' ',
      _react2.default.createElement('input', {
        type: 'text',
        value: props.state.chart.grid.left,
        onChange: function onChange(e) {
          return props.state.setValue('chart.grid.left', e.target.value);
        }
      })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Right:',
      ' ',
      _react2.default.createElement('input', {
        type: 'text',
        value: props.state.chart.grid.right,
        onChange: function onChange(e) {
          return props.state.setValue('chart.grid.right', e.target.value);
        }
      })
    )
  );
};

GridOptions.propTypes = {
  state: _propTypes2.default.object
};

exports.default = (0, _reactEasyState.view)(GridOptions);