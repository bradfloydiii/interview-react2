import React, { Component } from 'react';
import { Clock } from './components/Clock';
import { ActivityLog } from './components/ActivityLog';
import { Queue } from './components/Queue';
import { Utilities } from './services/Utilities';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  // activities = []; // state variable for all tasks clocked-in since setState can't be trusted

  constructor() {
    super();

    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem(Utilities.key)) {
      console.log('loaded from sesssion', this.state.activities);
      this.setState({
        activities: Utilities.getSessionItem()
      });
    }
  }

  startTask = task => {
    this.setState({ activities: this.state.activities.concat(task) });

    console.log(this.activities, task);
    Utilities.saveSessionItem(this.state.activities);
  };

  stopTask = id => {
    let activity = this.state.activities.filter(activity => activity.id === id)[0];
    activity.stop = Utilities.getReadableDate();
    activity.completed = true;
    Utilities.saveSessionItem(this.state.activities);
  };

  clearSession = () => {
    this.setState({ activities: [] });
    Utilities.clearSession();
  };

  render() {
    return (
      <div className='container'>
        <Clock startTask={this.startTask} />
        <Queue activities={this.state.activities} stopTask={this.stopTask} />
        <ActivityLog activities={this.state.activities} />
        <button className='btn btn-warning' onClick={this.clearSession}>
          Clear Session
        </button>
      </div>
    );
  }
}

export default App;
