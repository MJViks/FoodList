import React, { Component } from 'react';
import { Label, Input } from 'reactstrap';
export default class Sum extends Component {
    render() {
        return (
            <div className="Sum panel">
                <p>
                    <Label>ИТОГ</Label>
                </p>
                <Input type="select" id="Type">
                        <option>Всего</option>
                        <option>С 9 человек</option>
                        <option>С 8 человек</option>
                        <option>С 7 человек</option>
                        <option>С 6 человек</option>
                    </Input>
                <p>
                    <Label id="lblSum"><h2>212341</h2></Label>
                </p>
            </div>
        );
    }
}
