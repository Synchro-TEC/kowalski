'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  overflow-y: auto;\n  -webkit-box-flex: 2;\n  -o-box-flex: 2;\n  box-flex: 2;\n  -ms-flex: 2;\n  flex: 2;\n  background: #f0eeee;\n'], ['\n  overflow-y: auto;\n  -webkit-box-flex: 2;\n  -o-box-flex: 2;\n  box-flex: 2;\n  -ms-flex: 2;\n  flex: 2;\n  background: #f0eeee;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Styledarticle = _styledComponents2.default.article(_templateObject);

var Article = function Article(props) {
  return _react2.default.createElement(
    Styledarticle,
    null,
    props.children
  );
};

exports.default = Article;