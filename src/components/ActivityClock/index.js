import React, { Component } from 'react';
import { Utilities } from '../../services/Utilities';
import cuid from 'cuid';

export class ActivityClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ''
    };
  }

  clearTaskEntry = e => {
    if (e) e.target.value = '';
    this.setState({ task: '' });
  };

  startTask = () => {
    let task = {
      id: cuid(),
      start: Date.now(),
      stop: '',
      readableDate: Utilities.getReadableDate(),
      duration: 0,
      completed: false,
      description: this.state.task
    };

    this.clearTaskEntry();
    this.props.startTask(task);
    this.setState({ count: this.state.count + 1 });
  };

  updateTask = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <div className='clock'>
        <div className='row'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              id='activity'
              placeholder='Enter an activity'
              value={this.state.task}
              onFocus={this.clearTaskEntry}
              onChange={this.updateTask}
            />
          </div>
          <div className='col'>
            <button id="startTask" className='btn btn-primary' onClick={this.startTask}>
              Clock In
            </button>
          </div>
        </div>
      </div>
    );
  }
}
