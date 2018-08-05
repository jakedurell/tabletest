import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn }
    from 'react-bootstrap-table'
import 'Table.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



class Table3 extends Component {
    render() {
        return (
            <div>
                <BootstrapTable data={this.props.data} trClassName={this.rowClassNameFormat}>
                    <TableHeaderColumn isKey dataField='id'>
                        ID
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>
                        Name
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='value'>
                        Value
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

function rowClassNameFormat(row, rowIdx) {
    // row is whole row object
    // rowIdx is index of row
    console.log("Row is " + row)
    return row['name'] === 'George Michael' ?
        'GeorgeMichael-Row' : 'Other-Row';
}


export default Table3