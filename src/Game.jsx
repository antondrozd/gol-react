import React, { Component } from 'react';

import Grid from './components/Grid';
import Controls from './components/Controls';

export default class Game extends Component {
    state = {
        isPlaying: false,
        gameSpeed: 100
    };

    render() {
        return (
            <div className="app">
                <Grid size={36} cellSize={17} />
                <Controls  />
            </div>
        );
    }
}
