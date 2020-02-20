import React, { Component } from 'react';
import './Queue.css';

export class Queue extends Component {

  stopTask = e => {
    this.props.stopTask(e.target.id);
  };

  render() {
    return (
      <div className='queue'>
        {this.props.activities.filter(activity => activity.stop === '').map((activity, index) => {
          return (
            <button
              className='btn btn-danger'
              key={index}
              id={activity.id}
              onClick={this.stopTask}
            >{`Clock Out - ${activity.description}`}</button>
          );
        })}
      </div>
    );
  }
}
