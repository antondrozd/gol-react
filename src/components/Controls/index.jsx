import React, { Component } from 'react';

import Play from './Play';
import Reset from './Reset';
import Randomize from './Randomize';
import SpeedRange from './SpeedRange';

export default class Controls extends Component {
    handlePlayToggle = () => {};

    reset = () => {
        console.log('reset');
    };

    randomize = () => {
        console.log('random');
    };

    changeSpeed = ({ target }) => {
        const speed = target.value;

        console.log(`change speed to ${speed}`);
    };

    render() {
        return (
            <div className="controls">
                <Play />              
                <Reset onClick={this.reset} />
                <Randomize onClick={this.randomize} />
                <SpeedRange onChange={this.changeSpeed} />
            </div>
        );
    }
}
