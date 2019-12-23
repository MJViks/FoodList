import React, { Component } from 'react';
import { Label } from 'reactstrap';

export default class FoodSum extends Component {
    render() {
        return (
            <div className="FoodSum panel">
                 <p>
                    <Label>Сумма еды</Label>
                </p>
                <p>
                    <Label id="lblFoodSum"><h2>212341</h2></Label>
                </p>
            </div>
        );
    }
}
