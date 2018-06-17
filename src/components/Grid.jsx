import React, { Component } from 'react';

import Cell from './Cell';

export default class Grid extends Component {
    get size() {
        let size = 0;

        this.props.cells.forEach(() => size++);

        return size;
    }

    handleCellClick = (row, col) => {
        this.props.cells[row][col]
            ? this.props.dieCell(row, col)
            : this.props.reviveCell(row, col);
    };

    forEachCell = callback => {
        this.props.cells.forEach((rows, row) => {
            rows.forEach((isAlive, col) => {
                callback(row, col, isAlive);
            });
        });
    };

    render = () => {
        const cells = this.renderCells();

        const style = {
            display: 'grid',
            width: `${this.size * 17}px`,
            height: `${this.size * 17}px`,
            gridTemplate: `repeat(${this.size}, 1fr) / repeat(${
                this.size
            }, 1fr)`
        };

        return (
            <div id="grid" style={style}>
                {cells}
            </div>
        );
    };

    renderCells = () => {
        let cells = [];

        this.forEachCell((row, col, isAlive) =>
            cells.push(
                <Cell
                    row={row}
                    col={col}
                    isAlive={isAlive}
                    key={`${row}-${col}`}
                    onClick={this.handleCellClick}
                />
            )
        );

        return cells;
    };
}
