'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Series = function Series(props) {
  var cols = props.store.columns.map(function (col, i) {
    return _react2.default.createElement(
      'option',
      { value: col, key: 'col-' + i },
      col
    );
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'select',
      null,
      cols
    )
  );
};

Series.propTypes = {
  store: _propTypes2.default.object
};
exports.default = Series;