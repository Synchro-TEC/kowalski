import React, { Component } from 'react';
import Kowalski from 'kowalski';
import axios from 'axios';
import './App.css';

const schema = [
  { columnName: 'id', columnLabel: 'Id', columnType: 'numeric' },
  { columnName: 'responsavel', columnLabel: 'Responsável', columnType: 'varchar' },
  { columnName: 'supervisor', columnLabel: 'Supervisor', columnType: 'varchar' },
  { columnName: 'estado', columnLabel: 'UF', columnType: 'varchar' },
  { columnName: 'status', columnLabel: 'Status', columnType: 'varchar' },
  { columnName: 'estabelecimento', columnLabel: 'Estabelecimento', columnType: 'varchar' },
  { columnName: 'obrigacao', columnLabel: 'Ogrigação', columnType: 'varchar' },
  { columnName: 'valorApurado', columnLabel: 'Valor Apurado', columnType: 'numeric' },
  { columnName: 'valorPago', columnLabel: 'Valor Pago', columnType: 'numeric' },
  { columnName: 'dataPagamento', columnLabel: 'Dt. Pagamento', columnType: 'timestamp' },
  { columnName: 'dataVencimento', columnLabel: 'Dt. Vencimento', columnType: 'timestamp' },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.time('lOAD-TIME');
    axios.get('http://localhost:8080/stats/data?records=1M').then(response => {
      console.timeEnd('lOAD-TIME');
      console.time('SETSTATE-TIME');
      this.setState({ data: response.data.data }, () => console.timeEnd('SETSTATE-TIME'));
    });
  }

  render() {
    return (
      <div className="app">
        <Kowalski appName="Kowalski Playground" data={this.state.data} schema={schema} allowSelectChart />
      </div>
    );
  }
}

export default App;
