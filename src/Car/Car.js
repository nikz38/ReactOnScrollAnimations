import React, { Component } from 'react';
import './Car.css';

class Car extends Component {
    render() {
        return (
            <div className="car">
                <div className="body" style={{ background: this.props.color }}></div>
                <div className="trapezoid" style={{ borderBottomColor: this.props.color }}></div>
                <div className="wheel right"></div>
                <div className="wheel left"></div>
            </div>
        );
    }
}

export default Car;
