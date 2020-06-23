import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TraffictLight extends Component {
    constructor() {
        super();
        this.state = {
            currentColor: RED
        };

        setInterval(() => {
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        }, 3000);
    }

    getNextColor(color) {
        switch (color) {
            case RED:
                return ORANGE
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    render() {
        console.log('Rendering...');
        const { currentColor } = this.state;
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