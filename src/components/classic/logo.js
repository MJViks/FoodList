import React, { Component } from 'react';
import '../../css/App.css';
import LogoSvg from '../../img/FoodListNYTreeLogo.svg'

export default class Logo extends Component {
    render() {
        return (
            <header className="Logo header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-xl-2 logo">
                            <img className="LogoSvg" src={LogoSvg} alt="Logo" />
                            <h4>
                                FoodList
                        </h4>
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}
