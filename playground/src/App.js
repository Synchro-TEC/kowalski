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
            xAxis: {
              type: 'category',
              data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                itemStyle: {
                  color: '#4466cc',
                },
                name: 'Crédito',
                smooth: false,
              },
              {
                data: [240, 232, 1001, 734, 1810, 1130, 1321],
                type: 'line',
                itemStyle: {
                  color: '#ff0011',
                },
                areaStyle: {
                  normal: {},
                },
                name: 'Débito',
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
