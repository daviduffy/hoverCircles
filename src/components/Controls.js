import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Controls = () => (
  <div className='circleGen'>
    <div className='circleGen-controls'>
      <h2><a className='fancy-link' href='http://jsbin.com/fudizi/edit?html,js,output' title='link to the JSBin for this doodle'>circleGen<span id='inReverse' className='hide'>Reverse</span>()&#59;</a></h2>
      <p className='created'>Created
        <span>5</span>
      </p>
      <p className='destroyed fade-in'>Destroyed
        <span>
          <span className='goal'>0.0%</span>
          <span className='score'>0</span>
        </span>
      </p>
      <p className='timer fade-in'>Time Remaining
        <span id="timer">
          <span className="minutes">00</span>:<span className="seconds">00</span>
        </span>
      </p>
      <a id='toggle' href='JavaScript:void(0)' className='toggleButton control-button fade-in'>Reverse</a>
      <a href='JavaScript:void(0)' className='reset control-button' title='resets the circleDiv doodle to its original state'>Reset</a>
    </div>
  </div>
)

export default Controls;

// // on here you define your dispatcher functions, which will be mapped and called
// const mapDispatchToProps = (dispatch) => ({
//   // set the names of these to be the same as the name of the action generator
//   setupGame: (type) => dispatch(setupGame(type)),
//   resetPuzzle: (type) => dispatch(resetPuzzle(type)),
//   solvePuzzle: () => dispatch(solvePuzzle()),
//   clearGame: () => dispatch(clearGame())
// });

// // mapStateToProps, mapDispatchToProps
// export default connect(undefined, mapDispatchToProps)(Controls);