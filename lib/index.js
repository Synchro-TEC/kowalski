'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n  font-size: 12px !important;\n  display: box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n'], ['\n  height: 100%;\n  width: 100%;\n  font-size: 12px !important;\n  display: box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEasyState = require('react-easy-state');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _aside = require('./components/ui/aside');

var _aside2 = _interopRequireDefault(_aside);

var _article = require('./components/ui/article');

var _article2 = _interopRequireDefault(_article);

var _main = require('./components/ui/main');

var _main2 = _interopRequireDefault(_main);

var _echartsForReact = require('echarts-for-react');

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _title = require('./echarts-props/title');

var _title2 = _interopRequireDefault(_title);

var _grid = require('./echarts-props/grid');

var _grid2 = _interopRequireDefault(_grid);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _SelectChartType = require('./components/partials/SelectChartType');

var _SelectChartType2 = _interopRequireDefault(_SelectChartType);

var _titleOptions = require('./components/partials/title/titleOptions');

var _titleOptions2 = _interopRequireDefault(_titleOptions);

var _gridOptions = require('./components/partials/grid/gridOptions');

var _gridOptions2 = _interopRequireDefault(_gridOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import JSONTree from 'react-json-tree';

var data1 = [];

var state = (0, _reactEasyState.store)({
  charts: ['A', 'B', 'C'],
  data: [],
  chart: {
    title: _title2.default,
    grid: _grid2.default
  },
  setValue: function setValue(key, val) {
    (0, _set3.default)(state, key, val);
  },
  setData: function setData(data) {
    state.data = data;
  },
  selectedChart: null,
  setChartType: function setChartType(type) {
    state.selectedChart = type;
  },
  getOptions: function getOptions(_) {
    return {
      title: state.chart.title,
      grid: state.chart.grid,
      legend: {
        data: data1.map(function (d) {
          return d.value;
        })
      },
      toolbox: {
        right: 20,
        feature: {
          restore: {
            show: true,
            title: 'Reiniciar'
          },
          magicType: {
            type: ['bar', 'line'],
            title: {
              bar: 'Barras',
              line: 'Linhas'
            }
          },
          // dataView: {
          //   title: 'Dados',
          // },
          saveAsImage: {
            title: 'Salvar',
            pixelRatio: 2
          }
        }
      },
      xAxis: [{
        show: true,
        type: 'category',
        name: 'Mes',
        gridIndex: 0,
        data: data1.map(function (d) {
          return d.month;
        }),
        position: 'bottom',
        splitLine: {
          show: false
        }
      }],
      yAxis: [{
        show: true,
        type: 'value',
        name: 'Total',
        splitLine: {
          show: false
        }
      }],
      series: [{
        type: 'line',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: data1
      }]
    };
  }
});

var Maincontainer = _styledComponents2.default.div(_templateObject);

var Kowalski = function (_Component) {
  _inherits(Kowalski, _Component);

  function Kowalski(props) {
    _classCallCheck(this, Kowalski);

    return _possibleConstructorReturn(this, (Kowalski.__proto__ || Object.getPrototypeOf(Kowalski)).call(this, props));
  }

  _createClass(Kowalski, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      state.setData(this.props.data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Maincontainer,
        null,
        _react2.default.createElement(
          _main2.default,
          null,
          _react2.default.createElement(
            _aside2.default,
            null,
            this.props.allowSelectChart ? _react2.default.createElement(_SelectChartType2.default, { state: state }) : '',
            _react2.default.createElement(_titleOptions2.default, { state: state }),
            _react2.default.createElement(_gridOptions2.default, { state: state })
          ),
          _react2.default.createElement(
            _article2.default,
            null,
            _react2.default.createElement(
              'h2',
              null,
              this.props.appName
            ),
            _react2.default.createElement(_echartsForReact2.default, { option: state.getOptions() }),
            _react2.default.createElement(
              'pre',
              null,
              JSON.stringify(state.chart, null, 2)
            )
          ),
          _react2.default.createElement(_aside2.default, null)
        )
      );
    }
  }]);

  return Kowalski;
}(_react.Component);

Kowalski.propTypes = {
  appName: _propTypes2.default.string.isRequired,
  allowSelectChart: _propTypes2.default.bool,
  allowSelectData: _propTypes2.default.bool
};

exports.default = (0, _reactEasyState.view)(Kowalski);