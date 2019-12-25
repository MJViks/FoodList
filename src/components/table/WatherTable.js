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
      update: this.props.update,
    };

    this.setTable()
  }
  
setTable(){
  firebase.readWatherDb().then((val) => {
    let id = []
    let price = []
    let name = []
    let count = []
    let ch = []
    for (let wathers in val) {
      id.push(wathers)
      name.push(val[wathers]['Name'])
      price.push(val[wathers]['Price'])
      ch.push(val[wathers]['Ch'])
      count.push(val[wathers]['Count'])
    }
    this.setState({
      id: id,
      price: price,
      ch: ch,
      name: name,
      count: count,
      update: this.props.update,
    })
  })
}

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps)
      this.setTable()
  }

  deleteWather(id) {
    firebase.writeWatherDb(
      null,
      null,
      null,
      null,
      id
    ).then(() => this.props.updateCallback())
  }

  chWather(i){
    firebase.writeWatherDb(
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
              <td>{this.state.count[i]} шт</td>
              <td>{this.state.price[i]} ₽</td>
              <td><Button color="danger" onClick={() => this.deleteWather(this.state.id[i])}>X</Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}
