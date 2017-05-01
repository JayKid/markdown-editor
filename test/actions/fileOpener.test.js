import * as actions from '../../src/actions/FileOpener'

describe('actions', () => {
  it('should create an action to open a file', () => {
    const fileProperties = {
      fileName: 'Readme.md',
      fileContents: 'random markdown from a file'
    };
    const expectedAction = {
      type: 'openFileContents',
      contents: fileProperties
    };
    expect(actions.openFileContents(fileProperties)).toEqual(expectedAction);
  });
});
