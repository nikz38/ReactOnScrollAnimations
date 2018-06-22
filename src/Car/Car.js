import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Car.css';

class Car extends Component {
    render() {
        return (
            <div className='car'>
                <div className='body' style={{ background: this.props.color }}></div>
                <div className='trapezoid' style={{ borderBottomColor: this.props.color }}></div>
                <div className='wheel right'></div>
                <div className='wheel left'></div>
            </div>
        );
    }
}

Car.propTypes = {
    color: PropTypes.string.isRequired
};

export default Car;
