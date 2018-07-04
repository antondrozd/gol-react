import React, { Component } from 'react';

import SpeedRange from './SpeedRange';
import Play from './Play';

import ResetContainer from '../../containers/Controls/ResetContainer';
import RandomizeContainer from '../../containers/Controls/RandomizeContainer';

export default class Controls extends Component {
    handleSpeedChange = ({ target }) => {
        const speed = target.value;

        this.props.handleSpeedChange(+speed);
    };

    render() {
        return (
            <div className="controls">
                <Play
                    onPlay={this.props.handlePlay}
                    isPlaying={this.props.isPlaying}
                />
                <ResetContainer />
                <RandomizeContainer />
                <SpeedRange onChange={this.handleSpeedChange} />
            </div>
        );
    }
}
