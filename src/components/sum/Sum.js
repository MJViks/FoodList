import React, { Component } from 'react';
import { Label, Input, Spinner } from 'reactstrap';
import firebase from "../../firebase"
export default class Sum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sum: -1,
            bigSum: 0,
            sumFood: 0,
            sumWather: 0,
        };
        this.getNumbers()
    }
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.getNumbers()
        }
    }

    getNumbers() {
        this.getNumbersFood()
        this.getNumbersWather()
    }

    setSum(sum, is) {
        if (is === "wather")
        this.setState({ sumWather: sum })
        else
        this.setState({ sumFood: sum })
        let summ = this.state.sumFood + this.state.sumWather
        this.setState({ sum: summ, bigSum: summ })
        
    }

    getNumbersFood() {
        firebase.readFoodDb().then((val) => {
            let sum = 0
            for (let foods in val) {
                sum += val[foods]['Price'] * val[foods]['Count']
            }
this.setSum(sum, "food")

        })
    }

    getNumbersWather() {
        firebase.readWatherDb().then((val) => {
            let sum = 0
            for (let waters in val) {
                sum += val[waters]['Price'] * val[waters]['Count']
            }
            this.setSum(sum, "wather")
        })
    }

    onChangeSelect(e) {
        let sum
        switch (e.target.value) {
            case 'Всего':
                sum = this.state.bigSum
                this.setState({ sum: sum })
                break
            case 'С 9 человек':
                this.setState({ sum: sum })
                sum = this.state.bigSum / 9
                this.setState({ sum: sum })
                break
            case 'С 8 человек':
                sum = this.state.bigSum / 8
                this.setState({ sum: sum })
                break
            case 'С 7 человек':
                sum = this.state.bigSum / 7
                this.setState({ sum: sum })
                break
            case 'С 6 человек':
                sum = this.state.bigSum / 6
                this.setState({ sum: sum })
                break
            default:
                alert("Ошибка №2 \r\n Обратитесь к администратору")
        }
    }

    render() {
        return (
            <div className="Sum panel">
                <p>
                    <Label>ИТОГ</Label>
                </p>
                {
                    this.state.sum === -1 ?
                        <Spinner color="info" style={{ width: '3rem', height: '3rem', margin: '15px' }} /> :
                        <div>
                            <Input type="select" id="Count" onChange={e => this.onChangeSelect(e)}>
                                <option>Всего</option>
                                <option>С 9 человек</option>
                                <option>С 8 человек</option>
                                <option>С 7 человек</option>
                                <option>С 6 человек</option>
                            </Input>
                            <p>
                                <Label id="lblFoodSum"><h2>{this.state.sum.toFixed(2)} ₽</h2></Label>

                            </p>
                        </div>
                }
            </div>
        );
    }
}
