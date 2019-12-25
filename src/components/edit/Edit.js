import React, { Component } from 'react';
import { Input, Button, Label } from 'reactstrap';
import firebase from "../../firebase"

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            price: '',
            name: '',
            count: '',
            ch: '',
            select: 'Еда',
        };
    }

    isInteger(num) {
        return !(num ^ 0) === num;
    }

    addProduct() {
        if (
            this.state.price !== '' &&
            this.state.count !== '' &&
            this.state.name !== ''
        )
            if (
                this.state.count > 0 &&
                this.state.price > 0
            )
                switch (this.state.select) {
                    case 'Еда':
                        firebase.readFoodDb().then((val) =>
                            firebase.writeFoodDb(
                                this.state.name,
                                false,
                                this.state.count,
                                this.state.price,
                                (++Object.keys(val).length)
                            ).then(() => this.props.updateCallback()))
                        break;
                    case 'Вода':
                        firebase.readWatherDb().then((val) =>
                            firebase.writeWatherDb(
                                this.state.name,
                                false,
                                this.state.count,
                                this.state.price,
                                ++Object.keys(val).length,
                            ).then(() => this.props.updateCallback()))
                        break;
                    default:
                        alert('Ошибка №1 \r\n Обратитесь к администратору')
                }
            else
                alert('Необходимо число')
        else
            alert('Необходимо заполнить все поля валидно')
    }

    render() {
        return (
            <div className="Edit col-md-9 col-xl-3 order-xl-4 left">
                <div className="panel">
                    <Label >Добавить</Label>
                    <Input placeholder="Название" id="Name" onChange={e => this.setState({ name: e.target.value })} />
                    <Input placeholder="₽" type="number" id="Price" onChange={e => this.setState({ price: e.target.value })} />
                    <Input placeholder="Кол-во" type="number" id="Count" onChange={e => this.setState({ count: e.target.value })} />
                    <Input type="select" id="Type" onChange={e => this.setState({ select: e.target.value })}>
                        <option>Еда</option>
                        <option>Вода</option>
                    </Input>
                    <Button color="success" onClick={() => this.addProduct()}>Добавить</Button>
                </div>
            </div>
        );
    }
}
