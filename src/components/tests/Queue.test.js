import React from 'react';
import { shallow } from 'enzyme';
import { Queue } from '../Queue';

describe('<Queue />', () => {
  it('should render appropriate number of clock out buttons for incomplete tasks', () => {
    let activities = [
      {
        id: '12345',
        start: Date.now(),
        stop: '',
        readableDate: '02/21/2020 8:00 AM',
        duration: 0,
        completed: false,
        description: 'test 1'
      },
      {
        id: '12345',
        start: Date.now(),
        stop: '',
        readableDate: '02/21/2020 8:15 AM',
        duration: 0,
        completed: false,
        description: 'test 2'
      },
      {
        id: '12345',
        start: Date.now(),
        stop: '',
        readableDate: '02/21/2020 8:30 AM',
        duration: 0,
        completed: true,
        description: 'test 3'
      }
    ];

    let stopTask = () => {};
    let fixture = shallow(
      <Queue activities={activities} stopTask={stopTask} />
    );
    expect(fixture.find('button').length).toEqual(2);
  });

  it('should call stopTask when clock out button is clicked', () => {
    let activities = [
      {
        id: '12345',
        start: Date.now(),
        stop: '',
        readableDate: '02/21/2020 8:00 AM',
        duration: 0,
        completed: false,
        description: 'test 1'
      }
    ];
    let stopTask = jest.fn();
    let fixture = shallow(
      <Queue activities={activities} stopTask={stopTask} />
    );
    let btn = fixture.find('button');
    btn.simulate('click', {target: {id: '12345'}});
    expect(stopTask).toHaveBeenCalledTimes(1);
  });

  it('should remove the clock out button from the DOM when clicked', () => {
    let activities = [
        {
          id: 'test',
          start: Date.now(),
          stop: '',
          readableDate: '02/21/2020 8:00 AM',
          duration: 0,
          completed: false,
          description: 'test 1'
        }
      ];
      let stopTask = () => {};
      let spy = jest.spyOn(Queue.prototype, 'removeActivityButton');
      let fixture = shallow(
        <Queue activities={activities} stopTask={stopTask} />
      );
      let btn = fixture.find('button');
      btn.simulate('click', {target: {id: 'test'}});
      expect(spy).toHaveBeenCalledTimes(1);
  });
});
