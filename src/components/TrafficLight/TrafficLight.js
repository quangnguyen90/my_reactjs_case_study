import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TraffictLight extends Component {
    render() {
        console.log('Rendering...');
        const { currentColor } = this.props;
        return (
            <div className="TrafficLight">
                <div className={classNames('blub', 'red', {
                    active: currentColor === RED
                })} />
                <div className={classNames('blub', 'orange', {
                    active: currentColor === ORANGE
                })} />
                <div className={classNames('blub', 'green', {
                    active: currentColor === GREEN
                })} />
            </div>
        );
    }
}

export default TraffictLight;