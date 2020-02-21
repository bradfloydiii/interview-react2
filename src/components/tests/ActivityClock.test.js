import React from 'react';
import { shallow, mount } from 'enzyme';
import { ActivityClock } from '../ActivityClock';

describe('ActivityClock test suite', () => {

  it('has an input field to name a task', () => {
    let fixture = shallow(<ActivityClock />);
    expect(fixture.find('input')).toBeDefined();
  });

  it('has a button to start a task when clicked', () => {
    const fixture = shallow(<ActivityClock />);
    expect(fixture.find('button')).toBeDefined();
  });

  it('should clear input on focus', () => {
    let fixture = mount(<ActivityClock />);
    const input = fixture.find('input');
    input.simulate('change', { target: { value: 'Test' } });
    input.simulate('blur');
    input.simulate('focus');
    expect(input.instance().value).toEqual('');
  });

  it('should start a task when button is clicked', () => {
    const startTaskSpy = jest.fn();
    let fixture = mount(<ActivityClock startTask={startTaskSpy} />);
    const input = fixture.find('input');
    const btn = fixture.find('button');
    input.simulate('change', { target: { value: 'Test' } });
    btn.simulate('click');
    expect(startTaskSpy).toHaveBeenCalledTimes(1);
  })

});
