import * as actions from './Editor'

describe('actions', () => {
  it('should create an action to update the contents of the currently open file', () => {
    const text = 'Random markdown contents';
    const expectedAction = {
      type: 'updateContents',
      contents: text
    };
    expect(actions.updateContents(text)).toEqual(expectedAction);
  });
});
