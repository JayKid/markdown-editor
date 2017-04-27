const initialState = {
  currentlyOpenFile: {
    contents: ""
  }
};

export default(state = initialState, payload) => {
    switch (payload.type) {
        case 'openFileContents':
        case 'updateContents':
            return {
              currentlyOpenFile: {
                contents: payload.contents
              }
            };
        default:
            return state;
    }
};
