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
                <Sum />
              </div>
              <div className="col-xl-6 order-xl-5 article ">
                <div className="panel">
                  <WatherTable />
                  <FoodTable />
                </div>
              </div>
              <Edit />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
