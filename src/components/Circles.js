import React from 'react';
import { connect } from 'react-redux';
import CircleParent from './CircleParent';
import Circle from './Circle';

const Circles = (props) => (
  <div className='circleGen-container'
       title='A gamified JavaScript doodle. On mouseover (hover), large circles visually split into smaller circles. Reverse the puzzle and put all of the circles back together before the timer ends.'>
    <CircleParent classes="outer-box" circles={props.circleLeft} />
    <CircleParent classes="outer-box" circles={props.circleRight} />
  </div>
);

const mapStateToProps = (state) => ({
  circleLeft: state.circleLeft,
  circleRight: state.circleRight
});

// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps)(Circles);
