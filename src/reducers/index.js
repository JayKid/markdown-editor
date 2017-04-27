const initialState = {
  currentlyOpenFile: {
    fileName: 'unsaved',
    contents: ''
  }
};

export default(state = initialState, payload) => {
    switch (payload.type) {
        case 'openFileContents':
            return {
              currentlyOpenFile: {
                fileName: payload.contents.fileName,
                contents: payload.contents.fileContents
              }
            };
        case 'updateContents':
            return {
              currentlyOpenFile: {
                contents: payload.contents.fileContents
              }
            };
        default:
            return state;
    }
};
