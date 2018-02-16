'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  -webkit-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n'], ['\n  -webkit-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Styledmain = _styledComponents2.default.main(_templateObject);

var Main = function Main(props) {
  return _react2.default.createElement(
    Styledmain,
    null,
    props.children
  );
};

exports.default = Main;