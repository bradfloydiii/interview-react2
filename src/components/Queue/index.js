import React, { Component } from 'react';
import './Queue.css';

export class Queue extends Component {
  stopTask = e => {
    this.props.stopTask(e.target.id);
    this.removeActivityButton(e.target.id);
  };

  removeActivityButton(id) {
    let elem = document.getElementById(id);
    if(elem && elem.parentNode)
      elem.parentNode.removeChild(elem);
  }

  render() {
    return (
      <div className='queue'>
        {this.props.activities
          .filter(activity => !activity.completed)
          .map((result, index) => {
            return (
              <button
                className='btn btn-danger mb-2'
                key={index}
                id={result.id}
                onClick={this.stopTask}
              >{`Clock Out - ${result.description}`}</button>
            );
          })}
      </div>
    );
  }
}
