import React, { Component } from 'react';

import GridContainer from './containers/GridContainer';
import Controls from './components/Controls';

export default class Game extends Component {
    state = {
        isPlaying: false,
        gameSpeed: 100
    };

    handlePlay = () => {
        if (!this.state.isPlaying) {
            this.play();
        } else {
            this.pause();
        }
    };

    handleSpeedChange = gameSpeed => {
        this.setState({ gameSpeed }, () => {
            if (this.state.isPlaying) {
                this.pause();
                this.play();
            }
        });
    };

    play = () => {
        this.interval = setInterval(() => {
            this.props.showNextGrid(this.props.grid);
        }, this.state.gameSpeed);

        this.setState({ isPlaying: true });
    };

    pause = () => {
        clearInterval(this.interval);
        this.interval = null;

        this.setState({ isPlaying: false });
    };

    render() {
        return (
            <div className="app">
                <GridContainer />
                <Controls
                    handlePlay={this.handlePlay}
                    handleSpeedChange={this.handleSpeedChange}
                    isPlaying={this.state.isPlaying}
                />
            </div>
        );
    }
}
