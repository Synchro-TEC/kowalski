import React, { Component } from 'react';
import Kowalski from 'kowalski';
// import axios from 'axios';
import './App.css';

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
    // this.state = {
    //   data: [],
    // };
  }

  componentDidMount() {
    // console.time('lOAD-TIME');
    // axios.get('http://localhost:8080/stats/data?records=1M').then(response => {
    //   console.timeEnd('lOAD-TIME');
    //   console.time('SETSTATE-TIME');
    //   this.setState({ data: response.data.data }, () => console.timeEnd('SETSTATE-TIME'));
    // });
  }

  render() {
    return (
      <div className="app">
        <Kowalski
          appName="Kowalski Playground"
          chart={{
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
              data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
              boundaryGap: false,
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
              splitLine: {
                show: false,
              },
            },
            series: [
              {
                data: [820, 232, 901, 434, 1290, 2330, 1320],
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
              },
              {
                data: [240, 722, 1801, 734, 510, 1130, 321],
                type: 'line',
                itemStyle: {
                  color: 'rgba(255,0,17, 1)',
                },
                name: 'Débito',
                lineStyle: {
                  width: 3,
                },
                smooth: true,
              },
            ],
          }}
        />
      </div>
    );
  }
}

export default App;
