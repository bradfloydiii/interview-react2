import React, { Component } from 'react';
import { ActivityClock } from './components/ActivityClock';
import { ActivityLog } from './components/ActivityLog';
import { Queue } from './components/Queue';
import { Utilities } from './services/Utilities';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem(Utilities.key)) {
      this.setState({
        activities: Utilities.getSessionItem()
      });
    }
  }

  startTask = task => {
    this.setState(
      ({ activities }) => ({
        activities: [...activities, task]
      }),
      // Completion callback
      () => {
        Utilities.saveSessionItem(this.state.activities);
      }
    );
  };

  stopTask = id => {
    let activity = this.state.activities.filter(
      activity => activity.id === id
    )[0];
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
        <div className="header mb-3">Clock In/Out</div>
        <ActivityClock startTask={this.startTask} />
        <Queue activities={this.state.activities} stopTask={this.stopTask} />
        <ActivityLog activities={this.state.activities} />
        {/* <button className='btn btn-warning' onClick={this.clearSession}>
          Clear Session
        </button> */}
      </div>
    );
  }
}

export default App;
