import React from 'react';

const GameStatus = () => (
  <span className="circleGen-overlay">
    <span>Game Over</span>
    <a href='JavaScript:void(0)' className='reset control-button' title='resets the circleDiv doodle to its original state'>Reset</a>
  </span>
);

export default GameStatus;