import React, { Component } from 'react';
import { Table, Button, CustomInput } from 'reactstrap';
import firebase from "../../firebase"

export default class WatherTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: [],
      price: [],
      name: [],
      count: [],
      ch: [],
    };

    firebase.readWatherDb().then((val) => {
      let id = []
      let price = []
      let name = []
      let count = []
      let ch = []
      for (let wathers in val) {
        id.unshift(wathers)
        name.unshift(val[wathers]['Name'])
        price.unshift(val[wathers]['Price'])
        ch.unshift(val[wathers]['Ch'])
        count.unshift(val[wathers]['Count'])
      }
      this.setState({
        id: id,
        price: price,
        ch: ch,
        name: name,
        count: count,
      })
    })
  }

  deleteWather(name) {
    console.log(name)
  }

  chWather(i){
    firebase.chWatherDb(
      this.state.name[i], 
      !this.state.ch[i], 
      this.state.count[i], 
      this.state.price[i], 
      this.state.id[i]) 
      let ch = this.state.ch
      ch[i] = !ch[i]
      this.setState({ch: ch})
  }

  render() {
    return (
      this.state.id.length === 0 ? '' :
      <Table striped dark className="WatherTable">
        <thead>
          <tr>
            <th><span role="img" aria-label="cup with straw"> 🥤 </ span></th>
            <th>Куплено</th>
            <th>Название</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>

          {this.state.name.map((name, i) =>
            <tr>
              <th scope="row">{i + 1}</th>
              <td><CustomInput type="switch" checked={this.state.ch[i]} onClick={() => this.chWather(i)} id={'chWather' + (i + 1)} /></td>
              <td>{name}</td>
              <td>{this.state.count[i]}</td>
              <td>{this.state.price[i]}</td>
              <td><Button color="danger" onClick={() => this.deleteWather(name)}>X</Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}
