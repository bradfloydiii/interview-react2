import { Utilities } from '../../services/Utilities';

describe('Utilities', () => {
  beforeAll(() => {
    Utilities.key = 'Test';
  });

  afterEach(() => {
    sessionStorage.removeItem(Utilities.key);
  });

  it('should save a task to window.sessionStorage', () => {
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
    Utilities.saveSessionItem(tasks);
    expect(
      JSON.parse(sessionStorage.getItem(Utilities.key))[0].description
    ).toEqual('test 1');
  });

  it('should retrieve the proper session item by key', () => {
    let tasks = [
      {
        id: '12345',
        start: Date.now(),
        stop: '',
        readableDate: '02/21/2020 8:30 AM',
        duration: 0,
        completed: false,
        description: 'task 1'
      },
      {
        id: '12345',
        start: Date.now(),
        stop: '',
        readableDate: '02/21/2020 8:30 AM',
        duration: 0,
        completed: false,
        description: 'task 2'
      },
      {
        id: '12345',
        start: Date.now(),
        stop: '',
        readableDate: '02/21/2020 8:30 AM',
        duration: 0,
        completed: false,
        description: 'task 3'
      }
    ];
    Utilities.saveSessionItem(tasks);
    let result = Utilities.getSessionItem();
    expect(result.length).toEqual(3);
  });
});
