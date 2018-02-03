import React from 'react';
import CircleParent from './CircleParent';
import Circle from './Circle';

export default class CircleParentComponent extends React.Component {
  render() {
    return (
      <div className={`parent ${this.props.classes}`}>
      {
        this.props.circles.map((circle, index) => (
          circle.map ? (
            <CircleParent key={index} classes='' circles={circle} />
          ) : (
            <Circle key={index}/>
          )
        ))
      }
      </div>
    );
  }
}