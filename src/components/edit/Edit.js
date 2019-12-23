import React, { Component } from 'react';
import { Input, Button, Label } from 'reactstrap';

export default class Edit extends Component {
    render() {
        return (
            <div className="Edit col-md-9 col-xl-3 order-xl-4 left">
                <div className="panel">
                <Label >Добавить</Label>
                <Input placeholder="Название" id="Name"/>
                <Input placeholder="$" type="number" id="Price"/>
                    <Input type="select" id="Type">
                        <option>Еда</option>
                        <option>Вода</option>
                    </Input>
                    <Button color="success">Добавить</Button>
                </div>
            </div>
        );
    }
}
