import React, { Component } from 'react';

export class LogItem extends Component {
  id = 0;

  state = {
    duration: 0
  };

  componentDidMount() {
    this.id = setInterval(this.renderDuration, 1000);
  }

  componentDidUpdate() {
    if(this.props.activity.stop !== '')
      clearInterval(this.id)
  }

  renderDuration = () => {
    this.setState({
      duration: (Date.now() - this.props.activity.start) / 1000
    });
  };

  render() {
    const { stop, description, readableDate } = this.props.activity;
    return (
      <div className='row'>
        <div className='col'>{readableDate}</div>
        <div className='col'>{stop}</div>
        <div className='col'>{`${this.state.duration.toFixed(0)} seconds`}</div>
        <div className='col'>{description}</div>
      </div>
    );
  }
}
