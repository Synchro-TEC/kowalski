import React, { Component } from 'react';
import Kowalski from 'kowalski';
import axios from 'axios';
import './App.css';

const schema = [
  { columnName: 'id', columnLabel: 'Id', columnType: 'numeric' },
  { columnName: 'responsavel', columnLabel: 'Responsável', columnType: 'varchar' },
  { columnName: 'estado', columnLabel: 'UF', columnType: 'varchar' },
  { columnName: 'status', columnLabel: 'Status', columnType: 'varchar' },
  { columnName: 'estabelecimento', columnLabel: 'Estabelecimento', columnType: 'varchar' },
  { columnName: 'obrigacao', columnLabel: 'Ogrigação', columnType: 'varchar' },
  { columnName: 'valor_apurado', columnLabel: 'Valor Apurado', columnType: 'numeric' },
  { columnName: 'valor_pago', columnLabel: 'Valor Pago', columnType: 'numeric' },
  { columnName: 'data_inclusao', columnLabel: 'Dt. Inclusão', columnType: 'timestamp' },
  { columnName: 'data_vencimento', columnLabel: 'Dt. Vencimento', columnType: 'timestamp' },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.time('lOAD-100000-REGISTROS');
    axios.get('http://localhost:3001/data').then(response => {
      console.timeEnd('lOAD-100000-REGISTROS');

      console.time('SETSTATE-100000-REGISTROS');
      this.setState({ data: response.data }, () => console.timeEnd('SETSTATE-100000-REGISTROS'));
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
