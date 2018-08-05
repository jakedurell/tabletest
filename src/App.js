import React, { Component } from 'react';
import '../src/App.css';
import '../src/Table.css';
import Table1 from './Table1'
import Table2 from './Table1'
import Table3 from './Table1'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
 



var data = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];
 
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="Table-header">Basic Table</p>
        <Table3 data={data}/>
      </div>
    );
  }
}
 
export default App;