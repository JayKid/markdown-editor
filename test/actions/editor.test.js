import * as actions from '../../src/actions/Editor'

describe('actions', () => {
  it('should create an action to update the contents of the currently open file', () => {
    const fileContents = {
      fileContents: 'Random markdown contents'
    };
    const expectedAction = {
      type: 'updateContents',
      contents: fileContents
    };
    expect(actions.updateContents(fileContents)).toEqual(expectedAction);
  });
});
