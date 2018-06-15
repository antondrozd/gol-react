import React, { Component } from 'react';

import Cell from '../Cell';

export default class Grid extends Component {
    componentWillMount = () => {
        this.reset();
    };

    forEachCell = callback => {
        this.state.cells.forEach((rows, row) => {
            rows.forEach((cell, col) => {
                callback(cell, row, col);
            });
        });
    };

    live = (row, col) => {
        let cells = [...this.state.cells];

        cells[row][col] = true;

        this.setState({ cells });
    }

    die = (row, col) => {
        let cells = [...this.state.cells];

        cells[row][col] = false;

        this.setState({ cells });
    }

    reset = () => {
        const size = this.props.size;

        let cells = [];

        for (let row = 0; row < size; row++) {
            cells[row] = [];

            for (let col = 0; col < size; col++) {
                cells[row][col] = false;
            }
        }

        this.setState({ cells });
    }

    handleCellClick = (row, col) => {
        this.state.cells[row][col] ? this.die(row, col) : this.live(row, col);
    };

    render = () => {
        const cells = this.renderCells();

        const style = {
            display: 'grid',
            width: `${this.props.size * this.props.cellSize}px`,
            height: `${this.props.size * this.props.cellSize}px`,
            gridTemplate: `repeat(${this.props.size}, 1fr) / repeat(${
                this.props.size
            }, 1fr)`
        };

        return (
            <div id="grid" style={style}>
                {cells}
            </div>
        );
    }

    renderCells = () => {
        let cells = [];

        this.forEachCell((cell, row, col) =>
            cells.push(
                <Cell
                    row={row}
                    col={col}
                    isAlive={cell}
                    key={`${row}-${col}`}
                    onClick={this.handleCellClick}
                />
            )
        );

        return cells;
    }
}
