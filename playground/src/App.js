import React, { Component } from 'react';
import Kowalski from 'kowalski';
// import axios from 'axios';
import SkyLight from 'react-skylight';
import './App.css';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

// const schema = [
//   { columnName: 'id', columnLabel: 'Id', columnType: 'numeric' },
//   { columnName: 'responsavel', columnLabel: 'Responsável', columnType: 'varchar' },
//   { columnName: 'supervisor', columnLabel: 'Supervisor', columnType: 'varchar' },
//   { columnName: 'estado', columnLabel: 'UF', columnType: 'varchar' },
//   { columnName: 'status', columnLabel: 'Status', columnType: 'varchar' },
//   { columnName: 'estabelecimento', columnLabel: 'Estabelecimento', columnType: 'varchar' },
//   { columnName: 'obrigacao', columnLabel: 'Ogrigação', columnType: 'varchar' },
//   { columnName: 'valorApurado', columnLabel: 'Valor Apurado', columnType: 'numeric' },
//   { columnName: 'valorPago', columnLabel: 'Valor Pago', columnType: 'numeric' },
//   { columnName: 'dataPagamento', columnLabel: 'Dt. Pagamento', columnType: 'timestamp' },
//   { columnName: 'dataVencimento', columnLabel: 'Dt. Vencimento', columnType: 'timestamp' },
// ];

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartOpts: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#ccc',
            },
          },
          backgroundColor: 'rgba(255,255,255,1)',
          padding: [5, 10],
          textStyle: {
            color: 'rgba(76,106,148,1)',
          },
          extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)',
        },
        xAxis: {
          type: 'category',
          data: [
            'ssssssss s s sss--- sssssssssss sss ssss Seg',
            'ssssssss s s sss--- sssssssssss sss ssss Ter',
            'ssssssss s s sss--- sssssssssss sss ssss Qua',
            'ssssssss s s sss--- sssssssssss sss ssss Qui',
            'ssssssss s s sss--- sssssssssss sss ssss Sex',
            'ssssssss s s sss--- sssssssssss sss ssss Sab',
            'ssssssss s s sss--- sssssssssss sss ssss Dom',
            'ssssssss s s sss--- sssssssssss sss ssss Seg2',
            'ssssssss s s sss--- sssssssssss sss ssss Ter2',
            'ssssssss s s sss--- sssssssssss sss ssss Qua2',
            'ssssssss s s sss--- sssssssssss sss ssss Qui2',
            'ssssssss s s sss--- sssssssssss sss ssss Sex2',
            'ssssssss s s sss--- sssssssssss sss ssss Sab2',
            'ssssssss s s sss--- sssssssssss sss ssss Dom2',
            'ssssssss s s sss--- sssssssssss sss ssss Seg3',
            'ssssssss s s sss--- sssssssssss sss ssss Ter3',
            'ssssssss s s sss--- sssssssssss sss ssss Qua3',
            'ssssssss s s sss--- sssssssssss sss ssss Qui3',
            'ssssssss s s sss--- sssssssssss sss ssss Sex3',
            'ssssssss s s sss--- sssssssssss sss ssss Sab3',
            'ssssssss s s sss--- sssssssssss sss ssss Dom3',
          ],
          boundaryGap: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(100,100,100,1)',
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            rotate: 0,
            color: 'rgba(33,33,33, 1)',
            margin: '8',
            padding: [10, 5],
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(100,100,100,1)',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            rotate: 0,
            color: 'rgba(33,33,33, 1)',
            // margin: '8',
            // padding: [0, 0],
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [
              820,
              232,
              901,
              434,
              1290,
              2330,
              1320,
              820,
              232,
              901,
              434,
              1290,
              2330,
              1320,
              1290,
              2330,
              1320,
              820,
              232,
              901,
              434,
            ],
            type: 'line',
            itemStyle: {
              color: 'rgba(68, 202, 104, 1)',
            },
            name: 'Crédito',
            lineStyle: {
              width: 3,
            },
            smooth: false,
            markPoint: {
              data: [{ type: 'max', name: 'Máximo' }, { type: 'min', name: 'Mínimo' }],
            },
            label: {
              show: true,
              position: [0, 15],
              shadowColor: 'rgba(30,30,30,.8)',
              shadowBlur: 2,
              shadowOffsetX: 1,
              shadowOffsety: 1,
            },
          },
          {
            data: [
              240,
              722,
              1801,
              734,
              510,
              1130,
              321,
              240,
              722,
              1801,
              734,
              510,
              1130,
              321,
              734,
              510,
              1130,
              321,
              240,
              722,
              1801,
            ],
            type: 'bar',
            barWidth: '80%',
            itemStyle: {
              color: 'rgba(255,0,17, 1)',
            },
            name: 'Débito',
            label: {
              normal: {
                show: true,
                position: 'insideTop',
              },
            },
            // lineStyle: {
            //   width: 3,
            // },
            // smooth: true,
          },
        ],
      },
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    // console.time('lOAD-TIME');
    // axios.get('http://localhost:8080/stats/data?records=1M').then(response => {
    //   console.timeEnd('lOAD-TIME');
    //   console.time('SETSTATE-TIME');
    //   this.setState({ data: response.data.data }, () => console.timeEnd('SETSTATE-TIME'));
    // });
  }

  updateChart(newChartOpts) {
    debugger;
    this.setState({ chartOpts: newChartOpts });
    this.simpleDialog.hide();
  }

  render() {
    const calcHeight = () => {
      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    };

    const modalHeight = calcHeight() - 80;

    const myBigDialog = {
      width: '94%',
      height: `${modalHeight}px`,
      marginTop: `-${modalHeight / 2}px`,
      marginLeft: '-47%',
      padding: '0',
    };

    return (
      <div className="app">
        <section style={{ textAlign: 'center' }}>
          <ReactEcharts
            notMerge={true}
            option={this.state.chartOpts}
            echarts={echarts}
            style={{ height: '600px', width: '700px', margin: '0 auto' }}
          />
          <button onClick={() => this.simpleDialog.show()}>Opções do Gráfico</button>
        </section>
        <SkyLight dialogStyles={myBigDialog} ref={ref => (this.simpleDialog = ref)}>
          <Kowalski
            appName="Kowalski Playground"
            chart={this.state.chartOpts}
            containerHeight={modalHeight}
            onFinish={this.updateChart}
          />
        </SkyLight>
      </div>
    );
  }
}

export default App;
