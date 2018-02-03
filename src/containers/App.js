import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Warning from '../components/Warning';
import Controls from '../components/Controls';
import GameStatus from '../components/GameStatus';
import Circles from '../components/Circles';

const App = () => (
  <div className="HoverCircles">
    <Warning />
    <div className='circleGen'>
      <Controls />
      <GameStatus />
      <Circles />
    </div>
  </div>
);

export default App;
