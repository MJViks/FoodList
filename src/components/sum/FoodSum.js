import React, { Component } from 'react';
import { Label, Spinner } from 'reactstrap';
import firebase from "../../firebase"
export default class FoodSum extends Component {
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

    getNumbers() {
        firebase.readFoodDb().then((val) => {
            let sum = 0
            for (let foods in val) {
                sum += val[foods]['Price'] * val[foods]['Count']
            }
            this.setState({
                sum: sum
            })
        })
    }

    render() {
        return (
            <div className="FoodSum panel">
                <p>
                    <Label>Сумма еды</Label>
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
