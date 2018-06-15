import React from 'react';

export default function Cell({ row, col, isAlive, onClick }) {
    return (
        <div
            className={`grid-cell ${isAlive ? 'alive' : ''}`.trim()}
            onClick={() => onClick(row, col)}
        />
    );
}
