import React, { Component } from 'react';
import { Clock } from './components/Clock';
import { ActivityLog } from './components/ActivityLog';
import { Queue } from './components/Queue';
import { Utilities } from './services/Utilities';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  key = 'interview';

  state = {
    activities: [],
    active: []
  };

  componentDidMount() {
    if (sessionStorage.getItem(this.key)) {
      this.setState(state => {
        return { activities: JSON.parse(sessionStorage.getItem(this.key)) };
      });
    }
  }

  // componentDidUpdate() {
  //   this.setState({active: this.state.activities.filter(activity => activity.stop === '')});
  // }

  startTask = task => {
    console.log('adding a task', task);
    this.setState({ activities: [...this.state.activities, task] });
    sessionStorage.setItem(this.key, JSON.stringify(this.state.activities));
  };

  stopTask = id => {
    console.log('stopping a task', id);
    let activity = this.state.activities.filter(
      activity => activity.id === id
    )[0];
    activity.stop = Utilities.getReadableDate();
    sessionStorage.setItem(this.key, JSON.stringify(this.state.activities));
  };

  clearSession = () => {
    this.setState({ activities: [] });
    sessionStorage.clear();
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
