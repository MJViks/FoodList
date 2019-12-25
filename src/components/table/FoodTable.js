import React, { Component } from 'react';
import { Table, Button, CustomInput, Spinner } from 'reactstrap';
import firebase from "../../firebase"

export default class FoodTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: [],
      price: [],
      name: [],
      count: [],
      ch: [],
    };
    this.setTable()
  }

  setTable() {
    firebase.readFoodDb().then((val) => {
      let id = []
      let price = []
      let name = []
      let count = []
      let ch = []
      for (let foods in val) {
        id.push(foods)
        name.push(val[foods]['Name'])
        price.push(val[foods]['Price'])
        ch.push(val[foods]['Ch'])
        count.push(val[foods]['Count'])
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

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps)
    this.setTable()
  }

  deleteFood(id) {
    firebase.writeFoodDb(
      null,
      null,
      null,
      null,
      id
    ).then(() => this.props.updateCallback())
  }

  chFood(i) {
    firebase.writeFoodDb(
      this.state.name[i],
      !this.state.ch[i],
      this.state.count[i],
      this.state.price[i],
      this.state.id[i])
    let ch = this.state.ch
    ch[i] = !ch[i]
    this.setState({ ch: ch })
  }

  render() {
    return (
      this.state.id.length === 0 ? <Spinner color="info" style={{ width: '3rem', height: '3rem', margin: '15px' }} /> :
        <Table striped dark className="FoodTable">
          <thead>
            <tr>
              <th><span role="img" aria-label="poultry leg"> 🍗 </ span></th>
              <th>Куплено</th>
              <th>Название</th>
              <th>Кол-во</th>
              <th>Цена</th>
              <th> Удалить</th>
            </tr>
          </thead>
          <tbody>

            {this.state.name.map((name, i) =>
              <tr>
                <th scope="row">{i + 1}</th>
                <td><CustomInput type="switch" checked={this.state.ch[i]} onClick={() => this.chFood(i)} id={'chFood' + (i + 1)} /></td>
                <td>{name}</td>
                <td>{this.state.count[i]} шт</td>
                <td>{this.state.price[i]} ₽</td>
                <td><Button color="danger" onClick={() => this.deleteFood(this.state.id[i])}>X</Button></td>
              </tr>
            )}

          </tbody>
        </Table>
    );
  }
}
