import React, { Component } from 'react';
import '../css/App.css';
import WatherTable from './table/WatherTable'
import FoodTable from './table/FoodTable'
import Edit from './edit/Edit'
import Footer from './classic/footer'
import Logo from './classic/logo'
import Sum from './sum/Sum'
import FoodSum from './sum/FoodSum'
import WaterSum from './sum/WaterSum'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      update: true,
      watherSum: 0,
      foodSum: 0,
    };
  }

  updateCallback() {
    this.setState({update: true})
  }
  sumWatherCallback(val){
    this.setState({watherSum: val})
  }
  sumFoodCallback(val){
    this.setState({foodSum: val})
  }

  render() {
    return (
      <div className="App App-header">
        <Logo />
        <main className="main ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 order-xl-6 right">
                <WaterSum />
                <FoodSum />
                <Sum updateCallback={() => this.updateCallback()} />
              </div>
              <div className="col-xl-6 order-xl-5 article ">
                <div className="panel">
                  <WatherTable updateCallback={() => this.updateCallback()} />
                  <FoodTable updateCallback={() => this.updateCallback()} />
                </div>
              </div>
              <Edit updateCallback={() => this.updateCallback()}/>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
