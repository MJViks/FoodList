import React, { Component } from 'react';
import { Label, Spinner } from 'reactstrap';
import firebase from "../../firebase"
export default class WatherSum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sum: -1
        };
        this.getNumbers()
    }
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps)
            this.getNumbers()
    }

    async getNumbers() {
        await firebase.readWatherDb().then((val) => {
            let sum = 0
            for (let waters in val) {
                sum += val[waters]['Price'] * val[waters]['Count']
            }
            this.setState({
                sum: sum
            })
            
        })
    }
    render() {
        return (
            <div className="WatherSum panel">
                <p>
                    <Label>Сумма воды</Label>
                </p>
                <p>
                    {
                        this.state.sum === -1 ?
                            <Spinner color="info" style={{ width: '3rem', height: '3rem', margin: '15px' }} /> :
                            <Label id="lblFoodSum"><h2>{this.state.sum.toFixed(2)} ₽</h2></Label>
                    }
                </p>
            </div>
        );
    }
}
