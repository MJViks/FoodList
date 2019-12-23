import React, { Component } from 'react';
import { Label } from 'reactstrap';
export default class WatherSum extends Component {
    render() {
        return (
            <div className="WatherSum panel">
                <p>
                    <Label>Сумма воды</Label>
                </p>
                <p>
                    <Label id="lblSumWather"><h2>212341</h2></Label>
                </p>
            </div>
        );
    }
}
