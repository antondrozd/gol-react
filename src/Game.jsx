import React, { Component } from 'react';

import Grid from './components/Grid';
import Controls from './components/Controls';
import GridContainer from './containers/GridContainer';

export default class Game extends Component {
    state = {
        isPlaying: false,
        gameSpeed: 100
    };

    render() {
        return (
            <div className="app">
                <GridContainer />
                <Controls  />
            </div>
        );
    }
}
