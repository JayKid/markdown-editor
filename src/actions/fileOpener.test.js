import * as actions from './FileOpener'

describe('actions', () => {
  it('should create an action to open a file', () => {
    const text = 'Random markdown contents of opened file';
    const expectedAction = {
      type: 'openFileContents',
      contents: text
    };
    expect(actions.openFileContents(text)).toEqual(expectedAction);
  });
});
