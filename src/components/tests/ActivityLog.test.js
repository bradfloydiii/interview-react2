import React from 'react';
import { shallow } from 'enzyme';
import { ActivityLog } from '../ActivityLog';

describe('<ActivityLog />', () => {
  it('should show "No tracked tasks" when no activites have been tracked', () => {
    let tasks = [];
    let fixture = shallow(<ActivityLog activities={tasks} />);
    expect(fixture.find('.header')).toBeDefined();
    expect(fixture.find('.header').text()).toEqual('No tracked tasks');
  });

  it('should show "Activity Log" in the header if one or more tasks has been tracked', () => {
    let tasks = [
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

    let fixture = shallow(<ActivityLog activities={tasks} />);
    expect(fixture.find('.header')).toBeDefined();
    expect(fixture.find('.header').text()).toEqual('Activity Log');
  });

  it('should track the correct number of tasks passed', () => {
    let tasks = [
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
        completed: false,
        description: 'test 3'
      }
    ];

    let fixture = shallow(<ActivityLog activities={tasks} />);
    expect(fixture.find('ActivityLogItem').length).toEqual(3);
  });
});
