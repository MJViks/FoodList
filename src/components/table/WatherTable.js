import React, { Component } from 'react';
import { Table, Button, CustomInput } from 'reactstrap';

export default class WatherTable extends Component {
  render() {
    return (
          <Table striped dark className="WatherTable">
            <thead>
            <tr>
                <th>Куплено</th>
                <th>#</th>
                <th>Название</th>
                <th>Цена</th>
                <th> Удалить</th>
              </tr>
            </thead>
            <tbody>
           
            <tr>
                <td><CustomInput type="checkbox" id="chWather1"/></td>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><Button color="danger">X</Button></td>
              </tr>

            </tbody>
          </Table>
    );
  }
}
