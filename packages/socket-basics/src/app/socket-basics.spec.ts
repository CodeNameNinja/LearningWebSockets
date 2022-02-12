import { socketBasics } from './socket-basics';

describe('socketBasics', () => {
  it('should work', () => {
    expect(socketBasics()).toEqual('socket-basics');
  });
});
