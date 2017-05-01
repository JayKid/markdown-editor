import reducer from '../../src/reducers/index'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        currentlyOpenFile: 0,
        files: [{
          fileName: 'unsaved',
          fileContents: ''
        }]
      })
  })

  it('should handle openFileContents', () => {
    expect(
      reducer(undefined, {
        type: 'openFileContents',
        contents: {
          fileName: 'Readme.md',
          fileContents: 'Random markdown from a file'
        }
      })
    ).toEqual(
      {
        currentlyOpenFile: 0,
        files: [{
          fileName: 'Readme.md',
          fileContents: 'Random markdown from a file'
        }]
      })
  })

  it('should handle updateContents', () => {
    expect(
      reducer(undefined, {
        type: 'updateContents',
        contents: {
          fileContents: 'Random markdown updated from the editor'
        }
      })
    ).toEqual(
      {
        currentlyOpenFile: 0,
        files: [{
          fileName: 'unsaved',
          fileContents: 'Random markdown updated from the editor'
        }]
      })
  })
})
