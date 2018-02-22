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

var TitleOptions = function TitleOptions(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Titulo:',
      ' ',
      _react2.default.createElement('input', {
        type: 'text',
        value: props.state.chart.title.text,
        onChange: function onChange(e) {
          return props.state.setValue('chart.title.text', e.target.value);
        }
      })
    )
  );
};

TitleOptions.propTypes = {
  state: _propTypes2.default.object
};

exports.default = (0, _reactEasyState.view)(TitleOptions);