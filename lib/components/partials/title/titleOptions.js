'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEasyState = require('react-easy-state');

var _values = require('../../../echarts-props/options/values');

var _values2 = _interopRequireDefault(_values);

var _colorPicker = require('../../ui/colorPicker');

var _colorPicker2 = _interopRequireDefault(_colorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleOptions = function TitleOptions(props) {
  var positionButtons = _values2.default.title.left.map(function (val, i) {
    return _react2.default.createElement('input', {
      type: 'radio',
      name: 'titlePosition',
      key: 'tpb=' + i,
      value: val,
      checked: props.state.chart.title.left === val,
      onChange: function onChange(e) {
        return props.state.setValue('chart.title.left', e.target.value);
      }
    });
  });

  var setTextColor = function setTextColor(color) {
    props.state.setValue('chart.title.textStyle.color', color);
  };

  var setSubtextColor = function setSubtextColor(color) {
    props.state.setValue('chart.title.subtextStyle.color', color);
  };

  return _react2.default.createElement(
    'div',
    { className: 'sv-form sv-pa--10', style: { borderBottom: '1px solid #ccc' } },
    _react2.default.createElement(
      'label',
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
    ),
    _react2.default.createElement(
      'p',
      null,
      'Subtitulo:',
      ' ',
      _react2.default.createElement('input', {
        type: 'text',
        value: props.state.chart.title.subtext,
        onChange: function onChange(e) {
          return props.state.setValue('chart.title.subtext', e.target.value);
        }
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      'Color: ',
      _react2.default.createElement(_colorPicker2.default, { color: props.state.chart.title.textStyle.color, handleChange: setTextColor })
    ),
    _react2.default.createElement(
      'div',
      null,
      'Color: ',
      _react2.default.createElement(_colorPicker2.default, { color: props.state.chart.title.subtextStyle.color, handleChange: setSubtextColor })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Position'
    ),
    _react2.default.createElement(
      'p',
      null,
      positionButtons
    )
  );
};

TitleOptions.propTypes = {
  state: _propTypes2.default.object
};

exports.default = (0, _reactEasyState.view)(TitleOptions);