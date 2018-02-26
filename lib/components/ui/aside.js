'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  overflow-y: auto;\n  -webkit-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -ms-flex: 0 0 260px;\n  flex: 0 0 260px;\n  background: #f7f7f7;\n'], ['\n  overflow-y: auto;\n  -webkit-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -ms-flex: 0 0 260px;\n  flex: 0 0 260px;\n  background: #f7f7f7;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Styledaside = _styledComponents2.default.aside(_templateObject);

var Aside = function Aside(props) {
  return _react2.default.createElement(
    Styledaside,
    null,
    props.children
  );
};

exports.default = Aside;